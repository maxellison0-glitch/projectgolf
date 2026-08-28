import { BRAND } from "@/config/brand";

export function AnnouncementBar() {
  return (
    <div className="bg-green-dark text-cream text-center text-sm py-2 px-4 font-medium tracking-wide">
      {BRAND.freeShippingCopy} · 30-day money-back guarantee
    </div>
  );
}
