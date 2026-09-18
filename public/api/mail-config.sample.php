<?php
/**
 * Copy this file to mail-config.php on the server (same folder) and set real values.
 * mail-config.php is gitignored — do not commit secrets.
 *
 * Namecheap/cPanel tip: MAIL_TO and MAIL_FROM should use an address on your
 * hosted domain (or an address your cPanel account is allowed to send as).
 */

return [
  // Where quote / discovery / SOW emails are delivered
  'mail_to' => 'derek@derek-gembus.com',

  // Envelope From — prefer an address on your domain for deliverability
  'mail_from' => 'noreply@derekgembus.com',
  'mail_from_name' => 'DerekGembus.com Forms',

  // Allowed browser Origins (scheme + host, no trailing slash)
  'allowed_origins' => [
    'https://derekgembus.com',
    'https://www.derekgembus.com',
  ],

  // Minimum seconds after form render before a real submit is accepted
  'min_submit_seconds' => 3,

  // Simple per-IP rate limit window
  'rate_limit_seconds' => 60,
  'rate_limit_max' => 5,
];
