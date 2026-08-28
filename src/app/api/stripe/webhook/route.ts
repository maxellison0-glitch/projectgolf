import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secretKey || !webhookSecret) return NextResponse.json({ error: "Webhook not configured" }, { status: 503 });

  const stripe = new Stripe(secretKey);
  const signature = req.headers.get("stripe-signature");
  if (!signature) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(await req.text(), signature, webhookSecret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const recipient = session.customer_details?.email;
    const smtpUser = process.env.EMAIL_USER;
    const smtpPassword = process.env.EMAIL_PASSWORD;
    if (smtpUser && smtpPassword) {
      const transporter = nodemailer.createTransport({
        host: "mail.privateemail.com",
        port: 465,
        secure: true,
        auth: { user: smtpUser, pass: smtpPassword },
      });
      const amount = session.amount_total ? `£${(session.amount_total / 100).toFixed(2)}` : "the order total";
      const subject = `New House of Par order — ${amount}`;
      const text = `A payment was completed.\n\nOrder: ${session.id}\nCustomer: ${recipient ?? "Not provided"}\nTotal: ${amount}\n\nView the payment in Stripe Dashboard.`;
      await transporter.sendMail({ from: smtpUser, to: smtpUser, subject, text });
      if (recipient) await transporter.sendMail({ from: smtpUser, to: recipient, subject: "Your House of Par order is confirmed", text: `Thanks for your order. We’ve received your payment of ${amount}. Your order reference is ${session.id}.` });
    }
  }

  return NextResponse.json({ received: true });
}
