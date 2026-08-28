import ContactHero from "@/components/ContactHero";
import ContactStart from "@/components/ContactStart";
import ContactNeeds from "@/components/ContactNeeds";
import ContactCoverage from "@/components/ContactCoverage";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/contact/", {
  title: "Contact",
  description:
    "Get in touch with Babitha Constructions — phone, WhatsApp, email, office address and a callback request form.",
});

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactStart />
      <ContactNeeds />
      <ContactCoverage />
    </>
  );
}
