import { CALL_PHONES, COMPANY } from "./company";

// /projects/ gallery.
//
// Placeholder records — reference numbers, areas, locations and photography
// must all be replaced with real jobs before launch (requirements.md §9).
// Package names come from data/packages.js. `order` drives the sort; higher
// is more recent.
//
// Each project shows a single square photo (`image`).
export const PROJECT_GALLERY = {
  eyebrow: "Project gallery",
  headingLead: "Design. Build. Deliver.",
  heading: "House construction projects in Bangalore",
  body: "Explore completed and ongoing home construction projects in Bangalore. Compare 3D house designs with actual site progress and discover our project details.",
};

export const PROJECT_TABS = [
  { id: "all", label: "All projects" },
  { id: "in-progress", label: "In-progress projects" },
  { id: "completed", label: "Completed projects" },
];

export const PROJECT_SORTS = [
  { id: "latest", label: "Latest first" },
  { id: "oldest", label: "Oldest first" },
];

export const PROJECT_TYPES = [
  { id: "all", label: "All types" },
  { id: "residential", label: "Residential" },
  { id: "villa", label: "Villa" },
  { id: "commercial", label: "Commercial" },
];

export const GALLERY_PROJECTS = [
  {
    ref: "BCPL20250201",
    order: 6,
    status: "completed",
    package: "Royale",
    type: "residential",
    title: "Residential House Construction Bangalore",
    image: "/projects/shettyhalli-villa.jpg",
    area: "5,400 sq.ft",
    floors: "G+2",
    contract: "Cost-plus",
    location: "Shettyhalli",
    city: "Bangalore",
  },
  {
    ref: "BCPL20250101",
    order: 5,
    status: "completed",
    package: "Classic",
    type: "residential",
    title: "Residential House Construction Bangalore",
    image: "/projects/medrahalli-house.jpg",
    area: "2,700 sq.ft",
    floors: "G+2",
    contract: "Cost-plus",
    location: "Medrahalli",
    city: "Bangalore",
  },
  {
    ref: "BCPL20250004",
    order: 4,
    status: "completed",
    package: "Premium",
    type: "residential",
    title: "Residential House Construction Bangalore",
    image: "/projects/medrahalli-residence.jpg",
    area: "3,760 sq.ft",
    floors: "G+2",
    contract: "Lump-sum",
    location: "Medrahalli",
    city: "Bangalore",
  },
  {
    ref: "BCPL20260203",
    order: 3,
    status: "in-progress",
    package: "Royale",
    type: "residential",
    title: "Residential House Construction Bangalore",
    image: "/projects/kereguddadahalli-house.jpg",
    area: "4,500 sq.ft",
    floors: "G+2",
    contract: "Cost-plus",
    location: "Kereguddadahalli",
    city: "Bangalore",
  },
  {
    ref: "BCPL20260202",
    order: 2,
    status: "in-progress",
    package: "Classic",
    type: "residential",
    title: "Residential House Construction Bangalore",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=70",
    area: "2,400 sq.ft",
    floors: "G+1",
    contract: "Cost-plus",
    location: "Banashankari",
    city: "Bangalore",
  },
  {
    ref: "BCPL20260104",
    order: 1,
    status: "in-progress",
    package: "Basic",
    type: "commercial",
    title: "Commercial Building Construction Bangalore",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=70",
    area: "6,500 sq.ft",
    floors: "G+3",
    contract: "Lump-sum",
    location: "Chikkabanavara",
    city: "Bangalore",
  },
];

export const PROJECT_HIGHLIGHTS = {
  eyebrow: "Project highlights",
  headingLead: "House construction projects",
  heading: "with design clarity and site discipline",
  body: `Explore our house construction projects in Bangalore and see how ${COMPANY.name} delivers quality homes through transparent planning, expert execution and dedicated engineering supervision.`,
  stats: [
    { value: "150+", label: "Projects delivered" },
    { value: "16+", label: "Years experience" },
    { value: "10yr", label: "Structural warranty" },
    { value: "100%", label: "Design + Build focus" },
  ],
  points: [
    "Design renders and under-construction progress shown together",
    "Turnkey Design + Build delivery under one accountable team",
    "Stage-wise quality checks by dedicated civil engineers",
    "Transparent package details, scope and project communication",
  ],
};

export const PROJECTS_WHY = {
  eyebrow: "Why it matters",
  heading: "What we design is what we build",
  body: `${COMPANY.name} offers end-to-end design and construction services, including house planning, structural design, material management and site execution.`,
  points: [
    "3D design and site execution under one talented team",
    "Stage-wise progress updates with real site images",
    "Transparent packages and Cost-Plus contract options",
    "Dedicated engineer supervision for every project",
  ],
};

export const PROJECTS_CTA = {
  eyebrow: "Start your project",
  heading: "Ready to build a home like these projects?",
  body: `Share your plot details and vision. ${COMPANY.name} will guide you on design, packages and the right construction approach for your home in Bangalore.`,
  primary: { label: "Plan your project", href: "/contact/" },
  phones: CALL_PHONES,
};
