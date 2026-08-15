import DataDeletionForm from "@/components/DataDeletionForm";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/data-deletion-request/", {
  title: "Data Deletion Request",
  description:
    "Request deletion of your personal data held by Babita Construction, in line with Play Store data-safety requirements.",
});

export default function DataDeletionRequestPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Your data</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Data deletion request
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          If you&apos;d like the personal data we hold about you deleted, tell us what and why.
          We&apos;ll confirm by email once it&apos;s done.
        </p>
        <DataDeletionForm />
      </div>
    </section>
  );
}
