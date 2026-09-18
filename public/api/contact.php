<?php
declare(strict_types=1);

/**
 * Quote / Discovery / SOW form handler for DerekGembus.com.
 *
 * Ported from danimalclown.com/api/contact.php security + mail patterns:
 * form posts JSON here, PHP sends with the host mailer into a cPanel mailbox.
 * No third-party form service in the path.
 *
 * From must be a real mailbox on this domain so SPF/DMARC stay valid.
 * The visitor address goes in Reply-To only, so a crafted From cannot
 * be used to bounce or spoof through this form.
 *
 * Mailbox addresses live in mail-config.php (copy from mail-config.sample.php).
 */

ini_set('display_errors', '0');

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

$configPath = __DIR__ . '/mail-config.php';
if (!is_readable($configPath)) {
    respond([
        'ok' => false,
        'error' => 'The form is temporarily unavailable. Please email directly.',
        'reason' => 'config',
    ], 503);
}

/** @var array $config */
$config = require $configPath;

define('MAIL_TO', trim((string) ($config['mail_to'] ?? '')));
define('MAIL_FROM', trim((string) ($config['mail_from'] ?? '')));
define('MAIL_FROM_NAME', trim((string) ($config['mail_from_name'] ?? 'DerekGembus.com Forms')));

$allowedOrigins = $config['allowed_origins'] ?? [];
if (!is_array($allowedOrigins)) {
    $allowedOrigins = [];
}

define('MAX_NAME', 100);
define('MAX_EMAIL', 190);
define('MAX_SUBJECT', 180);
define('MAX_FIELD', 500);
define('MAX_MESSAGE', 8000);
define('MAX_BODY', 100000);

define('RATE_LIMIT_MAX', (int) ($config['rate_limit_max'] ?? 5));
define('RATE_LIMIT_WINDOW', (int) ($config['rate_limit_seconds'] ?? 3600));
define('MIN_FORM_AGE_SECONDS', (int) ($config['min_submit_seconds'] ?? 2));
define('MAX_FORM_AGE_SECONDS', (int) ($config['max_submit_seconds'] ?? 86400));

if (MAIL_TO === '' || MAIL_FROM === '' || $allowedOrigins === []) {
    respond([
        'ok' => false,
        'error' => 'The form is temporarily unavailable. Please email directly.',
        'reason' => 'config',
    ], 503);
}

$storeDir = __DIR__ . '/storage';
if (!is_dir($storeDir)) {
    @mkdir($storeDir, 0750, true);
}
$ratePath = $storeDir . '/contact-rate.json';
$logPath = $storeDir . '/contact-log.json';

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    respond(['ok' => false, 'error' => 'Method not allowed.', 'reason' => 'origin'], 405);
}

if (!origin_allowed($allowedOrigins)) {
    log_event($logPath, 'blocked-origin');
    respond([
        'ok' => false,
        'error' => 'This request could not be verified. Please submit the form from the website.',
        'reason' => 'origin',
    ], 403);
}

$input = read_request_payload();

// Honeypots: DanimalClown uses companyWebsite; portfolio forms use confirm_email
if (trim((string) ($input['companyWebsite'] ?? $input['website'] ?? $input['confirm_email'] ?? '')) !== '') {
    log_event($logPath, 'honeypot');
    respond(['ok' => true]);
}

if (!form_timing_ok($input['formRenderedAt'] ?? $input['form_rendered_at'] ?? null)) {
    log_event($logPath, 'timing');
    respond(['ok' => true]);
}

$formType = clean_field($input['form_type'] ?? 'Contact', MAX_FIELD);
if ($formType === '') {
    $formType = 'Contact';
}

$name = clean_field($input['from_name'] ?? $input['contactName'] ?? '', MAX_NAME);
$email = clean_field($input['user_email'] ?? $input['email'] ?? $input['reply_to'] ?? '', MAX_EMAIL);

if ($name === '' || $email === '') {
    respond([
        'ok' => false,
        'error' => 'Please review the required fields and try again.',
        'reason' => 'validation',
    ], 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond([
        'ok' => false,
        'error' => 'That email address does not look right.',
        'reason' => 'validation',
    ], 422);
}

if (!within_rate_limit($ratePath)) {
    log_event($logPath, 'rate-limited');
    respond([
        'ok' => false,
        'error' => 'Too many messages from this connection. Please try again later, or email directly.',
        'reason' => 'rate',
    ], 429);
}

$subjectRaw = clean_field($input['email_subject'] ?? '', MAX_SUBJECT);
if ($subjectRaw === '') {
    $subjectRaw = $formType . ' from ' . $name;
}
$subject = encode_subject($subjectRaw);

$body = build_portfolio_body($input, $formType, $name, $email);
if (strlen($body) > MAX_BODY) {
    respond([
        'ok' => false,
        'error' => 'Please review the required fields and try again.',
        'reason' => 'validation',
    ], 422);
}

$sent = @mail(
    MAIL_TO,
    $subject,
    $body,
    build_headers($name, $email),
    '-f' . MAIL_FROM
);

if (!$sent) {
    $last = error_get_last();
    log_event($logPath, 'mail-failed', is_array($last) ? (string) ($last['message'] ?? '') : '');
    respond([
        'ok' => false,
        'error' => 'Your request could not be sent right now. Please email directly.',
        'reason' => 'send',
    ], 502);
}

log_event($logPath, 'sent');
respond(['ok' => true]);

/* ------------------------------------------------------------------------ */

function respond(array $payload, int $status = 200): void
{
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_SLASHES);
    exit;
}

