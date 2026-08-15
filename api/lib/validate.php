<?php
/**
 * Server-side validation mirrors src/lib/vehicleValidation.js and the
 * per-form validate() functions on the frontend. Client-side validation is
 * a UX convenience only — this is the layer that actually protects the
 * database, so every rule enforced in JS is re-checked here.
 */

function babitha_require(array $data, array $fields): array
{
    $errors = [];
    foreach ($fields as $field) {
        if (!isset($data[$field]) || trim((string) $data[$field]) === '') {
            $errors[$field] = 'This field is required.';
        }
    }
    return $errors;
}

function babitha_valid_email(string $email): bool
{
    return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function babitha_valid_phone(string $phone): bool
{
    return (bool) preg_match('/^[+\d][\d\s-]{7,}$/', $phone);
}

function babitha_sanitize(string $value): string
{
    return trim(strip_tags($value));
}

function babitha_check_honeypot(): void
{
    if (!empty($_POST['company'] ?? '')) {
        // Pretend success so the bot doesn't learn the honeypot failed.
        babitha_success(['reference' => babitha_reference('BC')]);
    }
}
