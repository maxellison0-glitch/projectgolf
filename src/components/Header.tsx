import Link from "next/link";
import Image from "next/image";
import { BRAND } from "@/config/brand";

export function Header() {
  return (
    <header className="bg-cream border-b border-green/10 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-[#123B8C]">
          <Image
            src="/brand/house-of-par-mark.png"
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span>
            {BRAND.name}
            <span className="text-brass">.</span>
          </span>
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
