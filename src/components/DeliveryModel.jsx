import { DELIVERY_MODEL } from "@/data/deliveryModel";

const ICONS = {
  ruler: (
    <>
      <path d="M15.5 3.5 20.5 8.5 8.5 20.5 3.5 15.5 15.5 3.5Z" />
      <path d="m13 6 1.6 1.6M10.5 8.5l1.6 1.6M8 11l1.6 1.6M5.5 13.5l1.6 1.6" />
    </>
  ),
  doc: (
    <>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Z" />
      <path d="M14 3v4h4" />
      <path d="m9.5 14 1.8 1.8 3.4-3.6" />
    </>
  ),
  helmet: (
    <>
      <path d="M4 16a8 8 0 0 1 16 0" />
      <path d="M10 8.4V5.5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2.9" />
      <path d="M3 16h18v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
    </>
  ),
  clipboard: (
    <>
      <rect x="5" y="4" width="14" height="17" rx="2" />
      <path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1" />
      <path d="m9.5 12.5 1.8 1.8 3.4-3.6" />
    </>
  ),
};

export default function DeliveryModel() {
  return (
    <section className="delivery" id="delivery-model">
      <div className="wrap">
        <span className="expertise-pill">{DELIVERY_MODEL.eyebrow}</span>
        <h2 className="dm-heading">{DELIVERY_MODEL.heading}</h2>

        <ol className="dm-grid">
          {DELIVERY_MODEL.steps.map((step) => (
            <li className="dm-card" key={step.num}>
              <div className="dm-top">
                <span className="dm-icon">
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
                <span className="dm-num" aria-hidden="true">
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
