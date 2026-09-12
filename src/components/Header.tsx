"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
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

const HERO_PAGES = new Set(["/", "/clothing"]);

export function Header() {
  const pathname = usePathname();
  const hasHero = HERO_PAGES.has(pathname);
  const [scrolled, setScrolled] = useState(!hasHero);

  useEffect(() => {
    if (!hasHero) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hasHero]);

  const t = !scrolled;

  return (
    <header
      className={`transition-all duration-300 ${
        t
          ? "border-b border-ivory/10 bg-transparent"
          : "border-b border-hairline bg-ivory/95 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4">
        {/* ── Mobile ── */}
        <div className="flex items-center justify-between py-3 lg:hidden">
          <MobileNav transparent={t} />
          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2"
          >
            <img
              src="/brand/seal-mark.svg"
              alt="House of Par"
              width={44}
              height={44}
              className={`h-11 w-11 object-contain drop-shadow-sm transition-all duration-300 ${
                t ? "brightness-[1.4] saturate-50" : ""
              }`}
            />
            <span
              className={`hidden font-display text-lg tracking-[0.12em] transition-colors duration-300 sm:inline sm:text-xl ${
                t ? "text-ivory drop-shadow-sm" : "text-royal"
              }`}
            >
              HOUSE{" "}
              <span className="font-voice text-base italic sm:text-lg">
                of
              </span>{" "}
              PAR
            </span>
          </Link>
          <CartBadge transparent={t} />
        </div>

        {/* ── Desktop — single row: nav | brand | nav + bag ── */}
        <div className="hidden lg:flex lg:items-center lg:justify-between lg:py-3.5">
          <nav className="flex flex-1 items-center gap-8">
            {NAV_LEFT.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                  t
                    ? "text-ivory/90 hover:text-ivory"
                    : "text-ink/60 hover:text-royal"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <Link href="/" className="flex items-center gap-3">
            <img
              src="/brand/seal-mark.svg"
              alt=""
              aria-hidden="true"
              width={44}
              height={44}
              className={`h-11 w-11 object-contain drop-shadow-sm transition-all duration-300 ${
                t ? "brightness-[1.4] saturate-50" : ""
              }`}
            />
            <span
              className={`font-display text-[1.4rem] leading-none tracking-[0.14em] transition-colors duration-300 ${
                t ? "text-ivory drop-shadow-sm" : "text-royal"
              }`}
            >
              HOUSE{" "}
              <span className="font-voice text-[1.15rem] italic">of</span> PAR
            </span>
          </Link>

          <div className="flex flex-1 items-center justify-end gap-8">
            {NAV_RIGHT.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-medium uppercase tracking-[0.14em] transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full ${
                  t
                    ? "text-ivory/90 hover:text-ivory"
                    : "text-ink/60 hover:text-royal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <CartBadge transparent={t} />
          </div>
        </div>
      </div>
    </header>
  );
}