function read_request_payload(): array
{
    $raw = file_get_contents('php://input');
    if (is_string($raw) && trim($raw) !== '') {
        $decoded = json_decode($raw, true);
        if (is_array($decoded)) {
            return $decoded;
        }
    }

    return is_array($_POST) ? $_POST : [];
}

/**
 * @param list<string> $allowedOrigins
 */
function origin_allowed(array $allowedOrigins): bool
{
    $normalizedAllowed = [];
    foreach ($allowedOrigins as $allowed) {
        $origin = normalize_origin((string) $allowed);
        if ($origin !== '') {
            $normalizedAllowed[] = $origin;
        }
    }

    $candidates = [
        (string) ($_SERVER['HTTP_ORIGIN'] ?? ''),
        (string) ($_SERVER['HTTP_REFERER'] ?? ''),
    ];

    foreach ($candidates as $value) {
        $origin = normalize_origin($value);
        if ($origin === '') {
            continue;
        }
        if (in_array($origin, $normalizedAllowed, true)) {
            return true;
        }
    }

    return false;
}

function normalize_origin(string $value): string
{
    $value = trim($value);
    if ($value === '') {
        return '';
    }

    // Bare origin constants like https://example.com
    if (!str_contains($value, '://')) {
        return '';
    }

    $parts = parse_url($value);
    if (!is_array($parts) || empty($parts['scheme']) || empty($parts['host'])) {
        return '';
    }

    $origin = strtolower($parts['scheme'] . '://' . $parts['host']);
    if (!empty($parts['port'])) {
        $origin .= ':' . $parts['port'];
    }

    return $origin;
}

function form_timing_ok($renderedAt): bool
{
    if ($renderedAt === null || $renderedAt === '') {
        return true;
    }

    $started = is_numeric($renderedAt) ? (int) $renderedAt : 0;
    if ($started <= 0) {
        return false;
    }

    // Date.now() is ms (~1.7e12). Unix seconds are ~1.7e9. Anything past
    // 10 digits is ms — the old 2e12 cutoff left 2026 timestamps unconverted,
    // so age went negative and every real submit logged as "timing".
    if ($started > 9999999999) {
        $started = (int) floor($started / 1000);
    }

    $age = time() - $started;
    if ($age < MIN_FORM_AGE_SECONDS) {
        return false;
    }

    return $age <= MAX_FORM_AGE_SECONDS;
}

function clean_field($value, int $max): string
{
    $text = is_scalar($value) ? (string) $value : '';
    $text = str_replace(["\r", "\n", "\0"], ' ', $text);
    $text = trim(preg_replace('/\s+/u', ' ', $text) ?? '');

    return clip($text, $max);
}

function clean_message($value, int $max): string
{
    $text = is_scalar($value) ? (string) $value : '';
    $text = str_replace(["\r\n", "\r", "\0"], ["\n", "\n", ''], $text);

    return clip(trim($text), $max);
}

function clip(string $text, int $max): string
{
    if (function_exists('mb_substr')) {
        return mb_substr($text, 0, $max);
    }

    return substr($text, 0, $max);
}

function encode_subject(string $subject): string
{
    if (preg_match('/^[\x20-\x7E]*$/', $subject) === 1) {
        return $subject;
    }

    return '=?UTF-8?B?' . base64_encode($subject) . '?=';
}

/**
 * Date and Message-ID are supplied explicitly. PHP's mail() omits both, and
 * SpamAssassin scores missing headers (MISSING_DATE, MISSING_MID) heavily
 * enough on their own to land the message in the spam folder.
 */
function build_headers(string $name, string $email): string
{
    return implode("\r\n", [
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
        'Date: ' . date(DATE_RFC2822),
        'Message-ID: ' . build_message_id(),
        'From: ' . encode_display_name(MAIL_FROM_NAME) . ' <' . MAIL_FROM . '>',
        'Reply-To: ' . encode_display_name($name) . ' <' . $email . '>',
        'Auto-Submitted: auto-generated',
        'X-Mailer: derekgembus.com',
    ]);
}

