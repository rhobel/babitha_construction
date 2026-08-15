"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import { useFormState } from "@/lib/useFormState";
import { validateEmail, validatePhone } from "@/lib/vehicleValidation";

const INITIAL = { name: "", email: "", phone: "", reason: "", company: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  const emailErr = validateEmail(values.email);
  if (emailErr) errors.email = emailErr;
  const phoneErr = validatePhone(values.phone);
  if (phoneErr) errors.phone = phoneErr;
  if (!values.reason.trim()) errors.reason = "Tell us what you'd like deleted.";
  return errors;
}

export default function DataDeletionForm() {
  const { values, errors, status, serverError, setField, handleSubmit } = useFormState({
    initialValues: INITIAL,
    validate,
    endpoint: "data-deletion",
  });

  if (status === "success") {
    return (
      <div className="cp-controls" style={{ margin: 0 }}>
        <p style={{ margin: 0, color: "var(--ok)", fontWeight: 600, fontSize: 14 }}>
          Request received. We&apos;ll process it and confirm by email within 30 days, as required
          under applicable data protection law.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-controls" style={{ margin: 0 }} onSubmit={handleSubmit} noValidate>
      <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

      <div className="cp-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Field label="Your name" htmlFor="ddName" error={errors.name}>
          <input className="control" id="ddName" value={values.name} onChange={(e) => setField("name", e.target.value)} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Phone" htmlFor="ddPhone" error={errors.phone}>
          <input className="control" id="ddPhone" type="tel" value={values.phone} onChange={(e) => setField("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Email" htmlFor="ddEmail" error={errors.email}>
          <input className="control" id="ddEmail" type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} aria-invalid={Boolean(errors.email)} />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="What would you like deleted, and why?" htmlFor="ddReason" error={errors.reason}>
          <textarea className="control" id="ddReason" rows={4} value={values.reason} onChange={(e) => setField("reason", e.target.value)} aria-invalid={Boolean(errors.reason)} />
        </Field>
      </div>

      <button className="btn btn-primary" style={{ marginTop: 20, width: "100%" }} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Submit request"}
      </button>

      {status === "error" && <p className="field-error" style={{ marginTop: 14 }}>{serverError}</p>}
    </form>
  );
}
