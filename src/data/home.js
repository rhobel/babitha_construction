import { COMPANY } from "./company";

// `badge` renders the pill above the hero headline. Left null: the previous
// "ISO 9001:2015 Certified Company" text was an unverified certification
// claim. Restore it only once the certificate is confirmed.
export const HERO = {
  badge: null,
  image:
    "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1900&q=72",
  title: "Best House Construction Company",
  titleEm: "in Bangalore",
  subtitle: `Build Right with ${COMPANY.name}`,
  body: "Delivering quality homes with a transparent cost-plus construction contract, expert architecture and exceptional value — Bangalore's trusted home construction company.",
  actions: [
    { label: "View Packages", href: "/packages/", variant: "primary", arrow: true },
    { label: "Our Projects", href: "/projects/", variant: "ghost" },
    { label: "Call Now", href: `tel:${COMPANY.phones[0].replace(/\s/g, "")}`, variant: "ghost", phone: true },
  ],
};

// The four-up bar sitting under the hero buttons.
export const HERO_STATS = [
  { value: "16+", label: "Years experience" },
  { value: "150+", label: "Projects delivered" },
  { value: "100%", label: "Transparent pricing" },
  { value: "10yr", label: "Structural warranty" },
];

export const HERO_FORM = {
  heading: "Get a free quote in just 1 hour",
  body: "Quickly know your construction cost, and plan your house construction with confidence.",
  services: [
    "Home Construction",
    "Home Renovation",
    "Commercial Project",
    "Something else",
  ],
  submitLabel: "Get Free Consultation",
  assurances: ["Response within 24 hours", "No spam · No obligation"],
};

// "Our expertise" — the rounded three-up card row under the brand strip.
export const EXPERTISE = {
  eyebrow: "Our expertise",
  heading: "Comprehensive home construction services in Bangalore",
  body: `At ${COMPANY.legalName}, we offer a comprehensive range of home construction services tailored to meet your unique needs — from initial design to final handover.`,
  cardLabel: "Babitha service",
  cards: [
    {
      num: "01",
      icon: "building",
      title: "Home Construction",
      body: "Independent house and villa construction in Bangalore with high standards, quality material and great value for money.",
      href: "/construction/",
    },
    {
      num: "02",
      icon: "compass",
      title: "Architecture & Structural Design",
      body: "2D/3D floor plans, elevations and Vastu-compliant structural drawings by expert architects.",
      href: "/contact/",
    },
    {
      num: "03",
      icon: "clipboard",
      title: "Planning & Project Management",
      body: "End-to-end project management from initial planning and approvals to final handover.",
      href: "/contact/",
    },
  ],
};

export const SERVICES = [
  {
    num: "01 — Service",
    title: "Home Construction",
    detailHref: "/construction/",
    body: "Building a home is a journey, and we ensure it's a smooth one. From foundation to finishing, we deliver high-quality craftsmanship using durable materials and modern construction techniques. Our expert team turns your dream home into reality with precision and efficiency.",
    checklist: [
      "Design, drawings and approvals",
      "Structure through to finishing",
      "10-year structural warranty",
    ],
    link: { label: "Compare packages", href: "/packages/" },
  },
  {
    num: "02 — Service",
    title: "Home Renovation",
    body: "Transform your existing space into a modern, functional and aesthetically pleasing home. Whether it's a complete makeover or minor upgrades, we specialise in remodelling kitchens, bathrooms and interiors — enhancing comfort, style and value.",
    checklist: [
      "Kitchen, bathroom and interior remodelling",
      "Structural repairs and extensions",
      "Fixed scope, documented stage checks",
    ],
    link: { label: "Talk to us", href: "/contact/" },
  },
  {
    num: "03 — Service",
    title: "Commercial Projects",
    body: "We construct commercial spaces that blend functionality with innovation. From offices to retail stores and industrial units, our expertise ensures high-quality, durable and energy-efficient buildings tailored to business needs and regulations.",
    checklist: [
      "Offices, retail and industrial units",
      "Statutory compliance and approvals",
      "Energy-efficient specification",
    ],
    link: { label: "Talk to us", href: "/contact/" },
  },
];
