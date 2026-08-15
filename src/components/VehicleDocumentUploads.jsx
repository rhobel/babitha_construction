import FileUploadField from "./FileUploadField";
import { VEHICLE_DOCUMENT_FIELDS } from "@/lib/uploadRules";

export default function VehicleDocumentUploads({ values, errors, setField }) {
  return (
    <div style={{ marginTop: 16 }}>
      <p style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--mute)", marginBottom: 10 }}>
        Documents — JPG, PNG or PDF, 5 MB max each
      </p>
      <div className="cp-row">
        {VEHICLE_DOCUMENT_FIELDS.map(({ key, label }) => (
          <FileUploadField
            key={key}
            id={`doc-${key}`}
            label={label}
            file={values[key]}
            error={errors[key]}
            onChange={(file) => setField(key, file)}
          />
        ))}
      </div>
    </div>
  );
}
