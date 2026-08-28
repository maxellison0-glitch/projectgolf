import type { Metadata } from "next";
import { Marcellus, EB_Garamond, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { BRAND } from "@/config/brand";
import { SITE_URL, organisationJsonLd, websiteJsonLd } from "@/lib/seo";
import { AnalyticsScripts } from "@/lib/analytics";
import { AnalyticsPageView } from "@/components/AnalyticsPageView";
import { JsonLd } from "@/components/JsonLd";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

const garamond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "House of Par | Golf Training Aids for Home Practice UK",
    template: `%s | ${BRAND.name}`,
  },
  description:
    "Premium golf training aids for home practice, including putting mats, alignment mirrors and swing trainers. Free UK tracked delivery.",
  applicationName: BRAND.name,
  category: "Golf equipment",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: BRAND.name,
    title: "House of Par | Golf Training Aids for Home Practice UK",
    description:
      "Premium golf training aids for home practice. Free UK tracked delivery and a 30-day money-back guarantee.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: BRAND.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "House of Par | Golf Training Aids for Home Practice UK",
    description: "Premium golf training aids for home practice, delivered free across the UK.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION },
  formatDetection: { telephone: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${marcellus.variable} ${garamond.variable} ${hanken.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={[organisationJsonLd(), websiteJsonLd()]} />
        <AnalyticsScripts />
        <AnalyticsPageView />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
