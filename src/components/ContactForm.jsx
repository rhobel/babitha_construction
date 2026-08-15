"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import { useFormState } from "@/lib/useFormState";

const SUBJECTS = [
  "Construction enquiry",
  "Package / pricing question",
  "Vehicle lease or purchase",
  "Mining contract",
  "Something else",
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECTS[0],
  message: "",
  company: "",
};

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.email.trim()) errors.email = "Enter your email.";
  else if (!EMAIL_RE.test(values.email)) errors.email = "Enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Enter a phone number.";
  else if (!PHONE_RE.test(values.phone)) errors.phone = "Enter a valid phone number.";
  if (!values.message.trim()) errors.message = "Tell us a little about the job.";
  return errors;
}

export default function ContactForm() {
  const { values, errors, status, serverError, setField, handleSubmit } = useFormState({
    initialValues: INITIAL,
    validate,
    endpoint: "contact",
  });

  if (status === "success") {
    return (
      <div className="cp-controls" style={{ margin: 0 }}>
        <p style={{ margin: 0, color: "var(--ok)", fontWeight: 600, fontSize: 14 }}>
          Message sent. We&apos;ll reply within one working day.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-controls" style={{ margin: 0 }} onSubmit={handleSubmit} noValidate>
      <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

      <div className="cp-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <Field label="Your name" htmlFor="cName" error={errors.name}>
          <input
            className="control"
            id="cName"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
          />
        </Field>
        <Field label="Phone" htmlFor="cPhone" error={errors.phone}>
          <input
            className="control"
            id="cPhone"
            type="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Email" htmlFor="cEmail" error={errors.email}>
          <input
            className="control"
            id="cEmail"
            type="email"
            value={values.email}
            onChange={(e) => setField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
          />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Subject" htmlFor="cSubject">
          <select
            className="control"
            id="cSubject"
            value={values.subject}
            onChange={(e) => setField("subject", e.target.value)}
          >
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Message" htmlFor="cMsg" error={errors.message}>
          <textarea
            className="control"
            id="cMsg"
            rows={4}
            value={values.message}
            onChange={(e) => setField("message", e.target.value)}
            aria-invalid={Boolean(errors.message)}
          />
        </Field>
      </div>

      <button
        className="btn btn-primary"
        style={{ marginTop: 20, width: "100%" }}
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && <p className="field-error" style={{ marginTop: 14 }}>{serverError}</p>}
    </form>
  );
}
