<?php
/**
 * Contact / quote / intake mail handler for DerekGembus.com
 * Pattern mirrored from danimalclown.com (/api/contact.php):
 *   POST JSON → validate → PHP mail() → { ok: true } | { ok: false, error, reason }
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $payload): void
{
  http_response_code($status);
  echo json_encode($payload, JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
  exit;
}

function fail(int $status, string $error, string $reason): void
{
  respond($status, ['ok' => false, 'error' => $error, 'reason' => $reason]);
}

if (($_SERVER['REQUEST_METHOD'] ?? '') === 'OPTIONS') {
  http_response_code(204);
  exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  fail(405, 'Method not allowed.', 'origin');
}

$configPath = __DIR__ . '/mail-config.php';
if (!is_readable($configPath)) {
  fail(503, 'The form is temporarily unavailable. Please email directly.', 'config');
}

/** @var array $config */
$config = require $configPath;

$mailTo = trim((string) ($config['mail_to'] ?? ''));
$mailFrom = trim((string) ($config['mail_from'] ?? ''));
$mailFromName = trim((string) ($config['mail_from_name'] ?? 'Website Forms'));
$allowedOrigins = $config['allowed_origins'] ?? [];
$minSubmitSeconds = (int) ($config['min_submit_seconds'] ?? 3);
$rateLimitSeconds = (int) ($config['rate_limit_seconds'] ?? 60);
$rateLimitMax = (int) ($config['rate_limit_max'] ?? 5);

if ($mailTo === '' || $mailFrom === '' || !is_array($allowedOrigins) || $allowedOrigins === []) {
  fail(503, 'The form is temporarily unavailable. Please email directly.', 'config');
}

$origin = (string) ($_SERVER['HTTP_ORIGIN'] ?? '');
$referer = (string) ($_SERVER['HTTP_REFERER'] ?? '');
$originOk = false;

foreach ($allowedOrigins as $allowed) {
  $allowed = rtrim((string) $allowed, '/');
  if ($allowed === '') {
    continue;
  }
  if ($origin !== '' && rtrim($origin, '/') === $allowed) {
    $originOk = true;
    break;
  }
  if ($origin === '' && $referer !== '' && str_starts_with($referer, $allowed . '/')) {
    $originOk = true;
    break;
  }
}

if (!$originOk) {
  fail(403, 'This request could not be verified. Please submit the form from the website.', 'origin');
}

$raw = file_get_contents('php://input');
$data = [];

$contentType = strtolower((string) ($_SERVER['CONTENT_TYPE'] ?? $_SERVER['HTTP_CONTENT_TYPE'] ?? ''));
if (str_contains($contentType, 'application/json')) {
  $decoded = json_decode($raw ?: '', true);
  if (!is_array($decoded)) {
    fail(400, 'Please review the required fields and try again.', 'validation');
  }
  $data = $decoded;
} else {
  $data = $_POST;
}

function field(array $data, string $key): string
{
  if (!array_key_exists($key, $data)) {
    return '';
  }
  $value = $data[$key];
  if (is_array($value)) {
    return trim(implode(', ', array_map('strval', $value)));
  }
  return trim((string) $value);
}

function clean_header(string $value): string
{
  return str_replace(["\r", "\n"], '', $value);
}

// Honeypots (Quote/Discovery/SOW use confirm_email; DanimalClown-style companyWebsite also accepted)
$honeypot = field($data, 'confirm_email');
if ($honeypot === '') {
  $honeypot = field($data, 'companyWebsite');
}
if ($honeypot !== '') {
  respond(200, ['ok' => true]);
}

$renderedAt = field($data, 'formRenderedAt');
if ($renderedAt === '') {
  $renderedAt = field($data, 'form_rendered_at');
}
if ($renderedAt !== '' && ctype_digit($renderedAt)) {
  $elapsedMs = (int) (round(microtime(true) * 1000) - (int) $renderedAt);
  if ($elapsedMs >= 0 && $elapsedMs < ($minSubmitSeconds * 1000)) {
    respond(200, ['ok' => true]);
  }
}

$ip = (string) ($_SERVER['REMOTE_ADDR'] ?? 'unknown');
$rateDir = sys_get_temp_dir() . '/dg_contact_rate';
if (!is_dir($rateDir)) {
  @mkdir($rateDir, 0700, true);
}
$rateFile = $rateDir . '/' . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
if (is_readable($rateFile)) {
  $existing = json_decode((string) file_get_contents($rateFile), true);
  if (is_array($existing)) {
    $hits = array_values(array_filter($existing, static fn($t) => is_int($t) && ($now - $t) < $rateLimitSeconds));
  }
}
if (count($hits) >= $rateLimitMax) {
  fail(429, 'Too many attempts in a short time. Please wait a few minutes and try again.', 'rate');
}
$hits[] = $now;
@file_put_contents($rateFile, json_encode($hits), LOCK_EX);

$formType = field($data, 'form_type');
if ($formType === '') {
  $formType = 'Contact';
}

$fromName = field($data, 'from_name');
if ($fromName === '') {
  $fromName = field($data, 'contactName');
}
$userEmail = field($data, 'user_email');
if ($userEmail === '') {
  $userEmail = field($data, 'email');
}

if ($fromName === '' || strlen($fromName) < 2) {
  fail(400, 'Please review the required fields and try again.', 'validation');
}
if ($userEmail === '' || !filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
  fail(400, 'Please review the required fields and try again.', 'validation');
}

$subject = field($data, 'email_subject');
if ($subject === '') {
  $subject = $formType . ': ' . $fromName;
}
$subject = clean_header(mb_substr($subject, 0, 180));

$skipKeys = [
  'confirm_email',
  'companyWebsite',
  'formRenderedAt',
  'form_rendered_at',
  'email_subject',
];

$bodyLines = [
  'Form type: ' . $formType,
  'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC',
  'IP: ' . $ip,
  str_repeat('-', 40),
];

if (field($data, 'internal_body') !== '') {
  $bodyLines[] = field($data, 'internal_body');
  $clientBody = field($data, 'client_body');
  if ($clientBody !== '') {
    $bodyLines[] = '';
    $bodyLines[] = '--- Client copy ---';
    $bodyLines[] = $clientBody;
  }
} else {
  foreach ($data as $key => $value) {
    $key = (string) $key;
    if (in_array($key, $skipKeys, true)) {
      continue;
    }
    $text = field($data, $key);
    if ($text === '') {
      continue;
    }
    if (strlen($text) > 5000) {
      $text = mb_substr($text, 0, 5000) . '…';
    }
    $bodyLines[] = $key . ': ' . $text;
  }
}

$body = implode("\n", $bodyLines);
if (strlen($body) > 100000) {
  fail(400, 'Please review the required fields and try again.', 'validation');
}

$fromHeader = sprintf('%s <%s>', clean_header($mailFromName), clean_header($mailFrom));
$replyTo = clean_header($fromName) . ' <' . clean_header($userEmail) . '>';

$headers = [
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'From: ' . $fromHeader,
  'Reply-To: ' . $replyTo,
  'X-Mailer: PHP/' . phpversion(),
];

$sent = @mail($mailTo, $subject, $body, implode("\r\n", $headers));
if (!$sent) {
  fail(502, 'Your request could not be sent right now. Please email directly.', 'send');
}

respond(200, ['ok' => true]);
