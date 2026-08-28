import { BRAND } from "@/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UK Shipping & Delivery",
  description: "Free tracked UK delivery on every House of Par order, with dispatch in 24–48 hours and an honest 2–3 week delivery estimate.",
  alternates: { canonical: "/shipping" },
};

export default function ShippingPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-14">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">
        Shipping &amp; delivery
      </h1>
      <p className="text-ink/80">
        Every order ships free to any UK address with full tracking. Orders are
        dispatched within 24–48 hours of purchase.
      </p>
      <p className="text-ink/80">
        <strong className="text-ink">Delivery time: {BRAND.deliveryEstimate}.</strong>{" "}
        We&apos;re honest about this — your order ships from our fulfilment
        partner&apos;s warehouse and we&apos;d rather tell you the real timeframe
        than surprise you. You&apos;ll receive your tracking number by email as
        soon as your order is dispatched.
      </p>
      <p className="text-ink/80">
        If your order hasn&apos;t arrived within the estimated window, email{" "}
        <a
          href={`mailto:${BRAND.email}`}
          className="text-royal underline underline-offset-2"
        >
          {BRAND.email}
        </a>{" "}
        and we&apos;ll chase it immediately — or refund you in full if it&apos;s lost.
      </p>
    </div>
  );
}
