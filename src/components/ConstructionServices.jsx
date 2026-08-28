import {
  CONSTRUCTION_SERVICES,
  CONSTRUCTION_SERVICES_SECTION,
} from "@/data/constructionServices";

const ICONS = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.5Z" />
      <path d="M9.5 20v-4.5a2.5 2.5 0 0 1 5 0V20" />
    </>
  ),
  building: (
    <>
      <path d="M4 21V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M13 10h6a1 1 0 0 1 1 1v10" />
      <path d="M7 9h2M7 13h2M7 17h2M16 14h1M16 18h1" />
    </>
  ),
  villa: (
    <>
      <path d="M3 9.5 12 4l9 5.5" />
      <path d="M5 20V11M9.5 20V11M14.5 20V11M19 20V11" />
      <path d="M3 20h18" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
};

export default function ConstructionServices() {
  return (
    <section className="csvc" id="construction-services">
      <div className="wrap">
        <span className="expertise-pill">{CONSTRUCTION_SERVICES_SECTION.eyebrow}</span>
        <h1 className="csvc-heading">{CONSTRUCTION_SERVICES_SECTION.heading}</h1>
        <p className="csvc-lede">{CONSTRUCTION_SERVICES_SECTION.body}</p>

        <div className="csvc-grid">
          {CONSTRUCTION_SERVICES.map((svc) => (
            <article className="csvc-card" key={svc.id}>
              <div className="csvc-head">
                <span className="csvc-icon">
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
                <div>
                  <span className="csvc-eyebrow">{svc.eyebrow}</span>
                  <h2 className="csvc-title">{svc.title}</h2>
                </div>
              </div>

              <p className="csvc-body">{svc.body}</p>

              <ul className="csvc-points">
                {svc.points.map((point) => (
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

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
