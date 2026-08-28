import Link from "next/link";
import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";
import { TrustBar } from "@/components/TrustBar";

export const metadata: Metadata = {
  title: { absolute: "House of Par | Golf Training Aids for Home Practice UK" },
  description:
    "Premium putting mats, alignment mirrors and golf swing training aids for home practice. Free UK tracked delivery and 30-day returns.",
  alternates: { canonical: "/" },
};

/* Multi-product storefront: every product presented as an equal —
 * the ad data decides the winners, not the site structure. */
export default function Home() {
  return (
    <div>
      {/* Hero — the title page of the house */}
      <section className="mx-auto max-w-4xl px-4 pb-16 pt-16 text-center sm:pb-20 sm:pt-24">
        {/* eslint-disable-next-line @next/next/no-img-element -- SVG mark, no optimizer needed */}
        <img
          src="/brand/stag-mark.svg"
          alt=""
          aria-hidden="true"
          width={128}
          height={128}
          className="rise mx-auto h-36 w-36 object-contain sm:h-44 sm:w-44"
        />
        <p className="rise rise-1 mt-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-ink/60">
          Home practice standards · Est. MMXXVI
        </p>
        <h1 className="rise rise-1 mt-6 font-display text-4xl uppercase leading-[1.12] tracking-[0.04em] text-ink sm:text-6xl sm:leading-[1.08] md:text-7xl">
          Par is a standard.{" "}
          <br className="hidden sm:block" />
          Practise to it.
        </h1>
        <p className="rise rise-2 mx-auto mt-6 max-w-xl font-voice text-xl italic text-ink/80 sm:text-2xl">
          Practice equipment for the golfer at home — each piece numbered,
          guaranteed for thirty days, delivered free across the United Kingdom.
        </p>
        <div className="rise rise-3 mt-10">
          <Link
            href="#collection"
            className="inline-block rounded-full bg-royal px-8 py-3.5 font-semibold text-ivory transition-colors hover:bg-royal-deep"
          >
            Browse the collection
          </Link>
        </div>
      </section>

      <TrustBar />

      {/* The collection */}
      <section id="collection" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-16 sm:py-20">
        <div className="mb-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
            The collection
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Four standards, numbered in order
          </h2>
        </div>
        <ProductGrid />
      </section>

      {/* Brand moment */}
      <section className="bg-royal">
        <div className="mx-auto max-w-3xl px-4 py-20 text-center sm:py-24">
          <div className="rule-double mx-auto w-16" aria-hidden />
          <p className="mt-8 font-voice text-3xl italic leading-snug text-ivory sm:text-4xl">
            The course closes for winter.
            <br className="hidden sm:block" /> The standard does not.
          </p>
          <p className="mx-auto mt-6 max-w-md text-sm text-ivory/70">
            Ten minutes a day at home is the difference between losing your
            stroke in November and finding it in April.
          </p>
          <Link
            href="/shop"
            className="mt-10 inline-block rounded-full border border-ivory/40 px-8 py-3.5 font-semibold text-ivory transition-colors hover:bg-ivory hover:text-royal"
          >
            Shop the collection
          </Link>
        </div>
      </section>

      {/* The house standard */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <h2 className="mb-12 text-center font-display text-3xl text-ink sm:text-4xl">
          What the house guarantees
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          <div className="border-t border-hairline pt-5">
            <h3 className="font-display text-xl text-ink">Thirty days, money back</h3>
            <p className="mt-2 text-ink/70">
              If a piece doesn&apos;t improve your practice, return it within 30
              days of delivery for a full refund. No quibbles.
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
              Email us about anything — an order, a return, a putting question —
              and you&apos;ll hear back within one working day.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
