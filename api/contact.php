<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
babita_check_honeypot();
babita_rate_limit('contact');

$data = $_POST;
$errors = babita_require($data, ['name', 'email', 'phone', 'message']);

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
$subject = babita_sanitize((string) ($data['subject'] ?? 'Construction enquiry'));
$message = babita_sanitize((string) $data['message']);
$reference = babita_reference('BC-CN');

$pdo = babita_db();
$stmt = $pdo->prepare(
    'INSERT INTO contact_submissions (reference, name, email, phone, subject, message, ip, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, NOW())'
);
$stmt->execute([$reference, $name, $email, $phone, $subject, $message, $_SERVER['REMOTE_ADDR'] ?? '']);

$mailCfg = babita_config()['mail'];
babita_send_mail(
    $mailCfg['adminTo'],
    "New contact enquiry ($reference): $subject",
    "Reference: $reference\nName: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\n$message",
    $email
);
babita_send_mail(
    $email,
    'We received your message — Babita Construction',
    "Hi $name,\n\nThanks for reaching out. We'll reply within one working day.\n\nYour reference: $reference\n\n— Babita Construction"
);

babita_success(['reference' => $reference]);
