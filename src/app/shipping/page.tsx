import { BRAND } from "@/config/brand";

export const metadata = { title: `Shipping & Delivery — ${BRAND.name}` };

export default function ShippingPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14 space-y-5">
      <h1 className="text-3xl font-bold text-green">Shipping &amp; delivery</h1>
      <p>
        Every order ships free to any UK address with full tracking. Orders are
        dispatched within 24–48 hours of purchase.
      </p>
      <p>
        <strong>Delivery time: {BRAND.deliveryEstimate}.</strong> We&apos;re honest about
        this — your order ships from our fulfilment partner&apos;s warehouse and we&apos;d
        rather tell you the real timeframe than surprise you. You&apos;ll receive your
        tracking number by email as soon as your order is dispatched.
      </p>
      <p>
        If your order hasn&apos;t arrived within the estimated window, email{" "}
        <a href={`mailto:${BRAND.email}`} className="underline text-green">{BRAND.email}</a>{" "}
        and we&apos;ll chase it immediately — or refund you in full if it&apos;s lost.
      </p>
    </div>
  );
}
