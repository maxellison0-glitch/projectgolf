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
- Palette: cream ground, green-black ink, British racing green `#0b3b2a`, saddle tan `#b08a57`. Tokens in `src/app/globals.css` (utility names `royal`/`gold` kept from the blue era — values are green/tan now).
- Marks: `public/brand/stag-mark.svg` (primary — bookplate stag, hero), `public/brand/seal-mark.svg` (secondary — gold stag seal: header, guarantee, favicon, schema logo via `house-of-par-seal.png`). `house-of-par-mark.png` is the retired cartouche; don't reintroduce it.
- Type: Marcellus (display), EB Garamond italic (voice), Hanken Grotesk (body/UI), via `next/font`.
- Every product is a numbered "standard" (`standardNo()` in `src/data/products.ts`). All products are presented as equals — no hero product; ad data picks winners.
- No emoji in UI. No fake reviews — the reviews section stays hidden until real ones exist.

**Never expose internals:** `cogsPence` and `supplierUrl` in `src/data/products.ts` must never reach the client. Client components only receive the `BuyableProduct` shape (see `src/components/BuyBox.tsx`).

## Operational setup and credential map

As of 28 August 2026, the production store is operational at `https://www.houseofpar.co.uk`.

- Domain: `houseofpar.co.uk`, registered through Namecheap.
- Business/order email: `orders@houseofpar.co.uk`.
- GitHub: `maxellison0-glitch/projectgolf`.
- Vercel: production deploys from `claude/golf-ecommerce-dropshipping-1e3qnq`.
- Stripe: checkout and the order-email webhook are configured through Vercel production environment variables.
- Google Analytics 4: property `House of Par Website`, stream ID `15519854579`, public measurement ID `G-8HKCJPFL6E`. Google has successfully detected the tag on the live site. The property is currently owned through the existing signed-in Google account rather than a new House of Par Google account.
- Analytics consent: GA4 and Meta Pixel are optional-cookie gated in `src/lib/analytics.tsx`.
- Merchant feed: `https://www.houseofpar.co.uk/google-merchant-feed.xml`.

### Secret locations

Never put passwords, API secret values, recovery codes, or one-time verification codes in this file, `CLAUDE.md`, Git history, logs, chat output, or client-side code.

- Local, Git-ignored secret file: `.env.local`.
- Local keys presently expected there: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `EMAIL_USER`, and `EMAIL_PASSWORD`.
- Vercel production also holds the runtime secrets and the public analytics configuration, including `NEXT_PUBLIC_GA4_ID`.
- Browser account access should use the owner's saved signed-in browser sessions. Do not extract or print saved passwords.
- If a secret is missing, ask the owner to restore it directly in `.env.local` or the relevant provider's secret manager; never request that it be pasted into a tracked file.
