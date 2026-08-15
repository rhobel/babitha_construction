const ROUTES = [
  "/",
  "/about/",
  "/services/",
  "/construction/",
  "/transportation/",
  "/mining/",
  "/compare-packages/",
  "/projects/",
  "/contact/",
  "/data-deletion-request/",
  "/privacy-policy/",
  "/terms-and-conditions/",
  "/support/",
];

export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://babithaconstruction.com";
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: base + route,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
