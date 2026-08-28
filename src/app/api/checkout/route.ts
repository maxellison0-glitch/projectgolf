import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getProduct, getVariant } from "@/data/products";
import { BRAND } from "@/config/brand";

/* Creates a Stripe Checkout session. Price is looked up server-side from the
 * catalog — the client only sends slug + variantId, never an amount.
 * Payment methods (card, Apple/Google Pay, Klarna, PayPal) are controlled in
 * the Stripe dashboard; Checkout picks up whatever is enabled there. */
export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return NextResponse.json(
      { error: "Checkout isn't live yet — we're launching soon." },
      { status: 503 }
    );
  }

  let body: { slug?: string; variantId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const product = body.slug ? getProduct(body.slug) : undefined;
  const variant = product && body.variantId ? getVariant(product, body.variantId) : undefined;
  if (!product || !variant) {
    return NextResponse.json({ error: "Unknown product." }, { status: 400 });
  }

  const stripe = new Stripe(secretKey);
  const origin = req.nextUrl.origin;

  const session = await stripe.checkout.sessions.create({
    integration_identifier: "thegolfden_checkout_8fK2mQxL",
    mode: "payment",
    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "gbp",
          unit_amount: variant.price,
          product_data: {
            name: `${product.name} — ${variant.label}`,
            description: product.description,
          },
        },
      },
    ],
    shipping_address_collection: { allowed_countries: ["GB"] },
    success_url: `${origin}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/#buy`,
    metadata: { slug: product.slug, variantId: variant.id, brand: BRAND.name },
  });

  return NextResponse.json({ url: session.url });
}
