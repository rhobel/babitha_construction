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
  {
    badge: "Logistics",
    image:
      "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=1600&q=70",
    title: "Material moved",
    titleEm: "on schedule",
    titleEnd: ", every load.",
    body: "Bulk haulage and site-to-site logistics with live tracking, documented weighbridge records and permit compliance.",
    actions: [
      { label: "Our services", href: "/services/", variant: "primary" },
      { label: "Request a quote", href: "/contact/", variant: "outline-light" },
    ],
  },
  {
    badge: "Mining",
    image:
      "https://images.unsplash.com/photo-1578319439584-104c94d37305?w=1600&q=70",
    title: "Exploration and extraction,",
    titleEm: "done safely",
    titleEnd: ".",
    body: "Drilling, mine development and contract extraction with statutory compliance and environmental controls built in.",
    actions: [
      { label: "Mining capability", href: "/mining/", variant: "primary" },
      { label: "See projects", href: "/projects/", variant: "outline-light" },
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
    "Babitha Constructions works across three connected lines — construction, mining and transportation. Owning our own plant and fleet means fewer subcontractors between you and the work, and schedules we can actually hold to.",
    "From residential builds to contract extraction and bulk haulage, the same engineering team and the same quality checks apply.",
  ],
  checklist: [
    "Commercial & residential construction",
    "Mining operations, exploration and drilling",
    "Fleet-backed bulk transportation",
    "Bulk logistics and site-to-site haulage",
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
      body: "Statutory permits, fitness and pollution records are maintained per vehicle and per site, and produced on request.",
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
    num: "Service 01",
    title: "Construction",
    body: "Residential and commercial builds, industrial sheds, infrastructure works and turnkey packages with fixed rates per square foot.",
    checklist: [
      "Design, drawings and approvals",
      "Structure to finishing",
      "10-year structural warranty",
    ],
    link: { label: "Compare packages", href: "/compare-packages/" },
  },
  {
    num: "Service 02",
    title: "Transportation",
    body: "Bulk haulage and site-to-site logistics, run on a fleet we own and maintain ourselves.",
    checklist: [
      "Tippers, hyvas, trailers, pick-ups",
      "Live tracking and weighbridge documentation",
      "Permit and compliance records per vehicle",
    ],
    link: { label: "Talk to us", href: "/contact/" },
  },
  {
    num: "Service 03",
    title: "Mining",
    body: "Contract extraction, exploration and drilling, and mine development and construction, with environmental and statutory controls.",
    checklist: [
      "Exploration and core drilling",
      "Overburden removal",
      "Mine infrastructure",
    ],
    link: { label: "Discuss a site", href: "/contact/" },
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
      "Fleet management has never been easier. Real-time tracking and maintenance alerts have been invaluable to us.",
    initials: "JM",
    name: "Jagabandh Mahanta",
    role: "Fleet Manager",
  },
  {
    quote:
      "Their mining solutions lifted our operational efficiency and safety record. Reliable technology, responsive support.",
    initials: "NM",
    name: "S. Narayan Murty",
    role: "Mining Operations Director",
  },
];
