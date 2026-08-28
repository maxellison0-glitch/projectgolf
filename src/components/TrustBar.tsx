const ITEMS = [
  "Free UK tracked delivery",
  "30-day money-back guarantee",
  "Secure checkout via Stripe",
  "Dispatched within 48 hours",
];

export function TrustBar() {
  return (
    <div className="grid grid-cols-2 border-y border-hairline text-center sm:grid-cols-4">
      {ITEMS.map((label, i) => (
        <div
          key={label}
          className={`px-3 py-4 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink/60 ${
            i % 2 === 1 ? "border-l border-hairline" : ""
          } ${i > 0 ? "sm:border-l sm:border-hairline" : ""}`}
        >
          {label}
        </div>
      ))}
    </div>
  );
}
