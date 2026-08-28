import { FOUNDER_MESSAGE } from "@/data/costPlus";

export default function FounderMessage() {
  return (
    <section className="founder" id="founder-message">
      <div className="wrap founder-grid">
        <div className="founder-copy">
          <span className="expertise-pill">{FOUNDER_MESSAGE.eyebrow}</span>
          <h1 className="founder-heading">{FOUNDER_MESSAGE.heading}</h1>
          <p className="founder-body">{FOUNDER_MESSAGE.body}</p>

          <ul className="founder-points">
            {FOUNDER_MESSAGE.points.map((point) => (
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

        <figure className="founder-card">
          <span className="founder-badge">{FOUNDER_MESSAGE.badge}</span>
          <blockquote>{FOUNDER_MESSAGE.quote}</blockquote>
          {FOUNDER_MESSAGE.attribution && (
          <figcaption>{FOUNDER_MESSAGE.attribution}</figcaption>
        )}
        </figure>
      </div>
    </section>
  );
}
