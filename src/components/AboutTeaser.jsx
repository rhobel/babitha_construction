import { ABOUT_TEASER } from "@/data/home";

export default function AboutTeaser() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="grid grid-2" style={{ alignItems: "center", gap: 48 }}>
          <div>
            <span className="eyebrow">{ABOUT_TEASER.eyebrow}</span>
            <h2 className="h-lg" style={{ marginBottom: 18 }}>
              {ABOUT_TEASER.heading}
            </h2>
            {ABOUT_TEASER.paragraphs.map((p, i) => (
              <p
                className="lede"
                key={p.slice(0, 24)}
                style={i === ABOUT_TEASER.paragraphs.length - 1 ? { marginBottom: 24 } : undefined}
              >
                {p}
              </p>
            ))}
            <ul className="check-list">
              {ABOUT_TEASER.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="grid" style={{ gap: 18 }}>
            {ABOUT_TEASER.cards.map((card) => (
              <div className="card" key={card.num}>
                <span className="card-num">{card.num}</span>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
