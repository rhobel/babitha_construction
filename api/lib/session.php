<?php
/**
 * Admin session helpers. The admin panel UI itself is out of scope for
 * this phase (requirements.md §10) — this only establishes the session
 * that an existing/future PHP admin area would check.
 */

function babitha_start_session(): void
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

function babitha_is_admin(): bool
{
    babitha_start_session();
    return !empty($_SESSION['admin_id']);
}

function babitha_require_admin(): void
{
    if (!babitha_is_admin()) {
        babitha_error('Not authenticated.', 401);
    }
}
