import Link from "next/link";
import { CONTRACT_CHOICE } from "@/data/deliveryModel";

const ICONS = {
  rupee: <path d="M8 5h8M8 9h8M14.5 5c0 3-1.5 4-4 4h-.5l6 10" />,
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
      <path d="m9.5 11.8 1.9 1.9 3.4-3.6" />
    </>
  ),
};

export default function ContractChoice() {
  return (
    <section className="cchoice" id="contract-choice">
      <div className="wrap cch-grid">
        <div className="cch-copy">
          <span className="expertise-pill packages-pill">{CONTRACT_CHOICE.eyebrow}</span>
          <h2 className="cch-heading">{CONTRACT_CHOICE.heading}</h2>
          <p className="cch-body">{CONTRACT_CHOICE.body}</p>
        </div>

        <div className="cch-cards">
          {CONTRACT_CHOICE.cards.map((card) => (
            <article
              className={`cch-card${card.featured ? " cch-card--featured" : ""}`}
              key={card.id}
            >
              <span className="cch-icon">
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
              <Link className="cch-link" href={card.link.href}>
                {card.link.label}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M5 12h13M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
