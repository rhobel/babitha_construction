import HeroSlider from "@/components/HeroSlider";
import StatsStrip from "@/components/StatsStrip";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";
import { pageMetadata } from "@/lib/seo";
import { COMPANY } from "@/data/company";

export const metadata = pageMetadata("/", {
  title: "Home",
  description:
    "Babitha Constructions builds, moves and mines across Bangalore — construction, transportation and mining under one in-house team.",
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
      <HeroSlider />
      <StatsStrip />
      <AboutTeaser />
      <ServicesGrid />
      <TestimonialsSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
    </>
  );
}
