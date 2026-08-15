import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/privacy-policy/", {
  title: "Privacy Policy",
  description: "How Babitha Constructions collects, uses and protects personal data submitted through this site.",
});

export default function PrivacyPolicyPage() {
  return (
    <section className="section">
      <div className="wrap" style={{ maxWidth: 820 }}>
        <span className="eyebrow">Legal</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Privacy Policy
        </h1>

        <div className="sg-note" style={{ marginBottom: 32, borderLeft: "4px solid var(--orange)", background: "var(--orange-wash)", padding: "16px 18px", borderRadius: 2, fontSize: "14.5px" }}>
          <b style={{ color: "var(--navy)" }}>Draft — pending legal review.</b> This page describes
          the data this site actually collects, based on the forms built into it. It has not been
          reviewed by a lawyer and must not be treated as final before launch.
        </div>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>What we collect</h2>
        <p>
          When you use a form on this site, we collect what you enter into it — typically your
          name, email, phone number and the details of your enquiry. The vehicle registration
          forms also collect a VIN/chassis number, vehicle details and document uploads (RC,
          insurance, fitness, permit, pollution and tax certificates). We also automatically log
          the IP address a submission came from, for spam and fraud prevention.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>How we use it</h2>
        <ul className="check-list">
          <li>To respond to your enquiry, application or vehicle listing</li>
          <li>To send you a confirmation email and, where relevant, a reference number</li>
          <li>To contact you by phone about a submission you made</li>
          <li>To detect and block spam or fraudulent submissions</li>
        </ul>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Where it&apos;s stored</h2>
        <p>
          Form submissions are stored in a database on our hosting provider. Uploaded vehicle
          documents are stored outside the publicly served part of our website and are not
          directly accessible by URL.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Who we share it with</h2>
        <p>
          We do not sell personal data. We use it internally to process your submission. Email
          delivery for confirmations and notifications is handled by our hosting provider&apos;s
          mail service.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Your rights</h2>
        <p>
          You can ask us to delete the personal data we hold about you using the{" "}
          <a href="/data-deletion-request/">data deletion request form</a>. We aim to act on
          verified requests within 30 days.
        </p>

        <h2 className="h-md" style={{ marginTop: 32, marginBottom: 12 }}>Contact</h2>
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a> or to the office
          address in the footer.
        </p>
      </div>
    </section>
  );
}
