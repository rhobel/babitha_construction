import { COST_PLUS_PROCESS } from "@/data/costPlus";

const ICONS = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V19a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.5Z" />
      <path d="M9.5 20v-4.5a2.5 2.5 0 0 1 5 0V20" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4M9 12h6M9 16h4" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="m9.5 12.5 1.8 1.8 3.4-3.6" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.5L12 12 3.5 7.5 12 3Z" />
      <path d="m3.5 12 8.5 4.5 8.5-4.5" />
      <path d="m3.5 16.5 8.5 4.5 8.5-4.5" />
    </>
  ),
  receipt: (
    <>
      <path d="M6 3h12v18l-2-1.4-2 1.4-2-1.4-2 1.4-2-1.4L6 21V3Z" />
      <path d="M9.5 8h5M9.5 12h5M9.5 16h3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v6c0 4-3 6.5-7 8-4-1.5-7-4-7-8V6l7-3Z" />
      <path d="m9.5 11.8 1.9 1.9 3.4-3.6" />
    </>
  ),
};

export default function CostPlusProcess() {
  return (
    <section className="cpproc" id="cost-plus-process">
      <div className="wrap">
        <span className="expertise-pill">{COST_PLUS_PROCESS.eyebrow}</span>
        <h2 className="cpproc-heading">{COST_PLUS_PROCESS.heading}</h2>
        <p className="cpproc-lede">{COST_PLUS_PROCESS.body}</p>

        <ol className="cpproc-grid">
          {COST_PLUS_PROCESS.steps.map((step) => (
            <li className="cpproc-card" key={step.num}>
              <div className="cpproc-top">
                <span className="cpproc-icon">
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
                <span className="cpproc-num" aria-hidden="true">
                  {step.num}
                </span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
