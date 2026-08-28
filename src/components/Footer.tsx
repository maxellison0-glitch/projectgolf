import Link from "next/link";
import { BRAND } from "@/config/brand";

export function Footer() {
  return (
    <footer className="bg-green-dark text-cream/80 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-3 text-sm">
        <div>
          <p className="text-cream font-bold text-lg mb-2">{BRAND.name}</p>
          <p>{BRAND.tagline}</p>
          <p className="mt-3">{BRAND.address}</p>
          <a href={`mailto:${BRAND.email}`} className="underline">
            {BRAND.email}
          </a>
        </div>
        <div>
          <p className="text-cream font-semibold mb-2">Help</p>
          <ul className="space-y-1">
            <li><Link href="/shop" className="hover:text-cream">Shop all</Link></li>
            <li><Link href="/shipping" className="hover:text-cream">Shipping &amp; delivery</Link></li>
            <li><Link href="/returns" className="hover:text-cream">Returns &amp; refunds</Link></li>
            <li><Link href="/contact" className="hover:text-cream">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-cream font-semibold mb-2">Legal</p>
          <ul className="space-y-1">
            <li><Link href="/privacy" className="hover:text-cream">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-cream">Terms of service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-cream/10 text-center text-xs py-4">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
