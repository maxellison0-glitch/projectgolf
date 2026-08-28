import Link from "next/link";
import type { Product } from "@/data/products";
import { PRODUCTS } from "@/data/products";
import { BuyBox } from "@/components/BuyBox";
import { StickyATC } from "@/components/StickyATC";
import { FAQ } from "@/components/FAQ";
import { TrustBar } from "@/components/TrustBar";
import { gbp } from "@/lib/format";

/* The money page. Structure per the playbook: hook headline → gallery →
 * buy box → benefits → how-it-works → social proof → FAQ → guarantee. */
export function ProductLanding({ product }: { product: Product }) {
  const hasRealReviews = product.reviews.some((r) => r.author !== "—");

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Hero */}
      <section className="grid lg:grid-cols-2 gap-10 py-10 items-start">
        <div className="space-y-4">
          <Gallery product={product} />
        </div>
        <div className="space-y-5">
          <h1 className="text-4xl sm:text-5xl font-bold text-green leading-tight">
            {product.hook}
          </h1>
          <p className="text-lg text-foreground/80">{product.subhook}</p>
          <BuyBox product={product} />
        </div>
      </section>

      <TrustBar />

      {/* Benefits */}
      <section className="py-14">
        <h2 className="text-3xl font-bold text-green text-center mb-10">
          Why golfers keep it rolled out all winter
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {product.benefits.map((b) => (
            <div key={b.title} className="bg-white rounded-2xl p-6 border border-green/10">
              <h3 className="font-bold text-lg mb-2 text-green">{b.title}</h3>
              <p className="text-foreground/80">{b.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="py-14 bg-green rounded-3xl text-cream px-6 sm:px-12">
        <h2 className="text-3xl font-bold text-center mb-10">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {product.howItWorks.map((step, i) => (
            <div key={step.step} className="text-center">
              <div className="w-10 h-10 rounded-full bg-brass text-green-dark font-bold flex items-center justify-center mx-auto mb-3">
                {i + 1}
              </div>
              <h3 className="font-bold text-lg mb-1">{step.step}</h3>
              <p className="text-cream/80">{step.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social proof — hidden until real reviews exist. Never fake them. */}
      {hasRealReviews && (
        <section className="py-14">
          <h2 className="text-3xl font-bold text-green text-center mb-10">
            What golfers are saying
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {product.reviews.map((r) => (
              <div key={r.author + r.title} className="bg-white rounded-2xl p-6 border border-green/10">
                <p className="text-brass mb-2" aria-label={`${r.rating} out of 5 stars`}>
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </p>
                <h3 className="font-bold mb-1">{r.title}</h3>
                <p className="text-foreground/80 text-sm mb-2">{r.body}</p>
                <p className="text-sm text-foreground/60">— {r.author}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Cross-sell — the other products are otherwise unreachable */}
      <OtherProducts current={product.slug} />

      {/* FAQ */}
      <section className="py-14 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-green text-center mb-8">
          Questions, answered
        </h2>
        <FAQ faqs={product.faqs} />
      </section>

      {/* Guarantee + final CTA */}
      <section className="py-14 text-center max-w-2xl mx-auto space-y-5">
        <div className="text-5xl" aria-hidden>🛡️</div>
        <h2 className="text-3xl font-bold text-green">Zero-risk guarantee</h2>
        <p className="text-lg text-foreground/80">{product.guarantee}</p>
        <a
          href="#buy"
          className="inline-block bg-green text-cream font-bold text-lg px-10 py-4 rounded-full hover:bg-green-dark transition-colors"
        >
          Start practising at home
        </a>
      </section>

      <StickyATC product={product} />
    </div>
  );
}

function OtherProducts({ current }: { current: string }) {
  const others = PRODUCTS.filter((p) => p.slug !== current);
  if (others.length === 0) return null;
  return (
    <section className="py-14">
      <h2 className="text-3xl font-bold text-green text-center mb-10">
        Complete your practice setup
      </h2>
      <div className="grid sm:grid-cols-3 gap-6">
        {others.map((p) => (
          <Link
            key={p.slug}
            href={`/product/${p.slug}`}
            className="group block bg-white rounded-2xl border border-green/10 overflow-hidden hover:border-green/30 transition-colors"
          >
            <div className="aspect-square bg-cream overflow-hidden">
              {p.images[0] && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              )}
            </div>
            <div className="p-4">
              <h3 className="font-bold text-green">{p.name}</h3>
              <p className="font-bold mt-1">{gbp(p.variants[0].price)}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Gallery({ product }: { product: Product }) {
  if (product.images.length === 0) {
    // Placeholder until the creative shoot — keeps layout honest in dev.
    return (
      <div className="aspect-square rounded-3xl bg-gradient-to-br from-green to-green-dark flex items-center justify-center text-cream/60 text-sm">
        Product imagery pending creative production
      </div>
    );
  }
  const [main, ...rest] = product.images;
  return (
    <div className="space-y-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={main} alt={product.name} className="rounded-3xl w-full" />
      {rest.length > 0 && (
        <div className="grid grid-cols-2 gap-3">
          {rest.map((src) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img key={src} src={src} alt={product.name} className="rounded-2xl w-full" />
          ))}
        </div>
      )}
    </div>
  );
}
