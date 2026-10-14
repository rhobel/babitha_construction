import { COMPANY } from "./company";

// The two project carousels on the home page: builds currently on site,
// and builds already handed over.
//
// Placeholder records — reference numbers, locations and photography must all
// be replaced with real jobs before launch (requirements.md §9).
export const IN_PROGRESS = {
  eyebrow: "Our projects in progress",
  heading: "In-progress house construction projects in Bangalore",
  body: `Explore homes currently under construction with ${COMPANY.name} — live design and build execution, site supervision, and steady progress updates from foundation to finish.`,
  viewAll: { label: "View all in-progress projects", href: "/projects/" },
  sliderLabel: `Slide through in-progress ${COMPANY.name} homes`,
  status: "In-progress",
};

export const IN_PROGRESS_PROJECTS = [
  {
    ref: "BCPL20260203",
    title: "Residential House Construction Bangalore",
    image: "/projects/kereguddadahalli-house.jpg",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Royale" },
      { label: "Location", value: "Kereguddadahalli, Bangalore" },
    ],
  },
  {
    ref: "BCPL20260202",
    title: "Residential House Construction Bangalore",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=70",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Classic" },
      { label: "Location", value: "Banashankari, Bangalore" },
    ],
  },
  {
    ref: "BCPL20260201",
    title: "Residential House Construction Bangalore",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=900&q=70",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Premium" },
      { label: "Location", value: "Kodigehalli, Bangalore" },
    ],
  },
  {
    ref: "BCPL20260104",
    title: "Residential House Construction Bangalore",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=70",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Basic" },
      { label: "Location", value: "Chikkabanavara, Bangalore" },
    ],
  },
];

export const COMPLETED = {
  eyebrow: "Completed projects",
  heading: "Completed house construction projects in Bangalore",
  body: `A curated look at homes ${COMPANY.name} has already delivered, reflecting practical design, quality execution and transparent project management.`,
  viewAll: { label: "View all completed projects", href: "/projects/" },
  sliderLabel: `Slide through completed ${COMPANY.name} homes`,
  status: "Completed project",
};

export const COMPLETED_PROJECTS = [
  {
    ref: "BCPL20250103",
    title: "Residential House Construction Bangalore",
    image:
      "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=70",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Royale" },
      { label: "Location", value: "Kodigehalli, Bangalore" },
    ],
  },
  {
    ref: "BCPL20250201",
    title: "Residential House Construction Bangalore",
    image: "/projects/shettyhalli-villa.jpg",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Royale" },
      { label: "Location", value: "Shettyhalli, Bangalore" },
    ],
  },
  {
    ref: "BCPL20250101",
    title: "Residential House Construction Bangalore",
    image: "/projects/medrahalli-house.jpg",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Classic" },
      { label: "Location", value: "Medrahalli, Bangalore" },
    ],
  },
  {
    ref: "BCPL20250004",
    title: "Residential House Construction Bangalore",
    image: "/projects/medrahalli-residence.jpg",
    specs: [
      { label: "Contract", value: "Cost-plus" },
      { label: "Project type", value: "Residential" },
      { label: "Package", value: "Premium" },
      { label: "Location", value: "Medrahalli, Bangalore" },
    ],
  },
];
