import { BRAND } from "@/config/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${BRAND.name} customer service about orders, delivery, returns or our golf training aids.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-5 px-4 py-14">
      <h1 className="font-display text-3xl text-ink sm:text-4xl">Contact us</h1>
      <p className="text-ink/80">
        We answer every email within 1 working day, usually much faster.
      </p>
      <p className="text-ink/80">
        Email:{" "}
        <a
          href={`mailto:${BRAND.email}`}
          className="font-semibold text-royal underline underline-offset-2"
        >
          {BRAND.email}
        </a>
      </p>
      <p className="text-ink/60">
        {BRAND.legalName} · {BRAND.address}
      </p>
    </div>
  );
}
