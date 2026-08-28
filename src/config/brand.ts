// Single source of truth for brand identity. Working name only — swap once
// Max picks the real name/domain (see docs/RESEARCH.md for proposals).
export const BRAND = {
  name: "House of Par",
  legalName: "House of Par",
  domain: "houseofpar.co.uk",
  tagline: "Home practice, held to a standard",
  email: "orders@houseofpar.co.uk",
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
  // Heritage golf palette: cream ground, green-black ink, racing green, saddle tan.
  // Source of truth for rendered colors is src/app/globals.css @theme tokens.
  ivory: "#f4efe3",
  ink: "#17211b",
  royal: "#0b3b2a", // British racing green (utility name kept from the blue era)
  royalDeep: "#072a1d",
  gold: "#b08a57",
} as const;
