import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/terms-and-conditions/", {
  title: "Terms & Conditions",
  description: "Terms governing use of the Babitha Constructions website and the forms and quotes on it.",
});

export default function TermsAndConditionsPage() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <span className="eyebrow">Legal</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Terms &amp; Conditions
        </h1>

        <div className="sg-note" style={{ marginBottom: 32, borderLeft: "4px solid var(--orange)", background: "var(--orange-wash)", padding: "16px 18px", borderRadius: 2, fontSize: "14.5px" }}>
          <b style={{ color: "var(--navy)" }}>Draft — pending legal review.</b> This page has not
          been reviewed by a lawyer and must not be treated as final before launch. In particular,
          the payment-milestone and warranty language here should be checked against actual
          contract templates before anything on this page is relied on.
        </div>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Use of this website</h2>
        <p>
          This website provides information about Babitha Constructions&apos;s services and lets you
          submit enquiries, applications and vehicle listings through its forms. Submitting a form
          is a request for us to contact you — it is not a booking, contract or confirmed
          transaction.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Package rates and estimates</h2>
        <p>
          Rates and figures shown on the{" "}
          <a href="/compare-packages/">Compare Packages</a> page, including the built-up-area
          estimator, are indicative only. A final quote depends on a site visit, final drawings and
          a signed contract, and may differ from the estimate shown on this site.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Vehicle listings</h2>
        <p>
          Submitting a vehicle for lease, purchase or as a defaulter listing does not guarantee
          acceptance. We review submitted documents before confirming any listing or transaction.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Accuracy of information</h2>
        <p>
          We try to keep information on this site accurate and current, but it may not always
          reflect the latest pricing, availability or specifications. Contact us directly to
          confirm anything before relying on it.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Contact</h2>
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a>.
        </p>
      </div>
    </section>
  );
}
