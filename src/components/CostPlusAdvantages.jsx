import { COST_PLUS_ADVANTAGES } from "@/data/costPlus";

const ICONS = {
  rupee: <path d="M8 5h8M8 9h8M14.5 5c0 3-1.5 4-4 4h-.5l6 10" />,
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
      <path d="m9.5 11.8 1.9 1.9 3.4-3.6" />
    </>
  ),
  sparkle: (
    <>
      <path d="M11 4.5 12.6 9l4.5 1.6-4.5 1.6L11 16.7 9.4 12.2 4.9 10.6 9.4 9 11 4.5Z" />
      <path d="M17.5 15.5 18.2 17.5l2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M16.5 14.5h1.5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
    </>
  ),
};

export default function CostPlusAdvantages() {
  return (
    <section className="cpadv" id="cost-plus-advantages">
      <div className="wrap">
        <span className="expertise-pill">{COST_PLUS_ADVANTAGES.eyebrow}</span>
        <h2 className="cpadv-heading">{COST_PLUS_ADVANTAGES.heading}</h2>

        <ul className="cpadv-grid">
          {COST_PLUS_ADVANTAGES.cards.map((card) => (
            <li className="cpadv-card" key={card.title}>
              <span className="cpadv-icon">
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
