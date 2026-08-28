import {
  COST_PLUS_FLOW,
  LUMP_SUM_FLOW,
  PAYMENT_FLOW,
} from "@/data/paymentFlow";

const ICONS = {
  people: (
    <>
      <circle cx="9" cy="9" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6.5a3 3 0 0 1 0 5.4M17.5 19a5.4 5.4 0 0 0-2-4.2" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21V3Z" />
      <path d="M9.5 8h5M9.5 12h5" />
    </>
  ),
  store: (
    <>
      <path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9Z" />
      <path d="M4 9 5.5 4h13L20 9" />
      <path d="M9.5 20v-5h5v5" />
    </>
  ),
  hammer: (
    <>
      <path d="M13.5 6.5 17 3l4 4-3.5 3.5-4-4Z" />
      <path d="m14.5 9.5-9 9L3 16l9-9" />
    </>
  ),
};

function Icon({ name }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name]}
    </svg>
  );
}

export default function PaymentFlow() {
  return (
    <section className="pflow" id="payment-flow">
      <div className="wrap">
        <span className="expertise-pill">{PAYMENT_FLOW.eyebrow}</span>
        <h2 className="pflow-heading">{PAYMENT_FLOW.heading}</h2>
        <p className="pflow-lede">{PAYMENT_FLOW.body}</p>

        <div className="pflow-grid">
          {/* ── Lump-sum ─────────────────────────────────────── */}
          <article className="pf-panel">
            <header className="pf-head">
              <span className="pf-badge">{LUMP_SUM_FLOW.badge}</span>
              <h3>{LUMP_SUM_FLOW.title}</h3>
              <p>{LUMP_SUM_FLOW.body}</p>
            </header>

            <div className="pf-body">
              {LUMP_SUM_FLOW.chain.map((node, i) => (
                <div key={node.title}>
                  <div className="pf-node">
                    <span className="pf-node-icon">
                      <Icon name={node.icon} />
                    </span>
                    <b>{node.title}</b>
                    <small>{node.body}</small>
                  </div>
                  {i < LUMP_SUM_FLOW.chain.length - 1 && (
                    <span className="pf-arrow" aria-hidden="true" />
                  )}
                </div>
              ))}

              {/* Connector splits one payer into two payees. */}
              <div className="pf-split">
                {LUMP_SUM_FLOW.branch.map((node) => (
                  <div className="pf-node pf-node--sm" key={node.title}>
                    <span className="pf-node-icon">
                      <Icon name={node.icon} />
                    </span>
                    <b>{node.title}</b>
                    <small>{node.body}</small>
                  </div>
                ))}
              </div>

              <p className="pf-note">{LUMP_SUM_FLOW.note}</p>
            </div>
          </article>

          {/* ── Cost-plus ────────────────────────────────────── */}
          <article className="pf-panel pf-panel--featured">
            <header className="pf-head">
              <span className="pf-badge pf-badge--primary">{COST_PLUS_FLOW.badge}</span>
              <h3>{COST_PLUS_FLOW.title}</h3>
              <p>{COST_PLUS_FLOW.body}</p>
            </header>

            <div className="pf-body">
              <div className="pf-node pf-node--client">
                <span className="pf-node-icon pf-node-icon--solid">
                  <Icon name={COST_PLUS_FLOW.client.icon} />
                </span>
                <b>{COST_PLUS_FLOW.client.title}</b>
                <small>{COST_PLUS_FLOW.client.body}</small>
              </div>

              <div className="pf-guidance">
                <span className="pf-guidance-icon">
                  <Icon name={COST_PLUS_FLOW.guidance.icon} />
                </span>
                <div>
                  <b>{COST_PLUS_FLOW.guidance.title}</b>
                  <p>{COST_PLUS_FLOW.guidance.body}</p>
                </div>
              </div>

              <ul className="pf-routes">
                {COST_PLUS_FLOW.routes.map((route) => (
                  <li key={route.label}>
                    <div className="pf-route-pays">
                      <span className="pf-route-label">{route.label}</span>
                      <b>Client pays</b>
                      <small>{route.pays}</small>
                    </div>
                    <span className="pf-route-arrow" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h13M13 6l6 6-6 6" />
                      </svg>
                    </span>
                    <span className="pf-route-icon">
                      <Icon name={route.icon} />
                    </span>
                    <div className="pf-route-to">
                      <b>{route.title}</b>
                      <p>{route.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <ul className="pf-chips">
                {COST_PLUS_FLOW.chips.map((chip) => (
                  <li key={chip}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="9" />
                      <path d="m8.5 12.2 2.4 2.4 4.6-4.8" />
                    </svg>
                    {chip}
                  </li>
                ))}
              </ul>

              <p className="pf-note pf-note--primary">{COST_PLUS_FLOW.note}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
