<?php
/**
 * Loads the private config array from outside public_html. See
 * config.example.php in the api/ root for the expected shape and setup
 * instructions.
 */

function babita_config(): array
{
    static $config = null;
    if ($config !== null) {
        return $config;
    }

    $path = getenv('BABITA_CONFIG_PATH');
    if (!$path) {
        $documentRoot = $_SERVER['DOCUMENT_ROOT'] ?? '';
        $path = rtrim(dirname($documentRoot), '/') . '/babita-secure/config.php';
    }

    if (!is_file($path)) {
        error_log("babita_config: private config not found at $path");
        http_response_code(500);
        header('Content-Type: application/json; charset=utf-8');
        echo json_encode(['ok' => false, 'message' => 'Server configuration error.']);
        exit;
    }

    $config = require $path;
    return $config;
}
