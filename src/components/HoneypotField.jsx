export default function HoneypotField({ value, onChange }) {
  return (
    <input
      type="text"
      name="company"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      tabIndex={-1}
      autoComplete="off"
      style={{ position: "absolute", left: "-9999px" }}
      aria-hidden="true"
    />
  );
}
