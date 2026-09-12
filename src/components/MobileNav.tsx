"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Clothing", href: "/clothing" },
  { label: "Equipment", href: "/shop" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

function MenuOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-ivory">
      <div className="flex items-center justify-between px-5 py-4">
        <Link
          href="/"
          onClick={onClose}
          className="flex items-center gap-2"
        >
          <img
            src="/brand/seal-mark.svg"
            alt=""
            aria-hidden="true"
            width={36}
            height={36}
            className="h-9 w-9 object-contain"
          />
          <span className="font-display text-base tracking-[0.1em] text-royal">
            HOUSE <span className="font-voice text-sm italic">of</span> PAR
          </span>
        </Link>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center"
          aria-label="Close menu"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <line x1="1" y1="1" x2="17" y2="17" stroke="currentColor" strokeWidth="1.5" />
            <line x1="17" y1="1" x2="1" y2="17" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-center px-8">
        <ul className="space-y-1">
          {NAV_LINKS.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block py-3 font-display text-[2rem] leading-tight tracking-[0.02em] text-ink transition-colors hover:text-royal"
                style={{ animationDelay: `${i * 40}ms` }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="border-t border-hairline px-8 py-6">
        <p className="text-xs text-ink/50">
          Free UK tracked shipping on every order
        </p>
      </div>
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="relative z-50 flex h-10 w-10 items-center justify-center lg:hidden"
        aria-label="Open menu"
      >
        <svg width="22" height="14" viewBox="0 0 22 14" fill="none" className="text-current">
          <line x1="0" y1="1" x2="22" y2="1" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="7" x2="22" y2="7" stroke="currentColor" strokeWidth="1.5" />
          <line x1="0" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </button>

      {open && mounted && createPortal(
        <MenuOverlay onClose={() => setOpen(false)} />,
        document.body,
      )}
    </>
  );
}
