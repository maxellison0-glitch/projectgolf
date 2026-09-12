import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golf Clothing & Apparel",
  description:
    "House of Par clothing — premium golf apparel designed for the course. Quarter zips, polos, hoodies and caps with free UK delivery.",
  alternates: { canonical: "/clothing" },
};

type ClothingItem = {
  name: string;
  category: "tops" | "outerwear" | "headwear" | "womens";
  description: string;
  price: string;
  details: string[];
  image: string;
};

const CLOTHING: ClothingItem[] = [
  {
    name: "Performance Quarter Zip",
    category: "outerwear",
    description:
      "Brushed athletic fleece with a quarter zip and embroidered HOP crest on the left chest. Cut for the course — room in the shoulders for a full swing.",
    price: "£55",
    details: ["Brushed polyester fleece", "YKK quarter zip", "Embroidered gold HOP crest", "Raglan sleeve for swing freedom"],
    image: "/products/clothing/quarter-zip-hero.png",
  },
  {
    name: "Tour Hoodie",
    category: "outerwear",
    description:
      "Heavyweight 400gsm cotton hoodie with the full House of Par crest embroidered on the back yoke. For the range, the 19th, and everything in between.",
    price: "£60",
    details: ["400gsm brushed cotton", "Embroidered back crest", "Ribbed cuffs and hem", "Relaxed fit"],
    image: "/products/clothing/hoodie-hero.png",
  },
  {
    name: "Performance Polo",
    category: "tops",
    description:
      "Moisture-wicking stretch polo in house navy with a gold HOP monogram on the left chest. Designed to look as good at lunch as it does on the first tee.",
    price: "£40",
    details: ["Quick-dry stretch fabric", "Three-button placket", "Embroidered HOP monogram", "Slim athletic fit"],
    image: "/products/clothing/polo-hero.png",
  },
  {
    name: "Long Sleeve Athletic Tee",
    category: "tops",
    description:
      "Lightweight long sleeve with a slim fit and subtle HOP wordmark on the sleeve. UV-protective fabric for summer rounds and winter range sessions.",
    price: "£35",
    details: ["UPF 30+ fabric", "Flatlock seams", "Sleeve HOP wordmark", "Thumbhole cuffs"],
    image: "/products/clothing/longsleeve-hero.png",
  },
  {
    name: "Structured Cap",
    category: "headwear",
    description:
      "Six-panel structured cap with a pre-curved peak and gold HOP monogram front and centre. Adjustable strap with a metal clasp.",
    price: "£25",
    details: ["Six-panel structured crown", "Pre-curved peak", "Gold thread HOP embroidery", "Metal clasp adjuster"],
    image: "/products/clothing/cap-hero.png",
  },
  {
    name: "Polo Skirt",
    category: "womens",
    description:
      "Performance skirt with built-in shorts and a side pocket. Subtle gold HOP tab on the hem. Pairs with the performance polo.",
    price: "£40",
    details: ["Built-in compression shorts", "Side zip pocket", "Gold HOP hem tab", "Mid-thigh length"],
    image: "/products/clothing/skirt-hero.png",
  },
];

type AccessoryItem = {
  name: string;
  price: string;
  description: string;
  image: string;
};

const ACCESSORIES: AccessoryItem[] = [
  {
    name: "Tour Socks — 3 Pack",
    price: "£12",
    description: "Cushioned cotton-blend ankle socks with a woven HOP monogram.",
    image: "/products/clothing/accessories-flatlay.png",
  },
  {
    name: "Caddie Towel",
    price: "£15",
    description: "Waffle-weave microfibre towel with an embroidered crest and carabiner clip.",
    image: "/products/clothing/accessories-flatlay.png",
  },
  {
    name: "Ball Marker Set",
    price: "£10",
    description: "Three brass-finish ball markers with the HOP monogram in a branded tin.",
    image: "/products/clothing/accessories-flatlay.png",
  },
];

