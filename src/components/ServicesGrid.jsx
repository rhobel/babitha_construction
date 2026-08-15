import Link from "next/link";
import { SERVICES } from "@/data/home";

export default function ServicesGrid() {
  return (
    <section className="section section--light" id="services">
      <div className="wrap">
        <span className="eyebrow">What we do</span>
        <h2 className="h-lg" style={{ marginBottom: 12 }}>
          Three lines of work, one team.
        </h2>
        <p className="lede" style={{ marginBottom: 36 }}>
          Each service stands on its own, and they compound when you use more than one.
        </p>

        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div className="card" key={service.num}>
              <span className="card-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ul className="check-list" style={{ marginBottom: 16 }}>
                {service.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="card-link" href={service.link.href}>
                {service.link.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
