import { ADVANTAGE } from "@/data/journey";

const ICONS = {
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
      <path d="m9.5 11.8 1.9 1.9 3.4-3.6" />
    </>
  ),
  rupee: (
    <>
      <path d="M8 5h8M8 9h8M14.5 5c0 3-1.5 4-4 4h-.5l6 10" />
    </>
  ),
  helmet: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M10 8.4V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.9" />
      <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
};

export default function AdvantageGrid() {
  return (
    <section className="advantage" id="advantage">
      <div className="wrap">
        <span className="expertise-pill">{ADVANTAGE.eyebrow}</span>
        <h2 className="adv-heading">{ADVANTAGE.heading}</h2>

        <ul className="adv-grid">
          {ADVANTAGE.cards.map((card) => (
            <li className="adv-card" key={card.title}>
              <span className="adv-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[card.icon]}
                </svg>
              </span>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
