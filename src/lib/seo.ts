import { BRAND } from "@/config/brand";

export const SITE_URL = `https://www.${BRAND.domain}`;
export const BRAND_LOGO_URL = `${SITE_URL}/brand/house-of-par-seal.png`;

export function absoluteUrl(path = "/") {
  return new URL(path, SITE_URL).toString();
}

export const SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "GBP" },
  shippingDestination: { "@type": "DefinedRegion", addressCountry: "GB" },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: { "@type": "QuantitativeValue", minValue: 1, maxValue: 2, unitCode: "DAY" },
    transitTime: { "@type": "QuantitativeValue", minValue: 10, maxValue: 19, unitCode: "DAY" },
  },
} as const;

export const RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "GB",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 30,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/ReturnFeesCustomerResponsibility",
  merchantReturnLink: absoluteUrl("/returns"),
} as const;

export function organisationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "OnlineStore",
    "@id": `${SITE_URL}/#organisation`,
    name: BRAND.name,
    legalName: BRAND.legalName,
    url: SITE_URL,
    logo: BRAND_LOGO_URL,
    image: BRAND_LOGO_URL,
    email: BRAND.email,
    currenciesAccepted: "GBP",
    areaServed: "GB",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: BRAND.email,
      availableLanguage: "English",
      areaServed: "GB",
    },
    hasMerchantReturnPolicy: RETURN_POLICY,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BRAND.name,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organisation` },
  };
}
