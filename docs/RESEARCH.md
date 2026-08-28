# Golf dropshipping product research — 2026-08-28

Two research streams run in parallel: Meta Ad Library recon (GB, active ads
only) and web-wide product/market research. Full visual report:
https://claude.ai/code/artifact/8e7bb87f-c210-45e4-b2a1-0d9abe4db07f

**Honesty flags:** COGS figures are estimates — AliExpress/CJ blocked automated
price fetching; get 3–5 real supplier quotes before locking anything. Ad counts
are point-in-time and keyword-noisy. Amazon UK prices verified only for grip
trainers, ball retrievers, PuttOUT (£24.99) and Perfect Practice (£129.99).
VAT (~17% of retail) must come out of margins on ≤£135 imports — the seller
(us) charges and remits at point of sale.

## Proof of current UK ad spend (Meta Ad Library, 28 Aug 2026)

1. **Golf grip trainer (clip-on)** — the hottest signal by volume: 12+
   coordinated anonymous dropship pages (Britainuk-2/.3/72, Brightonuk,
   Hearthwarm, etc.), each stacking 8–20 identical active ads, all launched
   within 48 hours, USD-billed. Hooks: "Fix Swing Grip, Fix Hand Position",
   "3,155 sold in last 24 hours". **But**: COGS ~£2, identical on Amazon Prime
   at £7.45–£11.99 (700+/mo sold), and the market is being carpet-bombed
   mid-wave. Verdict: upsell/order-bump, not a hero.
2. **Indoor putting mats/aids** — the quality signal: **AimPutt** (GBP-billed,
   ~£78 mat + alignment stations, UK stock), **PuttOUT**, **Puttr** (~52 active
   GB ads match "golf putting mat"), plus anonymous dropship tests. Multiple
   independent advertisers = current winner.
3. **Swing trainers** — ~584 active GB ads match "golf swing trainer"
   (Neopace Kickstarter, PureStrike advertorials, HackMotion "89% improve with
   live drills"). Big spend, but electronics/sensor end is UKCA territory.
4. **Golf apparel** — several offshore operators pushing polos/streetwear into
   GB. Not our lane (sizing returns, no wow).

Winning hook patterns: fix-a-fault promise > product features; stat-led
credibility; discount anchors; scarcity social proof.

## Candidate scoreboard

Breakeven CPA = price − COGS − payment fees (1.5% + £0.20). VAT not yet
deducted. All COGS estimated.

| Product | COGS est. | Retail | 3× rule | BE CPA | Verdict |
|---|---|---|---|---|---|
| Indoor putting mat + alignment bundle | £14–18 (+£4–6 ship) | £44.99–59.99 | Pass | £28–37 | **Hero #1** |
| Ball-return putting green | £18–24 | £49.99 | ~2.5× marginal | ~£28 | Variant of hero |
| Velcro chipping dartboard game | £9–14 | £34.99 | Pass | ~£23 | **Hero #2 — Q4 gift angle** |
| Strike-feedback board (Divot-style) | £12–16 | £44.99 | Pass | ~£29 | **Hero #3 — best 3-sec wow** |
| Impact/smash bag | £5–7 | £24.99 | Pass | ~£18 | Upsell |
| Tempo trainer stick | £10–14 | £39.99 | ~3× | ~£27 | Test later; long-parcel shipping risk |
| Chipping net / grip trainer / pressure putt trainer / LED balls | £1.50–10 | £15–30 | Pass on ratio | £12–20 | Catalogue + upsells only — heavy Amazon Prime overlap |
| Ball retriever, smart mats, launch monitors, full hitting nets | — | — | — | — | **Rejected**: Prime-identical-cheaper, UKCA electronics burden, heavy/fragile |

Sanity check vs playbook: at 2% CVR and ~£1 CPC a sale costs ~£50 in clicks —
so sub-£40 AOV products only work as upsells. The hero must clear £50+ AOV,
which the £59.99 bundle does.

## Ranked top 3

1. **"Indoor Putting Studio" bundle at £59.99** — mat + alignment aids.
   Proven GBP ad spend by 3+ independent advertisers, perfect Sept–Feb
   seasonality, bundle structure defeats direct Amazon comparison, AOV clears
   the cold-click cost bar. This is the launch hero.
2. **Velcro chipping dartboard game** — best TikTok/UGC potential and
   Christmas-gift shape ("the golf gift he'll actually use"); US-viral,
   UK largely unworked.
3. **Strike-feedback board** — strongest 3-second visual ("see your fat/thin
   strike instantly"); $119.99 original anchors our price. Needs swing space;
   stay clear of patent-lookalike line.

## Store model recommendation: niche store, launched as one hero

Not a pure one-product store. Reasons: ad-spend evidence spreads across the
practice-at-home *category*, not one SKU; the best-margin items (BE CPA
£12–18) only make money as upsells/order bumps; Q4 gift buyers browse
collections; and bundles/brand are the Amazon-proofing. Launch sequence:

1. **Sept**: site live with hero = putting bundle (current site build already
   matches this), 3–5 upsell SKUs (grip trainer, impact bag, LED balls).
2. **Late Sept**: £20–25/day Meta test on the hero, kill rules per playbook.
3. **1 Nov**: chipping-game gift creatives ready for Q4.
4. **~10 orders/week**: migrate to CJ UK-warehouse SKUs before Christmas
   shipping cutoff.

No ad spend until Max says go (his call, 2026-08-28).

## Brand name proposals (Max wants "golf" in the name — 2026-08-28)

Working name set to **The Golf Den** (`src/config/brand.ts`). Alternatives:

- **HomeGolf Co.** — literal, category-wide
- **BackGarden Golf** — very UK, great for TikTok
- **GreenRoom Golf** — practice-at-home double meaning
- **The Golf Room** — same vibe as Den, softer
- **WinterGolf Club** — seasonal angle baked in; limits summer selling

Check domain + Companies House + trademark before committing.

## Next actions

- [ ] Max picks brand name → update `src/config/brand.ts`, buy domain
- [ ] Get 3–5 real supplier quotes (AliExpress/CJ) for putting mat bundle:
      landed COGS, UK delivery time, tracking format — verify 3× holds after VAT
- [ ] Product imagery + first ad creatives (Higgsfield via creative skills)
- [ ] Add upsell SKUs to `src/data/products.ts` once hero COGS locked
- [ ] Stripe account + pixel when ready to test checkout
