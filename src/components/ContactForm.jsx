"use client";

import { useState } from "react";
import { submitForm } from "@/lib/submitForm";

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
  company: "", // honeypot — must stay empty
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
  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function setField(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (values.company) return; // honeypot tripped, silently drop

    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    try {
      await submitForm("contact", values);
      setStatus("success");
      setValues(INITIAL);
    } catch {
      setStatus("error");
    }
  }

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
      <input
        type="text"
        name="company"
        value={values.company}
        onChange={(e) => setField("company", e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        style={{ position: "absolute", left: "-9999px" }}
        aria-hidden="true"
      />

      <div className="cp-row" style={{ gridTemplateColumns: "1fr 1fr" }}>
        <div className="field">
          <label htmlFor="cName">Your name</label>
          <input
            className="control"
            id="cName"
            value={values.name}
            onChange={(e) => setField("name", e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "cName-error" : undefined}
          />
          {errors.name && (
            <p className="field-error" id="cName-error">
              {errors.name}
            </p>
          )}
        </div>
        <div className="field">
          <label htmlFor="cPhone">Phone</label>
          <input
            className="control"
            id="cPhone"
            type="tel"
            value={values.phone}
            onChange={(e) => setField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "cPhone-error" : undefined}
          />
          {errors.phone && (
            <p className="field-error" id="cPhone-error">
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      <div className="field" style={{ marginTop: 16 }}>
        <label htmlFor="cEmail">Email</label>
        <input
          className="control"
          id="cEmail"
          type="email"
          value={values.email}
          onChange={(e) => setField("email", e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cEmail-error" : undefined}
        />
        {errors.email && (
          <p className="field-error" id="cEmail-error">
            {errors.email}
          </p>
        )}
      </div>

      <div className="field" style={{ marginTop: 16 }}>
        <label htmlFor="cSubject">Subject</label>
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
      </div>

      <div className="field" style={{ marginTop: 16 }}>
        <label htmlFor="cMsg">Message</label>
        <textarea
          className="control"
          id="cMsg"
          rows={4}
          value={values.message}
          onChange={(e) => setField("message", e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cMsg-error" : undefined}
        />
        {errors.message && (
          <p className="field-error" id="cMsg-error">
            {errors.message}
          </p>
        )}
      </div>

      <button
        className="btn btn-primary"
        style={{ marginTop: 20, width: "100%" }}
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="field-error" style={{ marginTop: 14 }}>
          Something went wrong. Please try again or call us directly.
        </p>
      )}
    </form>
  );
}
