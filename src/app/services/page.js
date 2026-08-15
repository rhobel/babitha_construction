import Link from "next/link";
import { SERVICES } from "@/data/home";
import { pageMetadata } from "@/lib/seo";

const DETAIL_HREF = {
  Construction: "/construction/",
};

export const metadata = pageMetadata("/services/", {
  title: "Services",
  description: "Construction — residential and commercial builds, delivered by one in-house team across Bangalore.",
});

export default function ServicesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">What we do</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Construction, done by one team.
        </h1>
        <p className="lede" style={{ marginBottom: 36 }}>
          Design through to finishing, on one contract, with our own plant, fleet and site engineers.
        </p>

        <div className="grid grid-3">
          {SERVICES.map((service) => (
            <div className="card" key={service.title}>
              <span className="card-num">{service.num}</span>
              <h3>{service.title}</h3>
              <p>{service.body}</p>
              <ul className="check-list" style={{ marginBottom: 16 }}>
                {service.checklist.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="card-link" href={DETAIL_HREF[service.title]}>
                Read more
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
