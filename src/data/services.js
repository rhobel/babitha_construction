import { VEHICLE_TYPES } from "./vehicleTypes";

export const SERVICE_DETAILS = {
  construction: {
    slug: "construction",
    eyebrow: "Service 01",
    title: "Construction",
    summary:
      "Residential and commercial builds, industrial sheds and infrastructure works, delivered on fixed per-square-foot packages.",
    paragraphs: [
      "Every build runs on the same process regardless of size: a drawing set and structural design signed off before groundwork starts, then a stage-wise checklist that has to be cleared before the next payment milestone releases.",
      "Materials and labour are quoted as a single per-square-foot rate — no separate contractor markups stacked on top of each trade.",
    ],
    capabilities: [
      "Design, structural drawings and approval assistance",
      "Structure through to finishing, on one contract",
      "Site engineer assigned for the life of the project",
      "10-year structural warranty, 1–3 years on materials depending on package",
    ],
    cta: { label: "Compare packages", href: "/compare-packages/" },
    ctaSecondary: { label: "Talk to us about a site", href: "/contact/" },
  },
  transportation: {
    slug: "transportation",
    eyebrow: "Service 02",
    title: "Transportation",
    summary:
      "Bulk haulage and site-to-site logistics, run on a fleet we own and maintain ourselves.",
    paragraphs: [
      "Material movement is scheduled against our own fleet, not sourced from a broker on the day it's needed. That's what keeps a haulage schedule holding when a site's timeline is tight.",
      "Every vehicle carries its own permit, fitness and pollution documentation, tracked and produced on request rather than chased down when a site needs it.",
    ],
    fleetTypes: VEHICLE_TYPES,
    cta: { label: "Talk to us", href: "/contact/" },
    ctaSecondary: { label: "See our projects", href: "/projects/" },
  },
  mining: {
    slug: "mining",
    eyebrow: "Service 03",
    title: "Mining",
    summary:
      "Contract extraction, exploration and drilling, and mine development and construction, run with the same environmental and statutory controls on every site.",
    paragraphs: [
      "Mining contracts move on the same fleet and crew as our construction and transportation work — overburden removal, haulage and site infrastructure all draw on plant we already own, rather than equipment hired in for the job.",
      "Statutory compliance is treated as a site requirement, not paperwork handled after the fact: permits, environmental controls and safety records are maintained for the duration of the contract.",
    ],
    capabilities: [
      "Exploration and core drilling",
      "Overburden removal and haulage",
      "Mine infrastructure and access roads",
      "Environmental controls and statutory compliance",
    ],
    cta: { label: "Discuss a site", href: "/contact/" },
    ctaSecondary: { label: "See our projects", href: "/projects/" },
  },
};
