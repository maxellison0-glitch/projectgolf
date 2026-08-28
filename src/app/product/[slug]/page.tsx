import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BRAND } from "@/config/brand";
import { getProduct, PRODUCTS } from "@/data/products";
import { JsonLd } from "@/components/JsonLd";
import { ProductLanding } from "@/components/ProductLanding";
import { absoluteUrl, RETURN_POLICY, SHIPPING_DETAILS, SITE_URL } from "@/lib/seo";

type ProductPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found", robots: { index: false } };

  const canonical = `/product/${product.slug}`;
  const title = `${product.name} UK`;

  return {
    title,
    description: `${product.subhook} Free UK tracked delivery and a 30-day money-back guarantee.`,
    alternates: { canonical },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: canonical,
      siteName: BRAND.name,
      title,
      description: product.subhook,
      images: product.images.map((image) => ({ url: image, alt: product.name })),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.subhook,
      images: product.images[0] ? [product.images[0]] : undefined,
    },
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const productUrl = absoluteUrl(`/product/${product.slug}`);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    description: product.description,
    image: product.images.map(absoluteUrl),
    sku: `HOP-${product.slug.toUpperCase()}`,
    category: `Golf > Training Aids > ${product.category}`,
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
      { "@type": "ListItem", position: 2, name: "Shop", item: absoluteUrl("/shop") },
      { "@type": "ListItem", position: 3, name: product.name, item: productUrl },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <>
      <JsonLd data={[productJsonLd, breadcrumbJsonLd, faqJsonLd]} />
      <ProductLanding product={product} />
    </>
  );
}
