import { VEHICLE_DOCUMENT_FIELDS, validateFile } from "./uploadRules";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

export function validateEmail(value) {
  if (!value?.trim()) return "Enter an email.";
  if (!EMAIL_RE.test(value)) return "Enter a valid email address.";
  return "";
}

export function validatePhone(value, { required = true } = {}) {
  if (!value?.trim()) return required ? "Enter a phone number." : "";
  if (!PHONE_RE.test(value)) return "Enter a valid phone number.";
  return "";
}

export function validateVehicleBlock(values, errors) {
  if (!values.vin?.trim()) errors.vin = "Enter the vehicle's VIN / chassis number.";
  if (!values.model?.trim()) errors.model = "Enter the vehicle model.";
  if (!values.vehicleType) errors.vehicleType = "Select a vehicle type.";
  if (!values.transactionMethod) errors.transactionMethod = "Select a transaction method.";
  if (!values.listedBy) errors.listedBy = "Select who is listing this vehicle.";
  if (!values.expectedPrice || Number(values.expectedPrice) <= 0) {
    errors.expectedPrice = "Enter an expected price.";
  }
}

export function validateDocuments(values, errors) {
  VEHICLE_DOCUMENT_FIELDS.forEach(({ key, label }) => {
    const err = validateFile(values[key]);
    if (err) errors[key] = `${label}: ${err}`;
  });
}
