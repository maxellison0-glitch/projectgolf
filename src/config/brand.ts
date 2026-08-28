// Single source of truth for brand identity. Working name only — swap once
// Max picks the real name/domain (see docs/RESEARCH.md for proposals).
export const BRAND = {
  name: "ParLab",
  legalName: "ParLab (working name)",
  domain: "parlab.co.uk",
  tagline: "Lower your handicap from your living room",
  email: "support@parlab.co.uk",
  // UK distance selling requires a business identity + contact address on site.
  // TODO(Max): real trading address before launch.
  address: "Trading address TBC, United Kingdom",
  instagram: "",
  tiktok: "",
  currency: "GBP" as const,
  freeShippingCopy: "Free UK tracked shipping on every order",
  deliveryEstimate: "7–12 working days", // honest AliExpress-phase estimate; update per supplier
} as const;

export const COLORS = {
  // Premium golf palette: deep fairway green, cream, brass accent.
  green: "#14432e",
  greenDark: "#0d2e1f",
  cream: "#f7f4ec",
  brass: "#b98b2f",
} as const;
