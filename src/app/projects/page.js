import ProjectGallery from "@/components/ProjectGallery";
import ProjectHighlights from "@/components/ProjectHighlights";
import DarkPointsBand from "@/components/DarkPointsBand";
import CenteredCta from "@/components/CenteredCta";
import { pageMetadata } from "@/lib/seo";
import { PROJECT_GALLERY, PROJECTS_CTA, PROJECTS_WHY } from "@/data/projectGallery";

export const metadata = pageMetadata("/projects/", {
  title: "Projects",
  description: PROJECT_GALLERY.body,
});

export default function ProjectsPage() {
  return (
    <>
      <ProjectGallery />
      <ProjectHighlights />
      <DarkPointsBand
        id="projects-why"
        eyebrow={PROJECTS_WHY.eyebrow}
        heading={PROJECTS_WHY.heading}
        body={PROJECTS_WHY.body}
        points={PROJECTS_WHY.points}
      />
      <CenteredCta
        id="start-project"
        eyebrow={PROJECTS_CTA.eyebrow}
        heading={PROJECTS_CTA.heading}
        body={PROJECTS_CTA.body}
        primary={PROJECTS_CTA.primary}
        phones={PROJECTS_CTA.phones}
      />
    </>
  );
}
