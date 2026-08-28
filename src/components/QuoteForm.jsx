"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import { useFormState } from "@/lib/useFormState";

const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

const INITIAL = { name: "", phone: "", service: "", company: "" };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Enter your name.";
  if (!values.phone.trim()) errors.phone = "Enter a mobile number.";
  else if (!PHONE_RE.test(values.phone)) errors.phone = "Enter a valid mobile number.";
  if (!values.service) errors.service = "Choose a project type.";
  return errors;
}

const ASSURANCE_ICONS = [
  <path key="clock" d="M12 7v5l3 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />,
  <path key="shield" d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Zm-2.5 8.5 2 2 4-4" />,
];

// The three-field callback form, used twice: frosted over the hero photo, and
// as a white card in the closing CTA panel. `idPrefix` keeps the two instances'
// input ids distinct, since both render on the same page.
export default function QuoteForm({ copy, variant = "glass", idPrefix = "q", stacked = false }) {
  const { values, errors, status, result, serverError, setField, handleSubmit } =
    useFormState({ initialValues: INITIAL, validate, endpoint: "quote" });

  const id = (name) => `${idPrefix}${name}`;

  return (
    <div className={`qform qform--${variant}${stacked ? " qform--stacked" : ""}`}>
      {copy.eyebrow && <span className="qform-eyebrow">{copy.eyebrow}</span>}
      <h2 className="qform-title">{copy.heading}</h2>

      {status === "success" ? (
        <p className="qform-success" role="status">
          Thanks — we&apos;ll call you back within 24 hours.
          {result?.reference && (
            <>
              <br />
              Your reference is <b>{result.reference}</b>.
            </>
          )}
        </p>
      ) : (
        <>
          <p className="qform-body">{copy.body}</p>

          <form onSubmit={handleSubmit} noValidate>
            <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

            <div className="qform-row">
              <Field label="Your name *" htmlFor={id("Name")} error={errors.name}>
                <input
                  className="control"
                  id={id("Name")}
                  autoComplete="name"
                  placeholder="e.g. Rahul Sharma"
                  value={values.name}
                  onChange={(e) => setField("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                />
              </Field>
              <Field label="Mobile number *" htmlFor={id("Phone")} error={errors.phone}>
                <input
                  className="control"
                  id={id("Phone")}
                  type="tel"
                  autoComplete="tel"
                  placeholder="10-digit mobile"
                  value={values.phone}
                  onChange={(e) => setField("phone", e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                />
              </Field>
            </div>

            <div style={{ marginTop: 14 }}>
              <Field label="Select service *" htmlFor={id("Service")} error={errors.service}>
                <select
                  className="control"
                  id={id("Service")}
                  value={values.service}
                  onChange={(e) => setField("service", e.target.value)}
                  aria-invalid={Boolean(errors.service)}
                >
                  <option value="">Choose your project type</option>
                  {copy.services.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </Field>
            </div>

            <button
              className="btn btn-primary qform-submit"
              type="submit"
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : copy.submitLabel}
            </button>

            {status === "error" && (
              <p className="field-error" style={{ marginTop: 12 }}>
                {serverError}
              </p>
            )}
          </form>

          <ul className="qform-assurances">
            {copy.assurances.map((text, i) => (
              <li key={text}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ASSURANCE_ICONS[i]}
                </svg>
                {text}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
