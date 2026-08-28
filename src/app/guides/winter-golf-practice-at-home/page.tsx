import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const canonical = "/guides/winter-golf-practice-at-home";

export const metadata: Metadata = {
  title: "How to Practise Golf at Home This Winter UK",
  description: "A practical 30-minute winter golf practice routine for home: putting start line, distance control, grip and impact drills for UK golfers.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: "How to practise golf at home this winter",
    description: "A focused home golf practice routine for keeping your putting and swing sharp through the UK winter.",
    url: canonical,
  },
};

export default function WinterGolfPracticeGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to practise golf at home this winter",
    description: "A practical home golf practice routine for putting, grip and impact training during the UK winter.",
    datePublished: "2026-08-28",
    dateModified: "2026-08-28",
    inLanguage: "en-GB",
    mainEntityOfPage: absoluteUrl(canonical),
    author: { "@id": `${SITE_URL}/#organisation` },
    publisher: { "@id": `${SITE_URL}/#organisation` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
      { "@type": "ListItem", position: 3, name: "Winter golf practice at home", item: absoluteUrl(canonical) },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <nav className="text-sm text-ink/60" aria-label="Breadcrumb">
        <Link href="/guides" className="hover:text-royal">Guides</Link> / Winter practice
      </nav>
      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-royal">Winter practice</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
        How to practise golf at home this winter
      </h1>
      <p className="mt-6 font-voice text-2xl italic leading-relaxed text-ink/75">
        You do not need a simulator to improve between November and March. You need clear feedback, a repeatable routine and thirty focused minutes.
      </p>

      <div className="mt-12 space-y-10 text-lg leading-relaxed text-ink/80">
        <section>
          <h2 className="font-display text-3xl text-ink">The principle: train what the room can teach</h2>
          <p className="mt-4">
            Indoor practice is excellent for start line, setup, grip and impact positions. It is less useful for judging full-shot ball flight. Build the winter session around the things your living room can measure honestly, then take those habits to the range when weather allows.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">1. Five minutes: build the same grip</h2>
          <p className="mt-4">
            Take your normal address and place your hands on the club slowly. Check the lead-hand knuckles, the pressure in the final three fingers and whether both hands work together. Make ten careful grips before making a swing. A moulded <Link href="/product/grip-trainer" className="font-semibold text-royal underline underline-offset-2">golf grip trainer</Link> is useful here because it gives tactile feedback rather than asking you to copy a photograph.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">2. Ten minutes: own your putting start line</h2>
          <p className="mt-4">
            Choose a straight six-foot putt. Place a gate just wider than the ball about 30 centimetres in front of it and roll ten putts through without touching either side. The result at the far end matters less than whether the ball begins on line.
          </p>
          <p className="mt-4">
            A marked <Link href="/product/alignment-putting-mat" className="font-semibold text-royal underline underline-offset-2">3-metre putting mat</Link> makes the start line visible. If your setup changes between putts, add a <Link href="/product/putting-alignment-mirror" className="font-semibold text-royal underline underline-offset-2">putting alignment mirror</Link> to check eye line, shoulders and face angle before each stroke.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">3. Ten minutes: distance control, not just holing putts</h2>
          <p className="mt-4">
            Put down three targets at different distances. Roll one ball to each target in sequence, then work back towards you. Your goal is to finish within a putter-head length of the target. Changing distance on every stroke stops the session becoming a groove for one single putt.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">4. Five minutes: rehearse impact</h2>
          <p className="mt-4">
            Make slow half-swings into an <Link href="/product/impact-bag" className="font-semibold text-royal underline underline-offset-2">impact bag</Link> filled with towels. Pause at contact. The lead wrist should feel stable, the hands slightly ahead of the clubhead and the chest continuing towards the target. Speed adds little indoors; position and repetition are the point.
          </p>
        </section>

        <section className="rounded-2xl bg-royal p-8 text-ivory">
          <h2 className="font-display text-3xl">The weekly standard</h2>
          <p className="mt-4 text-ivory/80">
            Repeat this session three times a week. Record only two numbers: clean starts through the putting gate and putts finishing inside the distance-control zone. If those improve, the practice is working.
          </p>
          <Link href="/shop" className="mt-7 inline-block rounded-full bg-ivory px-6 py-3 font-semibold text-royal">
            Browse home practice equipment
          </Link>
        </section>
      </div>
    </article>
  );
}
