export function AnnouncementBar() {
  return (
    <div className="bg-royal-deep px-4 py-2.5 text-center">
      <p className="flex items-center justify-center gap-3 text-[9px] font-medium uppercase tracking-[0.18em] text-ivory/80 sm:gap-5 sm:text-[11px] sm:tracking-[0.2em] lg:text-xs">
        <span>Free UK Tracked Delivery</span>
        <span className="h-2.5 w-px bg-gold/30 sm:h-3" aria-hidden />
        <span>30-Day Returns</span>
        <span className="hidden h-3 w-px bg-gold/30 sm:block" aria-hidden />
        <span className="hidden sm:block">Embroidered, Never Printed</span>
      </p>
    </div>
  );
}
