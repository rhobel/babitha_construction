import HeroSlider from "@/components/HeroSlider";
import StatsStrip from "@/components/StatsStrip";
import AboutTeaser from "@/components/AboutTeaser";
import ServicesGrid from "@/components/ServicesGrid";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata = {
  title: "Home",
  description:
    "Babita Construction builds, moves and mines across Odisha — construction, transportation and mining under one in-house team.",
};

export default function Home() {
  return (
    <>
      <HeroSlider />
      <StatsStrip />
      <AboutTeaser />
      <ServicesGrid />
      <TestimonialsSection />
    </>
  );
}
