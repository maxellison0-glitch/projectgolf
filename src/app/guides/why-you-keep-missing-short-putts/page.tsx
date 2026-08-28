import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const canonical = "/guides/why-you-keep-missing-short-putts";

export const metadata: Metadata = {
  title: "Why You Keep Missing Short Putts (Two Faults Behind It)",
  description: "Missing short putts is almost always face angle or setup, not nerves. Two faults explained, and the gate and mirror drills that fix each one at home.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: "Why you keep missing short putts",
    description: "The two faults behind most missed short putts, and the home drills that fix them.",
    url: canonical,
  },
};

export default function MissingShortPuttsGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Why you keep missing short putts (and the two faults behind it)",
    description: "The two faults behind most missed short putts — face angle at impact and an inconsistent setup — with home drills to fix each.",
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
      { "@type": "ListItem", position: 3, name: "Why you keep missing short putts", item: absoluteUrl(canonical) },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <nav className="text-sm text-ink/60" aria-label="Breadcrumb">
        <Link href="/guides" className="hover:text-royal">Guides</Link> / Putting
      </nav>
      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-royal">Putting</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
        Why you keep missing short putts
      </h1>
      <p className="mt-6 font-voice text-2xl italic leading-relaxed text-ink/75">
        A missed three-footer feels like nerves. It almost never is. It is one of two mechanical faults, and both of them are fixable in a hallway.
      </p>

      <div className="mt-12 space-y-10 text-lg leading-relaxed text-ink/80">
        <section>
          <h2 className="font-display text-3xl text-ink">The uncomfortable maths of short putts</h2>
          <p className="mt-4">
            From three feet, the hole gives you very little margin. A putter face
            that is two degrees open at impact is enough to miss on the right
            edge. Nothing about your read, your ball or your luck matters at that
            range as much as two things: where the face points at impact, and
            whether you set up the same way every time. Fix those and short
            putts stop being an event.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">Fault one: the face, not the path</h2>
          <p className="mt-4">
            On a short putt the ball starts almost exactly where the face points
            — the face accounts for the large majority of start direction, with
            the path a distant second. Most golfers who miss short putts are
            aiming reasonably well and then twisting the face a degree or two
            through impact, usually by adding hand action under pressure.
          </p>
          <p className="mt-4">
            The test is simple. Build a gate: two tees, coins or ball markers
            placed just wider than a ball, about 30 centimetres ahead of your
            start line. Roll ten putts through it. If the ball clips the gate on
            the same side repeatedly, you have found your miss — and it lives in
            the face, not in your head. A printed line, like the centre line on
            an <Link href="/product/alignment-putting-mat" className="font-semibold text-royal underline underline-offset-2">alignment putting mat</Link>,
            makes the drill honest because you can see the ball leave the line
            immediately rather than judging by where it finishes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">Fault two: a setup that changes daily</h2>
          <p className="mt-4">
            The second fault happens before the stroke starts. If your eye line,
            shoulder alignment or ball position drifts from day to day, your
            aim drifts with it — and then your hands make corrections you are
            not aware of. That is why a stroke can feel fine on Tuesday and
            broken on Saturday.
          </p>
          <p className="mt-4">
            Checking this by feel is impossible, which is why a{" "}
            <Link href="/product/putting-alignment-mirror" className="font-semibold text-royal underline underline-offset-2">putting alignment mirror</Link>{" "}
            earns its place in a home setup: it shows your eye line and shoulder
            line against fixed reference marks in one glance. Thirty seconds of
            checking before each session builds a setup you can repeat without
            thinking — which is the entire point.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">The ten-minute fix, three times a week</h2>
          <p className="mt-4">
            Keep it boring and keep score. Two minutes setting up with the
            mirror: eyes over the ball, shoulders matching the line. Then eight
            minutes of gated three-to-six-footers, counting clean starts out of
            ten. When you reach eight or more clean starts consistently, move
            the gate closer to the ball to tighten the tolerance.
          </p>
          <p className="mt-4">
            Do not chase holed putts as your measure — on carpet or mat the
            surface decides some of those. Clean starts through the gate are the
            number that transfers to the course, because start line plus a
            repeatable setup is what a pressure putt actually requires.
          </p>
        </section>

        <section className="rounded-2xl bg-royal p-8 text-ivory">
          <h2 className="font-display text-3xl">The standard to keep</h2>
          <p className="mt-4 text-ivory/80">
            Eight of ten through the gate, checked against the same setup, three
            sessions a week. Golfers who hold that standard through winter
            arrive in spring holing the putts that used to sting.
          </p>
          <Link href="/shop" className="mt-7 inline-block rounded-full bg-ivory px-6 py-3 font-semibold text-royal">
            Browse home practice equipment
          </Link>
        </section>
      </div>
    </article>
  );
}
