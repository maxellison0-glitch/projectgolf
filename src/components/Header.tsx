import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { CartBadge } from "./CartBadge";

export function Header() {
  return (
    <header className="border-b border-hairline bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Left: hamburger on mobile */}
        <div className="flex items-center gap-3 lg:hidden">
          <MobileNav />
        </div>

        {/* Logo — centred on mobile, left on desktop */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0 flex items-center gap-2.5"
        >
          <img
            src="/brand/seal-mark.svg"
            alt=""
            aria-hidden="true"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
          />
          <span className="hidden font-display text-lg tracking-[0.1em] text-royal sm:inline">
            HOUSE <span className="font-voice text-base italic">of</span> PAR
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm lg:flex">
          <Link
            href="/clothing"
            className="text-ink/70 transition-colors hover:text-royal"
          >
            Clothing
          </Link>
          <Link
            href="/shop"
            className="text-ink/70 transition-colors hover:text-royal"
          >
            Equipment
          </Link>
          <Link
            href="/guides"
            className="text-ink/70 transition-colors hover:text-royal"
          >
            Guides
          </Link>
          <Link
            href="/contact"
            className="text-ink/70 transition-colors hover:text-royal"
          >
            Contact
          </Link>
        </nav>

        {/* Right: Bag button */}
        <CartBadge />
      </div>
    </header>
  );
}
