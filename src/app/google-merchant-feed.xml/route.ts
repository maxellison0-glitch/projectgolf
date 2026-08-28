import { BRAND } from "@/config/brand";
import { PRODUCTS } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";

function escapeXml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export function GET() {
  const items = PRODUCTS.map((product) => {
    const variant = product.variants[0];
    return `<item>
      <g:id>HOP-${escapeXml(product.slug.toUpperCase())}</g:id>
      <g:title>${escapeXml(product.name)}</g:title>
      <g:description>${escapeXml(product.description)}</g:description>
      <g:link>${escapeXml(absoluteUrl(`/product/${product.slug}`))}</g:link>
      <g:image_link>${escapeXml(absoluteUrl(product.images[0]))}</g:image_link>
      ${product.images.slice(1).map((image) => `<g:additional_image_link>${escapeXml(absoluteUrl(image))}</g:additional_image_link>`).join("\n")}
      <g:availability>in_stock</g:availability>
      <g:price>${(variant.price / 100).toFixed(2)} GBP</g:price>
      <g:condition>new</g:condition>
      <g:brand>${escapeXml(BRAND.name)}</g:brand>
      <g:product_type>${escapeXml(`Golf > Training Aids > ${product.category}`)}</g:product_type>
      <g:identifier_exists>false</g:identifier_exists>
      <g:shipping>
        <g:country>GB</g:country>
        <g:service>Tracked delivery</g:service>
        <g:price>0.00 GBP</g:price>
      </g:shipping>
    </item>`;
  }).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss xmlns:g="http://base.google.com/ns/1.0" version="2.0">
  <channel>
    <title>${escapeXml(BRAND.name)}</title>
    <link>${escapeXml(absoluteUrl("/"))}</link>
    <description>Premium golf training aids for home practice in the UK.</description>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
