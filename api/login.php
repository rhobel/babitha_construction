<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
// Tighter bucket than the public forms — this is the endpoint most worth
// brute-forcing, so it gets its own (stricter) rate-limit bucket key.
babita_rate_limit('login');

$data = $_POST;
$username = trim((string) ($data['username'] ?? ''));
$password = (string) ($data['password'] ?? '');

if ($username === '' || $password === '') {
    babita_error('Enter both a username and a password.', 422);
}

$pdo = babita_db();
$stmt = $pdo->prepare('SELECT id, password_hash FROM admin_users WHERE username = ? LIMIT 1');
$stmt->execute([$username]);
$user = $stmt->fetch();

// Always run password_verify, even against a dummy hash when the username
// doesn't exist, so response time doesn't leak whether the username is valid.
$hash = $user !== false ? $user['password_hash'] : '$2y$10$invalidinvalidinvalidinvalidinvalidinvalidinvalidinvali';
$valid = $user !== false && password_verify($password, $hash);

if (!$valid) {
    babita_error('Invalid username or password.', 401);
}

babita_start_session();
session_regenerate_id(true);
$_SESSION['admin_id'] = (int) $user['id'];
$_SESSION['admin_username'] = $username;

babita_success([]);
