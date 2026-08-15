<?php
/**
 * Template for the private config file. This example lives inside the repo
 * (and gets deployed into public_html/api/) purely as documentation — it is
 * NOT loaded by the application.
 *
 * Copy this file to a location OUTSIDE public_html — e.g. on Hostinger,
 * a sibling directory to public_html such as:
 *
 *   ~/babita-secure/config.php
 *
 * (if public_html lives at ~/public_html, that's dirname($_SERVER['DOCUMENT_ROOT']) . '/babita-secure/config.php')
 *
 * lib/config.php resolves that path automatically, or you can override it
 * with the BABITA_CONFIG_PATH environment variable (set in hPanel > Advanced
 * > PHP configuration, or via .htaccess SetEnv for a single subdomain).
 *
 * The file must `return` an array shaped exactly like this one.
 */

return [
    'db' => [
        'host' => 'localhost',
        'name' => 'babita_construction',
        'user' => 'CHANGE_ME',
        'pass' => 'CHANGE_ME',
        'charset' => 'utf8mb4',
    ],

    'mail' => [
        // Sending address — must be a mailbox that exists on this domain
        // for Hostinger's mail() to have a reasonable chance of not being
        // flagged as spam.
        'from' => 'no-reply@babitaconstruction.com',
        'fromName' => 'Babita Construction',
        // Where admin notification emails go.
        'adminTo' => 'info@babitaconstruction.com',
    ],

    // Absolute filesystem path OUTSIDE public_html where uploaded vehicle
    // documents are stored. Must be writable by the PHP process.
    'uploadDir' => '/home/CHANGE_ME/babita-secure/uploads',

    // Absolute filesystem path OUTSIDE public_html for rate-limit state
    // files (see lib/ratelimit.php). Must be writable by the PHP process.
    'rateLimitDir' => '/home/CHANGE_ME/babita-secure/rate-limit',

    'rateLimit' => [
        'maxAttempts' => 10,
        'windowSeconds' => 3600,
    ],
];
