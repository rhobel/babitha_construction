<?php
/**
 * Admin session helpers. The admin panel UI itself is out of scope for
 * this phase (requirements.md §10) — this only establishes the session
 * that an existing/future PHP admin area would check.
 */

function babita_start_session(): void
{
    if (session_status() === PHP_SESSION_NONE) {
        session_set_cookie_params([
            'lifetime' => 0,
            'path' => '/',
            'secure' => true,
            'httponly' => true,
            'samesite' => 'Lax',
        ]);
        session_start();
    }
}

function babita_is_admin(): bool
{
    babita_start_session();
    return !empty($_SESSION['admin_id']);
}

function babita_require_admin(): void
{
    if (!babita_is_admin()) {
        babita_error('Not authenticated.', 401);
    }
}
