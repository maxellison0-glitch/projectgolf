import { BRAND } from "@/config/brand";

export const metadata = { title: `Returns & Refunds — ${BRAND.name}` };

export default function ReturnsPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14 space-y-5">
      <h1 className="text-3xl font-bold text-green">Returns &amp; refunds</h1>
      <p>
        <strong>30-day money-back guarantee.</strong> If you&apos;re not happy for any
        reason, you have 30 days from delivery to return your order for a full refund.
      </p>
      <p>To start a return:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          Email <a href={`mailto:${BRAND.email}`} className="underline text-green">{BRAND.email}</a>{" "}
          with your order number.
        </li>
        <li>We&apos;ll reply within 1 working day with the return address and instructions.</li>
        <li>Refunds are processed within 14 days of us receiving the return, back to your original payment method.</li>
      </ol>
      <p>
        In line with the UK Consumer Contracts Regulations, you also have the right to
        cancel your order within 14 days of delivery for any reason; cancellation
        refunds include the basic outbound delivery cost. Your statutory rights are
        unaffected — faulty or misdescribed items are always refunded or replaced in
        full, including return postage.
      </p>
    </div>
  );
}
