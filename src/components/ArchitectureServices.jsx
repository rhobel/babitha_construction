import { ARCHITECTURE_SECTION, ARCHITECTURE_SERVICES } from "@/data/architecture";

const ICONS = {
  draft: (
    <>
      <path d="M4 20 8.5 8.5 20 4l-4.5 11.5L4 20Z" />
      <path d="m9.5 14.5 5-5" />
    </>
  ),
  cube: (
    <>
      <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
      <path d="M12 21v-9M4 7.5l8 4.5 8-4.5" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  ruler: (
    <>
      <path d="M15.5 3.5 20.5 8.5 8.5 20.5 3.5 15.5 15.5 3.5Z" />
      <path d="m13 6 1.6 1.6M10.5 8.5l1.6 1.6M8 11l1.6 1.6M5.5 13.5l1.6 1.6" />
    </>
  ),
};

export default function ArchitectureServices() {
  return (
    <section className="arch" id="architecture-services">
      <div className="wrap">
        <span className="expertise-pill">{ARCHITECTURE_SECTION.eyebrow}</span>
        <h1 className="arch-heading">{ARCHITECTURE_SECTION.heading}</h1>
        <p className="arch-lede">{ARCHITECTURE_SECTION.body}</p>

        <ul className="arch-grid">
          {ARCHITECTURE_SERVICES.map((svc) => (
            <li className="arch-card" key={svc.id}>
              <span className={`arch-icon${svc.featured ? " arch-icon--solid" : ""}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[svc.icon]}
                </svg>
              </span>
              <h2>{svc.title}</h2>
              <p>{svc.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
