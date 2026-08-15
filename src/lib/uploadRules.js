// Mirrored server-side in api/lib/uploads.php — keep both in sync.
export const MAX_FILE_BYTES = 5 * 1024 * 1024; // 5 MB
export const ACCEPTED_MIME_TYPES = ["image/jpeg", "image/png", "application/pdf"];
export const ACCEPTED_EXTENSIONS = ".jpg,.jpeg,.png,.pdf";

export const VEHICLE_DOCUMENT_FIELDS = [
  { key: "vehicleFront", label: "Vehicle Front" },
  { key: "vehicleSide1", label: "Vehicle Side 1" },
  { key: "vehicleSide2", label: "Vehicle Side 2" },
  { key: "vehicleBack", label: "Vehicle Back" },
  { key: "permit", label: "Permit" },
  { key: "fitness", label: "Fitness" },
  { key: "pollution", label: "Pollution" },
  { key: "particular", label: "Particular" },
  { key: "rc", label: "RC" },
  { key: "insurance", label: "Insurance" },
  { key: "tax", label: "Tax" },
];

export function validateFile(file) {
  if (!file) return "Attach a file.";
  if (!ACCEPTED_MIME_TYPES.includes(file.type)) return "JPG, PNG or PDF only.";
  if (file.size > MAX_FILE_BYTES) return "File must be 5 MB or smaller.";
  return "";
}
