import Link from "next/link";

export default function ServiceDetail({ service }) {
  const { eyebrow, title, summary, paragraphs, capabilities, fleetTypes, registrationLinks, cta, ctaSecondary } = service;

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
            {fleetTypes && (
              <div className="card">
                <span className="card-num">Fleet</span>
                <h3>Vehicle types we run</h3>
                <ul className="check-list">
                  {fleetTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {registrationLinks && (
        <section className="section section--dark">
          <div className="wrap">
            <span className="eyebrow">Fleet services</span>
            <h2 className="h-lg" style={{ marginBottom: 36 }}>
              Three ways to work with our fleet
            </h2>
            <div className="grid grid-3">
              {registrationLinks.map((link) => (
                <div className="quote" key={link.href}>
                  <h3 style={{ marginBottom: 8, fontSize: "1.15rem", color: "#fff" }}>
                    {link.label}
                  </h3>
                  <Link className="btn btn-primary btn-sm" href={link.href}>
                    Start now
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
