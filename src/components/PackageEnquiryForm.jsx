"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import { useFormState } from "@/lib/useFormState";
import { validatePhone } from "@/lib/vehicleValidation";
import { CITIES } from "@/data/packages";

export default function PackageEnquiryForm({ packageOptions, defaultCityName, defaultPackageName, defaultArea }) {
  const INITIAL = {
    name: "",
    phone: "",
    city: defaultCityName,
    packageName: defaultPackageName,
    area: defaultArea || "",
    plotLocation: "",
    company: "",
  };

  function validate(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Enter your name.";
    const phoneErr = validatePhone(values.phone);
    if (phoneErr) errors.phone = phoneErr;
    if (!values.area || Number(values.area) <= 0) errors.area = "Enter the built-up area.";
    if (!values.plotLocation.trim()) errors.plotLocation = "Enter the plot location.";
    return errors;
  }

  const { values, errors, status, result, serverError, setField, handleSubmit } = useFormState({
    initialValues: INITIAL,
    validate,
    endpoint: "package-enquiry",
  });

  if (status === "success") {
    return (
      <div className="cp-controls">
        <p style={{ margin: 0, color: "var(--ok)", fontWeight: 600, fontSize: 14 }}>
          Enquiry sent. Reference number: <b>{result?.reference}</b>. We&apos;ll call you back
          within one working day.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-controls" onSubmit={handleSubmit} noValidate>
      <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

      <div className="cp-row">
        <Field label="Your name" htmlFor="peName" error={errors.name}>
          <input className="control" id="peName" value={values.name} onChange={(e) => setField("name", e.target.value)} aria-invalid={Boolean(errors.name)} />
        </Field>
        <Field label="Phone" htmlFor="pePhone" error={errors.phone}>
          <input className="control" id="pePhone" type="tel" value={values.phone} onChange={(e) => setField("phone", e.target.value)} aria-invalid={Boolean(errors.phone)} />
        </Field>
        <Field label="City" htmlFor="peCity">
          <select className="control" id="peCity" value={values.city} onChange={(e) => setField("city", e.target.value)}>
            {CITIES.map((c) => <option key={c.id}>{c.name}</option>)}
          </select>
        </Field>
        <Field label="Package" htmlFor="pePackage">
          <select className="control" id="pePackage" value={values.packageName} onChange={(e) => setField("packageName", e.target.value)}>
            {packageOptions.map((name) => <option key={name}>{name}</option>)}
          </select>
        </Field>
        <Field label="Built-up area (sq ft)" htmlFor="peArea" error={errors.area}>
          <input className="control" id="peArea" type="number" min="500" value={values.area} onChange={(e) => setField("area", e.target.value)} aria-invalid={Boolean(errors.area)} />
        </Field>
        <Field label="Plot location" htmlFor="pePlotLocation" error={errors.plotLocation}>
          <input className="control" id="pePlotLocation" value={values.plotLocation} onChange={(e) => setField("plotLocation", e.target.value)} aria-invalid={Boolean(errors.plotLocation)} />
        </Field>
      </div>

      <button className="btn btn-primary" style={{ marginTop: 20, width: "100%" }} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Request a callback"}
      </button>

      {status === "error" && <p className="field-error" style={{ marginTop: 14 }}>{serverError}</p>}
    </form>
  );
}
