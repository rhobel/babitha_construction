import { DESIGN_PROCESS } from "@/data/architecture";

const ICONS = {
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
    </>
  ),
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
  doc: (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="m9.5 14 1.8 1.8 3.4-3.6" />
    </>
  ),
};

export default function DesignProcess() {
  return (
    <section className="dproc" id="design-process">
      <div className="wrap">
        <span className="expertise-pill">{DESIGN_PROCESS.eyebrow}</span>
        <h2 className="dproc-heading">{DESIGN_PROCESS.heading}</h2>

        <ol className="dproc-grid">
          {DESIGN_PROCESS.steps.map((step) => (
            <li
              className={`dproc-card${step.featured ? " dproc-card--featured" : ""}`}
              key={step.num}
            >
              <span className="dproc-step">Step {step.num}</span>
              <span className={`dproc-icon${step.featured ? " dproc-icon--solid" : ""}`}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {ICONS[step.icon]}
                </svg>
              </span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
