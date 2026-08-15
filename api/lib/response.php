<?php
/**
 * Every endpoint responds with the same JSON envelope, matching what
 * src/lib/submitForm.js expects on the frontend:
 *   success: { ok: true, reference: "...", ...extra }
 *   error:   { ok: false, message: "...", errors: { field: "..." } }
 */

function babitha_json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

function babitha_success(array $data = []): void
{
    babitha_json_response(array_merge(['ok' => true], $data), 200);
}

function babitha_error(string $message, int $status = 400, array $fieldErrors = []): void
{
    babitha_json_response(['ok' => false, 'message' => $message, 'errors' => $fieldErrors], $status);
}

function babitha_reference(string $prefix): string
{
    return $prefix . '-' . strtoupper(bin2hex(random_bytes(4)));
}

function babitha_require_post(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        babitha_error('Method not allowed.', 405);
    }
}
