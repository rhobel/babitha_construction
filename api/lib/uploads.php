<?php
/**
 * Handles one uploaded file: size cap, MIME sniffing (not trusting the
 * client-supplied Content-Type), a randomised filename, and storage
 * outside public_html. Mirrors src/lib/uploadRules.js on the frontend —
 * keep both in sync.
 */

const BABITA_MAX_UPLOAD_BYTES = 5 * 1024 * 1024; // 5 MB

const BABITA_ALLOWED_MIME_TO_EXT = [
    'image/jpeg' => 'jpg',
    'image/png' => 'png',
    'application/pdf' => 'pdf',
];

// Mirrors VEHICLE_DOCUMENT_FIELDS in src/lib/uploadRules.js — keep in sync.
const BABITA_VEHICLE_DOCUMENT_FIELDS = [
    'vehicleFront', 'vehicleSide1', 'vehicleSide2', 'vehicleBack',
    'permit', 'fitness', 'pollution', 'particular', 'rc', 'insurance', 'tax',
];

/**
 * @return array{storedName:string,originalName:string,mime:string,size:int}|null
 *   null when the field was omitted entirely (caller decides if that's an error).
 * @throws RuntimeException on any validation or filesystem failure.
 */
function babita_handle_upload(string $fieldName, string $subDir): ?array
{
    if (!isset($_FILES[$fieldName]) || $_FILES[$fieldName]['error'] === UPLOAD_ERR_NO_FILE) {
        return null;
    }

    $file = $_FILES[$fieldName];

    if ($file['error'] !== UPLOAD_ERR_OK) {
        throw new RuntimeException("Upload failed for $fieldName.");
    }
    if ($file['size'] > BABITA_MAX_UPLOAD_BYTES) {
        throw new RuntimeException("$fieldName must be 5 MB or smaller.");
    }

    $finfo = new finfo(FILEINFO_MIME_TYPE);
    $mime = $finfo->file($file['tmp_name']);
    if (!isset(BABITA_ALLOWED_MIME_TO_EXT[$mime])) {
        throw new RuntimeException("$fieldName must be a JPG, PNG or PDF.");
    }

    $ext = BABITA_ALLOWED_MIME_TO_EXT[$mime];
    $storedName = bin2hex(random_bytes(16)) . '.' . $ext;

    $targetDir = rtrim(babita_config()['uploadDir'], '/') . '/' . $subDir;
    if (!is_dir($targetDir) && !@mkdir($targetDir, 0700, true) && !is_dir($targetDir)) {
        throw new RuntimeException('Could not prepare upload storage.');
    }

    $targetPath = $targetDir . '/' . $storedName;
    if (!move_uploaded_file($file['tmp_name'], $targetPath)) {
        throw new RuntimeException("Could not store $fieldName.");
    }

    return [
        'storedName' => $storedName,
        'originalName' => basename($file['name']),
        'mime' => $mime,
        'size' => (int) $file['size'],
    ];
}

/**
 * Handles a fixed set of named upload fields, returning field => result.
 * Throws on the first failure — callers should have already validated
 * required-ness against $requiredFields before calling this.
 *
 * @return array<string, array{storedName:string,originalName:string,mime:string,size:int}>
 */
function babita_handle_uploads(array $fieldNames, string $subDir): array
{
    $results = [];
    foreach ($fieldNames as $field) {
        $result = babita_handle_upload($field, $subDir);
        if ($result !== null) {
            $results[$field] = $result;
        }
    }
    return $results;
}

/**
 * Persists rows in vehicle_documents for every uploaded document, tagged
 * with which submission (lease/default) and which row they belong to.
 */
function babita_save_vehicle_documents(PDO $pdo, string $submissionType, int $submissionId, array $uploads): void
{
    $stmt = $pdo->prepare(
        'INSERT INTO vehicle_documents
         (submission_type, submission_id, field_key, original_name, stored_name, mime, size_bytes, created_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, NOW())'
    );
    foreach ($uploads as $fieldKey => $result) {
        $stmt->execute([
            $submissionType,
            $submissionId,
            $fieldKey,
            $result['originalName'],
            $result['storedName'],
            $result['mime'],
            $result['size'],
        ]);
    }
}
