import { COMPANY } from "./company";

// Two sections on /construction/, below the services grid: the four-stage
// delivery model, and the contract-model choice.
export const DELIVERY_MODEL = {
  eyebrow: "Delivery model",
  heading: "A controlled process from planning to handover",
  steps: [
    {
      num: "01",
      icon: "ruler",
      title: "Design & Scope Planning",
      body: "We define floor plans, structural requirements, material specifications, BOQ and execution scope before construction begins.",
    },
    {
      num: "02",
      icon: "doc",
      title: "Contract & Cost Clarity",
      body: "Choose Cost-Plus for transparent actual-cost billing, or Lump-Sum for fixed-budget execution with agreed specifications.",
    },
    {
      num: "03",
      icon: "helmet",
      title: "Site Execution",
      body: "A dedicated site engineer coordinates labour, material, vendors, quality checks and stage-wise execution.",
    },
    {
      num: "04",
      icon: "clipboard",
      title: "Tracking & Handover",
      body: "Progress updates, photos, milestone reviews and final finishing checks keep the project controlled until handover.",
    },
  ],
};

export const CONTRACT_CHOICE = {
  eyebrow: "Contract models",
  // The reference read "commercial structure"; on a construction page the
  // choice being made is the contract structure.
  heading: "Choose the right contract structure for your construction project",
  body: `${COMPANY.name} can execute projects using a transparent Cost-Plus model or a Lump-Sum model, depending on the project type, design finalisation, budget clarity and decision-making preference.`,
  cards: [
    {
      id: "cost-plus",
      icon: "rupee",
      featured: true,
      title: "Cost-Plus Contract",
      body: "Best when you want transparency, flexibility and actual-cost visibility. Ideal for homes, villas and projects where specifications may evolve.",
      link: { label: "Learn Cost-Plus", href: "/cost-plus/" },
    },
    {
      id: "lump-sum",
      icon: "shield",
      featured: false,
      title: "Lump-Sum Contract",
      body: "Best when drawings, scope and specifications are frozen and you prefer a fixed project budget with defined deliverables.",
      link: { label: "View package specs", href: "/packages/" },
    },
  ],
};
