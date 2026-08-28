import { BRAND } from "@/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing orders, payment, delivery and returns from ${BRAND.name}.`,
  alternates: { canonical: "/terms" },
};

/* Skeleton terms — review before launch. */
export default function TermsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-14">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Terms of service</h1>
      <p className="text-ink/80">
        These terms apply to all purchases from {BRAND.name}. By placing an order
        you agree to them. Nothing in these terms affects your statutory rights as
        a UK consumer.
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">Orders &amp; payment</h2>
      <p className="text-ink/80">
        All prices are in GBP and include UK VAT where applicable. Payment is taken
        at checkout via Stripe. We reserve the right to cancel and refund any order
        we cannot fulfil.
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">Delivery</h2>
      <p className="text-ink/80">
        Delivery estimates are shown on our shipping page and at checkout. Risk in
        the goods passes to you on delivery.
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">Returns</h2>
      <p className="text-ink/80">
        See our returns policy for the 30-day guarantee and your 14-day statutory
        cancellation right.
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">Contact</h2>
      <p className="text-ink/80">
        {BRAND.legalName}, {BRAND.address} ·{" "}
        <a
          href={`mailto:${BRAND.email}`}
          className="text-royal underline underline-offset-2"
        >
          {BRAND.email}
        </a>
      </p>
    </div>
  );
}
