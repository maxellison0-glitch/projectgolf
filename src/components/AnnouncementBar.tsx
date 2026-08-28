import { BRAND } from "@/config/brand";

export function AnnouncementBar() {
  return (
    <div className="bg-royal-deep px-4 py-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-ivory/90">
      {BRAND.freeShippingCopy} · 30-day money-back guarantee
    </div>
  );
}
