import Link from "next/link";
import { CONTRACTS, CONTRACT_MODELS } from "@/data/contracts";

export default function ContractModels() {
  return (
    <section className="contracts" id="contract-models">
      <div className="wrap">
        <span className="expertise-pill">{CONTRACTS.eyebrow}</span>
        <h2 className="contracts-heading">{CONTRACTS.heading}</h2>
        <p className="contracts-lede">{CONTRACTS.body}</p>

        <div className="contracts-grid">
          {CONTRACT_MODELS.map((model) => (
            <article
              className={`ct-card${model.featured ? " ct-card--featured" : ""}`}
              key={model.id}
            >
              <div className="ct-head">
                <h3>{model.title}</h3>
                <span
                  className={`ct-badge${model.featured ? " ct-badge--primary" : ""}`}
                >
                  {model.badge}
                </span>
              </div>

              <p className="ct-body">{model.body}</p>

              <ul className="ct-points">
                {model.points.map((point) => (
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

              <Link className="ct-link" href={model.link.href}>
                {model.link.label}
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
