"use client";

import { useState } from "react";
import { gbp } from "@/lib/format";
import { trackGa4, trackMeta } from "@/lib/analytics";
import type { BuyableProduct } from "@/components/BuyBox";

export function ClothingBuyBox({ product }: { product: BuyableProduct }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const variant = product.variants.find((v) => v.id === variantId)!;

  async function checkout() {
    setLoading(true);
    setError(null);
    trackMeta("InitiateCheckout", {
      content_name: product.name,
      value: variant.price / 100,
      currency: "GBP",
    });
    trackGa4("begin_checkout", {
      currency: "GBP",
      value: variant.price / 100,
      items: [
        {
          item_id: `${product.slug}-${variant.id}`,
          item_name: product.name,
          item_variant: variant.label,
          item_category: product.category,
          price: variant.price / 100,
          quantity: 1,
        },
      ],
    });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug, variantId }),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.assign(data.url);
      } else {
        setError(data.error ?? "Checkout isn't available right now.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="buy" className="scroll-mt-24">
      <p className="font-display text-2xl text-ink">{gbp(variant.price)}</p>

      {product.variants.length > 1 && (
        <div className="mt-5">
          <p className="mb-2.5 text-sm font-medium text-ink/60">Size</p>
          <div className="flex flex-wrap gap-2">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setVariantId(v.id)}
                aria-pressed={v.id === variantId}
                className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
                  v.id === variantId
                    ? "border-royal bg-royal text-ivory"
                    : "border-hairline bg-paper text-ink hover:border-royal/40"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={checkout}
        disabled={loading}
        className="mt-6 w-full rounded-full bg-royal py-4 text-lg font-semibold text-ivory transition-colors hover:bg-royal-deep disabled:opacity-60"
      >
        {loading ? "Preparing checkout…" : "Buy now"}
      </button>

      {error && <p className="mt-2 text-center text-sm text-red-700">{error}</p>}

      <div className="mt-4 flex items-center justify-center gap-4 text-sm text-ink/50">
        <span>Free UK delivery</span>
        <span aria-hidden>&middot;</span>
        <span>30-day returns</span>
      </div>
    </div>
  );
}
