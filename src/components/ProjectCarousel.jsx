import Link from "next/link";
import CarouselShell from "./CarouselShell";

// Drives both project carousels — in-progress and completed. They differ only
// in copy, records and background tint.
export default function ProjectCarousel({ id, meta, projects, tinted = false }) {
  return (
    <CarouselShell id={id} meta={meta} tinted={tinted}>
      {projects.map((project) => (
        <li className="ip-card" key={project.ref}>
          <div className="ip-card-media">
            <div
              className="ip-card-img"
              style={{ backgroundImage: `url('${project.image}')` }}
              role="img"
              aria-label={`${project.title}, reference ${project.ref}`}
            />
            <div className="ip-tags">
              <span className="ip-tag ip-tag--ref">{project.ref}</span>
              <span className="ip-tag ip-tag--status">{meta.status}</span>
            </div>
            <div className="ip-card-overlay">
              <h3>{project.title}</h3>
              <Link className="ip-card-go" href="/contact/">
                <span className="sr-only">{`Enquire about ${project.title} — ${project.ref}`}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <dl className="ip-specs">
            {project.specs.map((spec) => (
              <div className="ip-spec" key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </li>
      ))}
    </CarouselShell>
  );
}