function ProductCard({ item }: { item: ClothingItem }) {
  return (
    <div className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg bg-paper">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>
      </div>
      <div className="mt-3 sm:mt-4">
        <h3 className="font-display text-base text-ink transition-colors group-hover:text-royal sm:text-lg">
          {item.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-ink/70">{item.price}</p>
        <p className="mt-2 text-[13px] leading-relaxed text-ink/55 sm:text-sm">
          {item.description}
        </p>
      </div>
    </div>
  );
}

export default function ClothingPage() {
  const tops = CLOTHING.filter((i) => i.category === "tops");
  const outerwear = CLOTHING.filter((i) => i.category === "outerwear");
  const headwear = CLOTHING.filter((i) => i.category === "headwear");
  const womens = CLOTHING.filter((i) => i.category === "womens");

  return (
    <div>
      {/* ── Hero banner ── */}
      <div className="relative -mt-[73px] h-[65svh] min-h-[360px] sm:h-[55vh]">
        <Image
          src="/products/hero/hero-polo-detail.png"
          alt="Close-up of House of Par polo on the course"
          fill
          className="object-cover object-[50%_25%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/5" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 sm:px-8 sm:pb-12">
          <div className="mx-auto max-w-6xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/60">
              The collection
            </p>
            <h1 className="mt-2 font-display text-4xl text-ivory sm:text-5xl lg:text-6xl">
              House of Par Clothing
            </h1>
            <p className="mt-3 max-w-lg font-voice text-lg italic text-ivory/80">
              Golf-ready apparel designed for the course and comfortable enough for
              everything after it. Each piece carries the HOP crest — embroidered,
              never printed.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
        {/* ── Signature piece ── */}
        <div className="overflow-hidden rounded-lg">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[3/4] sm:aspect-auto sm:min-h-[420px]">
              <Image
                src="/products/hop-quarter-zip-navy.jpg"
                alt="HOP Quarter Zip in navy"
                fill
                className="object-cover object-top"
              />
            </div>
            <div className="flex flex-col justify-center bg-ink px-6 py-10 sm:px-10 sm:py-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                The signature piece
              </p>
              <h2 className="mt-3 font-display text-2xl text-ivory sm:text-3xl">
                Quarter Zip Windshell
              </h2>
              <p className="mt-4 font-voice text-base italic text-ivory/70 sm:text-lg">
                Navy windshell with the HOP monogram embroidered in antique gold.
                Cut for the course — room in the shoulders for a full swing,
                tailored everywhere else.
              </p>
              <ul className="mt-5 space-y-1.5 text-sm text-ivory/50">
                <li>Lightweight windproof shell</li>
                <li>YKK quarter zip with stand collar</li>
                <li>Gold thread HOP embroidery</li>
                <li>Raglan sleeve for swing freedom</li>
              </ul>
              <p className="mt-5 font-display text-xl text-gold">£55</p>
            </div>
          </div>
        </div>

        {/* ── Tops ── */}
        <section id="tops" className="mt-16 scroll-mt-24 sm:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Tops
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            Polos &amp; long sleeves
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {tops.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* ── Outerwear ── */}
        <section id="outerwear" className="mt-16 scroll-mt-24 sm:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Outerwear
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            Layers &amp; hoodies
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {outerwear.map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* ── Headwear ── */}
        <section id="headwear" className="mt-16 scroll-mt-24 sm:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Headwear
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            Caps
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {[...headwear, ...womens].map((item) => (
              <ProductCard key={item.name} item={item} />
            ))}
          </div>
        </section>

        {/* ── Lifestyle image break ── */}
        <div className="relative -mx-4 mt-16 h-[50vh] min-h-[300px] overflow-hidden sm:mx-0 sm:mt-20 sm:rounded-lg">
          <Image
            src="/products/hero/hero-group.png"
            alt="Golfers in House of Par clothing on the links"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* ── Accessories (subtle upsell) ── */}
        <section className="mt-16 sm:mt-20">
          <div className="border-t border-hairline pt-10">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
              Complete the look
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
              Accessories
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-6">
            {ACCESSORIES.map((acc) => (
              <div key={acc.name} className="group">
                <div className="overflow-hidden rounded-lg bg-paper">
                  <div className="relative aspect-square w-full">
                    <Image
                      src={acc.image}
                      alt={acc.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="mt-3">
                  <h3 className="text-sm font-medium text-ink sm:text-base">
                    {acc.name}
                  </h3>
                  <p className="text-sm text-ink/60">{acc.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="mt-16 rounded-lg bg-royal px-6 py-12 text-center sm:mt-20 sm:px-10 sm:py-14">
          <div className="rule-double mx-auto w-16" aria-hidden />
          <p className="mt-6 font-voice text-xl italic text-ivory sm:text-2xl">
            Free tracked delivery on every UK order
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-ivory/60">
            Every piece ships free, dispatched within 48 hours and tracked to
            your door. 30-day returns, no quibbles.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full border border-ivory/40 px-8 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-royal"
          >
            Questions? Get in touch
          </Link>
        </section>
      </div>
    </div>
  );
}
