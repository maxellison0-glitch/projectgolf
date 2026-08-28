<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# House of Par — project facts (read before doing anything)

**Live site:** https://www.houseofpar.co.uk — this is a REAL, revenue-facing store. Stripe checkout is configured via Vercel env vars (never commit or ask for keys).

**Deployment pipeline (do not change it):**
- GitHub repo: `maxellison0-glitch/projectgolf` — the `origin` remote of this folder. There is NO other repo for this project; never create one.
- Production branch: `claude/golf-ecommerce-dropshipping-1e3qnq` (yes, that name). It is checked out locally and tracks origin. To deploy: commit here and `git push`. Vercel auto-builds every push to this branch; a failed build keeps the previous deploy live.
- Do not force-push, do not push other branches expecting them to deploy, do not touch Vercel/domain/Stripe settings.

**Brand system (do not regress it):**
- Palette: ivory ground, navy ink, royal blue `#013292` (sampled from `public/brand/house-of-par-mark.png`), antique gold hairlines. Tokens in `src/app/globals.css`.
- Type: Marcellus (display), EB Garamond italic (voice), Hanken Grotesk (body/UI), via `next/font`.
- Every product is a numbered "standard" (`standardNo()` in `src/data/products.ts`). All products are presented as equals — no hero product; ad data picks winners.
- No emoji in UI. No fake reviews — the reviews section stays hidden until real ones exist.

**Never expose internals:** `cogsPence` and `supplierUrl` in `src/data/products.ts` must never reach the client. Client components only receive the `BuyableProduct` shape (see `src/components/BuyBox.tsx`).
