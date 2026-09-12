import Link from "next/link";
import { MobileNav } from "./MobileNav";
import { CartBadge } from "./CartBadge";

const NAV_LEFT = [
  { label: "Clothing", href: "/clothing" },
  { label: "Equipment", href: "/shop" },
];

const NAV_RIGHT = [
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  return (
    <header className="border-b border-hairline bg-ivory/90 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        {/* Mobile layout */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <MobileNav />
          <Link href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
            <img
              src="/brand/seal-mark.svg"
              alt="House of Par"
              width={44}
              height={44}
              className="h-11 w-11 object-contain"
            />
            <span className="hidden font-display text-lg tracking-[0.12em] text-royal sm:inline sm:text-xl">
              HOUSE <span className="font-voice text-base italic sm:text-lg">of</span> PAR
            </span>
          </Link>
          <CartBadge />
        </div>

        {/* Desktop layout — centred brand, split nav */}
        <div className="hidden lg:block">
          {/* Brand row */}
          <div className="flex items-center justify-center pb-2 pt-4">
            <Link href="/" className="flex items-center gap-3.5">
              <img
                src="/brand/seal-mark.svg"
                alt=""
                aria-hidden="true"
                width={60}
                height={60}
                className="h-[60px] w-[60px] object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="font-display text-[1.65rem] leading-none tracking-[0.14em] text-royal">
                  HOUSE <span className="font-voice text-[1.35rem] italic">of</span> PAR
                </span>
                <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.25em] text-gold">
                  Golf Apparel
                </span>
              </div>
            </Link>
          </div>

          {/* Nav row */}
          <div className="flex items-center justify-between border-t border-hairline py-2.5">
            <nav className="flex flex-1 items-center gap-8">
              {NAV_LEFT.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink/60 transition-colors hover:text-royal"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-8">
              {NAV_RIGHT.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[13px] font-medium uppercase tracking-[0.12em] text-ink/60 transition-colors hover:text-royal"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-1 items-center justify-end">
              <CartBadge />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
