import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Clothing & Apparel",
  description:
    "House of Par clothing — golf-ready apparel designed for the course and comfortable enough for everything after it. Quarter zips, polos, hoodies and accessories.",
  alternates: { canonical: "/clothing" },
};

type ClothingItem = {
  name: string;
  category: string;
  description: string;
  priceGuide: string;
  details: string[];
  image: string;
};

const CLOTHING: ClothingItem[] = [
  {
    name: "Performance Quarter Zip",
    category: "Outerwear",
    description:
      "Brushed athletic fleece with a quarter zip and embroidered HOP crest on the left chest. Cut for the course — room in the shoulders for a full swing.",
    priceGuide: "£55–65",
    details: ["Brushed polyester fleece", "YKK quarter zip", "Embroidered gold HOP crest", "Raglan sleeve for swing freedom"],
    image: "/products/clothing/quarter-zip-hero.png",
  },
  {
    name: "Tour Hoodie",
    category: "Outerwear",
    description:
      "Heavyweight 400gsm cotton hoodie with a kangaroo pocket and the full House of Par crest embroidered on the back yoke. For the range, the 19th, and everything in between.",
    priceGuide: "£60–70",
    details: ["400gsm brushed cotton", "Embroidered back crest", "Ribbed cuffs and hem", "Relaxed fit"],
    image: "/products/clothing/hoodie-hero.png",
  },
  {
    name: "Performance Polo",
    category: "Tops",
    description:
      "Moisture-wicking stretch polo in house navy with a gold HOP monogram on the left chest. Designed to look as good at lunch as it does on the first tee.",
    priceGuide: "£40–50",
    details: ["Quick-dry stretch fabric", "Three-button placket", "Embroidered HOP monogram", "Slim athletic fit"],
    image: "/products/clothing/polo-hero.png",
  },
  {
    name: "Structured Cap",
    category: "Headwear",
    description:
      "Six-panel structured cap with a pre-curved peak and gold HOP monogram front and centre. Adjustable strap with a metal clasp.",
    priceGuide: "£25–30",
    details: ["Six-panel structured crown", "Pre-curved peak", "Gold thread HOP embroidery", "Metal clasp adjuster"],
    image: "/products/clothing/cap-hero.png",
  },
  {
    name: "Long Sleeve Athletic Tee",
    category: "Tops",
    description:
      "Lightweight long sleeve with a slim fit and subtle HOP wordmark on the sleeve. UV-protective fabric for summer rounds and winter range sessions.",
    priceGuide: "£35–40",
    details: ["UPF 30+ fabric", "Flatlock seams", "Sleeve HOP wordmark", "Thumbhole cuffs"],
    image: "/products/clothing/longsleeve-hero.png",
  },
  {
    name: "Polo Skirt",
    category: "Women's",
    description:
      "Performance skirt with built-in shorts and a side pocket. Subtle gold HOP tab on the hem. Pairs with the performance polo.",
    priceGuide: "£40–48",
    details: ["Built-in compression shorts", "Side zip pocket", "Gold HOP hem tab", "Mid-thigh length"],
    image: "/products/clothing/skirt-hero.png",
  },
];

const ACCESSORIES: ClothingItem[] = [
  {
    name: "Tour Socks — 3 Pack",
    category: "Accessories",
    description: "Cushioned cotton-blend ankle socks with a woven HOP monogram. Sold in packs of three.",
    priceGuide: "£12–15",
    details: ["Cushioned sole", "Woven HOP logo", "Cotton-poly blend", "Pack of 3"],
    image: "/products/clothing/accessories-flatlay.png",
  },
  {
    name: "Caddie Towel",
    category: "Accessories",
    description: "Waffle-weave microfibre towel with an embroidered House of Par crest and a carabiner clip for your bag.",
    priceGuide: "£15–18",
    details: ["Waffle-weave microfibre", "Embroidered crest", "Carabiner clip", "40 × 60cm"],
    image: "/products/clothing/accessories-flatlay.png",
  },
  {
    name: "Ball Marker Set",
    category: "Accessories",
    description: "Set of three brass-finish ball markers with the HOP monogram. Presented in a branded tin.",
    priceGuide: "£10–12",
    details: ["Brass finish", "HOP monogram", "Set of 3", "Branded gift tin"],
    image: "/products/clothing/accessories-flatlay.png",
  },
];

