import type { Metadata } from "next";
import "./globals.css";
import { BRAND } from "@/config/brand";
import { AnalyticsScripts } from "@/lib/analytics";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: `${BRAND.name} — ${BRAND.tagline}`,
  description:
    "Practice-at-home golf training gear with free UK tracked shipping and a 30-day money-back guarantee.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">
        <AnalyticsScripts />
        <AnnouncementBar />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
