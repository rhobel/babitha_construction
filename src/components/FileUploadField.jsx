"use client";

import { ACCEPTED_EXTENSIONS } from "@/lib/uploadRules";

export default function FileUploadField({ label, id, file, onChange, error }) {
  function handleChange(e) {
    onChange(e.target.files?.[0] ?? null);
  }

  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      <input
        className="control"
        id={id}
        type="file"
        accept={ACCEPTED_EXTENSIONS}
        onChange={handleChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
      />
      {file && !error && (
        <p style={{ marginTop: 6, fontSize: 12.5, color: "var(--mute)" }}>{file.name}</p>
      )}
      {error && (
        <p className="field-error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  );
}
