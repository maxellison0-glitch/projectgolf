"use client";

import { useEffect, useState } from "react";
import { gbp } from "@/lib/format";
import { useCart } from "@/context/CartContext";
import type { BuyableProduct } from "@/components/BuyBox";

export function StickyATC({
  product,
  image,
}: {
  product: BuyableProduct;
  image: string;
}) {
  const [visible, setVisible] = useState(false);
  const { addItem } = useCart();

  useEffect(() => {
    const buy = document.getElementById("buy");
    if (!buy) return;
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(
          !entry.isIntersecting && entry.boundingClientRect.top < 0
        ),
      { threshold: 0 }
    );
    observer.observe(buy);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  function handleAdd() {
    const variant = product.variants[0];
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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-ivory/95 p-3 shadow-[0_-4px_16px_rgba(19,28,51,0.08)] backdrop-blur sm:hidden">
      <button
        onClick={handleAdd}
        className="block w-full rounded-full bg-royal py-3.5 text-center font-semibold text-ivory"
      >
        Add to Bag — from {gbp(product.variants[0].price)}
      </button>
    </div>
  );
}
