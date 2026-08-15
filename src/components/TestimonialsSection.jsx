import { TESTIMONIALS } from "@/data/home";

export default function TestimonialsSection() {
  return (
    <section className="section" style={{ background: "var(--navy)" }}>
      <div className="wrap">
        <span className="eyebrow">Clients</span>
        <h2 className="h-lg" style={{ color: "#fff", marginBottom: 36 }}>
          What people say
        </h2>
        <div className="grid grid-3">
          {TESTIMONIALS.map((t) => (
            <div className="quote" key={t.name}>
              <p>{t.quote}</p>
              <div className="quote-by">
                <span className="quote-avatar">{t.initials}</span>
                <div>
                  <b>{t.name}</b>
                  <small>{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
