import Image from "next/image";
import { BRAND } from "@/config/brand";

export default function SuccessPage() {
  return (
    <div className="mx-auto max-w-xl space-y-5 px-4 py-24 text-center">
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
