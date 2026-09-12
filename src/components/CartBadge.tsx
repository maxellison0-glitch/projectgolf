"use client";

import { useCart } from "@/context/CartContext";

export function CartBadge({ transparent = false }: { transparent?: boolean }) {
  const { itemCount, openCart } = useCart();

  return (
    <button
      onClick={openCart}
      className={`relative flex items-center gap-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
        transparent
          ? "border border-ivory/30 bg-ivory/10 px-5 py-2 text-ivory backdrop-blur-sm hover:bg-ivory/20"
          : "bg-royal px-5 py-2 text-ivory hover:bg-royal-deep"
      }`}
      aria-label={`Open bag, ${itemCount} items`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 5V4a3 3 0 1 1 6 0v1" />
        <rect x="2" y="5" width="12" height="9" rx="1.5" />
      </svg>
      <span>Bag</span>
      <span className="ml-0.5">({itemCount})</span>
    </button>
  );
}
