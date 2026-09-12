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
  slug: string;
  name: string;
  category: "tops" | "outerwear" | "headwear";
  description: string;
  price: string;
  details: string[];
  image: string;
};

const CLOTHING: ClothingItem[] = [
  {
    slug: "quarter-zip-navy",
    name: "Quarter Zip — Navy",
    category: "outerwear",
    description:
      "Navy performance quarter zip with white zipper trim and gold HOP crest embroidered on the left chest. Cut for the course — room in the shoulders for a full swing.",
    price: "£55",
    details: ["Brushed polyester fleece", "YKK quarter zip with white trim", "Embroidered gold HOP crest", "Raglan sleeve for swing freedom"],
    image: "/products/clothing/quarter-zip-navy.png",
  },
  {
    slug: "quarter-zip-white",
    name: "Quarter Zip — White",
    category: "outerwear",
    description:
      "White performance quarter zip with navy zipper trim and navy HOP crest embroidered on the left chest. The same course-ready cut in a clean colourway.",
    price: "£55",
    details: ["Brushed polyester fleece", "YKK quarter zip with navy trim", "Embroidered navy HOP crest", "Raglan sleeve for swing freedom"],
    image: "/products/clothing/quarter-zip-white.png",
  },
  {
    slug: "tour-hoodie",
    name: "Tour Hoodie",
    category: "outerwear",
    description:
      "Heavyweight 400gsm cotton hoodie with the full House of Par crest embroidered on the back yoke. For the range, the 19th, and everything in between.",
    price: "£60",
    details: ["400gsm brushed cotton", "Embroidered back crest", "Ribbed cuffs and hem", "Relaxed fit"],
    image: "/products/clothing/hoodie-hero.png",
  },
  {
    slug: "performance-polo",
    name: "Performance Polo",
    category: "tops",
    description:
      "Moisture-wicking stretch polo in house navy with a gold HOP monogram on the left chest. Designed to look as good at lunch as it does on the first tee.",
    price: "£40",
    details: ["Quick-dry stretch fabric", "Three-button placket", "Embroidered HOP monogram", "Slim athletic fit"],
    image: "/products/clothing/polo-hero.png",
  },
  {
    slug: "structured-cap",
    name: "Structured Cap",
    category: "headwear",
    description:
      "Six-panel structured cap with a pre-curved peak and gold HOP monogram front and centre. Adjustable strap with a metal clasp.",
    price: "£25",
    details: ["Six-panel structured crown", "Pre-curved peak", "Gold thread HOP embroidery", "Metal clasp adjuster"],
    image: "/products/clothing/cap-hero.png",
  },
];

type AccessoryItem = {
  name: string;
  price: string;
  description: string;
};

const ACCESSORIES: AccessoryItem[] = [
  {
    name: "Tour Socks — 3 Pack",
    price: "£12",
    description: "Full-length cushioned cotton socks with a woven HOP monogram.",
  },
  {
    name: "Caddie Towel",
    price: "£15",
    description: "White waffle-weave microfibre towel with an embroidered crest and carabiner clip.",
  },
  {
    name: "Golf Balls — Sleeve of 3",
    price: "£10",
    description: "Three-piece tour-spec golf balls with the HOP monogram in a branded sleeve.",
  },
];

function ProductCard({ item }: { item: ClothingItem }) {
  return (
    <Link href={`/clothing/${item.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-paper">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 33vw, 50vw"
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
    </Link>
  );
}

export default function ClothingPage() {
  const tops = CLOTHING.filter((i) => i.category === "tops");
  const outerwear = CLOTHING.filter((i) => i.category === "outerwear");
  const headwear = CLOTHING.filter((i) => i.category === "headwear");

  return (
    <div>
      {/* ── Hero banner ── */}
      <div className="relative -mt-[73px] h-[65svh] min-h-[360px] sm:h-[55vh]">
        <Image
          src="/products/hero/hero-polo-detail-mobile.png"
          alt="Close-up of House of Par polo on the course"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-[50%_25%] lg:hidden"
          priority
        />
        <Image
          src="/products/hero/hero-polo-detail.png"
          alt="Close-up of House of Par polo on the course"
          fill
          sizes="100vw"
          quality={85}
          className="hidden object-cover object-[50%_25%] lg:block"
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
        <Link href="/clothing/quarter-zip-navy" className="group block overflow-hidden rounded-lg">
          <div className="grid sm:grid-cols-2">
            <div className="relative aspect-[3/4] sm:aspect-auto sm:min-h-[420px]">
              <Image
                src="/products/hop-quarter-zip-navy.jpg"
                alt="HOP Quarter Zip in navy"
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
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
        </Link>

        {/* ── Tops ── */}
        <section id="tops" className="mt-16 scroll-mt-24 sm:mt-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/40">
            Tops
          </p>
          <h2 className="mt-2 font-display text-2xl text-ink sm:text-3xl">
            Polos
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-3">
            {tops.map((item) => (
              <ProductCard key={item.slug} item={item} />
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
              <ProductCard key={item.slug} item={item} />
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
            {headwear.map((item) => (
              <ProductCard key={item.slug} item={item} />
            ))}
          </div>
        </section>

        {/* ── Lifestyle image break ── */}
        <div className="relative -mx-4 mt-16 h-[50vh] min-h-[300px] overflow-hidden sm:mx-0 sm:mt-20 sm:rounded-lg">
          <Image
            src="/products/hero/hero-group-mobile.png"
            alt="Golfers in House of Par clothing on the links"
            fill
            sizes="100vw"
            quality={85}
            className="object-cover object-center lg:hidden"
          />
          <Image
            src="/products/hero/hero-group.png"
            alt="Golfers in House of Par clothing on the links"
            fill
            sizes="100vw"
            quality={85}
            className="hidden object-cover object-center lg:block"
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
          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {ACCESSORIES.map((acc) => (
              <div key={acc.name} className="rounded-lg border border-hairline bg-paper px-5 py-6 sm:px-6 sm:py-8">
                <h3 className="font-display text-base text-ink sm:text-lg">
                  {acc.name}
                </h3>
                <p className="mt-1 text-sm font-medium text-gold">{acc.price}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-ink/55 sm:text-sm">
                  {acc.description}
                </p>
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
