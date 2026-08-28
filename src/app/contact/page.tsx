import { BRAND } from "@/config/brand";

export const metadata = { title: `Contact — ${BRAND.name}` };

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-14 space-y-5">
      <h1 className="text-3xl font-bold text-green">Contact us</h1>
      <p>
        We answer every email within 1 working day, usually much faster.
      </p>
      <p>
        Email:{" "}
        <a href={`mailto:${BRAND.email}`} className="underline text-green font-semibold">
          {BRAND.email}
        </a>
      </p>
      <p className="text-foreground/70">{BRAND.legalName} · {BRAND.address}</p>
    </div>
  );
}
