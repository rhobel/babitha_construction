// Lead section on /architecture/ — the four design deliverables.
export const ARCHITECTURE_SECTION = {
  eyebrow: "What we design",
  heading: "Complete architectural design services",
  body: "From the first floor plan to detailed structural drawings, we handle every stage of architectural design so your home is well-planned before a single brick is laid.",
};

export const ARCHITECTURE_SERVICES = [
  {
    id: "floor-plans",
    icon: "draft",
    // First card carries the filled accent tile in the design.
    featured: true,
    title: "2D Floor Plans",
    body: "Functional, Vastu-compliant floor plans optimised for space, light, ventilation and family needs.",
  },
  {
    id: "elevations",
    icon: "cube",
    featured: false,
    title: "3D Elevations",
    body: "Photorealistic 3D exterior elevations so you can visualise your home before construction begins.",
  },
  {
    id: "structural",
    icon: "layers",
    featured: false,
    title: "Structural Design",
    body: "Safe, efficient structural drawings and detailing by experienced structural engineers.",
  },
  {
    id: "working-drawings",
    icon: "ruler",
    featured: false,
    title: "Working Drawings",
    body: "Detailed working and execution drawings that translate design into accurate on-site construction.",
  },
];

export const DESIGN_PROCESS = {
  eyebrow: "Design process",
  heading: "From concept to construction-ready",
  steps: [
    {
      num: "01",
      icon: "compass",
      featured: false,
      title: "Requirement & Site Study",
      body: "We understand your plot dimensions, direction, family needs, budget and Vastu preferences.",
    },
    {
      num: "02",
      icon: "draft",
      // Highlighted card in the design.
      featured: true,
      title: "Floor Plan & Concept",
      body: "We prepare functional 2D floor plan options and finalise the layout with your inputs.",
    },
    {
      num: "03",
      icon: "cube",
      featured: false,
      title: "3D Elevation Design",
      body: "We design the exterior elevation in 3D and refine materials, colours and detailing.",
    },
    {
      num: "04",
      icon: "doc",
      featured: false,
      title: "Structural & Working Drawings",
      body: "We deliver structural drawings and detailed working drawings ready for construction.",
    },
  ],
};

// ⚠ The reference said "10+ years"; this uses the 16+ figure the rest of the
// site publishes. Confirm which is right for the architecture team.
export const WHY_ARCHITECTURE = {
  eyebrow: "Why us",
  heading: "Designs that are practical, affordable and construction-ready",
  body: "Good architecture balances aesthetics, function, Vastu and budget. With 16+ years of experience, we deliver designs that look great and build smoothly on site.",
  action: { label: "View architecture portfolio", href: "/projects/" },
  points: [
    "16+ years of architecture and design experience",
    "Affordable, personalised architectural design",
    "Vastu-compliant planning on request",
    "Experienced architects and structural engineers",
    "Design that is practical and construction-ready",
    "Seamless handover to construction execution",
  ],
};

export const ARCHITECTURE_DELIVERABLES = {
  eyebrow: "Deliverables",
  heading: "What you receive",
  items: [
    { icon: "draft", label: "2D floor plans with multiple options" },
    { icon: "cube", label: "2D & 3D elevation designs" },
    { icon: "compass", label: "Vastu-compliant layout planning" },
    { icon: "layers", label: "Structural design & drawings" },
    { icon: "doc", label: "Working & execution drawings" },
    { icon: "plug", label: "Electrical & plumbing layouts" },
  ],
};

export const ARCHITECTURE_CTA = {
  eyebrow: "Start designing",
  heading: "Share your architecture requirement",
  body: "Tell us your plot details, direction and design preferences. Our architects will help you plan a home that is functional, beautiful and ready to build.",
};

// Feeds the shared QuoteForm — same three fields and endpoint as the hero and
// home CTA forms, with architecture-specific project types.
export const ARCHITECTURE_FORM = {
  heading: "Get an architecture consultation",
  body: "Share your site details and preferred style.",
  services: [
    "2D floor plan",
    "3D elevation design",
    "Structural design",
    "Full architecture package",
  ],
  submitLabel: "Get Free Consultation",
  assurances: ["Response within 24 hours", "No spam · No obligation"],
};
