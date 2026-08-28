import ConstructionServices from "@/components/ConstructionServices";
import DeliveryModel from "@/components/DeliveryModel";
import ContractChoice from "@/components/ContractChoice";
import OwnerAdvantage from "@/components/OwnerAdvantage";
import ProjectCarousel from "@/components/ProjectCarousel";
import CenteredCta from "@/components/CenteredCta";
import { SERVICE_DETAILS } from "@/data/services";
import { COMPLETED, COMPLETED_PROJECTS } from "@/data/projectShowcase";
import { CONSTRUCTION_CTA } from "@/data/constructionCta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/construction/", {
  title: "Construction",
  description: SERVICE_DETAILS.construction.summary,
});

export default function ConstructionPage() {
  return (
    <>
      <ConstructionServices />
      <DeliveryModel />
      <ContractChoice />
      <OwnerAdvantage />
      {/* Same carousel and records as the home page's completed band. */}
      <ProjectCarousel
        id="completed-work"
        meta={{ ...COMPLETED, viewAll: { label: "View all completed work", href: "/projects/" } }}
        projects={COMPLETED_PROJECTS}
        tinted
      />
      <CenteredCta
        id="start-project"
        eyebrow={CONSTRUCTION_CTA.eyebrow}
        heading={CONSTRUCTION_CTA.heading}
        body={CONSTRUCTION_CTA.body}
        chips={CONSTRUCTION_CTA.chips}
        primary={CONSTRUCTION_CTA.primary}
        phone={CONSTRUCTION_CTA.phone}
      />
    </>
  );
}
