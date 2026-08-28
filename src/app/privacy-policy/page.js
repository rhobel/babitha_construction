import LegalPage, { LegalBlock, LegalList } from "@/components/LegalPage";
import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/privacy-policy/", {
  title: "Privacy Policy",
  description:
    "How Babitha Constructions collects, uses and protects personal data submitted through this site.",
});

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      heading="Privacy Policy"
      note={
        <>
          <b>Draft — pending legal review.</b> This page describes the data this site
          actually collects, based on the forms built into it. It has not been reviewed by a
          lawyer and must not be treated as final before launch.
        </>
      }
    >
      <LegalBlock title="What we collect">
        <p>
          When you use a form on this site, we collect what you enter into it — your name,
          mobile number and the project type you select. The enquiry forms may also collect
          your email address and the details of your message. We automatically log the IP
          address a submission came from, for spam and fraud prevention.
        </p>
      </LegalBlock>

      <LegalBlock title="How we use it">
        <LegalList
          items={[
            "To respond to your enquiry or callback request",
            "To send you a confirmation and, where relevant, a reference number",
            "To contact you by phone about a submission you made",
            "To detect and block spam or fraudulent submissions",
          ]}
        />
      </LegalBlock>

      <LegalBlock title="Where it's stored">
        <p>
          Form submissions are stored in a database on our hosting provider&apos;s
          infrastructure. We do not store payment details on this site.
        </p>
      </LegalBlock>

      <LegalBlock title="Who we share it with">
        <p>
          We do not sell personal data. We use it internally to process your submission.
          Email delivery for confirmations and notifications is handled by our hosting
          provider&apos;s mail service.
        </p>
      </LegalBlock>

      <LegalBlock title="Your rights">
        <p>
          You can ask us to delete the personal data we hold about you by emailing{" "}
          <a href={`mailto:${COMPANY.footerEmail}?subject=Data%20deletion%20request`}>
            {COMPANY.footerEmail}
          </a>
          . We aim to act on verified requests within 30 days.
        </p>
      </LegalBlock>

      <LegalBlock title="Contact">
        <p>
          Questions about this policy can be sent to{" "}
          <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a> or to the
          office address in the footer.
        </p>
      </LegalBlock>
    </LegalPage>
  );
}
