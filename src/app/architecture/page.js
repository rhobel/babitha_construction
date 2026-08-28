import ArchitectureServices from "@/components/ArchitectureServices";
import DesignProcess from "@/components/DesignProcess";
import DarkPointsBand from "@/components/DarkPointsBand";
import ArchitectureDeliverables from "@/components/ArchitectureDeliverables";
import ArchitectureCta from "@/components/ArchitectureCta";
import { pageMetadata } from "@/lib/seo";
import { ARCHITECTURE_SECTION, WHY_ARCHITECTURE } from "@/data/architecture";

export const metadata = pageMetadata("/architecture/", {
  title: "Architecture",
  description: ARCHITECTURE_SECTION.body,
});

export default function ArchitecturePage() {
  return (
    <>
      <ArchitectureServices />
      <DesignProcess />
      <DarkPointsBand
        id="why-architecture"
        eyebrow={WHY_ARCHITECTURE.eyebrow}
        heading={WHY_ARCHITECTURE.heading}
        body={WHY_ARCHITECTURE.body}
        points={WHY_ARCHITECTURE.points}
        action={WHY_ARCHITECTURE.action}
      />
      <ArchitectureDeliverables />
      <ArchitectureCta />
    </>
  );
}
