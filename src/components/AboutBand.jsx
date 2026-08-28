import { ABOUT_BAND } from "@/data/aboutBand";

export default function AboutBand() {
  return (
    <section className="aboutband" id="about-company">
      <div className="wrap ab-grid">
        <div className="ab-copy">
          <span className="expertise-pill">{ABOUT_BAND.eyebrow}</span>
          <h2 className="ab-heading">{ABOUT_BAND.heading}</h2>
          {ABOUT_BAND.paragraphs.map((p) => (
            <p key={p.slice(0, 28)}>{p}</p>
          ))}
        </div>

        <div className="ab-side">
          <dl className="ab-stats">
            {ABOUT_BAND.stats.map((stat) => (
              <div className="ab-stat" key={stat.label}>
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>

          <div className="ab-highlight">
            <span className="ab-highlight-eyebrow">{ABOUT_BAND.highlight.eyebrow}</span>
            <h3>{ABOUT_BAND.highlight.title}</h3>
            <p>{ABOUT_BAND.highlight.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
