"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CONSENT_CHANGE_EVENT, CONSENT_STORAGE_KEY } from "@/lib/analytics";

type ConsentChoice = "accepted" | "necessary";

export function CookieConsent() {
  const [choice, setChoice] = useState<ConsentChoice | null | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const savedChoice = window.localStorage.getItem(CONSENT_STORAGE_KEY);
      if (savedChoice === "accepted" || savedChoice === "necessary") {
        setChoice(savedChoice);
        return;
      }

      setChoice(null);
      setIsOpen(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  function saveChoice(nextChoice: ConsentChoice) {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, nextChoice);
    setChoice(nextChoice);
    setIsOpen(false);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
  }

  if (choice === undefined) return null;

  if (!isOpen) {
    return (
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="fixed bottom-3 right-3 z-50 rounded-full border border-hairline bg-paper/90 px-2.5 py-1.5 text-[10px] font-medium text-ink/40 shadow-sm backdrop-blur-sm hover:border-royal hover:text-ink sm:left-3 sm:right-auto sm:px-3 sm:py-2 sm:text-xs sm:font-semibold sm:text-ink/70 sm:shadow-lg"
      >
        Cookie settings
      </button>
    );
  }

  return (
    <aside
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-hairline bg-paper p-5 shadow-2xl sm:p-6"
      aria-label="Cookie preferences"
    >
      <h2 className="font-display text-xl text-ink">Your privacy, your choice</h2>
      <p className="mt-2 text-sm leading-relaxed text-ink/75">
        We use optional analytics and marketing cookies to understand how the shop is used and improve relevant advertising. Necessary cookies keep checkout working. Read our{" "}
        <Link href="/privacy#cookies" className="font-semibold text-royal underline underline-offset-2">
          privacy policy
        </Link>
        .
      </p>
      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={() => saveChoice("necessary")}
          className="rounded-full border border-royal px-5 py-2.5 text-sm font-semibold text-royal hover:bg-royal/5"
        >
          Necessary only
        </button>
        <button
          type="button"
          onClick={() => saveChoice("accepted")}
          className="rounded-full bg-royal px-5 py-2.5 text-sm font-semibold text-ivory hover:bg-royal-deep"
        >
          Accept optional cookies
        </button>
      </div>
    </aside>
  );
}
