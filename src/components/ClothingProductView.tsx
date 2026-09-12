"use client";

import { useState } from "react";
import Image from "next/image";
import type { Variant } from "@/data/products";
import { ClothingBuyBox } from "./ClothingBuyBox";
import { ProductAccordion } from "./ProductAccordion";

type Props = {
  slug: string;
  name: string;
  category: string;
  description: string;
  variantType?: "size" | "colour";
  variants: Variant[];
  defaultImage: string;
  accordionItems: { title: string; content: string }[];
};

export function ClothingProductView({
  slug,
  name,
  category,
  description,
  variantType,
  variants,
  defaultImage,
  accordionItems,
}: Props) {
  const [selectedVariantId, setSelectedVariantId] = useState(variants[0].id);
  const selectedVariant = variants.find((v) => v.id === selectedVariantId);
  const currentImage = selectedVariant?.image || defaultImage;

  const buyable = { slug, name, category, variants, variantType };

  return (
    <section className="grid items-start gap-8 pb-16 lg:grid-cols-2 lg:gap-14">
      <div className="overflow-hidden rounded-lg bg-paper">
        <div className="relative aspect-[3/4] w-full">
          {currentImage && (
            <Image
              src={currentImage}
              alt={name}
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-top"
            />
          )}
        </div>
      </div>

      <div className="lg:sticky lg:top-24">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          {category}
        </p>
        <h1 className="mt-2 font-display text-3xl uppercase tracking-wide text-ink sm:text-4xl lg:text-[2.75rem]">
          {name}
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-ink/70">
          {description}
        </p>

        <div className="mt-8">
          <ClothingBuyBox
            product={buyable}
            image={currentImage}
            selectedVariantId={selectedVariantId}
            onVariantChange={setSelectedVariantId}
          />
        </div>

        <div className="mt-8">
          <ProductAccordion items={accordionItems} />
        </div>
      </div>
    </section>
  );
}
