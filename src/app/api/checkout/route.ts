import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct, getVariant } from "@/data/products";
import { BRAND } from "@/config/brand";

type CartLineItem = { slug: string; variantId: string; quantity?: number };

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Checkout isn't live yet — we're launching soon." },
      { status: 503 }
    );
  }

  let body: { slug?: string; variantId?: string; items?: CartLineItem[] };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Normalise: accept either {slug, variantId} or {items: [...]}
  const rawItems: CartLineItem[] = body.items
    ? body.items
    : body.slug && body.variantId
      ? [{ slug: body.slug, variantId: body.variantId, quantity: 1 }]
      : [];

  if (rawItems.length === 0) {
    return NextResponse.json({ error: "No items provided." }, { status: 400 });
  }

  const lineItems: Stripe.Checkout.SessionCreateParams.LineItem[] = [];
  const metaSlugs: string[] = [];

  for (const raw of rawItems) {
    const product = getProduct(raw.slug);
    const variant = product ? getVariant(product, raw.variantId) : undefined;
    if (!product || !variant) {
      return NextResponse.json({ error: `Unknown product: ${raw.slug}` }, { status: 400 });
    }
    const qty = Math.max(1, Math.min(raw.quantity ?? 1, 10));
    lineItems.push({
      quantity: qty,
      price_data: {
        currency: "gbp",
        unit_amount: variant.price,
        product_data: {
          name: `${product.name} — ${variant.label}`,
          description: product.description,
        },
      },
    });
    metaSlugs.push(`${product.slug}:${variant.id}x${qty}`);
  }

  const stripe = new Stripe(secretKey);
  const origin = req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    integration_identifier: "thegolfden_checkout_8fK2mQxL",
    mode: "payment",
    line_items: lineItems,
    shipping_address_collection: { allowed_countries: ["GB"] },
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/clothing`,
    metadata: { items: metaSlugs.join("|"), brand: BRAND.name },
  });

  return NextResponse.json({ url: session.url });
}
