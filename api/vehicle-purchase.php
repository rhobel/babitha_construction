<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
babita_check_honeypot();
babita_rate_limit('vehicle-purchase');

$data = $_POST;
$errors = babita_require($data, [
    'fullName', 'email', 'contact', 'address', 'vehicleType',
    'rangeFrom', 'rangeTo', 'transactionMethod',
]);

$email = (string) ($data['email'] ?? '');
$contact = (string) ($data['contact'] ?? '');
$altContact = (string) ($data['altContact'] ?? '');
if ($email !== '' && !babita_valid_email($email)) {
    $errors['email'] = 'Enter a valid email address.';
}
if ($contact !== '' && !babita_valid_phone($contact)) {
    $errors['contact'] = 'Enter a valid phone number.';
}
if ($altContact !== '' && !babita_valid_phone($altContact)) {
    $errors['altContact'] = 'Enter a valid phone number.';
}
if (isset($data['rangeFrom']) && (!is_numeric($data['rangeFrom']) || (float) $data['rangeFrom'] <= 0)) {
    $errors['rangeFrom'] = 'Enter a valid starting budget.';
}
if (isset($data['rangeTo']) && (!is_numeric($data['rangeTo']) || (float) $data['rangeTo'] <= 0)) {
    $errors['rangeTo'] = 'Enter a valid upper budget.';
}
if (
    empty($errors['rangeFrom']) && empty($errors['rangeTo'])
    && isset($data['rangeFrom'], $data['rangeTo'])
    && (float) $data['rangeFrom'] > (float) $data['rangeTo']
) {
    $errors['rangeTo'] = 'Upper budget must be more than the starting budget.';
}

if ($errors) {
    babita_error('Please fix the highlighted fields.', 422, $errors);
}

$fullName = babita_sanitize((string) $data['fullName']);
$email = babita_sanitize($email);
$contact = babita_sanitize($contact);
$altContact = $altContact !== '' ? babita_sanitize($altContact) : null;
$address = babita_sanitize((string) $data['address']);
$vehicleType = babita_sanitize((string) $data['vehicleType']);
$rangeFrom = (float) $data['rangeFrom'];
$rangeTo = (float) $data['rangeTo'];
$transactionMethod = babita_sanitize((string) $data['transactionMethod']);
$reference = babita_reference('BC-VP');

$pdo = babita_db();
$stmt = $pdo->prepare(
    'INSERT INTO vehicle_purchase_submissions
     (reference, full_name, email, contact, alt_contact, address, vehicle_type, range_from, range_to, transaction_method, ip, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())'
);
$stmt->execute([
    $reference, $fullName, $email, $contact, $altContact, $address,
    $vehicleType, $rangeFrom, $rangeTo, $transactionMethod, $_SERVER['REMOTE_ADDR'] ?? '',
]);

$mailCfg = babita_config()['mail'];
babita_send_mail(
    $mailCfg['adminTo'],
    "New vehicle purchase application ($reference)",
    "Reference: $reference\nName: $fullName\nContact: $contact\nVehicle type: $vehicleType\nBudget: $rangeFrom to $rangeTo\nTransaction: $transactionMethod"
);
babita_send_mail(
    $email,
    'Application received — Babita Construction',
    "Hi $fullName,\n\nThanks for applying. We'll match it against available stock and get back to you.\n\nYour reference: $reference\n\n— Babita Construction"
);

babita_success(['reference' => $reference]);
