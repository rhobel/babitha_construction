import { COMPANY } from "@/data/company";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/support/", {
  title: "Support",
  description: "Get help with a form, a submission, or an existing enquiry with Babita Construction.",
});

const CHANNELS = [
  {
    title: "Something wrong with a submission?",
    body: "If a form didn't go through, or you haven't heard back within one working day, call us directly rather than resubmitting.",
  },
  {
    title: "Following up on a vehicle listing or application?",
    body: "Have your reference number ready — it was shown on screen and emailed to you when you submitted the form.",
  },
  {
    title: "Question about a package or quote?",
    body: "Use the enquiry form on the Compare Packages page, or call — the packages team can usually answer on the spot.",
  },
];

export default function SupportPage() {
  return (
    <section className="section">
      <div className="wrap">
        <span className="eyebrow">Help</span>
        <h1 className="h-xl" style={{ marginBottom: 12 }}>
          Support
        </h1>
        <p className="lede" style={{ marginBottom: 36 }}>
          Most questions are fastest to resolve by phone. Here&apos;s where to start.
        </p>

        <div className="grid grid-3" style={{ marginBottom: 36 }}>
          {CHANNELS.map((c) => (
            <div className="card" key={c.title}>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className="cp-controls">
          <div className="cp-row">
            <div className="field">
              <label>Phone</label>
              <p style={{ margin: 0, fontSize: 15 }}>
                {COMPANY.phones.map((phone, i) => (
                  <span key={phone}>
                    {i > 0 && " · "}
                    <a href={`tel:${phone.replace(/\s+/g, "")}`}>{phone}</a>
                  </span>
                ))}
              </p>
            </div>
            <div className="field">
              <label>Email</label>
              <p style={{ margin: 0, fontSize: 15 }}>
                <a href={`mailto:${COMPANY.topbarEmail}`}>{COMPANY.topbarEmail}</a>
              </p>
            </div>
            <div className="field">
              <label>Hours</label>
              <p style={{ margin: 0, fontSize: 15 }}>Mon–Fri 9–7, Sat 9–12</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 26 }}>
          <a className="btn btn-outline" href="/contact/">
            Or send a message instead
          </a>
        </div>
      </div>
    </section>
  );
}
