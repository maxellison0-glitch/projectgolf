# Guide publishing routine

Instructions for the scheduled content session. Follow exactly; the goal is one
excellent guide per run, published to the live site, with zero collateral damage.

## Steps

1. Read `AGENTS.md` (deploy pipeline + brand rules) and `docs/CONTENT-QUEUE.md`.
2. `git pull` first. If the working tree has uncommitted changes from another
   session, leave them alone — never commit, stash, or revert files you did not
   create in this run.
3. Take the TOP topic in the Queued list. Derive a short kebab-case slug from it.
   If `src/app/guides/<slug>/` already exists, skip to the next topic.
4. Study `src/app/guides/winter-golf-practice-at-home/page.tsx` and copy its
   exact structure: Metadata with canonical + openGraph article, Article JSON-LD,
   BreadcrumbList JSON-LD, breadcrumb nav, eyebrow, display H1, italic voice
   stand-first, numbered or titled sections, closing royal CTA card linking /shop.
5. Write the article (700–1,100 words body copy):
   - British English; "practise" is the verb, "practice" the noun.
   - Brand voice: quiet confidence, practical, honest. No hype, no "unlock your
     potential", no invented statistics, studies, or testimonials. Every claim
     must be common golf-coaching knowledge or plainly reasoned.
   - Work the target keywords into the title, description, H1 and headings
     naturally — never stuffed.
   - Link 2–4 relevant products inline (slugs in `src/data/products.ts`) the way
     the reference article does — as helpful tools within a drill, never as a
     sales pitch. At most one link per product.
   - The advice must be genuinely useful with NO purchase — products optional.
6. Register it: add an entry to `GUIDES` in `src/data/guides.ts` (slug, title,
   category, one-sentence description, today's ISO date). The index page and
   sitemap update from the registry automatically.
7. Update `docs/CONTENT-QUEUE.md`: move the topic line from Queued to Published
   with today's date and the URL path.
8. Verify: `npm run build` must pass clean. Fix anything it flags before going on.
9. Commit ONLY the files this run created/edited (the new page.tsx, guides.ts,
   CONTENT-QUEUE.md) with message `Publish guide: <title>`, then `git push`.
   Vercel deploys automatically. If the push is rejected, `git pull --rebase`
   and push again; if it still fails, leave the commit local and say so clearly.
10. Confirm the live URL responds (https://www.houseofpar.co.uk/guides/<slug>)
    within ~3 minutes of pushing, then report: title, URL, word count.

## Hard rules

- One article per run. Quality over volume.
- Never edit products, prices, checkout code, layout components, or config.
- Never touch another session's uncommitted work.
- If anything about the repo looks broken before you start (build already
  failing, merge conflict), do not publish — report the problem instead.
