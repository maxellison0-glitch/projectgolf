// Product catalog. Sourced from AliExpress listings verified 2026-08-28 —
// see docs/SUPPLIERS.md for links, COGS and the pricing maths.
// Prices are pence (GBP). Playbook rule: price ≥ 3× landed COGS.

export type Variant = {
  id: string;
  label: string;
  price: number; // pence
  compareAt?: number; // pence — only where defensible (sum of separates)
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
  category: string; // discipline label shown with the standard number, e.g. "Putting"
  hook: string; // outcome-led headline for the money page
  subhook: string;
  description: string;
  cogsPence: number; // landed COGS mid-estimate — internal, never rendered
  supplierUrl: string; // AliExpress listing — internal, never rendered
  variants: Variant[];
  benefits: { title: string; body: string }[];
  howItWorks: { step: string; body: string }[];
  faqs: { q: string; a: string }[];
  reviews: Review[];
  images: string[]; // /public paths
  guarantee: string;
};

const CLOTHING_FAQS = [
  {
    q: "How long does delivery take?",
    a: "Your order is dispatched within 24–48 hours and typically arrives within 2–3 weeks, fully tracked door to door. You'll get the tracking number by email as soon as it ships.",
  },
  {
    q: "What if it doesn't fit?",
    a: "You have 30 days from delivery to return or exchange for a different size — no quibbles. See our returns policy for the simple process.",
  },
  {
    q: "How should I care for the garment?",
    a: "Machine wash cold, inside out, with like colours. Hang dry or tumble on low. Do not iron the embroidery directly.",
  },
];

const CLOTHING_GUARANTEE =
  "30-day returns — if it doesn't fit or meet your expectation, send it back for a full refund.";

const SHARED_FAQS = [
  {
    q: "How long does delivery take?",
    a: "Your order is dispatched within 24–48 hours and typically arrives within 2–3 weeks, fully tracked door to door. You'll get the tracking number by email as soon as it ships — and if it's ever late, message us and we'll sort it or refund you.",
  },
  {
    q: "What if it's not for me?",
    a: "You have 30 days from delivery to return it for a full refund — no quibbles. See our returns policy for the simple process.",
  },
];

const GUARANTEE =
  "30-day money-back guarantee — if it doesn't improve your practice, send it back for a full refund.";

export const HERO_PRODUCT: Product = {
  slug: "alignment-putting-mat",
  name: "Alignment Putting Mat — 3m",
  category: "Putting",
  hook: "Drop 3 strokes this winter — without leaving the house",
  subhook:
    "The 3-metre alignment putting mat UK golfers use to groove a repeatable stroke while the course is closed.",
  description:
    "A 3m × 50cm roll-out putting mat with a printed centre alignment line, distance markers and bullseye targets. 10 minutes a day builds the stroke that holds up on Sunday.",
  cogsPence: 2046, // VERIFIED in account 2026-08-28, Choice, 5-8 days tracked
  supplierUrl: "https://www.aliexpress.com/item/1005007411753812.html",
  variants: [
    {
      id: "single",
      label: "Alignment Putting Mat",
      price: 6999,
    },
    {
      id: "bundle",
      label: "Mat + Alignment Mirror Bundle",
      price: 7999, // 3.1× on £25.67 COGS
      compareAt: 8798, // mat £69.99 + mirror £17.99 bought separately
      badge: "The complete putting studio — save £7.99",
    },
  ],
  benefits: [
    {
      title: "See your start line on every putt",
      body: "A printed centre alignment line and aiming spots show you the moment your face angle or path drifts — the faults behind most missed short putts.",
    },
    {
      title: "Distance markers and bullseye targets",
      body: "Structured targets along the full 3 metres turn aimless rolling into measured reps — from knee-knockers to the 10-footers that decide your score.",
    },
    {
      title: "Rolls out in 5 seconds, stores flat",
      body: "3m × 50cm with an anti-slip backing that sits flat on carpet or hardwood. Washable, no creases, no excuses on a rainy Tuesday.",
    },
  ],
  howItWorks: [
    { step: "Roll it out", body: "Any flat floor. The anti-slip backing keeps it planted on carpet or hardwood." },
    { step: "Follow the guides", body: "Start-line and distance markers turn aimless putting into structured reps." },
    { step: "10 minutes a day", body: "Groove a repeatable stroke before spring — build the habit while the course is closed." },
  ],
  faqs: [
    SHARED_FAQS[0],
    SHARED_FAQS[1],
    {
      q: "Will it work on carpet?",
      a: "Yes — the anti-slip backing sits flat on carpet, hardwood, tile and laminate.",
    },
    {
      q: "What size is it?",
      a: "3 metres long, 50cm wide — long enough for the 6–10 foot putts that actually decide your score. It rolls up for flat storage and is washable.",
    },
  ],
  reviews: [
    // PLACEHOLDER — replace with real reviews post-launch. Never publish
    // fabricated reviews on the live site (section stays hidden until then).
    { author: "—", rating: 5, title: "Placeholder review", body: "Replace with genuine customer reviews before launch." },
  ],
  images: ["/products/mat-hero.jpg", "/products/mat-lifestyle.jpg", "/products/mat-detail.jpg"],
  guarantee: GUARANTEE,
};

