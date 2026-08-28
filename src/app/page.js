import Hero from "@/components/Hero";
import TrustedBrands from "@/components/TrustedBrands";
import ExpertiseSection from "@/components/ExpertiseSection";
import ProjectCarousel from "@/components/ProjectCarousel";
import ContractModels from "@/components/ContractModels";
import PackagesBand from "@/components/PackagesBand";
import HowItWorks from "@/components/HowItWorks";
import AdvantageGrid from "@/components/AdvantageGrid";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import CtaPanel from "@/components/CtaPanel";
import FaqSection from "@/components/FaqSection";
import AboutBand from "@/components/AboutBand";
import ClosingCta from "@/components/ClosingCta";
import { pageMetadata } from "@/lib/seo";
import { COMPANY } from "@/data/company";
import {
  COMPLETED,
  COMPLETED_PROJECTS,
  IN_PROGRESS,
  IN_PROGRESS_PROJECTS,
} from "@/data/projectShowcase";

export const metadata = pageMetadata("/", {
  title: "Home",
  description:
    "Babitha Constructions builds across Bangalore — residential and commercial construction from one in-house team.",
});

const WEEKDAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Expands a "Monday – Friday" style range into the individual schema.org
// DayOfWeek values it requires — the property doesn't accept free-text ranges.
function expandDayRange(dayText) {
  const parts = dayText.split("–").map((s) => s.trim());
  if (parts.length === 1) return parts;
  const start = WEEKDAYS.indexOf(parts[0]);
  const end = WEEKDAYS.indexOf(parts[1]);
  if (start === -1 || end === -1) return parts;
  return WEEKDAYS.slice(start, end + 1);
}

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: COMPANY.name,
  telephone: COMPANY.phones,
  email: COMPANY.footerEmail,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressLocality: "Bangalore",
    addressRegion: "Karnataka",
    postalCode: "560090",
    addressCountry: "IN",
  },
  openingHoursSpecification: COMPANY.hours
    .filter((h) => h.time !== "Closed")
    .map((h) => {
      const [opens, closes] = h.time.split("–").map((s) => s.trim());
      return {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: expandDayRange(h.day),
        opens,
        closes,
      };
    }),
};

export default function Home() {
  return (
    <>
      <Hero />
      <TrustedBrands />
      <ExpertiseSection />
      <ProjectCarousel
        id="in-progress"
        meta={IN_PROGRESS}
        projects={IN_PROGRESS_PROJECTS}
      />
      <ProjectCarousel
        id="completed"
        meta={COMPLETED}
        projects={COMPLETED_PROJECTS}
        tinted
      />
      <ContractModels />
      <PackagesBand />
      <HowItWorks />
      <AdvantageGrid />
      <TestimonialCarousel />
      <CtaPanel />
      <FaqSection />
      <AboutBand />
      <ClosingCta />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}
