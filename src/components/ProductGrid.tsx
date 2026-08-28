import Link from "next/link";
import { PRODUCTS, standardNo, type Product } from "@/data/products";
import { gbp } from "@/lib/format";

/* The catalogue: every product presented as a numbered standard, as equals.
 * No product gets top billing — the sales data decides the winners. */
export function ProductGrid({
  exclude,
  compact = false,
}: {
  exclude?: string;
  compact?: boolean;
}) {
  const items = PRODUCTS.filter((p) => p.slug !== exclude);
  return (
    <div
      className={
        compact
          ? "grid gap-x-6 gap-y-10 sm:grid-cols-3"
          : "grid gap-x-8 gap-y-14 sm:grid-cols-2"
      }
    >
      {items.map((p) => (
        <Card key={p.slug} product={p} compact={compact} />
      ))}
    </div>
  );
}

function Card({ product, compact }: { product: Product; compact: boolean }) {
  const v = product.variants[0];
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg border border-hairline bg-paper">
        {product.images[0] ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.images[0]}
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="flex aspect-[4/5] w-full items-center justify-center text-sm text-ink/40">
            Photography to follow
          </div>
        )}
      </div>
      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
          {standardNo(product)} · {product.category}
        </p>
        <h3
          className={`mt-1.5 font-display text-ink transition-colors group-hover:text-royal ${
            compact ? "text-lg" : "text-xl sm:text-2xl"
          }`}
        >
          {product.name}
        </h3>
        {!compact && <p className="mt-1.5 text-sm text-ink/70">{product.hook}</p>}
        <p className="mt-2 font-semibold text-ink">
          {gbp(v.price)}
          {v.compareAt && (
            <span className="ml-2 font-normal text-ink/40 line-through">
              {gbp(v.compareAt)}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
}
