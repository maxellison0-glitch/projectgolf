import Image from "next/image";
import type { Metadata } from "next";
import Stripe from "stripe";
import { BRAND } from "@/config/brand";
import { PurchaseEvent } from "@/components/PurchaseEvent";

export const metadata: Metadata = {
  title: "Order confirmed",
  robots: { index: false, follow: false },
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id: sessionId } = await searchParams;
  const secretKey = process.env.STRIPE_SECRET_KEY;
  let purchaseData: Parameters<typeof PurchaseEvent>[0]["data"];

  if (sessionId && secretKey && sessionId.startsWith("cs_")) {
    try {
      const stripe = new Stripe(secretKey);
      const session = await stripe.checkout.sessions.retrieve(sessionId, { expand: ["line_items"] });
      if (session.payment_status === "paid" && session.amount_total && session.currency) {
        purchaseData = {
          transactionId: session.id,
          currency: session.currency.toUpperCase(),
          value: session.amount_total / 100,
          items: (session.line_items?.data ?? []).map((item, index) => ({
            item_id: `${session.metadata?.slug ?? "product"}-${session.metadata?.variantId ?? index}`,
            item_name: item.description ?? "House of Par product",
            item_variant: session.metadata?.variantId,
            price: (item.amount_total ?? 0) / 100,
            quantity: item.quantity ?? 1,
          })),
        };
      }
    } catch {
      // The confirmation page still renders if analytics enrichment fails.
    }
  }

  return (
    <div className="mx-auto max-w-xl space-y-5 px-4 py-24 text-center">
      <PurchaseEvent data={purchaseData} />
      <Image
        src="/brand/house-of-par-mark.png"
        alt=""
        aria-hidden="true"
        width={72}
        height={72}
        className="mx-auto h-18 w-18 object-contain"
      />
      <h1 className="font-display text-4xl text-ink">Order confirmed</h1>
      <p className="text-lg text-ink/80">
        Thank you — your order is in. You&apos;ll receive a confirmation email now and a
        tracking number as soon as it ships (within 24–48 hours).
      </p>
      <p className="text-ink/60">
        Questions? Email us any time at{" "}
        <a href={`mailto:${BRAND.email}`} className="text-royal underline underline-offset-2">
          {BRAND.email}
        </a>
        .
      </p>
    </div>
  );
}
