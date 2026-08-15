<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
babita_check_honeypot();
babita_rate_limit('vehicle-default');

$data = $_POST;
$errors = babita_require($data, [
    'ownerName', 'email', 'contact', 'address', 'vin', 'model',
    'vehicleType', 'transactionMethod', 'listedBy', 'expectedPrice',
]);

$email = (string) ($data['email'] ?? '');
$contact = (string) ($data['contact'] ?? '');
if ($email !== '' && !babita_valid_email($email)) {
    $errors['email'] = 'Enter a valid email address.';
}
if ($contact !== '' && !babita_valid_phone($contact)) {
    $errors['contact'] = 'Enter a valid phone number.';
}
if (isset($data['expectedPrice']) && (!is_numeric($data['expectedPrice']) || (float) $data['expectedPrice'] <= 0)) {
    $errors['expectedPrice'] = 'Enter a valid expected price.';
}

foreach (BABITA_VEHICLE_DOCUMENT_FIELDS as $field) {
    if (!isset($_FILES[$field]) || $_FILES[$field]['error'] === UPLOAD_ERR_NO_FILE) {
        $errors[$field] = 'This document is required.';
    }
}

if ($errors) {
    babita_error('Please fix the highlighted fields.', 422, $errors);
}

try {
    $uploads = babita_handle_uploads(BABITA_VEHICLE_DOCUMENT_FIELDS, 'vehicle-default');
} catch (RuntimeException $e) {
    babita_error($e->getMessage(), 422);
}

$ownerName = babita_sanitize((string) $data['ownerName']);
$email = babita_sanitize($email);
$contact = babita_sanitize($contact);
$address = babita_sanitize((string) $data['address']);
$vin = babita_sanitize((string) $data['vin']);
$model = babita_sanitize((string) $data['model']);
$vehicleType = babita_sanitize((string) $data['vehicleType']);
$transactionMethod = babita_sanitize((string) $data['transactionMethod']);
$listedBy = babita_sanitize((string) $data['listedBy']);
$expectedPrice = (float) $data['expectedPrice'];
$reference = babita_reference('BC-VD');

$pdo = babita_db();
$pdo->beginTransaction();
try {
    $stmt = $pdo->prepare(
        'INSERT INTO vehicle_default_submissions
         (reference, owner_name, email, contact, address, vin, model, vehicle_type,
          transaction_method, listed_by, expected_price, ip, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())'
    );
    $stmt->execute([
        $reference, $ownerName, $email, $contact, $address, $vin, $model,
        $vehicleType, $transactionMethod, $listedBy, $expectedPrice, $_SERVER['REMOTE_ADDR'] ?? '',
    ]);
    $submissionId = (int) $pdo->lastInsertId();

    babita_save_vehicle_documents($pdo, 'default', $submissionId, $uploads);

    $pdo->commit();
} catch (Throwable $e) {
    $pdo->rollBack();
    throw $e;
}

$mailCfg = babita_config()['mail'];
babita_send_mail(
    $mailCfg['adminTo'],
    "New defaulter vehicle submission ($reference)",
    "Reference: $reference\nOwner: $ownerName\nContact: $contact\nVehicle: $vehicleType — $model (VIN $vin)\nExpected price: $expectedPrice"
);
babita_send_mail(
    $email,
    'Vehicle submission received — Babita Construction',
    "Hi $ownerName,\n\nThanks for submitting your vehicle. We'll call you back within one working day.\n\nYour reference: $reference\n\n— Babita Construction"
);

babita_success(['reference' => $reference]);
