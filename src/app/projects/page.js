import ProjectCard from "@/components/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/projects/", {
  title: "Projects",
  description:
    "Recent construction, mining and transportation projects delivered by Babitha Constructions across Bangalore.",
});

export default function ProjectsPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Our work</span>
        <h1 className="h-xl" style={{ marginBottom: 36 }}>
          Recent projects
        </h1>
        <div className="grid grid-3">
          {PROJECTS.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
        <div className="sg-note" style={{ marginTop: 26, borderLeft: "4px solid var(--orange)", background: "var(--orange-wash)", padding: "16px 18px", borderRadius: 2, fontSize: "14.5px" }}>
          <b style={{ color: "var(--navy)" }}>Photographs are being finalised.</b> These entries
          will be updated with real project photography once supplied by the client.
        </div>
      </div>
    </section>
  );
}
