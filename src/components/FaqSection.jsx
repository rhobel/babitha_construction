import Accordion from "./Accordion";
import { HOME_FAQ, HOME_FAQ_SECTION } from "@/data/homeFaq";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

export default function FaqSection() {
  return (
    <section className="faq" id="faq">
      <div className="wrap">
        <span className="expertise-pill">{HOME_FAQ_SECTION.eyebrow}</span>
        <h2 className="faq-heading">{HOME_FAQ_SECTION.heading}</h2>
        <p className="faq-lede">{HOME_FAQ_SECTION.body}</p>

        <div className="faq-shell">
          <Accordion items={HOME_FAQ} />
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
