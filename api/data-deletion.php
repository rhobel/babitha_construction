<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
babita_check_honeypot();
babita_rate_limit('data-deletion');

$data = $_POST;
$errors = babita_require($data, ['name', 'email', 'phone', 'reason']);

$email = (string) ($data['email'] ?? '');
$phone = (string) ($data['phone'] ?? '');
if ($email !== '' && !babita_valid_email($email)) {
    $errors['email'] = 'Enter a valid email address.';
}
if ($phone !== '' && !babita_valid_phone($phone)) {
    $errors['phone'] = 'Enter a valid phone number.';
}

if ($errors) {
    babita_error('Please fix the highlighted fields.', 422, $errors);
}

$name = babita_sanitize((string) $data['name']);
$email = babita_sanitize($email);
$phone = babita_sanitize($phone);
$reason = babita_sanitize((string) $data['reason']);

$pdo = babita_db();
$stmt = $pdo->prepare(
    'INSERT INTO data_deletion_requests (name, email, phone, reason, status, created_at)
     VALUES (?, ?, ?, ?, \'pending\', NOW())'
);
$stmt->execute([$name, $email, $phone, $reason]);

$mailCfg = babita_config()['mail'];
babita_send_mail(
    $mailCfg['adminTo'],
    'New data deletion request',
    "Name: $name\nEmail: $email\nPhone: $phone\n\nReason:\n$reason\n\nThis must be actioned and marked completed within 30 days."
);
babita_send_mail(
    $email,
    'Data deletion request received — Babita Construction',
    "Hi $name,\n\nWe've received your request and will process it within 30 days, in line with applicable data protection law. You'll get a confirmation email once it's done.\n\n— Babita Construction"
);

babita_success([]);
