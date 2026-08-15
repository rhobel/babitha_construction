import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section className="section section--dark" style={{ minHeight: "60vh", display: "flex", alignItems: "center" }}>
      <div className="wrap">
        <span className="eyebrow">404</span>
        <h1 className="h-xl" style={{ color: "#fff", marginBottom: 18 }}>
          That page doesn&apos;t exist.
        </h1>
        <p className="lede" style={{ color: "#c6d2e4", marginBottom: 28 }}>
          It may have moved, or the link might be out of date. Try one of these instead.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn-outline-light" href="/contact/">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
