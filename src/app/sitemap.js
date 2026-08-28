const ROUTES = [
  "/",
  "/construction/",
  "/architecture/",
  "/packages/",
  "/cost-plus/",
  "/projects/",
  "/contact/",
  "/privacy-policy/",
  "/terms-and-conditions/",
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
