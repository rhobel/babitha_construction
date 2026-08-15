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
