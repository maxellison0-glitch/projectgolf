import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home Golf Practice Guides",
  description: "Practical UK golf training guides for improving your putting, grip and impact position at home throughout winter.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:py-20">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink/50">The practice journal</p>
      <h1 className="mt-3 font-display text-4xl text-ink sm:text-5xl">Golf practice guides</h1>
      <p className="mt-4 max-w-2xl font-voice text-xl italic text-ink/75">
        Useful sessions for the golfer who wants to arrive in spring with a better game than they had in autumn.
      </p>
      <div className="mt-12 border-t border-hairline pt-8">
        <Link href="/guides/winter-golf-practice-at-home" className="group block">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-royal">Winter practice</p>
          <h2 className="mt-2 font-display text-3xl text-ink transition-colors group-hover:text-royal">
            How to practise golf at home this winter
          </h2>
          <p className="mt-3 max-w-2xl text-ink/70">
            A focused four-part routine for putting, grip and impact that needs little space and no launch monitor.
          </p>
          <span className="mt-5 inline-block font-semibold text-royal">Read the guide &rarr;</span>
        </Link>
      </div>
    </div>
  );
}
