import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: { absolute: "House of Par | Premium Golf Clothing & Equipment UK" },
  description:
    "Premium golf clothing, outerwear and training equipment. British-designed apparel with free UK tracked delivery and 30-day returns.",
  alternates: { canonical: "/" },
};

const CLOTHING_ITEMS = [
  {
    name: "Quarter Zip — Navy",
    price: "55",
    img: "/products/clothing/quarter-zip-navy.png",
    href: "/clothing/quarter-zip-navy",
    tag: "Signature piece",
  },
  {
    name: "Quarter Zip — White",
    price: "55",
    img: "/products/clothing/quarter-zip-white.png",
    href: "/clothing/quarter-zip-white",
    tag: "New colourway",
  },
  {
    name: "Performance Polo",
    price: "40",
    img: "/products/clothing/polo-hero.png",
    href: "/clothing/performance-polo",
    tag: "Course ready",
  },
  {
    name: "Tour Hoodie",
    price: "60",
    img: "/products/clothing/hoodie-hero.png",
    href: "/clothing/tour-hoodie",
    tag: "Off-course",
  },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero: full-bleed lifestyle image, J.Lindeberg / Manors style ── */}
      <section className="relative -mt-[73px] h-[100svh] min-h-[600px] overflow-hidden">
        <Image
          src="/products/hero/hero-walking-mobile.png"
          alt="Golfer wearing House of Par apparel walking on a British links course at golden hour"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="object-cover object-[50%_30%] lg:hidden"
        />
        <Image
          src="/products/hero/hero-walking.png"
          alt="Golfer wearing House of Par apparel walking on a British links course at golden hour"
          fill
          priority
          sizes="100vw"
          quality={85}
          className="hidden object-cover object-[50%_30%] lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/10" />

        <div className="absolute inset-x-0 bottom-0 px-5 pb-12 sm:px-8 sm:pb-16 md:pb-20">
          <p className="rise text-[11px] font-semibold uppercase tracking-[0.22em] text-ivory/70">
            House of Par Clothing
          </p>
          <h1 className="rise rise-1 mt-3 font-display text-4xl uppercase leading-[1.08] tracking-[0.03em] text-ivory sm:text-5xl md:text-6xl lg:text-7xl">
            Worn to a<br />standard.
          </h1>
          <p className="rise rise-2 mt-4 max-w-md font-voice text-lg italic text-ivory/85 sm:text-xl">
            Golf-ready apparel designed for the course and comfortable enough
            for everything after it.
          </p>
          <div className="rise rise-3 mt-8 flex flex-wrap gap-3">
            <Link
              href="/clothing"
              className="inline-block rounded-full bg-ivory px-7 py-3 text-sm font-semibold text-royal transition-colors hover:bg-ivory/90"
            >
              Shop the collection
            </Link>
            <Link
              href="/shop"
              className="inline-block rounded-full border border-ivory/40 px-7 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
            >
              View equipment
            </Link>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* ── The Clothing Collection ── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <div className="mb-10 sm:mb-14">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            The collection
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Designed for the course
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {CLOTHING_ITEMS.map((item) => (
            <Link key={item.name} href={item.href} className="group block">
              <div className="overflow-hidden rounded-lg bg-paper">
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={item.img}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 50vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
              </div>
              <div className="mt-3 sm:mt-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40 sm:text-[11px]">
                  {item.tag}
                </p>
                <h3 className="mt-1 font-display text-base text-ink transition-colors group-hover:text-royal sm:text-lg">
                  {item.name}
                </h3>
                <p className="mt-0.5 text-sm text-ink/70">
                  From &pound;{item.price}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-14">
          <Link
            href="/clothing"
            className="inline-block rounded-full bg-royal px-8 py-3.5 font-semibold text-ivory transition-colors hover:bg-royal-deep"
          >
            Browse all clothing
          </Link>
        </div>
      </section>

      {/* ── Lifestyle image break ── */}
      <section className="relative h-[70vh] min-h-[400px] overflow-hidden sm:h-[60vh]">
        <Image
          src="/products/hero/hero-group-mobile.png"
          alt="Golfers wearing House of Par clothing walking on a links course at sunrise"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-center lg:hidden"
        />
        <Image
          src="/products/hero/hero-group.png"
          alt="Golfers wearing House of Par clothing walking on a links course at sunrise"
          fill
          sizes="100vw"
          quality={85}
          className="hidden object-cover object-center lg:block"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-10 text-center sm:px-8 sm:pb-14">
          <p className="font-voice text-2xl italic text-ivory sm:text-3xl md:text-4xl">
            The course closes for winter.
            <br className="hidden sm:block" /> The standard does not.
          </p>
        </div>
      </section>

      {/* ── Equipment (secondary) ── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
          <div className="mb-10 text-center sm:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
              Equipment
            </p>
            <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
              Home practice standards
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-voice text-lg italic text-ink/70">
              Four numbered pieces, each guaranteed for thirty days and delivered
              free across the United Kingdom.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              href="/shop"
              className="inline-block rounded-full border border-royal/30 px-8 py-3.5 font-semibold text-royal transition-colors hover:bg-royal hover:text-ivory"
            >
              Shop equipment
            </Link>
          </div>
        </div>
      </section>

      {/* ── Guarantees ── */}
      <section className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
        <h2 className="mb-10 text-center font-display text-3xl text-ink sm:mb-12 sm:text-4xl">
          What the house guarantees
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="border-t border-hairline pt-5">
            <h3 className="font-display text-xl text-ink">Thirty days, money back</h3>
            <p className="mt-2 text-ink/70">
              If a piece doesn&apos;t meet your expectation, return it within 30
              days for a full refund. No quibbles.
            </p>
          </div>
          <div className="border-t border-hairline pt-5">
            <h3 className="font-display text-xl text-ink">Tracked to your door</h3>
            <p className="mt-2 text-ink/70">
              Every order ships free to any UK address, dispatched within 48
              hours and tracked door to door.
            </p>
          </div>
          <div className="border-t border-hairline pt-5">
            <h3 className="font-display text-xl text-ink">A person answers</h3>
            <p className="mt-2 text-ink/70">
              Email us about anything — an order, a return, a question —
              and you&apos;ll hear back within one working day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
