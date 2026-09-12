export function AnnouncementBar() {
  return (
    <div className="bg-royal-deep px-4 py-2.5 text-center">
      <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ivory/75 sm:text-[11px]">
        <span>Free UK tracked delivery</span>
        <span className="mx-2 text-gold/50 sm:mx-2.5" aria-hidden>&bull;</span>
        <span>30-day returns</span>
        <span className="mx-2 hidden text-gold/50 sm:inline sm:mx-2.5" aria-hidden>&bull;</span>
        <span className="hidden sm:inline">Embroidered, never printed</span>
      </p>
    </div>
  );
}
