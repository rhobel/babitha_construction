import { COMPANY } from "./company";

// Footer link columns. Every href resolves to a page that exists — the
// reference design listed Designs / Blogs / Careers / Content Policy, which
// this site has no pages for, so those are omitted rather than shipped dead.
//
export const FOOTER_BLURB = `${COMPANY.legalName} is a Bangalore-based home construction company focused on transparent contracts, quality materials, expert planning and reliable execution.`;

export const FOOTER_BADGES = ["150+ projects delivered", "10-year structural warranty"];

export const FOOTER_COLUMNS = [
  {
    title: "Construction",
    // Labels only — there are no per-type landing pages, and pointing all four
    // at /construction/ made them read as four links to the same place.
    links: [
      { label: "Residential" },
      { label: "Commercial" },
      { label: "Villas" },
      { label: "Apartments" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Construction", href: "/construction/" },
      { label: "Architecture", href: "/architecture/" },
      { label: "Cost-plus model", href: "/cost-plus/" },
      { label: "Packages", href: "/packages/" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Projects", href: "/projects/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy policy", href: "/privacy-policy/" },
      { label: "Terms & conditions", href: "/terms-and-conditions/" },
      // The /data-deletion-request/ page was removed — requests come by email.
      { label: "Delete my data", href: `mailto:${COMPANY.footerEmail}?subject=Data%20deletion%20request` },
    ],
  },
];

// ⚠ Service-area list — confirm the client actually covers these before launch.
export const SERVICE_LOCATIONS = {
  heading: "Our popular home construction service locations in Bangalore",
  body: "Home construction services across Bangalore's most requested localities.",
  areas: [
    "Chikkabanavara", "Yelahanka", "Hebbal", "Jalahalli", "Peenya", "Nagasandra",
    "Vidyaranyapura", "Yeshwanthpur", "Rajajinagar", "Malleshwaram", "Banashankari", "Kengeri",
    "Nelamangala", "Tumkur Road", "Hesaraghatta", "Jayanagar", "Kanakapura Road", "Vijayanagar",
    "Whitefield", "KR Puram", "Sarjapur Road", "Electronic City", "Hennur", "JP Nagar",
  ],
};
