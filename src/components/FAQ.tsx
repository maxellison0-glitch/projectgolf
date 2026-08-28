"use client";

import { useState } from "react";

export function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-green/10 border-y border-green/10">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-4 text-left font-semibold"
          >
            {faq.q}
            <span className="text-brass text-xl leading-none">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <p className="pb-4 text-foreground/80">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
