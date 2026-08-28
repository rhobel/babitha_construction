<?php
require __DIR__ . '/lib/bootstrap.php';

babitha_require_post();
babitha_check_honeypot();
babitha_rate_limit('quote');

$data = $_POST;
$errors = babitha_require($data, ['name', 'phone', 'service']);

$phone = (string) ($data['phone'] ?? '');
if ($phone !== '' && !babitha_valid_phone($phone)) {
    $errors['phone'] = 'Enter a valid phone number.';
}

if ($errors) {
    babitha_error('Please fix the highlighted fields.', 422, $errors);
}

$name = babitha_sanitize((string) $data['name']);
$phone = babitha_sanitize($phone);
$service = babitha_sanitize((string) $data['service']);
$reference = babitha_reference('BC-QT');

$pdo = babitha_db();
$stmt = $pdo->prepare(
    'INSERT INTO quote_requests (reference, name, phone, service, ip, created_at)
     VALUES (?, ?, ?, ?, ?, NOW())'
);
$stmt->execute([$reference, $name, $phone, $service, $_SERVER['REMOTE_ADDR'] ?? '']);

$mailCfg = babitha_config()['mail'];
babitha_send_mail(
    $mailCfg['adminTo'],
    "New quote request ($reference): $service",
    "Reference: $reference\nName: $name\nPhone: $phone\nService: $service\n\nCall back within 24 hours."
);

babitha_success(['reference' => $reference]);
