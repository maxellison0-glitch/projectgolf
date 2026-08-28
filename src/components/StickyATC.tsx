"use client";

import { useEffect, useState } from "react";
import { gbp } from "@/lib/format";
import type { BuyableProduct } from "@/components/BuyBox";

/* Mobile sticky add-to-cart bar — appears once the main buy box scrolls
 * out of view. Playbook: sticky ATC on mobile is table stakes. */
export function StickyATC({ product }: { product: BuyableProduct }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const buy = document.getElementById("buy");
    if (!buy) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.top < 0),
      { threshold: 0 }
    );
    observer.observe(buy);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-hairline bg-ivory/95 p-3 shadow-[0_-4px_16px_rgba(19,28,51,0.08)] backdrop-blur sm:hidden">
      <a
        href="#buy"
        className="block w-full rounded-full bg-royal py-3.5 text-center font-semibold text-ivory"
      >
        Buy now — from {gbp(product.variants[0].price)}
      </a>
    </div>
  );
}
