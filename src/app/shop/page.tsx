import { BRAND } from "@/config/brand";
import { ProductGrid } from "@/components/ProductGrid";

export const metadata = { title: `The collection — ${BRAND.name}` };

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:py-16">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">
        The collection
      </p>
      <h1 className="mt-2 font-display text-4xl text-ink sm:text-5xl">
        Every standard in the house
      </h1>
      <p className="mt-4 max-w-xl font-voice text-lg italic text-ink/75">
        Numbered in the order they earned their place. Each guaranteed for
        thirty days, delivered free across the UK.
      </p>
      <div className="mt-12">
        <ProductGrid />
      </div>
    </div>
  );
}
