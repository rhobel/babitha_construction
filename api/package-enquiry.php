<?php
require __DIR__ . '/lib/bootstrap.php';

babitha_require_post();
babitha_check_honeypot();
babitha_rate_limit('package-enquiry');

$data = $_POST;
$errors = babitha_require($data, ['name', 'phone', 'city', 'packageName', 'area', 'plotLocation']);

$phone = (string) ($data['phone'] ?? '');
if ($phone !== '' && !babitha_valid_phone($phone)) {
    $errors['phone'] = 'Enter a valid phone number.';
}
if (isset($data['area']) && (!is_numeric($data['area']) || (float) $data['area'] <= 0)) {
    $errors['area'] = 'Enter a valid built-up area.';
}

if ($errors) {
    babitha_error('Please fix the highlighted fields.', 422, $errors);
}

$name = babitha_sanitize((string) $data['name']);
$phone = babitha_sanitize($phone);
$city = babitha_sanitize((string) $data['city']);
$packageName = babitha_sanitize((string) $data['packageName']);
$area = (float) $data['area'];
$plotLocation = babitha_sanitize((string) $data['plotLocation']);
$reference = babitha_reference('BC-PE');

$pdo = babitha_db();
$stmt = $pdo->prepare(
    'INSERT INTO package_enquiries (reference, name, phone, city, package_name, area, plot_location, ip, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW())'
);
$stmt->execute([$reference, $name, $phone, $city, $packageName, $area, $plotLocation, $_SERVER['REMOTE_ADDR'] ?? '']);

$mailCfg = babitha_config()['mail'];
babitha_send_mail(
    $mailCfg['adminTo'],
    "New package enquiry ($reference): $packageName in $city",
    "Reference: $reference\nName: $name\nPhone: $phone\nCity: $city\nPackage: $packageName\nArea: $area sq ft\nPlot location: $plotLocation"
);

babitha_success(['reference' => $reference]);
