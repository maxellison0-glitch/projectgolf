"use client";

import { useEffect, useState } from "react";
import { gbp } from "@/lib/format";
import type { Product } from "@/data/products";

/* Mobile sticky add-to-cart bar — appears once the main buy box scrolls
 * out of view. Playbook: sticky ATC on mobile is table stakes. */
export function StickyATC({ product }: { product: Product }) {
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
    <div className="fixed bottom-0 inset-x-0 z-50 bg-cream border-t border-green/15 p-3 sm:hidden shadow-[0_-4px_16px_rgba(0,0,0,0.08)]">
      <a
        href="#buy"
        className="block w-full bg-green text-cream text-center font-bold py-3.5 rounded-full"
      >
        Get yours — from {gbp(product.variants[0].price)}
      </a>
    </div>
  );
}
