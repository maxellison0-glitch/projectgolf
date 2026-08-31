import type { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE_URL } from "@/lib/seo";

const canonical = "/guides/15-minute-daily-golf-practice-routine";

export const metadata: Metadata = {
  title: "A 15-Minute Daily Golf Practice Routine at Home",
  description: "A fixed daily golf practice routine for busy golfers: fifteen minutes of grip, putting start line, distance control and impact work you can do at home.",
  alternates: { canonical },
  openGraph: {
    type: "article",
    title: "A 15-minute daily golf practice routine for busy golfers",
    description: "Five short blocks, the same order every evening — the golf practice at home routine that survives a full diary.",
    url: canonical,
  },
};

export default function FifteenMinuteDailyPracticeGuide() {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "A 15-minute daily golf practice routine for busy golfers",
    description: "A fixed fifteen-minute daily golf practice routine covering grip, putting start line, distance control and impact, designed for practice at home.",
    datePublished: "2026-08-31",
    dateModified: "2026-08-31",
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
      { "@type": "ListItem", position: 3, name: "A 15-minute daily golf practice routine", item: absoluteUrl(canonical) },
    ],
  };

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
      <JsonLd data={[articleJsonLd, breadcrumbJsonLd]} />
      <nav className="text-sm text-ink/60" aria-label="Breadcrumb">
        <Link href="/guides" className="hover:text-royal">Guides</Link> / Practice routines
      </nav>
      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-royal">Practice routines</p>
      <h1 className="mt-3 font-display text-4xl leading-tight text-ink sm:text-6xl">
        A 15-minute daily golf practice routine for busy golfers
      </h1>
      <p className="mt-6 font-voice text-2xl italic leading-relaxed text-ink/75">
        Fifteen minutes most evenings will do more for your handicap than a two-hour range session once a month. The difficulty is not the time. It is deciding, in advance, what those fifteen minutes contain.
      </p>

      <div className="mt-12 space-y-10 text-lg leading-relaxed text-ink/80">
        <section>
          <h2 className="font-display text-3xl text-ink">The principle: little, often, and always the same</h2>
          <p className="mt-4">
            A golf swing is a motor skill, and motor skills answer to frequency. A short session you genuinely complete tonight, tomorrow and the night after builds more than a long one you keep postponing until the diary and the weather agree. Fifteen minutes is brief enough to survive a difficult day at work and long enough to cover four things that quietly decide most club scores: your grip, your putting start line, your distance control and your impact position.
          </p>
          <p className="mt-4">
            The routine below is deliberately fixed. You are not choosing what to practise each evening — that decision is where most golf practice at home quietly dies. You work through the same five blocks in the same order, then write down two numbers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">1. Three minutes: rebuild the grip from scratch</h2>
          <p className="mt-4">
            Do not skip this because it looks too simple. A great many faults that show up in ball flight begin in how the hands sit on the club, and the grip is the one part of the swing you can rehearse perfectly at walking pace.
          </p>
          <p className="mt-4">
            Stand in your normal address position and place the hands on slowly, one at a time. Check three things: the lead hand sits more in the fingers than the palm, the pressure lives in the last three fingers rather than in thumb and forefinger, and the two hands feel joined rather than arguing. Take the grip off and rebuild it ten times. A moulded <Link href="/product/grip-trainer" className="font-semibold text-royal underline underline-offset-2">grip trainer</Link> is useful here because it gives your hands a place to go instead of asking you to copy a photograph mid-repetition.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">2. Four minutes: own the start line</h2>
          <p className="mt-4">
            Find a straight putt of about six feet — roughly the length that separates a comfortable round from an exhausting one. Set a gate just wider than the ball around 30 centimetres ahead of it and roll putts through without touching either side. Break and pace are read on the course; start line is built at home, and it is the part of putting that indoor practice can teach honestly.
          </p>
          <p className="mt-4">
            A marked <Link href="/product/alignment-putting-mat" className="font-semibold text-royal underline underline-offset-2">putting mat</Link> makes this far easier to judge, because plain carpet gives you no reference to fail against — two tee pegs on the floor will do the same job less precisely. Ten clean starts ends the block. If ten do not arrive, stop at four minutes anyway and begin again tomorrow.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">3. Four minutes: change the distance every stroke</h2>
          <p className="mt-4">
            Three-putts are usually a speed problem rather than a line problem, so this block never repeats the same putt twice. Put down three targets at different lengths — say two metres, four metres, and as far as the room allows. Roll one ball to each in sequence, then work back towards you. The aim is to finish within a putter-head length of the target, not to hole anything.
          </p>
          <p className="mt-4">
            Rolling the same putt fifty times feels productive and teaches your hands very little about speed. Changing the target on every stroke is harder, less satisfying and considerably more useful. If your setup starts drifting under that pressure, spend thirty seconds with a <Link href="/product/putting-alignment-mirror" className="font-semibold text-royal underline underline-offset-2">putting alignment mirror</Link> to reset eye line and shoulders, then carry on.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">4. Three minutes: rehearse impact slowly</h2>
          <p className="mt-4">
            Make half-swings at walking pace and hold the position at contact. You are looking for a stable lead wrist, hands slightly ahead of the clubhead, and a chest that has kept turning towards the target rather than stalling. Speed adds nothing indoors — the point is that your body learns a position it can find later without thinking about it.
          </p>
          <p className="mt-4">
            An <Link href="/product/impact-bag" className="font-semibold text-royal underline underline-offset-2">impact bag</Link> gives you something to arrive at, which is worth more than an air swing because you can feel whether the wrist held. Without one, a firm cushion wedged against a heavy chair does a quieter version of the same job. Ten repetitions is plenty.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">5. One minute: write down two numbers</h2>
          <p className="mt-4">
            Record only two things: how many gate putts started on line, and how many distance-control putts finished inside a putter-head length. Nothing else. Improvement at golf is slow and largely invisible week to week, and two honest numbers in a notebook are how you find out whether the fifteen minutes are actually working — or whether you have been rehearsing the same fault every evening with great commitment.
          </p>
        </section>

        <section>
          <h2 className="font-display text-3xl text-ink">On the evenings when fifteen minutes is not there</h2>
          <p className="mt-4">
            Some days it will not be. On those days do blocks one and two — seven minutes, grip and start line — and stop without guilt. A shortened session keeps the habit intact; a skipped one starts the negotiation over again tomorrow. The routine only fails when it stops entirely.
          </p>
        </section>

        <section className="rounded-2xl bg-royal p-8 text-ivory">
          <h2 className="font-display text-3xl">The daily standard</h2>
          <p className="mt-4 text-ivory/80">
            Six evenings a week, fifteen minutes, same five blocks, two numbers written down. Review the notebook at the end of each month rather than each night. If both numbers are trending upwards, change nothing.
          </p>
          <Link href="/shop" className="mt-7 inline-block rounded-full bg-ivory px-6 py-3 font-semibold text-royal">
            Browse home practice equipment
          </Link>
        </section>
      </div>
    </article>
  );
}
