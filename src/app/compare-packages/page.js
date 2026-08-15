import CompareTool from "@/components/CompareTool";
import Accordion from "@/components/Accordion";
import { COMPARE_FAQ } from "@/data/compareFaq";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/compare-packages/", {
  title: "Compare Packages",
  description:
    "Compare Babita Construction's Basic, Classic, Premium and Royale packages side by side — inclusions, rates, and a live built-up-area estimate.",
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
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Compare</span>
        <h1 className="h-lg" style={{ marginBottom: 12 }}>
          Compare construction packages
        </h1>
        <p className="lede" style={{ marginBottom: 28 }}>
          Set any two packages side by side. Rates include material, labour, project management
          and warranty.
        </p>

        <CompareTool />

        <div style={{ marginTop: 56, maxWidth: 900 }}>
          <span className="eyebrow">Questions</span>
          <h2 className="h-md" style={{ marginBottom: 20, fontSize: "1.7rem" }}>
            Before you choose a package
          </h2>
          <Accordion items={COMPARE_FAQ} />
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
