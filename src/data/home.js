import { COMPANY } from "./company";

export const HERO_SLIDES = [
  {
    badge: "Construction",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=70",
    title: "Building tomorrow's",
    titleEm: "infrastructure",
    titleEnd: ", today.",
    body: "Commercial and residential builds across Bangalore, delivered by an in-house team with our own plant, fleet and site engineers.",
    actions: [
      { label: "See our packages", href: "/compare-packages/", variant: "primary" },
      { label: "Talk to us", href: "/contact/", variant: "outline-light" },
    ],
  },
];

export const STATS = [
  { value: COMPANY.yearsInOperation, label: "Years in operation" },
  { value: 135, label: "People on the team" },
  { value: 957, label: "Clients served" },
  { value: 1839, label: "Projects delivered" },
];

export const ABOUT_TEASER = {
  eyebrow: "About us",
  heading: `Twenty-five years of building across Bangalore.`,
  paragraphs: [
    "Babitha Constructions is a construction company. Owning our own plant and fleet means fewer subcontractors between you and the work, and schedules we can actually hold to.",
    "From residential builds to commercial and industrial work, the same engineering team and the same quality checks apply on every site.",
  ],
  checklist: [
    "Commercial & residential construction",
    "Industrial sheds and infrastructure works",
    "Turnkey packages with fixed rates",
    "In-house plant, fleet and site engineers",
  ],
  cards: [
    {
      num: "01 — Expertise",
      title: "An in-house team, not a broker",
      body: "Site engineers, plant operators and drivers are on our payroll. The people who quote the job are the people who run it.",
    },
    {
      num: "02 — Safety",
      title: "Compliance is not optional",
      body: "Statutory permits and site safety records are maintained per project, and produced on request.",
    },
    {
      num: "03 — Quality",
      title: "Fixed scope, documented checks",
      body: "Every build runs against a written checklist at each stage, signed off before payment milestones release.",
    },
  ],
};

export const SERVICES = [
  {
    num: "Service",
    title: "Construction",
    body: "Residential and commercial builds, industrial sheds, infrastructure works and turnkey packages with fixed rates per square foot.",
    checklist: [
      "Design, drawings and approvals",
      "Structure to finishing",
      "10-year structural warranty",
    ],
    link: { label: "Compare packages", href: "/compare-packages/" },
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "Impressive expertise in integrating complex systems. Our productivity and data accuracy have improved significantly.",
    initials: "SH",
    name: "SK Modasir Hossain",
    role: "Project Manager",
  },
  {
    quote:
      "We compared three builders before signing. Babitha Constructions was the only one who showed us a real stage-wise checklist instead of a vague timeline — and they stuck to it.",
    initials: "RK",
    name: "Ramesh Kumar",
    role: "Homeowner, Bangalore",
  },
  {
    quote:
      "Having our own site engineer assigned for the whole project made a real difference. Every question got answered by someone who actually knew our site, not a call centre.",
    initials: "AP",
    name: "Anitha Prakash",
    role: "Homeowner, Bangalore",
  },
];
