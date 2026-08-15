import Link from "next/link";

export default function ServiceDetail({ service }) {
  const { eyebrow, title, summary, paragraphs, capabilities, process, cta, ctaSecondary } = service;

  return (
    <>
      <section className="section section--dark">
        <div className="wrap">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="h-xl" style={{ color: "#fff", marginBottom: 18 }}>
            {title}
          </h1>
          <p className="lede" style={{ color: "#c6d2e4" }}>
            {summary}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2" style={{ alignItems: "start", gap: 48 }}>
            <div>
              {paragraphs.map((p) => (
                <p className="lede" key={p.slice(0, 24)}>
                  {p}
                </p>
              ))}
              <div className="hero-actions" style={{ marginTop: 8 }}>
                <Link className="btn btn-primary" href={cta.href}>
                  {cta.label}
                </Link>
                {ctaSecondary && (
                  <Link className="btn btn-outline" href={ctaSecondary.href}>
                    {ctaSecondary.label}
                  </Link>
                )}
              </div>
            </div>
            {capabilities && (
              <div className="card">
                <span className="card-num">Capability</span>
                <h3>What&apos;s included</h3>
                <ul className="check-list">
                  {capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {process && (
        <section className="section section--light">
          <div className="wrap">
            <span className="eyebrow">How it works</span>
            <h2 className="h-lg" style={{ marginBottom: 36 }}>
              From first call to handover
            </h2>
            <div className="grid grid-3">
              {process.map((step, i) => (
                <div className="card" key={step.title}>
                  <span className="card-num">Step {String(i + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
