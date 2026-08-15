export const COMPANY = {
  name: "Babita Construction",
  tagline: "Odisha · Since 2000",
  phones: ["+91 90403 39519", "+91 93488 79126"],
  topbarEmail: "info@babitaconstruction.com",
  footerEmail: "babitaconstruction@gmail.com",
  address:
    "Naba Laxmi Niwas (ନବ ଲକ୍ଷ୍ମୀ ନିବାସ), 6V45+34V, Saradeipur Rd, Samantarapurpatna, Uttara, Odisha 751002",
  hours: [
    { day: "Monday – Friday", time: "09:00 – 19:00" },
    { day: "Saturday", time: "09:00 – 12:00" },
    { day: "Sunday", time: "Closed" },
  ],
  yearsInOperation: 25, // Follows design.html's resolved figure — pending final client confirmation (B-3)
};

// Awaiting real profile URLs from the client (requirements.md §9) — href stays
// null until then so we don't ship dead "#" links.
export const SOCIAL_LINKS = [
  { label: "Facebook", href: null },
  { label: "Instagram", href: null },
  { label: "LinkedIn", href: null },
  { label: "YouTube", href: null },
];
