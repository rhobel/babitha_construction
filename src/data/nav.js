export const NAV = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about/" },
  {
    label: "Services",
    children: [
      { label: "Construction", href: "/construction/" },
      { label: "Compare Packages", href: "/compare-packages/", tag: "New" },
    ],
  },
  { label: "Projects", href: "/projects/" },
  { label: "Contact", href: "/contact/" },
];

export const ADMIN_LOGIN = { label: "Admin Login", href: "/login/" };
