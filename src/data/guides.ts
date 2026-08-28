// Registry of published guides. The guides index page and sitemap render
// from this list — the content routine appends one entry per new article.
// Keep newest-first ordering by published date at render time, not here.

export type Guide = {
  slug: string;
  title: string; // sentence case, as shown on the index card
  category: string; // eyebrow label, e.g. "Winter practice"
  description: string; // one-sentence index card blurb
  published: string; // ISO date, e.g. "2026-08-28"
};

export const GUIDES: Guide[] = [
  {
    slug: "why-you-keep-missing-short-putts",
    title: "Why you keep missing short putts",
    category: "Putting",
    description:
      "A missed three-footer is almost never nerves — it's face angle or setup. Both faults explained, with the gate and mirror drills that fix them.",
    published: "2026-08-28",
  },
  {
    slug: "winter-golf-practice-at-home",
    title: "How to practise golf at home this winter",
    category: "Winter practice",
    description:
      "A focused four-part routine for putting, grip and impact that needs little space and no launch monitor.",
    published: "2026-08-28",
  },
];

export function sortedGuides(): Guide[] {
  return [...GUIDES].sort((a, b) => b.published.localeCompare(a.published));
}
