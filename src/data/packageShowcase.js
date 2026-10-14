import { PACKAGES } from "./packages";

// Presentation layer for the home-page packages band. Names, rates and taglines
// stay single-sourced in packages.js — this only adds how each tier is dressed
// (eyebrow, accent stripe, badge, headline bullets), keyed by package id.
//
export const PACKAGES_SECTION = {
  eyebrow: "Our packages",
  heading: "House construction packages in Bangalore",
  body: "Choose from our range of construction packages designed for every budget. Every rate includes design and project management; GST @ 18% is extra.",
  rateNote: "Indicative only · GST @ 18% extra · Excludes compound wall, borewell and site levelling",
  ctaLabel: "View full specs",
  ctaHref: "/packages/",
};

const PRESENTATION = {
  basic: {
    eyebrow: "Essential",
    accent: "linear-gradient(90deg, #9aa0a6, #cfd4d9)",
    points: ["Standard structure", "Essential finishes", "Quality supervision"],
  },
  classic: {
    eyebrow: "Value",
    badge: "Most popular",
    accent: "linear-gradient(90deg, #e0b33c, #f5d98a)",
    points: ["Better finishes", "Trusted brands", "Balanced specifications"],
  },
  premium: {
    eyebrow: "Standard",
    accent: "linear-gradient(90deg, #fc8402, #ffb567)",
    points: ["Premium finishes", "Enhanced specifications", "Best value balance"],
  },
  royale: {
    eyebrow: "Luxury",
    accent: "linear-gradient(90deg, #4a8fd4, #8fc4f0)",
    points: ["Luxury materials", "Bespoke detailing", "Top-tier specifications"],
  },
};

export const PACKAGE_CARDS = PACKAGES.map((pkg) => ({
  id: pkg.id,
  name: pkg.name,
  rate: pkg.rate,
  tag: pkg.tag,
  ...PRESENTATION[pkg.id],
}));

export const COST_PLUS_BANNER = {
  eyebrow: "Cost-plus advantage",
  heading: "See exactly where your money goes with the Cost-Plus contract model",
  body: "Choose any construction package, then switch to Cost-Plus for transparent actual-cost billing, flexible upgrades, weekly cost visibility and better control over your total home construction budget.",
  action: { label: "Explore Cost-Plus", href: "/cost-plus/" },
};
