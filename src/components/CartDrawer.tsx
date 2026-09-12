"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { gbp } from "@/lib/format";
import { trackGa4, trackMeta } from "@/lib/analytics";

export function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    subtotal,
    itemCount,
  } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, closeCart]);

  async function checkout() {
    if (items.length === 0) return;
    setLoading(true);
    setError(null);

    trackMeta("InitiateCheckout", {
      content_name: items.map((i) => i.name).join(", "),
      value: subtotal / 100,
      currency: "GBP",
    });
    trackGa4("begin_checkout", {
      currency: "GBP",
      value: subtotal / 100,
      items: items.map((i) => ({
        item_id: `${i.slug}-${i.variantId}`,
        item_name: i.name,
        item_variant: i.variantLabel,
        price: i.price / 100,
        quantity: i.quantity,
      })),
    });

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: items.map((i) => ({
            slug: i.slug,
            variantId: i.variantId,
            quantity: i.quantity,
          })),
        }),
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

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          backgroundColor: "rgba(11,59,42,0.4)",
        }}
        onClick={closeCart}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        role="dialog"
        aria-label="Shopping bag"
        aria-modal="true"
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 51,
          width: "100%",
          maxWidth: "28rem",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "var(--color-ivory, #f4efe3)",
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.25)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid var(--color-hairline, #e5e0d5)",
            padding: "1rem 1.25rem",
          }}
        >
          <h2 className="font-display text-lg tracking-wide text-ink">
            Bag ({itemCount})
          </h2>
          <button
            onClick={closeCart}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
            aria-label="Close bag"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M4 4l10 10M14 4L4 14" />
            </svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: "auto", padding: "1rem 1.25rem" }}>
          {items.length === 0 ? (
            <div
              style={{
                display: "flex",
                height: "100%",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <p className="text-ink/40">Your bag is empty</p>
              <Link
                href="/clothing"
                onClick={closeCart}
                className="mt-4 text-sm font-medium text-royal underline underline-offset-2 hover:text-royal-deep"
              >
                Browse the collection
              </Link>
            </div>
          ) : (
            <ul style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {items.map((item) => (
                <li
                  key={`${item.slug}-${item.variantId}`}
                  style={{ display: "flex", gap: "1rem" }}
                >
                  <Link
                    href={`/clothing/${item.slug}`}
                    onClick={closeCart}
                    style={{
                      position: "relative",
                      height: "6rem",
                      width: "5rem",
                      flexShrink: 0,
                      overflow: "hidden",
                      borderRadius: "0.25rem",
                      backgroundColor: "var(--color-paper, #f9f6f0)",
                    }}
                  >
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        sizes="80px"
                        className="object-cover object-top"
                      />
                    )}
                  </Link>
                  <div
                    style={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Link
                      href={`/clothing/${item.slug}`}
                      onClick={closeCart}
                      className="text-sm font-medium text-ink hover:text-royal"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-0.5 text-xs text-ink/50">
                      {item.variantLabel}
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">
                      {gbp(item.price)}
                    </p>
                    <div
                      style={{
                        marginTop: "auto",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        paddingTop: "0.5rem",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          borderRadius: "0.25rem",
                          border: "1px solid var(--color-hairline, #e5e0d5)",
                        }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.slug,
                              item.variantId,
                              item.quantity - 1
                            )
                          }
                          style={{ padding: "0.25rem 0.5rem", fontSize: "0.875rem" }}
                          className="text-ink/60 hover:text-ink"
                          aria-label="Decrease quantity"
                        >
                          -
                        </button>
                        <span
                          style={{
                            minWidth: "1.5rem",
                            textAlign: "center",
                            fontSize: "0.875rem",
                          }}
                          className="text-ink"
                        >
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.slug,
                              item.variantId,
                              item.quantity + 1
                            )
                          }
                          style={{ padding: "0.25rem 0.5rem", fontSize: "0.875rem" }}
                          className="text-ink/60 hover:text-ink"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() =>
                          removeItem(item.slug, item.variantId)
                        }
                        className="text-xs text-ink/40 underline underline-offset-2 hover:text-ink/70"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            style={{
              borderTop: "1px solid var(--color-hairline, #e5e0d5)",
              padding: "1.25rem",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
              }}
            >
              <span className="text-sm text-ink/60">Subtotal</span>
              <span className="font-display text-lg text-ink">
                {gbp(subtotal)}
              </span>
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: "0.75rem",
                marginBottom: "1rem",
              }}
              className="text-ink/40"
            >
              Free UK tracked delivery on every order
            </p>
            <button
              onClick={checkout}
              disabled={loading}
              className="w-full rounded-full bg-royal py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-royal-deep disabled:opacity-60"
            >
              {loading ? "Preparing checkout..." : "Checkout"}
            </button>

            {error && (
              <p className="mt-2 text-center text-sm text-red-700">{error}</p>
            )}

            <button
              onClick={closeCart}
              style={{
                width: "100%",
                padding: "0.5rem 0",
                marginTop: "0.75rem",
                textAlign: "center",
              }}
              className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
            >
              Continue shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
