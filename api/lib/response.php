<?php
/**
 * Every endpoint responds with the same JSON envelope, matching what
 * src/lib/submitForm.js expects on the frontend:
 *   success: { ok: true, reference: "...", ...extra }
 *   error:   { ok: false, message: "...", errors: { field: "..." } }
 */

function babita_json_response(array $payload, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($payload);
    exit;
}

function babita_success(array $data = []): void
{
    babita_json_response(array_merge(['ok' => true], $data), 200);
}

function babita_error(string $message, int $status = 400, array $fieldErrors = []): void
{
    babita_json_response(['ok' => false, 'message' => $message, 'errors' => $fieldErrors], $status);
}

function babita_reference(string $prefix): string
{
    return $prefix . '-' . strtoupper(bin2hex(random_bytes(4)));
}

function babita_require_post(): void
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        babita_error('Method not allowed.', 405);
    }
}
