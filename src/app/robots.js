export const dynamic = "force-static";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/login/"],
    },
    sitemap: "https://babitaconstruction.com/sitemap.xml",
  };
}
