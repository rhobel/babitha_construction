export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Services",
    children: [
      { label: "Construction", href: "/construction/" },
      { label: "Transportation", href: "/transportation/" },
      { label: "Mining", href: "/mining/" },
      { label: "Compare Packages", href: "/compare-packages/", tag: "New" },
    ],
  },
  { label: "Projects", href: "/projects/" },
  {
    label: "Register Vehicle",
    children: [
      {
        label: "Apply for Vehicle Purchase",
        href: "/purchase-vehicle-registration/",
      },
      {
        label: "Sell a Defaulter Vehicle",
        href: "/default-vehicle-registration/",
      },
      { label: "Register for Vehicle Lease", href: "/vehicle-registration/" },
    ],
  },
  { label: "Contact", href: "/contact/" },
];

export const ADMIN_LOGIN = { label: "Admin Login", href: "/login/" };
