export const NAV = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    menuTitle: "Our services",
    children: [
      {
        label: "Construction",
        href: "/construction/",
        desc: "Turnkey house construction",
        icon: "helmet",
      },
      {
        label: "Architecture",
        href: "/architecture/",
        desc: "Plans, elevations & design",
        icon: "compass",
      },
    ],
  },
  { label: "Compare Packages", href: "/packages/" },
  { label: "Cost Plus", href: "/cost-plus/" },
  { label: "Projects", href: "/projects/" },
  { label: "Contact", href: "/contact/" },
];
