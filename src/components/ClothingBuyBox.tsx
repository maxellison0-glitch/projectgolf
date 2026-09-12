"use client";

import { useState } from "react";
import { gbp } from "@/lib/format";
import { trackGa4, trackMeta } from "@/lib/analytics";
import { useCart } from "@/context/CartContext";
import type { BuyableProduct } from "@/components/BuyBox";

export function ClothingBuyBox({
  product,
  image,
}: {
  product: BuyableProduct;
  image: string;
}) {
  const [variantId, setVariantId] = useState(product.variants[0].id);
  const { addItem } = useCart();
  const variant = product.variants.find((v) => v.id === variantId)!;

  function handleAddToBag() {
    trackMeta("AddToCart", {
      content_name: product.name,
      value: variant.price / 100,
      currency: "GBP",
    });
    trackGa4("add_to_cart", {
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

    addItem({
      slug: product.slug,
      name: product.name,
      variantId: variant.id,
      variantLabel: variant.label,
      price: variant.price,
      image,
    });
  }

  return (
    <div id="buy" className="scroll-mt-24">
      <p className="font-display text-2xl text-ink">{gbp(variant.price)}</p>

      {product.variants.length > 1 && (
        <div className="mt-5">
          <div className="mb-2.5 flex items-center justify-between">
            <p className="text-sm font-medium text-ink/60">Size</p>
          </div>
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
        onClick={handleAddToBag}
        className="mt-6 w-full rounded-full bg-royal py-4 text-lg font-semibold text-ivory transition-colors hover:bg-royal-deep"
      >
        Add to Bag
      </button>

      <div className="mt-4 flex items-center justify-center gap-4 text-sm text-ink/50">
        <span>Free UK delivery</span>
        <span aria-hidden>&middot;</span>
        <span>30-day returns</span>
      </div>
    </div>
  );
}
