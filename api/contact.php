<?php
require __DIR__ . '/lib/bootstrap.php';

babitha_require_post();
babitha_check_honeypot();
babitha_rate_limit('contact');

$data = $_POST;
$errors = babitha_require($data, ['name', 'email', 'phone', 'message']);

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
$subject = babitha_sanitize((string) ($data['subject'] ?? 'Construction enquiry'));
$message = babitha_sanitize((string) $data['message']);
$reference = babitha_reference('BC-CN');

$pdo = babitha_db();
$stmt = $pdo->prepare(
    'INSERT INTO contact_submissions (reference, name, email, phone, subject, message, ip, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, NOW())'
);
$stmt->execute([$reference, $name, $email, $phone, $subject, $message, $_SERVER['REMOTE_ADDR'] ?? '']);

$mailCfg = babitha_config()['mail'];
babitha_send_mail(
    $mailCfg['adminTo'],
    "New contact enquiry ($reference): $subject",
    "Reference: $reference\nName: $name\nEmail: $email\nPhone: $phone\nSubject: $subject\n\n$message",
    $email
);
babitha_send_mail(
    $email,
    'We received your message — Babitha Constructions',
    "Hi $name,\n\nThanks for reaching out. We'll reply within one working day.\n\nYour reference: $reference\n\n— Babitha Constructions"
);

babitha_success(['reference' => $reference]);
