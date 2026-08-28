import { BRAND } from "@/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description: "House of Par offers a 30-day money-back guarantee on golf training aids, alongside your UK statutory cancellation rights.",
  alternates: { canonical: "/returns" },
};

export default function ReturnsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-14">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">
        Returns &amp; refunds
      </h1>
      <p className="text-ink/80">
        <strong className="text-ink">30-day money-back guarantee.</strong> If
        you&apos;re not happy for any reason, you have 30 days from delivery to
        return your order for a full refund.
      </p>
      <p className="text-ink/80">To start a return:</p>
      <ol className="list-decimal space-y-2 pl-6 text-ink/80">
        <li>
          Email{" "}
          <a
            href={`mailto:${BRAND.email}`}
            className="text-royal underline underline-offset-2"
          >
            {BRAND.email}
          </a>{" "}
          with your order number.
        </li>
        <li>We&apos;ll reply within 1 working day with the return address and instructions.</li>
        <li>Refunds are processed within 14 days of us receiving the return, back to your original payment method.</li>
      </ol>
      <p className="text-ink/80">
        In line with the UK Consumer Contracts Regulations, you also have the right to
        cancel your order within 14 days of delivery for any reason; cancellation
        refunds include the basic outbound delivery cost. Your statutory rights are
        unaffected — faulty or misdescribed items are always refunded or replaced in
        full, including return postage.
      </p>
    </div>
  );
}
