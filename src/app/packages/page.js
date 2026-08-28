import CompareTool from "@/components/CompareTool";
import Accordion from "@/components/Accordion";
import { COMPARE_FAQ } from "@/data/compareFaq";
import CenteredCta from "@/components/CenteredCta";
import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/packages/", {
  title: "Compare Packages",
  description:
    "Compare Babitha Constructions's Basic, Classic, Premium and Royale packages side by side — inclusions, rates, and a live built-up-area estimate.",
});

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: COMPARE_FAQ.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function ComparePackagesPage() {
  return (
    <>
      <section className="pkghead">
        <div className="wrap">
          <span className="expertise-pill">Compare</span>
          <h1 className="pkghead-heading">Compare construction packages</h1>
          <p className="pkghead-lede">
            Compare all four packages side by side. Rates include material, labour, project
            management and warranty.
          </p>
        </div>
      </section>

      <section className="pkgtool" id="compare">
        <div className="wrap">
          <CompareTool />
        </div>
      </section>

      <section className="faq" id="package-faq">
        <div className="wrap">
          <span className="expertise-pill">Questions</span>
          <h2 className="faq-heading">Before you choose a package</h2>
          <div className="faq-shell">
            <Accordion items={COMPARE_FAQ} />
          </div>
        </div>
      </section>

      <CenteredCta
        id="start-project"
        eyebrow="Next step"
        heading="Not sure which package fits your plot?"
        body="Share your built-up area and quality expectations — we'll recommend the package that matches your budget, and explain what changes between tiers."
        chips={["Free consultation", "Package recommendation", "No obligation"]}
        primary={{ label: "Talk to us", href: "/contact/" }}
        phone={COMPANY.phones[0]}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