function ItemCard({ item }: { item: ClothingItem }) {
  return (
    <div className="group">
      <div className="overflow-hidden rounded-lg border border-hairline bg-paper">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
          Coming soon · {item.priceGuide}
        </p>
        <h3 className="mt-1.5 font-display text-xl text-ink">
          {item.name}
        </h3>
        <p className="mt-1.5 text-sm text-ink/70">{item.description}</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {item.details.map((d) => (
            <li key={d} className="rounded-full border border-hairline px-2.5 py-0.5 text-[11px] text-ink/50">
              {d}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ClothingPage() {
  return (
    <div>
      {/* Lifestyle hero banner */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <Image
          src="/products/clothing/lifestyle-hero.png"
          alt="Golfers walking down the fairway in House of Par apparel"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-ink/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-4 pb-8 sm:pb-12">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              New for 2026
            </p>
            <h1 className="mt-2 font-display text-4xl text-ivory sm:text-5xl">
              House of Par Clothing
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
        <p className="max-w-2xl font-voice text-lg italic text-ink/75">
          The same standard, worn. Golf-ready apparel designed for the course and
          comfortable enough for everything after it. Each piece carries the HOP
          crest — embroidered, never printed.
        </p>

        {/* Hero piece — the quarter zip */}
        <div className="mt-12 overflow-hidden rounded-lg border border-hairline">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[3/4] sm:aspect-auto sm:min-h-[400px]">
              <Image
                src="/products/hop-quarter-zip-navy.jpg"
                alt="HOP Quarter Zip in navy with gold embroidered HOP monogram"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center bg-ink px-8 py-12 sm:px-12">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                The signature piece
              </p>
              <h2 className="mt-3 font-display text-3xl text-ivory sm:text-4xl">
                Quarter Zip Windshell
              </h2>
              <p className="mt-4 font-voice text-lg italic text-ivory/70">
                Navy windshell with the HOP monogram embroidered in antique gold.
                Cut for the course — room in the shoulders for a full swing,
                tailored everywhere else.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ivory/60">
                <li>Lightweight windproof shell</li>
                <li>YKK quarter zip with stand collar</li>
                <li>Gold thread HOP embroidery</li>
                <li>Raglan sleeve for swing freedom</li>
              </ul>
              <p className="mt-6 font-display text-xl text-gold">£55–65</p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
            Apparel
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            The first collection
          </h2>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {CLOTHING.map((item) => (
            <ItemCard key={item.name} item={item} />
          ))}
        </div>

        <div className="mt-20 border-t border-hairline pt-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
            Accessories
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink">
            The finishing touches
          </h2>
          <p className="mt-3 max-w-xl text-sm text-ink/70">
            Lower price-point essentials that every golfer needs. Branded with the
            HOP monogram — they make the shop feel full and the gift boxes easy.
          </p>
        </div>
        <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-3">
          {ACCESSORIES.map((item) => (
            <ItemCard key={item.name} item={item} />
          ))}
        </div>

        <section className="mt-20 rounded-lg bg-royal px-6 py-14 text-center sm:px-12 sm:py-16">
          <div className="rule-double mx-auto w-16" aria-hidden />
          <h2 className="mt-8 font-voice text-2xl italic text-ivory sm:text-3xl">
            Register your interest
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-ivory/70">
            The clothing collection is in development. Drop us a line and
            we&apos;ll let you know when the first pieces are ready to order.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full border border-ivory/40 px-8 py-3.5 font-semibold text-ivory transition-colors hover:bg-ivory hover:text-royal"
          >
            Get in touch
          </Link>
        </section>
      </div>
    </div>
  );
}
