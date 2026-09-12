import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";
import { getClothingProducts } from "@/data/products";
import { ClothingBuyBox } from "@/components/ClothingBuyBox";
import { StickyATC } from "@/components/StickyATC";

export function ClothingLanding({ product }: { product: Product }) {
  const buyable = {
    slug: product.slug,
    name: product.name,
    category: product.category,
    variants: product.variants,
  };

  const related = getClothingProducts().filter((p) => p.slug !== product.slug);

  return (
    <div>
      <div className="mx-auto max-w-6xl px-4">
        {/* ── Breadcrumb ── */}
        <nav className="py-4 text-sm text-ink/50" aria-label="Breadcrumb">
          <ol className="flex items-center gap-1.5">
            <li><Link href="/" className="hover:text-ink">Home</Link></li>
            <li aria-hidden>/</li>
            <li><Link href="/clothing" className="hover:text-ink">Clothing</Link></li>
            <li aria-hidden>/</li>
            <li className="text-ink">{product.name}</li>
          </ol>
        </nav>

        {/* ── Product hero: image + info ── */}
        <section className="grid items-start gap-8 pb-16 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <div className="overflow-hidden rounded-lg bg-paper">
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          {/* Info */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
              {product.category}
            </p>
            <h1 className="mt-2 font-display text-3xl text-ink sm:text-4xl lg:text-5xl">
              {product.name}
            </h1>
            <p className="mt-4 font-voice text-xl italic text-ink/70">
              {product.subhook}
            </p>

            <div className="mt-8">
              <ClothingBuyBox product={buyable} />
            </div>

            {/* Details */}
            <div className="mt-10 border-t border-hairline pt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-ink/50">
                Details
              </h3>
              <ul className="mt-4 space-y-2.5">
                {product.howItWorks.map((item) => (
                  <li key={item.step} className="flex gap-3 text-sm text-ink/70">
                    <span className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                    <span>
                      <span className="font-medium text-ink">{item.step}</span>
                      {" — "}
                      {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Benefits ── */}
        <section className="border-t border-hairline py-16">
          <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
            {product.benefits.map((b) => (
              <div key={b.title}>
                <h3 className="font-display text-xl text-ink">{b.title}</h3>
                <p className="mt-2 text-ink/70">{b.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Delivery & returns ── */}
        <section className="rounded-lg bg-royal px-6 py-12 text-center sm:px-10 sm:py-14">
          <p className="font-voice text-xl italic text-ivory sm:text-2xl">
            Free tracked delivery on every UK order
          </p>
          <p className="mx-auto mt-3 max-w-md text-sm text-ivory/60">
            Dispatched within 48 hours, tracked to your door. 30-day returns —
            no quibbles.
          </p>
        </section>

        {/* ── Browse the collection ── */}
        {related.length > 0 && (
          <section className="py-16">
            <h2 className="mb-10 font-display text-2xl text-ink sm:text-3xl">
              From the collection
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
                      From &pound;{(p.variants[0].price / 100).toFixed(0)}
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

      <StickyATC product={buyable} />
    </div>
  );
}
