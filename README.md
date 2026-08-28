# projectgolf

Conversion-optimised one-product storefront for the golf ecommerce venture.
Next.js 16 (App Router) + Tailwind v4 + Stripe Checkout. Built per the
ecom-playbook: honest delivery times, 3× margin rule, UK consumer law pages,
env-gated tracking, no ad spend until Max says go.

## Status

- ✅ Storefront built with placeholder hero product (putting mat stand-in)
- 🔄 Product research in `docs/RESEARCH.md` decides the real hero product + store model
- ⬜ Brand name/domain not chosen (working name `ParLab` — one edit in `src/config/brand.ts`)
- ⬜ Stripe keys, Meta Pixel, GA4 not set (see `.env.example`; site works without them)
- ⬜ Real product imagery + reviews (reviews section stays hidden until genuine ones exist)

## Where things live

| Path | What |
|---|---|
| `src/config/brand.ts` | Brand name, domain, contact, delivery estimate — single source of truth |
| `src/data/products.ts` | Product catalog: copy, pricing (pence), COGS, variants, FAQs |
| `src/components/ProductLanding.tsx` | The money page template (hero → buy box → benefits → proof → FAQ → guarantee) |
| `src/app/api/checkout/route.ts` | Stripe Checkout session — price looked up server-side, GB shipping only |
| `docs/RESEARCH.md` | Product research: Meta ads recon + market research, ranked candidates |

## Run

```bash
npm install
npm run dev
```

Checkout returns a friendly 503 until `STRIPE_SECRET_KEY` is set. Analytics
scripts don't load until `NEXT_PUBLIC_META_PIXEL_ID` / `NEXT_PUBLIC_GA4_ID` exist.

## Pre-launch checklist

1. Lock hero product from research; verify supplier COGS + UK delivery time; 3× rule check
2. Pick brand name + domain → update `src/config/brand.ts`
3. Real product imagery (creative skills / Higgsfield) into `public/` + `products.ts`
4. Stripe live keys; enable Apple/Google Pay + Klarna + PayPal in Stripe dashboard
5. Meta Pixel + CAPI, test checkout end-to-end with a real card
6. VAT position confirmed (≤£135 imports = seller charges UK VAT at point of sale)
7. Real trading address in brand config (distance selling requirement)
