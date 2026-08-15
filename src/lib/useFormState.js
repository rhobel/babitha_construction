"use client";

import { useState } from "react";
import { submitForm } from "@/lib/submitForm";

// Shared state machine behind every form on the site: values, per-field
// errors, submit status and a honeypot check. Keeps the six form
// components from re-implementing the same submit/validate/reset cycle.
export function useFormState({ initialValues, validate, endpoint }) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [result, setResult] = useState(null);
  const [serverError, setServerError] = useState("");

  function setField(name, value) {
    setValues((v) => ({ ...v, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (values.company) return; // honeypot tripped — drop silently

    const nextErrors = validate ? validate(values) : {};
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    setServerError("");
    try {
      const res = await submitForm(endpoint, values);
      setResult(res);
      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setServerError(
        err?.message || "Something went wrong. Please try again or call us directly.",
      );
      setStatus("error");
    }
  }

  return { values, setValues, errors, status, result, serverError, setField, handleSubmit };
}