export const PRODUCTS: Product[] = [
  HERO_PRODUCT,
  {
    slug: "putting-alignment-mirror",
    name: "Putting Alignment Mirror",
    category: "Putting",
    hook: "Set up square, every single time",
    subhook:
      "The tour-standard alignment mirror that checks your eye line, shoulder line and putter face in one glance.",
    description:
      "A compact putting mirror with sight lines for eye position, shoulder alignment and face angle. Pairs with any putting mat.",
    cogsPence: 521, // VERIFIED 2026-08-28
    supplierUrl: "https://www.aliexpress.com/item/1005008248111540.html",
    variants: [{ id: "single", label: "Alignment Mirror", price: 1799, compareAt: 2299 }], // 22% off, 3.45×
    benefits: [
      { title: "Eyes over the ball", body: "The mirror shows instantly whether your eye line is where it should be — the setup fault most golfers never see." },
      { title: "Square face, square shoulders", body: "Sight lines check face angle and shoulder alignment together, so your practice strokes rehearse the right positions." },
      { title: "Fits in your golf bag", body: "Compact and flat — use it at home on the mat or on the practice green." },
    ],
    howItWorks: [
      { step: "Place it down", body: "On your mat or the practice green, aimed at your target." },
      { step: "Check the lines", body: "Eyes, shoulders and putter face against the printed guides." },
      { step: "Groove the setup", body: "Repeat until square feels normal — then putts start falling." },
    ],
    faqs: [...SHARED_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder review", body: "Replace with genuine customer reviews before launch." }],
    images: ["/products/mirror-hero.jpg", "/products/mirror-lifestyle.jpg"],
    guarantee: GUARANTEE,
  },
  {
    slug: "grip-trainer",
    name: "Grip Trainer Attachment",
    category: "Grip",
    hook: "Fix your grip before your next round",
    subhook:
      "The clip-on trainer that moulds your hands into the correct position on every practice swing.",
    description:
      "A moulded attachment that clips onto any club grip and guides correct hand and finger placement.",
    cogsPence: 126, // VERIFIED 2026-08-28
    supplierUrl: "https://www.aliexpress.com/item/1005007805470830.html",
    variants: [{ id: "single", label: "Grip Trainer", price: 999, compareAt: 1299 }], // 23% off, ~7.9×
    benefits: [
      { title: "Correct grip, by feel", body: "The moulded channels place your fingers exactly where they should be — no more guessing from YouTube stills." },
      { title: "Clips onto any club", body: "Snaps on and off in seconds; practise with your own putter, iron or driver." },
      { title: "Use it anywhere", body: "Living room practice swings count — grip is the one fix that needs no space at all." },
    ],
    howItWorks: [
      { step: "Clip it on", body: "Snaps over any standard club grip." },
      { step: "Take your grip", body: "The moulded guides position your hands and fingers correctly." },
      { step: "Rep it in", body: "A few minutes a day makes the correct grip your default." },
    ],
    faqs: [...SHARED_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder review", body: "Replace with genuine customer reviews before launch." }],
    images: ["/products/grip-hero.jpg", "/products/grip-lifestyle.jpg"],
    guarantee: GUARANTEE,
  },
  {
    slug: "impact-bag",
    name: "Impact Smash Bag",
    category: "Ball striking",
    hook: "Feel a tour-quality strike position",
    subhook: "The classic impact trainer that teaches forward shaft lean and a square face at the moment that matters.",
    description:
      "A durable target-print impact bag. Fill it with towels, set it up, and train the impact position that compresses the ball.",
    cogsPence: 612, // VERIFIED 2026-08-28
    supplierUrl: "https://www.aliexpress.com/item/1005006727584959.html",
    variants: [{ id: "single", label: "Impact Bag", price: 1899, compareAt: 2199 }], // 14% off — 20% would break the 3× floor (COGS £6.12)
    benefits: [
      { title: "Train impact, not just the swing", body: "Impact is the only moment the ball cares about — the bag gives you a physical position to rehearse." },
      { title: "Instant feedback", body: "Hit it with a cupped wrist or an open face and you'll feel it immediately." },
      { title: "Ships flat, fills anywhere", body: "Arrives empty — stuff it with towels or old clothes and it's ready in two minutes." },
    ],
    howItWorks: [
      { step: "Fill it", body: "Towels or old clothes — firm but with give." },
      { step: "Set up to it", body: "Ball position, target side, like a normal shot." },
      { step: "Swing into it", body: "Rehearse forward shaft lean and a square face at impact." },
    ],
    faqs: [...SHARED_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder review", body: "Replace with genuine customer reviews before launch." }],
    images: ["/products/impact-hero.jpg", "/products/impact-lifestyle.jpg"],
    guarantee: GUARANTEE,
  },
  // ── Clothing ──
  {
    slug: "quarter-zip-navy",
    name: "Quarter Zip — Navy",
    category: "Outerwear",
    hook: "The signature layer",
    subhook: "Navy performance quarter zip with white zipper trim and gold HOP crest embroidered on the left chest.",
    description: "Brushed polyester fleece quarter zip in house navy. YKK zip with white trim, raglan sleeves for swing freedom, and the HOP crest in antique gold thread.",
    cogsPence: 1500,
    supplierUrl: "TBD",
    variants: [
      { id: "s", label: "Small", price: 5500 },
      { id: "m", label: "Medium", price: 5500 },
      { id: "l", label: "Large", price: 5500 },
      { id: "xl", label: "X-Large", price: 5500 },
    ],
    benefits: [
      { title: "Course-cut fit", body: "Room in the shoulders for a full swing, tailored everywhere else. Designed to move with you, not against you." },
      { title: "Brushed fleece warmth", body: "Soft-brushed polyester fleece that keeps you warm on early tee times without the bulk of a full jacket." },
      { title: "Embroidered, never printed", body: "The HOP crest is stitched in antique gold thread — no cracking, no peeling, built to last." },
    ],
    howItWorks: [
      { step: "Brushed polyester fleece", body: "Warm, breathable, and machine washable." },
      { step: "YKK quarter zip", body: "White trim detail with a stand collar that sits clean." },
      { step: "Raglan sleeve", body: "No shoulder seam — full range of motion through the swing." },
    ],
    faqs: [...CLOTHING_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder", body: "Replace with genuine reviews." }],
    images: ["/products/clothing/quarter-zip-navy.png"],
    guarantee: CLOTHING_GUARANTEE,
  },
  {
    slug: "quarter-zip-white",
    name: "Quarter Zip — White",
    category: "Outerwear",
    hook: "The clean colourway",
    subhook: "White performance quarter zip with navy zipper trim and navy HOP crest embroidered on the left chest.",
    description: "Brushed polyester fleece quarter zip in clean white. YKK zip with navy trim, raglan sleeves, and the HOP crest in navy thread.",
    cogsPence: 1500,
    supplierUrl: "TBD",
    variants: [
      { id: "s", label: "Small", price: 5500 },
      { id: "m", label: "Medium", price: 5500 },
      { id: "l", label: "Large", price: 5500 },
      { id: "xl", label: "X-Large", price: 5500 },
    ],
    benefits: [
      { title: "Course-cut fit", body: "Room in the shoulders for a full swing, tailored everywhere else. Designed to move with you, not against you." },
      { title: "Brushed fleece warmth", body: "Soft-brushed polyester fleece that keeps you warm on early tee times without the bulk of a full jacket." },
      { title: "Embroidered, never printed", body: "The HOP crest is stitched in navy thread — no cracking, no peeling, built to last." },
    ],
    howItWorks: [
      { step: "Brushed polyester fleece", body: "Warm, breathable, and machine washable." },
      { step: "YKK quarter zip", body: "Navy trim detail with a stand collar that sits clean." },
      { step: "Raglan sleeve", body: "No shoulder seam — full range of motion through the swing." },
    ],
    faqs: [...CLOTHING_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder", body: "Replace with genuine reviews." }],
    images: ["/products/clothing/quarter-zip-white.png"],
    guarantee: CLOTHING_GUARANTEE,
  },
  {
    slug: "tour-hoodie",
    name: "Tour Hoodie",
    category: "Outerwear",
    hook: "Off-course, on point",
    subhook: "Heavyweight 400gsm cotton hoodie with the full House of Par crest embroidered on the back yoke.",
    description: "400gsm brushed cotton hoodie with a relaxed fit. The full HOP crest is embroidered on the back yoke. Ribbed cuffs and hem.",
    cogsPence: 1600,
    supplierUrl: "TBD",
    variants: [
      { id: "s", label: "Small", price: 6000 },
      { id: "m", label: "Medium", price: 6000 },
      { id: "l", label: "Large", price: 6000 },
      { id: "xl", label: "X-Large", price: 6000 },
    ],
    benefits: [
      { title: "Heavyweight 400gsm cotton", body: "Thick, substantial cotton that holds its shape wash after wash. This is not a fast-fashion hoodie." },
      { title: "Full crest embroidery", body: "The complete House of Par crest on the back yoke, stitched — not printed — for a detail you can feel." },
      { title: "Relaxed fit", body: "Room to layer over a polo or tee. For the range, the 19th, and everything in between." },
    ],
    howItWorks: [
      { step: "400gsm brushed cotton", body: "Heavyweight, pre-shrunk, and machine washable." },
      { step: "Embroidered back crest", body: "The full House of Par crest in gold thread." },
      { step: "Ribbed cuffs and hem", body: "Hold their shape and keep the cold out." },
    ],
    faqs: [...CLOTHING_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder", body: "Replace with genuine reviews." }],
    images: ["/products/clothing/hoodie-hero.png"],
    guarantee: CLOTHING_GUARANTEE,
  },
  {
    slug: "performance-polo",
    name: "Performance Polo",
    category: "Tops",
    hook: "First tee to lunch",
    subhook: "Moisture-wicking stretch polo in house navy with a gold HOP monogram on the left chest.",
    description: "Quick-dry stretch polo with a three-button placket and slim athletic fit. Gold HOP monogram embroidered on the left chest.",
    cogsPence: 1000,
    supplierUrl: "TBD",
    variants: [
      { id: "s", label: "Small", price: 4000 },
      { id: "m", label: "Medium", price: 4000 },
      { id: "l", label: "Large", price: 4000 },
      { id: "xl", label: "X-Large", price: 4000 },
    ],
    benefits: [
      { title: "Quick-dry stretch fabric", body: "Wicks moisture away from the skin so you stay dry through 18 holes in summer heat." },
      { title: "Slim athletic fit", body: "Looks as good at lunch as it does on the first tee. Cut close but not tight — room for a full shoulder turn." },
      { title: "Gold HOP monogram", body: "Embroidered on the left chest in gold thread. Subtle, lasting, unmistakable." },
    ],
    howItWorks: [
      { step: "Quick-dry fabric", body: "Moisture-wicking stretch that moves with you." },
      { step: "Three-button placket", body: "Clean, classic collar that sits right." },
      { step: "Slim athletic fit", body: "Tailored enough for the clubhouse, free enough for the course." },
    ],
    faqs: [...CLOTHING_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder", body: "Replace with genuine reviews." }],
    images: ["/products/clothing/polo-hero.png"],
    guarantee: CLOTHING_GUARANTEE,
  },
  {
    slug: "long-sleeve-athletic-tee",
    name: "Long Sleeve Athletic Tee",
    category: "Tops",
    hook: "UV protection, all-season",
    subhook: "Lightweight long sleeve with UPF 30+ protection and a subtle HOP wordmark on the sleeve.",
    description: "Slim-fit long sleeve with UPF 30+ fabric, flatlock seams, and thumbhole cuffs. HOP wordmark on the left sleeve.",
    cogsPence: 900,
    supplierUrl: "TBD",
    variants: [
      { id: "s", label: "Small", price: 3500 },
      { id: "m", label: "Medium", price: 3500 },
      { id: "l", label: "Large", price: 3500 },
      { id: "xl", label: "X-Large", price: 3500 },
    ],
    benefits: [
      { title: "UPF 30+ protection", body: "Blocks harmful UV rays on summer rounds and winter range sessions without needing to reapply sunscreen." },
      { title: "Flatlock seams", body: "No chafing, no irritation — even under a jacket or quarter zip." },
      { title: "Thumbhole cuffs", body: "Keep the sleeves in place through your swing and add warmth around the wrists." },
    ],
    howItWorks: [
      { step: "UPF 30+ fabric", body: "Lightweight, breathable UV protection." },
      { step: "Flatlock seams", body: "Smooth, chafe-free layering." },
      { step: "Sleeve wordmark", body: "Subtle HOP branding on the left sleeve." },
    ],
    faqs: [...CLOTHING_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder", body: "Replace with genuine reviews." }],
    images: ["/products/clothing/longsleeve-hero.png"],
    guarantee: CLOTHING_GUARANTEE,
  },
  {
    slug: "structured-cap",
    name: "Structured Cap",
    category: "Headwear",
    hook: "Gold thread, every angle",
    subhook: "Six-panel structured cap with a pre-curved peak and gold HOP monogram front and centre.",
    description: "Six-panel structured crown cap with pre-curved peak. Gold thread HOP embroidery front and centre, metal clasp adjuster at the back.",
    cogsPence: 600,
    supplierUrl: "TBD",
    variants: [
      { id: "one-size", label: "One Size", price: 2500 },
    ],
    benefits: [
      { title: "Structured crown", body: "Six-panel construction that holds its shape — no floppy, formless caps here." },
      { title: "Gold thread embroidery", body: "The HOP monogram stitched in gold thread, front and centre. Clean, classic, unmissable." },
      { title: "Metal clasp adjuster", body: "Fits any head. The metal clasp at the back sits flush and looks as good as the front." },
    ],
    howItWorks: [
      { step: "Six-panel structured crown", body: "Holds its shape all day." },
      { step: "Pre-curved peak", body: "Ready to wear out of the box — no bending needed." },
      { step: "Metal clasp adjuster", body: "One size fits all with a clean finish." },
    ],
    faqs: [...CLOTHING_FAQS],
    reviews: [{ author: "—", rating: 5, title: "Placeholder", body: "Replace with genuine reviews." }],
    images: ["/products/clothing/cap-hero.png"],
    guarantee: CLOTHING_GUARANTEE,
  },
];

export const CLOTHING_SLUGS = [
  "quarter-zip-navy",
  "quarter-zip-white",
  "tour-hoodie",
  "performance-polo",
  "long-sleeve-athletic-tee",
  "structured-cap",
] as const;

export function getClothingProducts(): Product[] {
  return PRODUCTS.filter((p) =>
    (CLOTHING_SLUGS as readonly string[]).includes(p.slug)
  );
}

// Catalogue numbering: position in PRODUCTS is the product's standard number.
// New products append to the list and take the next number.
export function standardNo(product: Product): string {
  const i = PRODUCTS.findIndex((p) => p.slug === product.slug);
  return `Nº ${String(i + 1).padStart(3, "0")}`;
}

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function getVariant(product: Product, variantId: string): Variant | undefined {
  return product.variants.find((v) => v.id === variantId);
}
