import { BRAND } from "@/config/brand";

export const metadata = { title: `Terms of Service — ${BRAND.name}` };

/* Skeleton terms — review before launch. */
export default function TermsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14 space-y-5">
      <h1 className="text-3xl font-bold text-green">Terms of service</h1>
      <p>
        These terms apply to all purchases from {BRAND.name}. By placing an order
        you agree to them. Nothing in these terms affects your statutory rights as
        a UK consumer.
      </p>
      <h2 className="text-xl font-bold text-green">Orders &amp; payment</h2>
      <p>
        All prices are in GBP and include UK VAT where applicable. Payment is taken
        at checkout via Stripe. We reserve the right to cancel and refund any order
        we cannot fulfil.
      </p>
      <h2 className="text-xl font-bold text-green">Delivery</h2>
      <p>
        Delivery estimates are shown on our shipping page and at checkout. Risk in
        the goods passes to you on delivery.
      </p>
      <h2 className="text-xl font-bold text-green">Returns</h2>
      <p>
        See our returns policy for the 30-day guarantee and your 14-day statutory
        cancellation right.
      </p>
      <h2 className="text-xl font-bold text-green">Contact</h2>
      <p>
        {BRAND.legalName}, {BRAND.address} ·{" "}
        <a href={`mailto:${BRAND.email}`} className="underline text-green">{BRAND.email}</a>
      </p>
    </div>
  );
}
