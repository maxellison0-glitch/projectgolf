import Link from "next/link";
import Image from "next/image";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-hairline bg-ivory/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/brand/house-of-par-mark.png"
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-lg tracking-[0.1em] text-royal">
            HOUSE <span className="font-voice text-base italic">of</span> PAR
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link
            href="/shop"
            className="hidden text-ink/70 transition-colors hover:text-royal sm:inline"
          >
            Collection
          </Link>
          <Link
            href="/shipping"
            className="hidden text-ink/70 transition-colors hover:text-royal sm:inline"
          >
            Delivery
          </Link>
          <Link
            href="/guides"
            className="hidden text-ink/70 transition-colors hover:text-royal md:inline"
          >
            Guides
          </Link>
          <Link
            href="/contact"
            className="hidden text-ink/70 transition-colors hover:text-royal sm:inline"
          >
            Contact
          </Link>
          <Link
            href="/shop"
            className="rounded-full bg-royal px-5 py-2 font-semibold text-ivory transition-colors hover:bg-royal-deep"
          >
            Shop
          </Link>
        </nav>
      </div>
    </header>
  );
}
