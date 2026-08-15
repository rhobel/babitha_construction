"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import VehicleDocumentUploads from "./VehicleDocumentUploads";
import { useFormState } from "@/lib/useFormState";
import { validateEmail, validatePhone, validateVehicleBlock, validateDocuments } from "@/lib/vehicleValidation";
import { VEHICLE_TYPES, LISTED_BY_OPTIONS, AGREEMENT_PERIODS, TRANSACTION_METHODS } from "@/data/vehicleTypes";
import { VEHICLE_DOCUMENT_FIELDS } from "@/lib/uploadRules";

const INITIAL = {
  ownerName: "",
  email: "",
  contact: "",
  altContact: "",
  address: "",
  vin: "",
  model: "",
  vehicleType: VEHICLE_TYPES[0],
  listedBy: LISTED_BY_OPTIONS[0],
  agreementPeriod: AGREEMENT_PERIODS[0],
  transactionMethod: TRANSACTION_METHODS[0],
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
  const altErr = validatePhone(values.altContact, { required: false });
  if (altErr) errors.altContact = altErr;
  if (!values.address.trim()) errors.address = "Enter the vehicle's location / address.";
  validateVehicleBlock(values, errors);
  if (!values.agreementPeriod) errors.agreementPeriod = "Select an agreement period.";
  validateDocuments(values, errors);
  return errors;
}

export default function VehicleLeaseForm() {
  const { values, errors, status, result, serverError, setField, handleSubmit } = useFormState({
    initialValues: INITIAL,
    validate,
    endpoint: "vehicle-lease",
  });

  if (status === "success") {
    return (
      <div className="cp-controls">
        <p style={{ margin: 0, color: "var(--ok)", fontWeight: 600, fontSize: 14 }}>
          Listing submitted. Reference number: <b>{result?.reference}</b>. We&apos;ll call you back within one working day.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-controls" onSubmit={handleSubmit} noValidate>
      <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

      <div className="cp-row">
        <Field label="Owner name" htmlFor="vlOwnerName" error={errors.ownerName}>
          <input className="control" id="vlOwnerName" value={values.ownerName} onChange={(e) => setField("ownerName", e.target.value)} aria-invalid={Boolean(errors.ownerName)} />
        </Field>
        <Field label="Email" htmlFor="vlEmail" error={errors.email}>
          <input className="control" id="vlEmail" type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Contact number" htmlFor="vlContact" error={errors.contact}>
          <input className="control" id="vlContact" type="tel" value={values.contact} onChange={(e) => setField("contact", e.target.value)} aria-invalid={Boolean(errors.contact)} />
        </Field>
        <Field label="Alternate contact" htmlFor="vlAltContact" error={errors.altContact}>
          <input className="control" id="vlAltContact" type="tel" value={values.altContact} onChange={(e) => setField("altContact", e.target.value)} aria-invalid={Boolean(errors.altContact)} />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Address" htmlFor="vlAddress" error={errors.address}>
          <input className="control" id="vlAddress" value={values.address} onChange={(e) => setField("address", e.target.value)} aria-invalid={Boolean(errors.address)} />
        </Field>
      </div>

      <div className="cp-row" style={{ marginTop: 16 }}>
        <Field label="VIN / chassis number" htmlFor="vlVin" error={errors.vin}>
          <input className="control" id="vlVin" value={values.vin} onChange={(e) => setField("vin", e.target.value)} aria-invalid={Boolean(errors.vin)} />
        </Field>
        <Field label="Model" htmlFor="vlModel" error={errors.model}>
          <input className="control" id="vlModel" value={values.model} onChange={(e) => setField("model", e.target.value)} aria-invalid={Boolean(errors.model)} />
        </Field>
        <Field label="Vehicle type" htmlFor="vlVehicleType" error={errors.vehicleType}>
          <select className="control" id="vlVehicleType" value={values.vehicleType} onChange={(e) => setField("vehicleType", e.target.value)}>
            {VEHICLE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Listed by" htmlFor="vlListedBy" error={errors.listedBy}>
          <select className="control" id="vlListedBy" value={values.listedBy} onChange={(e) => setField("listedBy", e.target.value)}>
            {LISTED_BY_OPTIONS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Agreement period" htmlFor="vlAgreementPeriod" error={errors.agreementPeriod}>
          <select className="control" id="vlAgreementPeriod" value={values.agreementPeriod} onChange={(e) => setField("agreementPeriod", e.target.value)}>
            {AGREEMENT_PERIODS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Transaction method" htmlFor="vlTransactionMethod" error={errors.transactionMethod}>
          <select className="control" id="vlTransactionMethod" value={values.transactionMethod} onChange={(e) => setField("transactionMethod", e.target.value)}>
            {TRANSACTION_METHODS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Expected price (₹)" htmlFor="vlExpectedPrice" error={errors.expectedPrice}>
          <input className="control" id="vlExpectedPrice" type="number" min="0" value={values.expectedPrice} onChange={(e) => setField("expectedPrice", e.target.value)} aria-invalid={Boolean(errors.expectedPrice)} />
        </Field>
      </div>

      <VehicleDocumentUploads values={values} errors={errors} setField={setField} />

      <button className="btn btn-primary" style={{ marginTop: 20, width: "100%" }} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit listing"}
      </button>

      {status === "error" && <p className="field-error" style={{ marginTop: 14 }}>{serverError}</p>}
    </form>
  );
}
