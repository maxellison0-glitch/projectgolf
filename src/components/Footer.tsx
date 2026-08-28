import Link from "next/link";
import { BRAND } from "@/config/brand";

export function Footer() {
  return (
    <footer className="mt-20 bg-royal-deep text-ivory/70">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 text-sm sm:grid-cols-3">
        <div>
          <p className="font-display text-xl tracking-[0.1em] text-ivory">
            HOUSE <span className="font-voice text-lg italic">of</span> PAR
          </p>
          <p className="mt-2 font-voice italic text-ivory/80">{BRAND.tagline}.</p>
          <p className="mt-4">{BRAND.address}</p>
          <a
            href={`mailto:${BRAND.email}`}
            className="underline underline-offset-2 hover:text-ivory"
          >
            {BRAND.email}
          </a>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory">
            Help
          </p>
          <ul className="space-y-1.5">
            <li><Link href="/shop" className="hover:text-ivory">The collection</Link></li>
            <li><Link href="/guides" className="hover:text-ivory">Practice guides</Link></li>
            <li><Link href="/shipping" className="hover:text-ivory">Shipping &amp; delivery</Link></li>
            <li><Link href="/returns" className="hover:text-ivory">Returns &amp; refunds</Link></li>
            <li><Link href="/contact" className="hover:text-ivory">Contact us</Link></li>
          </ul>
        </div>
        <div>
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory">
            Legal
          </p>
          <ul className="space-y-1.5">
            <li><Link href="/privacy" className="hover:text-ivory">Privacy policy</Link></li>
            <li><Link href="/terms" className="hover:text-ivory">Terms of service</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ivory/10 py-4 text-center text-xs text-ivory/50">
        © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
      </div>
    </footer>
  );
}
