import { COMPANY } from "./company";

// /projects/ gallery.
//
// Placeholder records — reference numbers, areas, locations and photography
// must all be replaced with real jobs before launch (requirements.md §9).
// Package names come from data/packages.js. `order` drives the sort; higher
// is more recent.
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
    ref: "BC20250201",
    order: 6,
    status: "completed",
    package: "Royale",
    type: "residential",
    title: "Residential House Construction Bangalore",
    designImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=70",
    siteImage: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=70",
    area: "4,200 sq.ft",
    floors: "G+2",
    contract: "Cost-plus",
    location: "Haralur",
    city: "Bangalore",
  },
  {
    ref: "BC20250101",
    order: 5,
    status: "completed",
    package: "Premium",
    type: "residential",
    title: "Residential House Construction Bangalore",
    designImage: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=70",
    siteImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=70",
    area: "3,300 sq.ft",
    floors: "G+2",
    contract: "Cost-plus",
    location: "Kengeri",
    city: "Bangalore",
  },
  {
    ref: "BC20250004",
    order: 4,
    status: "completed",
    package: "Classic",
    type: "villa",
    title: "Villa Construction Bangalore",
    designImage: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=70",
    siteImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=70",
    area: "2,800 sq.ft",
    floors: "G+1",
    contract: "Lump-sum",
    location: "Yelahanka",
    city: "Bangalore",
  },
  {
    ref: "BC20260203",
    order: 3,
    status: "in-progress",
    package: "Royale",
    type: "residential",
    title: "Residential House Construction Bangalore",
    designImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=70",
    siteImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=70",
    area: "3,900 sq.ft",
    floors: "G+2",
    contract: "Cost-plus",
    location: "Hosa Road",
    city: "Bangalore",
  },
  {
    ref: "BC20260202",
    order: 2,
    status: "in-progress",
    package: "Classic",
    type: "residential",
    title: "Residential House Construction Bangalore",
    designImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=70",
    siteImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=70",
    area: "2,400 sq.ft",
    floors: "G+1",
    contract: "Cost-plus",
    location: "Banashankari",
    city: "Bangalore",
  },
  {
    ref: "BC20260104",
    order: 1,
    status: "in-progress",
    package: "Basic",
    type: "commercial",
    title: "Commercial Building Construction Bangalore",
    designImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=70",
    siteImage: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=70",
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
  phone: COMPANY.phones[0],
};
