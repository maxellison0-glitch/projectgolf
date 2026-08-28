import Link from "next/link";
import { PRODUCTS } from "@/data/products";
import { gbp } from "@/lib/format";

export const metadata = { title: "Shop all — The Golf Den" };

export default function ShopPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-green mb-2">Shop all</h1>
      <p className="text-foreground/70 mb-10">
        Everything you need to practise at home this winter.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PRODUCTS.map((product) => {
          const price = product.variants[0].price;
          const compareAt = product.variants[0].compareAt;
          return (
            <Link
              key={product.slug}
              href={`/product/${product.slug}`}
              className="group block bg-white rounded-2xl border border-green/10 overflow-hidden hover:border-green/30 transition-colors"
            >
              <div className="aspect-square bg-cream overflow-hidden">
                {product.images[0] ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-foreground/40 text-sm">
                    Coming soon
                  </div>
                )}
              </div>
              <div className="p-4">
                <h2 className="font-bold text-green">{product.name}</h2>
                <p className="text-sm text-foreground/70 mt-1 line-clamp-2">{product.hook}</p>
                <div className="mt-2">
                  <span className="font-bold">{gbp(price)}</span>
                  {compareAt && (
                    <span className="ml-2 text-sm text-foreground/50 line-through">
                      {gbp(compareAt)}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
