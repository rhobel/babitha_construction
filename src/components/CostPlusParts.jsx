import { COST_PLUS_PARTS } from "@/data/costPlus";

const ICONS = {
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21V3Z" />
      <path d="M9.5 8h5M9.5 12h5M9.5 16h3" />
    </>
  ),
  handfee: (
    <>
      <circle cx="9" cy="6.5" r="2.5" />
      <path d="M3 20a5.5 5.5 0 0 1 8-4.9" />
      <path d="M12.5 19.5 21 15l-1-1.8-4.5 2.3" />
      <path d="m12.5 19.5-2.5-1.4" />
    </>
  ),
  chart: (
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path d="M9 16v-4M12 16V8M15 16v-6" />
    </>
  ),
};

export default function CostPlusParts() {
  return (
    <section className="cparts" id="cost-plus-parts">
      <div className="wrap">
        <span className="expertise-pill">{COST_PLUS_PARTS.eyebrow}</span>
        <h2 className="cparts-heading">{COST_PLUS_PARTS.heading}</h2>

        <ul className="cparts-grid">
          {COST_PLUS_PARTS.cards.map((card) => (
            <li className="cparts-card" key={card.title}>
              <span className="cparts-icon">
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
