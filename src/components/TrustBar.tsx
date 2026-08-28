const ITEMS = [
  { icon: "🚚", label: "Free UK tracked shipping" },
  { icon: "↩️", label: "30-day money-back guarantee" },
  { icon: "🔒", label: "Secure checkout" },
  { icon: "⛳", label: "Designed for UK golfers" },
];

export function TrustBar() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-6 border-y border-green/10 text-sm">
      {ITEMS.map((item) => (
        <div key={item.label} className="flex items-center gap-2 justify-center text-center">
          <span aria-hidden>{item.icon}</span>
          <span className="text-foreground/80">{item.label}</span>
        </div>
      ))}
    </div>
  );
}
