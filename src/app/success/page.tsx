import { BRAND } from "@/config/brand";

export default function SuccessPage() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center space-y-5">
      <div className="text-6xl" aria-hidden>⛳</div>
      <h1 className="text-4xl font-bold text-green">Order confirmed!</h1>
      <p className="text-lg text-foreground/80">
        Thank you — your order is in. You&apos;ll receive a confirmation email now and a
        tracking number as soon as it ships (within 24–48 hours).
      </p>
      <p className="text-foreground/70">
        Questions? Email us any time at{" "}
        <a href={`mailto:${BRAND.email}`} className="underline text-green">
          {BRAND.email}
        </a>
        .
      </p>
    </div>
  );
}
