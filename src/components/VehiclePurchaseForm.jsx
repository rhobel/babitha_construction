"use client";

import Field from "./Field";
import HoneypotField from "./HoneypotField";
import { useFormState } from "@/lib/useFormState";
import { validateEmail, validatePhone } from "@/lib/vehicleValidation";
import { VEHICLE_TYPES, TRANSACTION_METHODS } from "@/data/vehicleTypes";

const INITIAL = {
  fullName: "",
  email: "",
  contact: "",
  altContact: "",
  address: "",
  vehicleType: VEHICLE_TYPES[0],
  rangeFrom: "",
  rangeTo: "",
  transactionMethod: TRANSACTION_METHODS[0],
  company: "",
};

function validate(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Enter your full name.";
  const emailErr = validateEmail(values.email);
  if (emailErr) errors.email = emailErr;
  const contactErr = validatePhone(values.contact);
  if (contactErr) errors.contact = contactErr;
  const altErr = validatePhone(values.altContact, { required: false });
  if (altErr) errors.altContact = altErr;
  if (!values.address.trim()) errors.address = "Enter your address.";
  if (!values.vehicleType) errors.vehicleType = "Select a vehicle type.";
  if (!values.rangeFrom || Number(values.rangeFrom) <= 0) errors.rangeFrom = "Enter a starting budget.";
  if (!values.rangeTo || Number(values.rangeTo) <= 0) errors.rangeTo = "Enter an upper budget.";
  if (
    values.rangeFrom &&
    values.rangeTo &&
    Number(values.rangeFrom) > Number(values.rangeTo)
  ) {
    errors.rangeTo = "Upper budget must be more than the starting budget.";
  }
  if (!values.transactionMethod) errors.transactionMethod = "Select a transaction method.";
  return errors;
}

export default function VehiclePurchaseForm() {
  const { values, errors, status, result, serverError, setField, handleSubmit } = useFormState({
    initialValues: INITIAL,
    validate,
    endpoint: "vehicle-purchase",
  });

  if (status === "success") {
    return (
      <div className="cp-controls">
        <p style={{ margin: 0, color: "var(--ok)", fontWeight: 600, fontSize: 14 }}>
          Application submitted. Reference number: <b>{result?.reference}</b>. We&apos;ll match it
          against available stock and get back to you.
        </p>
      </div>
    );
  }

  return (
    <form className="cp-controls" onSubmit={handleSubmit} noValidate>
      <HoneypotField value={values.company} onChange={(v) => setField("company", v)} />

      <div className="cp-row">
        <Field label="Full name" htmlFor="vpFullName" error={errors.fullName}>
          <input className="control" id="vpFullName" value={values.fullName} onChange={(e) => setField("fullName", e.target.value)} aria-invalid={Boolean(errors.fullName)} />
        </Field>
        <Field label="Email" htmlFor="vpEmail" error={errors.email}>
          <input className="control" id="vpEmail" type="email" value={values.email} onChange={(e) => setField("email", e.target.value)} aria-invalid={Boolean(errors.email)} />
        </Field>
        <Field label="Contact number" htmlFor="vpContact" error={errors.contact}>
          <input className="control" id="vpContact" type="tel" value={values.contact} onChange={(e) => setField("contact", e.target.value)} aria-invalid={Boolean(errors.contact)} />
        </Field>
        <Field label="Alternate contact" htmlFor="vpAltContact" error={errors.altContact}>
          <input className="control" id="vpAltContact" type="tel" value={values.altContact} onChange={(e) => setField("altContact", e.target.value)} aria-invalid={Boolean(errors.altContact)} />
        </Field>
      </div>

      <div style={{ marginTop: 16 }}>
        <Field label="Address" htmlFor="vpAddress" error={errors.address}>
          <input className="control" id="vpAddress" value={values.address} onChange={(e) => setField("address", e.target.value)} aria-invalid={Boolean(errors.address)} />
        </Field>
      </div>

      <div className="cp-row" style={{ marginTop: 16 }}>
        <Field label="Vehicle type" htmlFor="vpVehicleType" error={errors.vehicleType}>
          <select className="control" id="vpVehicleType" value={values.vehicleType} onChange={(e) => setField("vehicleType", e.target.value)}>
            {VEHICLE_TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Budget from (₹)" htmlFor="vpRangeFrom" error={errors.rangeFrom}>
          <input className="control" id="vpRangeFrom" type="number" min="0" value={values.rangeFrom} onChange={(e) => setField("rangeFrom", e.target.value)} aria-invalid={Boolean(errors.rangeFrom)} />
        </Field>
        <Field label="Budget to (₹)" htmlFor="vpRangeTo" error={errors.rangeTo}>
          <input className="control" id="vpRangeTo" type="number" min="0" value={values.rangeTo} onChange={(e) => setField("rangeTo", e.target.value)} aria-invalid={Boolean(errors.rangeTo)} />
        </Field>
        <Field label="Transaction method" htmlFor="vpTransactionMethod" error={errors.transactionMethod}>
          <select className="control" id="vpTransactionMethod" value={values.transactionMethod} onChange={(e) => setField("transactionMethod", e.target.value)}>
            {TRANSACTION_METHODS.map((t) => <option key={t}>{t}</option>)}
          </select>
        </Field>
      </div>

      <button className="btn btn-primary" style={{ marginTop: 20, width: "100%" }} type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Apply now"}
      </button>

      {status === "error" && <p className="field-error" style={{ marginTop: 14 }}>{serverError}</p>}
    </form>
  );
}
