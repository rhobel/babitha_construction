import { HOW_IT_WORKS } from "@/data/journey";

const ICONS = {
  doc: (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="m9.5 14 1.8 1.8 3.4-3.6" />
    </>
  ),
  ruler: (
    <>
      <path d="M15.5 3.5 20.5 8.5 8.5 20.5 3.5 15.5 15.5 3.5Z" />
      <path d="m13 6 1.6 1.6M10.5 8.5l1.6 1.6M8 11l1.6 1.6M5.5 13.5l1.6 1.6" />
    </>
  ),
  truck: (
    <>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="18" r="1.6" />
      <circle cx="16.5" cy="18" r="1.6" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="8" r="4" />
      <path d="m11 11 9 9M17 17l2-2M14 14l2-2" />
    </>
  ),
};

export default function HowItWorks() {
  return (
    <section className="howitworks" id="how-it-works">
      <div className="wrap">
        <span className="expertise-pill">{HOW_IT_WORKS.eyebrow}</span>
        <h2 className="hw-heading">{HOW_IT_WORKS.heading}</h2>

        <ol className="hw-grid">
          {HOW_IT_WORKS.steps.map((step) => (
            <li className="hw-card" key={step.num}>
              <span className="hw-icon">
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
              <span className="hw-step">Step {step.num}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
