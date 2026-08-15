<?php
require __DIR__ . '/lib/bootstrap.php';

babitha_require_post();
babitha_check_honeypot();
babitha_rate_limit('data-deletion');

$data = $_POST;
$errors = babitha_require($data, ['name', 'email', 'phone', 'reason']);

$email = (string) ($data['email'] ?? '');
$phone = (string) ($data['phone'] ?? '');
if ($email !== '' && !babitha_valid_email($email)) {
    $errors['email'] = 'Enter a valid email address.';
}
if ($phone !== '' && !babitha_valid_phone($phone)) {
    $errors['phone'] = 'Enter a valid phone number.';
}

if ($errors) {
    babitha_error('Please fix the highlighted fields.', 422, $errors);
}

$name = babitha_sanitize((string) $data['name']);
$email = babitha_sanitize($email);
$phone = babitha_sanitize($phone);
$reason = babitha_sanitize((string) $data['reason']);

$pdo = babitha_db();
$stmt = $pdo->prepare(
    'INSERT INTO data_deletion_requests (name, email, phone, reason, status, created_at)
     VALUES (?, ?, ?, ?, \'pending\', NOW())'
);
$stmt->execute([$name, $email, $phone, $reason]);

$mailCfg = babitha_config()['mail'];
babitha_send_mail(
    $mailCfg['adminTo'],
    'New data deletion request',
    "Name: $name\nEmail: $email\nPhone: $phone\n\nReason:\n$reason\n\nThis must be actioned and marked completed within 30 days."
);
babitha_send_mail(
    $email,
    'Data deletion request received — Babitha Constructions',
    "Hi $name,\n\nWe've received your request and will process it within 30 days, in line with applicable data protection law. You'll get a confirmation email once it's done.\n\n— Babitha Constructions"
);

babitha_success([]);
