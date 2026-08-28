import Image from "next/image";
import type { Product } from "@/data/products";
import { standardNo } from "@/data/products";
import { BuyBox } from "@/components/BuyBox";
import { StickyATC } from "@/components/StickyATC";
import { FAQ } from "@/components/FAQ";
import { TrustBar } from "@/components/TrustBar";
import { ProductGrid } from "@/components/ProductGrid";

/* The money page. Structure per the playbook: hook headline → gallery →
 * buy box → benefits → how-it-works → social proof → FAQ → guarantee. */
export function ProductLanding({ product }: { product: Product }) {
  const hasRealReviews = product.reviews.some((r) => r.author !== "—");

  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* Hero */}
      <section className="grid items-start gap-10 py-10 sm:py-14 lg:grid-cols-2">
        <Gallery product={product} />
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-ink/50">
            {standardNo(product)} · {product.category}
          </p>
          <h1 className="mt-3 font-display text-4xl leading-[1.12] text-ink sm:text-5xl">
            {product.hook}
          </h1>
          <p className="mt-4 font-voice text-lg italic text-ink/75">{product.subhook}</p>
          <div className="mt-7">
            <BuyBox product={product} />
          </div>
        </div>
      </section>

      <TrustBar />

      {/* Benefits */}
      <section className="py-16">
        <h2 className="mb-12 text-center font-display text-3xl text-ink sm:text-4xl">
          What it does for your game
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {product.benefits.map((b) => (
            <div key={b.title} className="border-t border-hairline pt-5">
              <h3 className="font-display text-xl text-ink">{b.title}</h3>
              <p className="mt-2 text-ink/70">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="rounded-2xl bg-royal px-6 py-16 text-ivory sm:px-12">
        <h2 className="mb-12 text-center font-display text-3xl sm:text-4xl">
          How it works
        </h2>
        <div className="grid gap-10 sm:grid-cols-3 sm:gap-8">
          {product.howItWorks.map((step, i) => (
            <div key={step.step}>
              <p aria-hidden className="font-voice text-4xl italic text-ivory/50">
                {i + 1}.
              </p>
              <h3 className="mt-2 font-display text-xl">{step.step}</h3>
              <p className="mt-2 text-ivory/75">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof — hidden until real reviews exist. Never fake them. */}
      {hasRealReviews && (
        <section className="py-16">
          <h2 className="mb-12 text-center font-display text-3xl text-ink sm:text-4xl">
            What golfers are saying
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {product.reviews.map((r) => (
              <div key={r.author + r.title} className="rounded-lg border border-hairline bg-paper p-6">
                <p className="mb-2 text-royal" aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </p>
                <h3 className="font-medium text-ink">{r.title}</h3>
                <p className="mt-1 text-sm text-ink/70">{r.body}</p>
                <p className="mt-2 text-sm text-ink/50">— {r.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cross-sell — the numbered catalogue keeps every product reachable */}
      <section className="py-16">
        <h2 className="mb-12 text-center font-display text-3xl text-ink sm:text-4xl">
          The rest of the collection
        </h2>
        <ProductGrid exclude={product.slug} compact />
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl py-16">
        <h2 className="mb-10 text-center font-display text-3xl text-ink sm:text-4xl">
          Questions, answered
        </h2>
        <FAQ faqs={product.faqs} />
      </section>

      {/* Guarantee + final CTA */}
      <section className="mx-auto max-w-2xl py-16 text-center">
        <Image
          src="/brand/house-of-par-mark.png"
          alt=""
          aria-hidden="true"
          width={64}
          height={64}
          className="mx-auto h-16 w-16 object-contain"
        />
        <h2 className="mt-6 font-display text-3xl text-ink sm:text-4xl">
          The thirty-day standard
        </h2>
        <p className="mt-4 text-lg text-ink/75">{product.guarantee}</p>
        <a
          href="#buy"
          className="mt-8 inline-block rounded-full bg-royal px-10 py-4 text-lg font-semibold text-ivory transition-colors hover:bg-royal-deep"
        >
          Choose your option
        </a>
      </section>

      <StickyATC product={product} />
    </div>
  );
}

function Gallery({ product }: { product: Product }) {
  if (product.images.length === 0) {
    // Placeholder until the creative shoot — keeps layout honest in dev.
    return (
      <div className="flex aspect-square items-center justify-center rounded-lg border border-hairline bg-paper text-sm text-ink/40">
        Product imagery pending creative production
      </div>
    );
  }
  const [main, ...rest] = product.images;
  return (
    <div className="space-y-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={main}
        alt={product.name}
        className="w-full rounded-lg border border-hairline bg-paper"
      />
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {rest.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt={product.name}
              className="w-full rounded-lg border border-hairline bg-paper"
            />
          ))}
        </div>
      )}
    </div>
  );
}
