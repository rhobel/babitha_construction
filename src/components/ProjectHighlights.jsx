import { PROJECT_HIGHLIGHTS } from "@/data/projectGallery";

export default function ProjectHighlights() {
  return (
    <section className="phl" id="project-highlights">
      <div className="wrap">
        <span className="expertise-pill">{PROJECT_HIGHLIGHTS.eyebrow}</span>
        <h2 className="phl-heading">
          <span>{PROJECT_HIGHLIGHTS.headingLead}</span>
          {PROJECT_HIGHLIGHTS.heading}
        </h2>
        <p className="phl-lede">{PROJECT_HIGHLIGHTS.body}</p>

        <dl className="phl-stats">
          {PROJECT_HIGHLIGHTS.stats.map((stat) => (
            <div className="phl-stat" key={stat.label}>
              <dt>{stat.value}</dt>
              <dd>{stat.label}</dd>
            </div>
          ))}
        </dl>

        <ul className="phl-points">
          {PROJECT_HIGHLIGHTS.points.map((point) => (
            <li key={point}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
