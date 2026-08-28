"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackGa4 } from "@/lib/analytics";

export function AnalyticsPageView() {
  const pathname = usePathname();

  useEffect(() => {
    trackGa4("page_view", {
      page_location: window.location.href,
      page_path: pathname,
      page_title: document.title,
    });
  }, [pathname]);

  return null;
}
