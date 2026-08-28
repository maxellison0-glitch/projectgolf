import type { Metadata } from "next";
import { ProductGrid } from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "Golf Training Aids for Home Practice UK",
  description:
    "Shop premium golf training aids for home practice: putting mats, alignment mirrors, grip trainers and impact bags with free UK delivery.",
  alternates: { canonical: "/shop" },
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
        The collection
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
        Golf training aids for home practice
      </h1>
      <p className="mt-4 max-w-2xl font-voice text-lg italic text-ink/75">
        Build a repeatable putting stroke, grip and impact position at home with
        the House of Par collection. Each piece is guaranteed for thirty days
        and delivered free across the UK.
      </p>
      <div className="mt-12">
        <ProductGrid />
      </div>
    </div>
  );
}
