"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import VehicleDocumentUploads from "./VehicleDocumentUploads";
import { useFormState } from "@/lib/useFormState";
import { validateEmail, validatePhone, validateVehicleBlock, validateDocuments } from "@/lib/vehicleValidation";
import { VEHICLE_TYPES, LISTED_BY_OPTIONS, TRANSACTION_METHODS } from "@/data/vehicleTypes";
import { VEHICLE_DOCUMENT_FIELDS } from "@/lib/uploadRules";

const INITIAL = {
  ownerName: "",
  email: "",
  contact: "",
  address: "",
  vin: "",
  model: "",
  vehicleType: VEHICLE_TYPES[0],
  transactionMethod: TRANSACTION_METHODS[0],
  listedBy: LISTED_BY_OPTIONS[0],
  expectedPrice: "",
  company: "",
  ...Object.fromEntries(VEHICLE_DOCUMENT_FIELDS.map(({ key }) => [key, null])),
};

function validate(values) {
  const errors = {};
  if (!values.ownerName.trim()) errors.ownerName = "Enter the owner's name.";
  const emailErr = validateEmail(values.email);
  if (emailErr) errors.email = emailErr;
  const contactErr = validatePhone(values.contact);
  if (contactErr) errors.contact = contactErr;
  if (!values.address.trim()) errors.address = "Enter the vehicle's location / address.";
  validateVehicleBlock(values, errors);
  validateDocuments(values, errors);
  return errors;
}

export default function VehicleDefaultForm() {
  const { values, errors, status, result, serverError, setField, handleSubmit } = useFormState({
    initialValues: INITIAL,
    validate,
    endpoint: "vehicle-default",
  });

  if (status === "success") {
    return (
      <div className="cp-controls">
        <p style={{ margin: 0, color: "var(--ok)", fontWeight: 600, fontSize: 14 }}>
          Submitted. Reference number: <b>{result?.reference}</b>. We&apos;ll call you back within one working day.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-controls" onSubmit={handleSubmit} noValidate>
      <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

      <div className="cp-row">
        <Field label="Owner name" htmlFor="vdOwnerName" error={errors.ownerName}>
          <input className="control" id="vdOwnerName" value={values.ownerName} onChange={(e) => setField("ownerName", e.target.value)} aria-invalid={Boolean(errors.ownerName)} />
        </Field>
        <Field label="Email" htmlFor="vdEmail" error={errors.email}>
          <input className="control" id="vdEmail" type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Contact number" htmlFor="vdContact" error={errors.contact}>
          <input className="control" id="vdContact" type="tel" value={values.contact} onChange={(e) => setField("contact", e.target.value)} aria-invalid={Boolean(errors.contact)} />
        </Field>
        <Field label="Address" htmlFor="vdAddress" error={errors.address}>
          <input className="control" id="vdAddress" value={values.address} onChange={(e) => setField("address", e.target.value)} aria-invalid={Boolean(errors.address)} />
        </Field>
      </div>

      <div className="cp-row" style={{ marginTop: 16 }}>
        <Field label="VIN / chassis number" htmlFor="vdVin" error={errors.vin}>
          <input className="control" id="vdVin" value={values.vin} onChange={(e) => setField("vin", e.target.value)} aria-invalid={Boolean(errors.vin)} />
        </Field>
        <Field label="Model" htmlFor="vdModel" error={errors.model}>
          <input className="control" id="vdModel" value={values.model} onChange={(e) => setField("model", e.target.value)} aria-invalid={Boolean(errors.model)} />
        </Field>
        <Field label="Vehicle type" htmlFor="vdVehicleType" error={errors.vehicleType}>
          <select className="control" id="vdVehicleType" value={values.vehicleType} onChange={(e) => setField("vehicleType", e.target.value)}>
            {VEHICLE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Transaction method" htmlFor="vdTransactionMethod" error={errors.transactionMethod}>
          <select className="control" id="vdTransactionMethod" value={values.transactionMethod} onChange={(e) => setField("transactionMethod", e.target.value)}>
            {TRANSACTION_METHODS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Listed by" htmlFor="vdListedBy" error={errors.listedBy}>
          <select className="control" id="vdListedBy" value={values.listedBy} onChange={(e) => setField("listedBy", e.target.value)}>
            {LISTED_BY_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Expected price (₹)" htmlFor="vdExpectedPrice" error={errors.expectedPrice}>
          <input className="control" id="vdExpectedPrice" type="number" min="0" value={values.expectedPrice} onChange={(e) => setField("expectedPrice", e.target.value)} aria-invalid={Boolean(errors.expectedPrice)} />
        </Field>
      </div>

      <VehicleDocumentUploads values={values} errors={errors} setField={setField} />

      <button className="btn btn-primary" style={{ marginTop: 20, width: "100%" }} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit vehicle"}
      </button>

      {status === "error" && <p className="field-error" style={{ marginTop: 14 }}>{serverError}</p>}
    </form>
  );
}
