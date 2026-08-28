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
    <div id="buy" className="space-y-4 scroll-mt-24">
      <div className="space-y-2">
        {product.variants.map((v) => (
          <button
            key={v.id}
            onClick={() => setVariantId(v.id)}
            className={`w-full text-left rounded-xl border-2 p-4 transition-colors ${
              v.id === variantId
                ? "border-green bg-green/5"
                : "border-green/15 hover:border-green/40"
            }`}
          >
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="font-semibold">{v.label}</p>
                {v.badge && (
                  <p className="text-xs text-brass font-semibold mt-0.5">{v.badge}</p>
                )}
              </div>
              <div className="text-right">
                <span className="font-bold text-lg">{gbp(v.price)}</span>
                {v.compareAt && (
                  <span className="block text-sm text-foreground/50 line-through">
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
        className="w-full bg-green text-cream font-bold text-lg py-4 rounded-full hover:bg-green-dark transition-colors disabled:opacity-60"
      >
        {loading ? "Taking you to checkout…" : `Get yours — ${gbp(variant.price)}`}
      </button>
      {error && <p className="text-sm text-red-700 text-center">{error}</p>}
      <p className="text-center text-sm text-foreground/70">
        Free UK tracked shipping · 30-day money-back guarantee
      </p>
    </div>
  );
}
