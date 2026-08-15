<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
babita_check_honeypot();
babita_rate_limit('package-enquiry');

$data = $_POST;
$errors = babita_require($data, ['name', 'phone', 'city', 'packageName', 'area', 'plotLocation']);

$phone = (string) ($data['phone'] ?? '');
if ($phone !== '' && !babita_valid_phone($phone)) {
    $errors['phone'] = 'Enter a valid phone number.';
}
if (isset($data['area']) && (!is_numeric($data['area']) || (float) $data['area'] <= 0)) {
    $errors['area'] = 'Enter a valid built-up area.';
}

if ($errors) {
    babita_error('Please fix the highlighted fields.', 422, $errors);
}

$name = babita_sanitize((string) $data['name']);
$phone = babita_sanitize($phone);
$city = babita_sanitize((string) $data['city']);
$packageName = babita_sanitize((string) $data['packageName']);
$area = (float) $data['area'];
$plotLocation = babita_sanitize((string) $data['plotLocation']);
$reference = babita_reference('BC-PE');

$pdo = babita_db();
$stmt = $pdo->prepare(
    'INSERT INTO package_enquiries (reference, name, phone, city, package_name, area, plot_location, ip, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())'
);
$stmt->execute([$reference, $name, $phone, $city, $packageName, $area, $plotLocation, $_SERVER['REMOTE_ADDR'] ?? '']);

$mailCfg = babita_config()['mail'];
babita_send_mail(
    $mailCfg['adminTo'],
    "New package enquiry ($reference): $packageName in $city",
    "Reference: $reference\nName: $name\nPhone: $phone\nCity: $city\nPackage: $packageName\nArea: $area sq ft\nPlot location: $plotLocation"
);

babita_success(['reference' => $reference]);
