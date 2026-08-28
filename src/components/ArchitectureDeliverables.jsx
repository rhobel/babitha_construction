import { ARCHITECTURE_DELIVERABLES } from "@/data/architecture";

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
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="m9.5 14 1.8 1.8 3.4-3.6" />
    </>
  ),
  plug: (
    <>
      <path d="M9 4v5M15 4v5" />
      <path d="M6.5 9h11v3a5.5 5.5 0 0 1-11 0V9Z" />
      <path d="M12 17.5V21" />
    </>
  ),
};

export default function ArchitectureDeliverables() {
  return (
    <section className="deliv" id="deliverables">
      <div className="wrap">
        <span className="expertise-pill">{ARCHITECTURE_DELIVERABLES.eyebrow}</span>
        <h2 className="deliv-heading">{ARCHITECTURE_DELIVERABLES.heading}</h2>

        <ul className="deliv-grid">
          {ARCHITECTURE_DELIVERABLES.items.map((item) => (
            <li key={item.label}>
              <span className="deliv-icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[item.icon]}
                </svg>
              </span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
