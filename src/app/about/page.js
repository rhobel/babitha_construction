import StatsStrip from "@/components/StatsStrip";
import { COMPANY } from "@/data/company";
import { ABOUT_STORY, HOW_WE_WORK, WHERE_WE_WORK } from "@/data/about";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("/about/", {
  title: "About Us",
  description:
    "Babitha Constructions has worked in construction in Bangalore for over two decades, with an in-house team, plant and fleet.",
});

export default function AboutPage() {
  return (
    <>
      <section className="section section--dark">
        <div className="wrap">
          <span className="eyebrow">About us</span>
          <h1 className="h-xl" style={{ color: "#fff", marginBottom: 18 }}>
            {COMPANY.yearsInOperation} years of building across Bangalore.
          </h1>
          <p className="lede" style={{ color: "#c6d2e4" }}>
            Residential and commercial construction, run by one in-house team with its own plant, fleet and site engineers.
          </p>
        </div>
      </section>

      <StatsStrip />

      <section className="section">
        <div className="wrap">
          <div className="grid grid-2" style={{ alignItems: "center", gap: 48 }}>
            <div>
              <span className="eyebrow">{ABOUT_STORY.eyebrow}</span>
              <h2 className="h-lg" style={{ marginBottom: 18 }}>
                {ABOUT_STORY.heading}
              </h2>
              {ABOUT_STORY.paragraphs.map((p) => (
                <p className="lede" key={p.slice(0, 24)}>
                  {p}
                </p>
              ))}
            </div>
            <div className="card">
              <span className="card-num">Where we work</span>
              <h3>Based in {WHERE_WE_WORK[0]}</h3>
              <p>Our office, plant and fleet are based here, and our project work runs across the city.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="wrap">
          <span className="eyebrow">How we work</span>
          <h2 className="h-lg" style={{ marginBottom: 36 }}>
            What actually makes a schedule hold.
          </h2>
          <div className="grid grid-3">
            {HOW_WE_WORK.map((item) => (
              <div className="card" key={item.num}>
                <span className="card-num">{item.num}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <span className="eyebrow">Leadership</span>
          <h2 className="h-lg" style={{ marginBottom: 12 }}>
            The people running each site
          </h2>
          <p className="lede">
            Every project has a named site engineer and a dedicated project management line, not a rotating cast of subcontractors.
          </p>
          <div className="sg-note" style={{ marginTop: 26, borderLeft: "4px solid var(--orange)", background: "var(--orange-wash)", padding: "16px 18px", borderRadius: 2, fontSize: "14.5px", maxWidth: "70ch" }}>
            <b style={{ color: "var(--navy)" }}>Leadership photos and bios are being finalised</b> and will be added here before launch, along with certifications and registration details.
          </div>
        </div>
      </section>
    </>
  );
}
