<?php
require __DIR__ . '/lib/bootstrap.php';

babita_require_post();
babita_check_honeypot();
babita_rate_limit('vehicle-lease');

$data = $_POST;
$errors = babita_require($data, [
    'ownerName', 'email', 'contact', 'address', 'vin', 'model',
    'vehicleType', 'listedBy', 'agreementPeriod', 'transactionMethod', 'expectedPrice',
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

// Validate uploads (type/size/MIME) before writing anything to the database.
try {
    $uploads = babita_handle_uploads(BABITA_VEHICLE_DOCUMENT_FIELDS, 'vehicle-lease');
} catch (RuntimeException $e) {
    babita_error($e->getMessage(), 422);
}

$ownerName = babita_sanitize((string) $data['ownerName']);
$email = babita_sanitize($email);
$contact = babita_sanitize($contact);
$altContact = $altContact !== '' ? babita_sanitize($altContact) : null;
$address = babita_sanitize((string) $data['address']);
$vin = babita_sanitize((string) $data['vin']);
$model = babita_sanitize((string) $data['model']);
$vehicleType = babita_sanitize((string) $data['vehicleType']);
$listedBy = babita_sanitize((string) $data['listedBy']);
$agreementPeriod = babita_sanitize((string) $data['agreementPeriod']);
$transactionMethod = babita_sanitize((string) $data['transactionMethod']);
$expectedPrice = (float) $data['expectedPrice'];
$reference = babita_reference('BC-VL');

$pdo = babita_db();
$pdo->beginTransaction();
try {
    $stmt = $pdo->prepare(
        'INSERT INTO vehicle_lease_submissions
         (reference, owner_name, email, contact, alt_contact, address, vin, model, vehicle_type,
          listed_by, agreement_period, transaction_method, expected_price, ip, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())'
    );
    $stmt->execute([
        $reference, $ownerName, $email, $contact, $altContact, $address, $vin, $model,
        $vehicleType, $listedBy, $agreementPeriod, $transactionMethod, $expectedPrice,
        $_SERVER['REMOTE_ADDR'] ?? '',
    ]);
    $submissionId = (int) $pdo->lastInsertId();

    babita_save_vehicle_documents($pdo, 'lease', $submissionId, $uploads);

    $pdo->commit();
} catch (Throwable $e) {
    $pdo->rollBack();
    throw $e;
}

$mailCfg = babita_config()['mail'];
babita_send_mail(
    $mailCfg['adminTo'],
    "New vehicle lease listing ($reference)",
    "Reference: $reference\nOwner: $ownerName\nContact: $contact\nVehicle: $vehicleType — $model (VIN $vin)\nExpected price: $expectedPrice\n\nDocuments and full details are in the admin panel."
);
babita_send_mail(
    $email,
    'Vehicle listing received — Babita Construction',
    "Hi $ownerName,\n\nThanks for listing your vehicle. We'll call you back within one working day.\n\nYour reference: $reference\n\n— Babita Construction"
);

babita_success(['reference' => $reference]);
