import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getClothingProducts } from "@/data/products";
import type { Product } from "@/data/products";

export const metadata: Metadata = {
  title: "Golf Clothing & Apparel",
  description:
    "House of Par clothing — premium golf apparel designed for the course. Quarter zips, polos, hoodies, caps and accessories with free UK delivery.",
  alternates: { canonical: "/clothing" },
};

function ProductCard({ product }: { product: Product }) {
  const heroImage = product.images[0];
  const price = product.variants[0].price;

  return (
    <Link href={`/clothing/${product.slug}`} className="group block">
      <div className="overflow-hidden rounded-lg bg-paper">
        <div className="relative aspect-[3/4] w-full">
          {heroImage && (
            <Image
              src={heroImage}
              alt={product.name}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
            />
          )}
        </div>
      </div>
      <div className="mt-3">
        <h3 className="font-display text-base text-ink transition-colors group-hover:text-royal">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium text-ink/70">
          &pound;{(price / 100).toFixed(0)}
        </p>
      </div>
    </Link>
  );
}

export default function ClothingPage() {
  const products = getClothingProducts();
  const clothing = products.filter(
    (p) => p.category !== "Accessories"
  );
  const accessories = products.filter(
    (p) => p.category === "Accessories"
  );

  return (
    <div>
      {/* Hero */}
      <div className="relative -mt-[73px] h-[55svh] min-h-[320px] sm:h-[48vh]">
        <Image
          src="/products/hero/hero-polo-detail-mobile.png"
          alt="House of Par clothing"
          fill
          sizes="100vw"
          quality={85}
          className="object-cover object-[50%_25%] lg:hidden"
          priority
        />
        <Image
          src="/products/hero/hero-polo-detail.png"
          alt="House of Par clothing"
          fill
          sizes="100vw"
          quality={85}
          className="hidden object-cover object-[50%_25%] lg:block"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-ink/5" />
        <div className="absolute inset-x-0 bottom-0 px-5 pb-8 sm:px-8 sm:pb-10">
          <div className="mx-auto max-w-6xl">
            <h1 className="font-display text-3xl text-ivory sm:text-4xl lg:text-5xl">
              The Collection
            </h1>
            <p className="mt-2 max-w-md text-sm text-ivory/70 sm:text-base">
              Golf-ready apparel with the HOP crest — embroidered, never printed.
              Free UK tracked delivery on every order.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {/* Clothing grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
          {clothing.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>

        {/* Accessories */}
        {accessories.length > 0 && (
          <section className="mt-12 sm:mt-16">
            <h2 className="font-display text-xl text-ink sm:text-2xl">
              Accessories
            </h2>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {accessories.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}

        {/* Trust bar */}
        <section className="mt-12 rounded-lg bg-royal px-6 py-10 sm:mt-16 sm:px-10 sm:py-12">
          <div className="mx-auto grid max-w-3xl gap-6 text-center sm:grid-cols-3">
            <div>
              <h3 className="font-display text-base text-ivory sm:text-lg">
                Free UK Delivery
              </h3>
              <p className="mt-1 text-sm text-ivory/60">
                Tracked to your door, dispatched within 48h.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-ivory sm:text-lg">
                30-Day Returns
              </h3>
              <p className="mt-1 text-sm text-ivory/60">
                Not right? Full refund, no quibbles.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base text-ivory sm:text-lg">
                Embroidered Crest
              </h3>
              <p className="mt-1 text-sm text-ivory/60">
                Every detail stitched in thread, not printed.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
