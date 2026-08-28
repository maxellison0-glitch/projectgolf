"use client";

import { useState } from "react";

export function FAQ({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-hairline border-y border-hairline">
      {faqs.map((faq, i) => (
        <div key={faq.q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 py-4 text-left font-medium text-ink"
          >
            {faq.q}
            <span aria-hidden className="text-xl leading-none text-royal">
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && <p className="pb-5 text-ink/70">{faq.a}</p>}
        </div>
      ))}
    </div>
  );
}
