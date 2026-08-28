import { COMPANY } from "./company";

// Lead section on /construction/ — the four build types we take on.
//
// No per-type landing pages exist yet, so "Explore service" points at the
// package comparison where a tier applies, and the contact form otherwise.
export const CONSTRUCTION_SERVICES_SECTION = {
  eyebrow: "What we build",
  heading: "Construction services we offer",
  body: `Whether you are an individual homeowner, land owner, developer or business owner, ${COMPANY.name} can plan and execute the right construction model for your project.`,
};

export const CONSTRUCTION_SERVICES = [
  {
    id: "residential",
    icon: "home",
    eyebrow: "Residential",
    title: "Home Construction",
    body: "Independent houses, duplex homes and rental homes built with transparent planning, quality materials and dedicated site supervision.",
    points: ["Independent houses", "Duplex homes", "Rental homes", "Custom floor plans"],
    href: "/packages/",
  },
  {
    id: "commercial",
    icon: "building",
    eyebrow: "Commercial",
    title: "Offices, Schools & Colleges",
    body: "Commercial construction for offices, schools and colleges, small business spaces and mixed-use buildings with practical planning and durable specifications.",
    points: ["Office buildings", "Retail spaces", "Mixed-use layouts", "Utility planning"],
    href: "/contact/",
  },
  {
    id: "villas",
    icon: "villa",
    eyebrow: "Villas",
    title: "Row Villa Projects",
    body: "Premium villa and row-villa construction with coordinated architecture, structural design, facade detailing and project execution.",
    points: ["Row villa clusters", "Modern villas", "Premium elevations", "Common service planning"],
    href: "/contact/",
  },
  {
    id: "apartments",
    icon: "layers",
    eyebrow: "Apartments",
    title: "Apartment Projects",
    body: "Apartment and multi-unit residential construction with stage-wise execution, quality checks, engineering control and timeline discipline.",
    points: ["Apartment blocks", "Multi-unit homes", "G+ floors", "Common area coordination"],
    href: "/contact/",
  },
];
