<?php
/**
 * Copy this file to mail-config.php on the server (same folder) and set real values.
 * mail-config.php is gitignored — do not commit secrets.
 *
 * Namecheap/cPanel tip:
 * - mail_from must be a real mailbox on your hosted domain (SPF/DMARC).
 * - mail_from must NOT match mail_to (same-address sends often land in spam).
 * - Visitor email goes in Reply-To only (handled in contact.php).
 */

return [
  // Where quote / discovery / SOW emails are delivered
  'mail_to' => 'derek@derek-gembus.com',

  // Envelope + From header — different from mail_to
  'mail_from' => 'noreply@derekgembus.com',
  'mail_from_name' => 'DerekGembus.com Forms',

  // Allowed browser Origins (scheme + host, no path)
  'allowed_origins' => [
    'https://derekgembus.com',
    'https://www.derekgembus.com',
  ],

  // Same defaults as danimalclown.com/api/contact.php
  'min_submit_seconds' => 2,
  'max_submit_seconds' => 86400,
  'rate_limit_seconds' => 3600,
  'rate_limit_max' => 5,
];