function build_message_id(): string
{
    $domain = substr(strrchr(MAIL_FROM, '@') ?: '@derekgembus.com', 1);

    return '<' . bin2hex(random_bytes(12)) . '.' . time() . '@' . $domain . '>';
}

function encode_display_name(string $name): string
{
    if (preg_match('/^[\x20-\x7E]*$/', $name) === 1) {
        return '"' . str_replace(['\\', '"'], ['\\\\', '\\"'], $name) . '"';
    }

    return '=?UTF-8?B?' . base64_encode($name) . '?=';
}

function build_portfolio_body(array $input, string $formType, string $name, string $email): string
{
    $skip = [
        'confirm_email',
        'companyWebsite',
        'website',
        'formRenderedAt',
        'form_rendered_at',
        'email_subject',
        'form_type',
        'from_name',
        'contactName',
        'user_email',
        'email',
        'reply_to',
        'internal_body',
        'client_body',
    ];

    $lines = [
        'New ' . $formType . ' from derekgembus.com.',
        '',
        'Name: ' . $name,
        'Email: ' . $email,
    ];

    $internal = clean_message($input['internal_body'] ?? '', MAX_MESSAGE * 4);
    if ($internal !== '') {
        $lines[] = '';
        $lines[] = '----------------------------------------';
        $lines[] = '';
        $lines[] = $internal;
        $client = clean_message($input['client_body'] ?? '', MAX_MESSAGE * 4);
        if ($client !== '') {
            $lines[] = '';
            $lines[] = '--- Client copy ---';
            $lines[] = $client;
        }
    } else {
        $message = clean_message($input['message'] ?? '', MAX_MESSAGE);
        foreach ($input as $key => $value) {
            $key = (string) $key;
            if (in_array($key, $skip, true) || $key === 'message') {
                continue;
            }
            if (is_array($value)) {
                $text = clean_field(implode(', ', array_map('strval', $value)), MAX_FIELD);
            } else {
                $text = clean_field($value, MAX_FIELD);
            }
            if ($text === '') {
                continue;
            }
            $lines[] = $key . ': ' . $text;
        }

        $lines[] = '';
        $lines[] = '----------------------------------------';
        $lines[] = '';
        $lines[] = $message !== '' ? $message : '(no message)';
    }

    $lines[] = '';
    $lines[] = '----------------------------------------';
    $lines[] = 'Sent ' . date('D, j M Y g:i a T');

    return implode("\n", $lines);
}

function log_event(string $path, string $outcome, string $detail = ''): void
{
    $dir = dirname($path);
    if (!is_dir($dir) || !is_writable($dir)) {
        return;
    }

    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        return;
    }

    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        return;
    }

    $raw = stream_get_contents($handle);
    $entries = is_string($raw) && trim($raw) !== '' ? json_decode($raw, true) : [];
    if (!is_array($entries)) {
        $entries = [];
    }

    $entries[] = array_filter([
        'at' => date(DateTimeInterface::ATOM),
        'outcome' => $outcome,
        'detail' => $detail,
    ], static fn ($value): bool => $value !== '');

    $entries = array_slice($entries, -200);

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, (string) json_encode($entries, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);
}

function client_ip(): string
{
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');

    return $ip !== '' ? $ip : 'unknown';
}

function within_rate_limit(string $path): bool
{
    $dir = dirname($path);
    if (!is_dir($dir) || !is_writable($dir)) {
        return true;
    }

    $handle = @fopen($path, 'c+');
    if ($handle === false) {
        return true;
    }

    if (!flock($handle, LOCK_EX)) {
        fclose($handle);
        return true;
    }

    $raw = stream_get_contents($handle);
    $store = is_string($raw) && trim($raw) !== '' ? json_decode($raw, true) : [];
    if (!is_array($store)) {
        $store = [];
    }

    $now = time();
    $key = hash('sha256', client_ip());
    $allowed = true;
    $kept = [];

    foreach ($store as $entry => $stamps) {
        if (!is_array($stamps)) {
            continue;
        }
        $recent = array_values(array_filter(
            $stamps,
            static fn ($stamp): bool => is_int($stamp) && $stamp > $now - RATE_LIMIT_WINDOW
        ));
        if ($recent !== []) {
            $kept[$entry] = $recent;
        }
    }

    $mine = $kept[$key] ?? [];
    if (count($mine) >= RATE_LIMIT_MAX) {
        $allowed = false;
    } else {
        $mine[] = $now;
        $kept[$key] = $mine;
    }

    ftruncate($handle, 0);
    rewind($handle);
    fwrite($handle, (string) json_encode($kept, JSON_UNESCAPED_SLASHES));
    fflush($handle);
    flock($handle, LOCK_UN);
    fclose($handle);

    return $allowed;
}
