import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getClothingProducts } from "@/data/products";
import { ClothingBuyBox } from "@/components/ClothingBuyBox";
import { StickyATC } from "@/components/StickyATC";
import { ProductAccordion } from "@/components/ProductAccordion";

export function ClothingLanding({ product }: { product: Product }) {
  const buyable = {
    slug: product.slug,
    name: product.name,
    category: product.category,
    variants: product.variants,
  };

  const related = getClothingProducts().filter((p) => p.slug !== product.slug);
  const heroImage = product.images[0];

  const accordionItems = [
    {
      title: "Product Details",
      content: product.howItWorks
        .map((item) => `${item.step} — ${item.body}`)
        .join("\n"),
    },
    {
      title: "Fabric & Care",
      content: product.faqs
        .find((f) => f.q.toLowerCase().includes("care"))
        ?.a ?? "Machine wash cold, inside out, with like colours. Hang dry or tumble on low. Do not iron embroidery directly.",
    },
    {
      title: "Delivery & Returns",
      content:
        "Free UK tracked delivery on every order, dispatched within 48 hours. 30-day returns — if it doesn't fit or meet your expectation, send it back for a full refund. No quibbles.",
    },
  ];

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        {/* Breadcrumb */}
        <nav className="py-4 text-sm text-ink/50" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-ink">
                Home
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li>
              <Link href="/clothing" className="hover:text-ink">
                Clothing
              </Link>
            </li>
            <li aria-hidden>/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        {/* Product hero: image + info (Manors 2-col layout) */}
        <section className="grid items-start gap-8 pb-16 lg:grid-cols-2 lg:gap-14">
          {/* Left: Image */}
          <div className="overflow-hidden rounded-lg bg-paper">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={heroImage}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Right: Product info (sticky on desktop) */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-3xl uppercase tracking-wide text-ink sm:text-4xl lg:text-[2.75rem]">
              {product.name}
            </h1>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
              {product.description}
            </p>

            {/* Buy box */}
            <div className="mt-8">
              <ClothingBuyBox product={buyable} image={heroImage} />
            </div>

            {/* Product details accordion */}
            <div className="mt-8">
              <ProductAccordion items={accordionItems} />
            </div>
          </div>
        </section>

        {/* Product features grid */}
        <section className="border-t border-hairline py-16">
          <h2 className="mb-10 text-center font-display text-2xl text-ink sm:text-3xl">
            Product Features
          </h2>
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {product.benefits.map((b) => (
              <div key={b.title} className="text-center">
                <h3 className="font-display text-lg text-ink">{b.title}</h3>
                <p className="mt-2 text-sm text-ink/60">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Trust signals — Manors-style */}
        <section className="rounded-lg bg-royal px-6 py-12 sm:px-10 sm:py-14">
          <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-3 sm:gap-6">
            <div className="text-center">
              <h3 className="font-display text-lg text-ivory">
                Free UK Delivery
              </h3>
              <p className="mt-2 text-sm text-ivory/60">
                Tracked to your door, dispatched within 48 hours on every order.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg text-ivory">
                30-Day Returns
              </h3>
              <p className="mt-2 text-sm text-ivory/60">
                Not right? Send it back for a full refund. No quibbles.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-display text-lg text-ivory">
                Embroidered, Not Printed
              </h3>
              <p className="mt-2 text-sm text-ivory/60">
                Every HOP crest is stitched in thread. No cracking, no peeling.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ section */}
        {product.faqs.length > 0 && (
          <section className="py-16">
            <h2 className="mb-8 font-display text-2xl text-ink sm:text-3xl">
              Common Questions
            </h2>
            <div className="divide-y divide-hairline">
              {product.faqs.map((faq) => (
                <details key={faq.q} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                    >
                      <path d="M3 5.5l4 4 4-4" />
                    </svg>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-ink/60">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {/* Cross-sell: From the collection */}
        {related.length > 0 && (
          <section className="border-t border-hairline py-16">
            <h2 className="mb-10 font-display text-2xl text-ink sm:text-3xl">
              Keep Exploring
            </h2>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {related.slice(0, 4).map((p) => (
                <Link
                  key={p.slug}
                  href={`/clothing/${p.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden rounded-lg bg-paper">
                    <div className="relative aspect-[3/4] w-full">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        sizes="(min-width: 1024px) 25vw, 50vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                  </div>
                  <div className="mt-3">
                    <h3 className="font-display text-base text-ink transition-colors group-hover:text-royal">
                      {p.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-ink/70">
                      &pound;{(p.variants[0].price / 100).toFixed(0)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/clothing"
                className="inline-block rounded-full border border-royal/30 px-8 py-3.5 font-semibold text-royal transition-colors hover:bg-royal hover:text-ivory"
              >
                View all clothing
              </Link>
            </div>
          </section>
        )}
      </div>

      <StickyATC product={buyable} image={heroImage} />
    </div>
  );
}
