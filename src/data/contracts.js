import { COMPANY } from "./company";

// Contract-model comparison on the home page.
//
export const CONTRACTS = {
  eyebrow: "Our contract models",
  heading: "Transparent construction contracts built around your needs",
  body: `At ${COMPANY.name}, we offer two home construction contract models to suit your unique needs and preferences — the Cost-Plus model for maximum transparency, or the Lump-Sum model for a fixed-price guarantee.`,
};

export const CONTRACT_MODELS = [
  {
    id: "cost-plus",
    title: "Cost-Plus Contract",
    badge: "Recommended",
    featured: true,
    body: "The Cost-Plus Contract provides full transparency, flexibility and potential cost savings by allowing you to pay the actual cost of materials and labour plus an agreed management fee.",
    points: [
      "Complete cost transparency — every rupee accounted",
      "Pay for actual materials and work done",
      "Savings from procurement pass through to you",
      "Flexible scope changes anytime during construction",
      "Weekly cost reports and billing updates",
    ],
    link: { label: "Learn more about cost-plus contract", href: "/cost-plus/" },
  },
  {
    id: "lump-sum",
    title: "Lump-Sum Contract",
    badge: "Fixed price",
    featured: false,
    body: "A set price for the entire construction project based on agreed specifications, materials and a detailed BOQ. Ideal for clients who prefer a fixed, predictable budget.",
    points: [
      "Fixed, predictable project price",
      "Defined scope and specifications upfront",
      "Simple budgeting and planning",
      "Ideal for standard home builds",
    ],
    // The Cost-Plus page carries the side-by-side comparison with lump-sum.
      link: { label: "Learn more about lump-sum contract", href: "/cost-plus/#cost-plus-vs" },
  },
];
