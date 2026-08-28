import { BRAND } from "@/config/brand";

export const metadata = { title: `Privacy Policy — ${BRAND.name}` };

/* Skeleton UK GDPR privacy policy — review before launch. */
export default function PrivacyPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14 space-y-5">
      <h1 className="text-3xl font-bold text-green">Privacy policy</h1>
      <p>
        {BRAND.name} (&quot;we&quot;) respects your privacy. This policy explains what
        personal data we collect and how we use it.
      </p>
      <h2 className="text-xl font-bold text-green">What we collect</h2>
      <p>
        When you place an order: your name, email, shipping address and payment
        details (processed securely by Stripe — we never see or store your card
        number). When you browse: anonymous analytics and advertising data via
        cookies (Meta Pixel, Google Analytics) where you consent.
      </p>
      <h2 className="text-xl font-bold text-green">How we use it</h2>
      <p>
        To fulfil your order, provide tracking and customer support, and — if you
        opt in — send occasional marketing emails you can unsubscribe from at any
        time. We share data only with the services needed to deliver your order
        (payment processor, fulfilment partner, courier).
      </p>
      <h2 className="text-xl font-bold text-green">Your rights</h2>
      <p>
        Under UK GDPR you can request access to, correction of, or deletion of
        your personal data at any time by emailing{" "}
        <a href={`mailto:${BRAND.email}`} className="underline text-green">{BRAND.email}</a>.
      </p>
    </div>
  );
}
