<?php
/**
 * Included first by every endpoint script. Production error display is
 * off — uncaught errors would otherwise leak file paths and code into the
 * JSON response the frontend parses.
 */

declare(strict_types=1);

error_reporting(E_ALL);
ini_set('display_errors', '0');
ini_set('log_errors', '1');

require __DIR__ . '/config.php';
require __DIR__ . '/response.php';
require __DIR__ . '/validate.php';
require __DIR__ . '/db.php';
require __DIR__ . '/ratelimit.php';
require __DIR__ . '/mailer.php';
require __DIR__ . '/uploads.php';
require __DIR__ . '/session.php';

set_exception_handler(function (Throwable $e): void {
    error_log('Unhandled exception: ' . $e->getMessage());
    babita_error('Something went wrong. Please try again or call us directly.', 500);
});
