// Single source of truth for brand identity. Working name only — swap once
// Max picks the real name/domain (see docs/RESEARCH.md for proposals).
export const BRAND = {
  name: "House of Par",
  legalName: "House of Par (working name)",
  domain: "houseofpar.co.uk",
  tagline: "Home practice, held to a standard",
  email: "support@houseofpar.co.uk",
  // UK distance selling requires a business identity + contact address on site.
  // TODO(Max): real trading address before launch.
  address: "Trading address TBC, United Kingdom",
  instagram: "",
  tiktok: "",
  currency: "GBP" as const,
  freeShippingCopy: "Free UK tracked shipping on every order",
  deliveryEstimate: "2–3 weeks", // Max's real-world observed timing (2026-08-28); listing said 5-8 days — trust experience
} as const;

export const COLORS = {
  // Heritage golf palette: ivory ground, navy ink, royal blue, antique gold.
  ivory: "#f4f1e8",
  ink: "#131c33",
  royal: "#013292", // sampled from public/brand/house-of-par-mark.png
  royalDeep: "#02226a",
  gold: "#a6874e",
} as const;
