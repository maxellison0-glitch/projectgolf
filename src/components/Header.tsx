import Link from "next/link";
import { BRAND } from "@/config/brand";

export function Header() {
  return (
    <header className="bg-cream border-b border-green/10 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold text-green tracking-tight">
          {BRAND.name}
          <span className="text-brass">.</span>
        </Link>
        <nav className="flex items-center gap-5 text-sm text-green/80">
          <Link href="/shop" className="hover:text-green font-semibold">
            Shop all
          </Link>
          <Link href="/shipping" className="hover:text-green">
            Delivery
          </Link>
          <Link href="/contact" className="hover:text-green">
            Contact
          </Link>
          <a
            href="#buy"
            className="bg-green text-cream px-4 py-2 rounded-full font-semibold hover:bg-green-dark transition-colors"
          >
            Shop now
          </a>
        </nav>
      </div>
    </header>
  );
}
