import LegalPage, { LegalBlock } from "@/components/LegalPage";
import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/terms-and-conditions/", {
  title: "Terms & Conditions",
  description:
    "Terms governing use of the Babitha Constructions website and the enquiries and estimates on it.",
});

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      heading="Terms & Conditions"
      note={
        <>
          <b>Draft — pending legal review.</b> This page has not been reviewed by a lawyer
          and must not be treated as final before launch. In particular, the
          payment-milestone and warranty language here should be checked against actual
          contract templates before anything on this page is relied on.
        </>
      }
    >
      <LegalBlock title="Use of this website">
        <p>
          This website provides information about {COMPANY.name}&apos;s construction and
          architecture services and lets you submit enquiries through its forms. Submitting a
          form is a request for us to contact you — it is not a booking, contract or confirmed
          transaction.
        </p>
      </LegalBlock>

      <LegalBlock title="Package rates and estimates">
        <p>
          Rates and figures shown on the <a href="/packages/">Compare Packages</a> page,
          including the built-up-area estimator, are indicative only. A final quote depends on
          a site visit, final drawings and a signed contract, and may differ from the estimate
          shown on this site.
        </p>
      </LegalBlock>

      <LegalBlock title="Contracts and payment milestones">
        <p>
          Any construction work is governed by the signed contract for that project, not by
          this website. Scope, specifications, payment milestones and timelines are set out in
          that contract, and it prevails over anything described here.
        </p>
      </LegalBlock>

      <LegalBlock title="Accuracy of information">
        <p>
          We try to keep information on this site accurate and current, but it may not always
          reflect the latest pricing, availability or specifications. Contact us directly to
          confirm anything before relying on it.
        </p>
      </LegalBlock>

      <LegalBlock title="Contact">
        <p>
          Questions about these terms can be sent to{" "}
          <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a>.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
