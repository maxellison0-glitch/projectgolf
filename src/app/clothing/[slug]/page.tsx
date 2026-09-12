import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/config/brand";
import { getProduct, getClothingProducts } from "@/data/products";
import { JsonLd } from "@/components/JsonLd";
import { ClothingLanding } from "@/components/ClothingLanding";
import { absoluteUrl, RETURN_POLICY, SHIPPING_DETAILS, SITE_URL } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getClothingProducts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found", robots: { index: false } };

  const canonical = `/clothing/${product.slug}`;

  return {
    title: product.name,
    description: `${product.subhook} Free UK tracked delivery and 30-day returns.`,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonical,
      siteName: BRAND.name,
      title: `${product.name} | ${BRAND.name}`,
      description: product.subhook,
      images: product.images.map((image) => ({ url: image, alt: product.name })),
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} | ${BRAND.name}`,
      description: product.subhook,
      images: product.images[0] ? [product.images[0]] : undefined,
    },
  };
}

export default async function ClothingProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productUrl = absoluteUrl(`/clothing/${product.slug}`);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: product.images.map(absoluteUrl),
    sku: `HOP-${product.slug.toUpperCase()}`,
    category: `Golf > Clothing > ${product.category}`,
    brand: { "@type": "Brand", name: BRAND.name },
    offers: product.variants.map((variant) => ({
      "@type": "Offer",
      sku: `HOP-${product.slug.toUpperCase()}-${variant.id.toUpperCase()}`,
      name: variant.label,
      url: productUrl,
      priceCurrency: "GBP",
      price: (variant.price / 100).toFixed(2),
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: { "@id": `${SITE_URL}/#organisation` },
      shippingDetails: SHIPPING_DETAILS,
      hasMerchantReturnPolicy: RETURN_POLICY,
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Clothing", item: absoluteUrl("/clothing") },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  const faqJsonLd =
    product.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: product.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.q,
            acceptedAnswer: { "@type": "Answer", text: faq.a },
          })),
        }
      : null;

  const jsonLdData = [productJsonLd, breadcrumbJsonLd, ...(faqJsonLd ? [faqJsonLd] : [])];

  return (
    <>
      <JsonLd data={jsonLdData} />
      <ClothingLanding product={product} />
    </>
  );
}
