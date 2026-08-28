"use client";

import { useEffect } from "react";
import { trackGa4, trackMeta } from "@/lib/analytics";

type PurchaseData = {
  transactionId: string;
  currency: string;
  value: number;
  items: Array<{
    item_id: string;
    item_name: string;
    item_variant?: string;
    price: number;
    quantity: number;
  }>;
};

export function PurchaseEvent({ data }: { data?: PurchaseData }) {
  useEffect(() => {
    if (!data) return;
    trackGa4("purchase", {
      transaction_id: data.transactionId,
      currency: data.currency,
      value: data.value,
      shipping: 0,
      items: data.items,
    });
    trackMeta("Purchase", { currency: data.currency, value: data.value });
  }, [data]);

  return null;
}
