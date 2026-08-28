// Product catalog. PLACEHOLDER DATA — the hero product, pricing and COGS get
// locked from docs/RESEARCH.md before launch. Prices are pence (GBP).
// Playbook rule: price ≥ 3× landed COGS. Never publish a price that fails it.

export type Variant = {
  id: string;
  label: string;
  price: number; // pence
  compareAt?: number; // pence, anchor price
  badge?: string;
};

export type Review = {
  author: string;
  rating: number; // 1-5
  title: string;
  body: string;
};

export type Product = {
  slug: string;
  name: string;
  hook: string; // outcome-led headline for the money page
  subhook: string;
  description: string;
  cogsPence: number; // landed COGS estimate — internal, never rendered
  variants: Variant[];
  benefits: { title: string; body: string }[];
  howItWorks: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
  reviews: Review[];
  images: string[]; // /public paths; placeholders until creative shoot
  guarantee: string;
};

export const HERO_PRODUCT: Product = {
  slug: "putting-mat-pro",
  name: "PuttLab Home Putting Mat", // PLACEHOLDER — swap for researched winner
  hook: "Drop 3 strokes this winter — without leaving the house",
  subhook:
    "The alignment putting mat serious UK golfers use to groove a repeatable stroke while the course is closed.",
  description:
    "A tour-quality practice mat with alignment guides, distance markers and true-roll turf. 10 minutes a day builds the stroke that holds up on Sunday.",
  cogsPence: 1400, // ESTIMATE — verify against supplier before launch
  variants: [
    {
      id: "single",
      label: "Putting Mat",
      price: 4499,
      compareAt: 6999,
    },
    {
      id: "bundle",
      label: "Mat + Alignment Mirror Bundle",
      price: 5999,
      compareAt: 9498,
      badge: "Most popular — save £35",
    },
  ],
  benefits: [
    {
      title: "Instant feedback on every putt",
      body: "Alignment guides and gates show you the moment your face angle or path drifts — the two faults behind 90% of missed short putts.",
    },
    {
      title: "True-roll turf, not carpet fluff",
      body: "Tour-speed surface that rolls at a genuine 10–11 on the stimp, so practice at home actually transfers to the green.",
    },
    {
      title: "Rolls out in 5 seconds, stores flat",
      body: "Living room, office, hallway — no setup, no creases, no excuses on a rainy Tuesday.",
    },
  ],
  howItWorks: [
    { step: "Roll it out", body: "Any flat floor. Non-slip backing keeps it planted on carpet or hardwood." },
    { step: "Follow the guides", body: "Start-line gates and distance markers turn aimless putting into structured reps." },
    { step: "10 minutes a day", body: "Groove a repeatable stroke before spring — most golfers feel the difference inside 2 weeks." },
  ],
  faqs: [
    {
      q: "How long does delivery take?",
      a: "Orders are dispatched within 24–48 hours and arrive in 7–12 working days with full tracking. You'll get the tracking number by email as soon as it ships.",
    },
    {
      q: "What if it's not for me?",
      a: "You have 30 days from delivery to return it for a full refund — no quibbles. See our returns policy for the simple process.",
    },
    {
      q: "Will it work on carpet?",
      a: "Yes — the non-slip backing sits flat on carpet, hardwood, tile and laminate.",
    },
    {
      q: "What size is it?",
      a: "3 metres long, 50cm wide — long enough for the 6–10 foot putts that actually decide your score.",
    },
  ],
  reviews: [
    // PLACEHOLDER — replace with real reviews post-launch. Never publish
    // fabricated reviews on the live site.
    { author: "—", rating: 5, title: "Placeholder review", body: "Replace with genuine customer reviews before launch." },
  ],
  images: [],
  guarantee: "30-day money-back guarantee — if your putting doesn't improve, send it back for a full refund.",
};

export const PRODUCTS: Product[] = [HERO_PRODUCT];

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getVariant(product: Product, variantId: string): Variant | undefined {
  return product.variants.find((v) => v.id === variantId);
}
