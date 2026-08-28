import { BRAND } from "@/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BRAND.name} collects, uses and protects customer and website data.`,
  alternates: { canonical: "/privacy" },
};

/* Skeleton UK GDPR privacy policy — review before launch. */
export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-14">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Privacy policy</h1>
      <p className="text-ink/80">
        {BRAND.name} (&quot;we&quot;) respects your privacy. This policy explains what
        personal data we collect and how we use it.
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">What we collect</h2>
      <p className="text-ink/80">
        When you place an order: your name, email, shipping address and payment
        details (processed securely by Stripe — we never see or store your card
        number). When you browse: anonymous analytics and advertising data via
        cookies (Meta Pixel, Google Analytics) where you consent.
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">How we use it</h2>
      <p className="text-ink/80">
        To fulfil your order, provide tracking and customer support, and — if you
        opt in — send occasional marketing emails you can unsubscribe from at any
        time. We share data only with the services needed to deliver your order
        (payment processor, fulfilment partner, courier).
      </p>
      <h2 className="pt-2 font-display text-xl text-ink">Your rights</h2>
      <p className="text-ink/80">
        Under UK GDPR you can request access to, correction of, or deletion of
        your personal data at any time by emailing{" "}
        <a
          href={`mailto:${BRAND.email}`}
          className="text-royal underline underline-offset-2"
        >
          {BRAND.email}
        </a>
        .
      </p>
    </div>
  );
}
