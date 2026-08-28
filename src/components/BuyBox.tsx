"use client";

import { useState } from "react";
import { gbp } from "@/lib/format";
import { track } from "@/lib/analytics";
import type { Product } from "@/data/products";

export function BuyBox({ product }: { product: Product }) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const variant = product.variants.find((v) => v.id === variantId)!;

  async function checkout() {
    setLoading(true);
    setError(null);
    track("InitiateCheckout", {
      content_name: product.name,
      value: variant.price / 100,
      currency: "GBP",
    });
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: product.slug, variantId }),
      });
      const data = await res.json();
      if (res.ok && data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error ?? "Checkout isn't available right now. Please try again shortly.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div id="buy" className="scroll-mt-24 space-y-4">
      <div className="space-y-2.5">
        {product.variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setVariantId(v.id)}
            aria-pressed={v.id === variantId}
            className={`w-full rounded-lg border p-4 text-left transition-colors ${
              v.id === variantId
                ? "border-royal bg-royal/[0.05]"
                : "border-hairline bg-paper hover:border-royal/40"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-medium text-ink">{v.label}</p>
                {v.badge && (
                  <p className="mt-0.5 text-xs font-semibold text-royal">{v.badge}</p>
                )}
              </div>
              <div className="text-right">
                <span className="text-lg font-semibold text-ink">{gbp(v.price)}</span>
                {v.compareAt && (
                  <span className="block text-sm text-ink/40 line-through">
                    {gbp(v.compareAt)}
                  </span>
                )}
              </div>
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={checkout}
        disabled={loading}
        className="w-full rounded-full bg-royal py-4 text-lg font-semibold text-ivory transition-colors hover:bg-royal-deep disabled:opacity-60"
      >
        {loading ? "Preparing checkout…" : `Buy now — ${gbp(variant.price)}`}
      </button>
      {error && <p className="text-center text-sm text-red-700">{error}</p>}
      <p className="text-center text-sm text-ink/60">
        Free UK tracked delivery · 30-day money-back guarantee
      </p>
    </div>
  );
}
