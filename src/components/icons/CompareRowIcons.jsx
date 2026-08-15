// Small line icons for compare-table row labels, keyed by inclusion row
// key (see src/data/packages.js). Add an entry here whenever a new row
// should show an icon — rows without an entry just render without one.
const ICON_PROPS = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

const ICONS = {
  steel: (
    <svg {...ICON_PROPS}>
      <line x1="12" y1="2" x2="12" y2="22" />
      <path d="M8 5 12 8" />
      <path d="M8 10 12 13" />
      <path d="M8 15 12 18" />
    </svg>
  ),
  cement: (
    <svg {...ICON_PROPS}>
      <path d="M7 8 6 21a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1L17 8" />
      <path d="M7 8 9 4h6l2 4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  aggregates: (
    <svg {...ICON_PROPS}>
      <circle cx="8" cy="14" r="3.2" />
      <circle cx="15" cy="15" r="2.6" />
      <circle cx="12" cy="8" r="2.4" />
    </svg>
  ),
  blockwork: (
    <svg {...ICON_PROPS}>
      <rect x="1" y="4" width="7" height="6" />
      <rect x="8" y="4" width="7" height="6" />
      <rect x="15" y="4" width="8" height="6" />
      <rect x="1" y="14" width="4" height="6" />
      <rect x="5" y="14" width="7" height="6" />
      <rect x="12" y="14" width="7" height="6" />
      <rect x="19" y="14" width="4" height="6" />
    </svg>
  ),
  rccmix: (
    <svg {...ICON_PROPS}>
      <ellipse cx="12" cy="9" rx="7" ry="4" />
      <path d="M5 9 8 20h8l3-11" />
      <line x1="9" y1="13" x2="15" y2="13" />
    </svg>
  ),
  ceilingheight: (
    <svg {...ICON_PROPS}>
      <line x1="6" y1="3" x2="18" y2="3" />
      <line x1="6" y1="21" x2="18" y2="21" />
      <line x1="12" y1="3" x2="12" y2="21" />
      <path d="M9 6 12 3 15 6" />
      <path d="M9 18 12 21 15 18" />
    </svg>
  ),
  ceramicwalldado: (
    <svg {...ICON_PROPS}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <rect x="3" y="9" width="18" height="9" />
      <line x1="9" y1="9" x2="9" y2="18" />
      <line x1="15" y1="9" x2="15" y2="18" />
    </svg>
  ),
  sink: (
    <svg {...ICON_PROPS}>
      <path d="M9 6h6" />
      <path d="M12 6v5" />
      <path d="M4 11h16" />
      <path d="M5 11v3a5 5 0 0 0 5 5h4a5 5 0 0 0 5-5v-3" />
    </svg>
  ),
  sinkfaucet: (
    <svg {...ICON_PROPS}>
      <path d="M6 21v-7" />
      <path d="M6 14a6 6 0 0 1 6-6h4" />
      <circle cx="16.2" cy="8" r="1.3" />
    </svg>
  ),
  sinkaccessories: (
    <svg {...ICON_PROPS}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 3v3M12 18v3M4.2 4.9l2.1 2.1M17.7 17l2.1 2.1M3 12h3M18 12h3M4.2 19.1l2.1-2.1M17.7 7l2.1-2.1" />
    </svg>
  ),
};

export default function RowIcon({ rowKey }) {
  const icon = ICONS[rowKey];
  if (!icon) return null;
  return (
    <span className="cp-row-icon" aria-hidden="true">
      {icon}
    </span>
  );
}
