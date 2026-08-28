"use client";

/* Meta Pixel + GA4, env- and consent-gated: nothing loads until the IDs are
 * set and the visitor accepts analytics cookies. */
import { useEffect, useState } from "react";
import Script from "next/script";

export const CONSENT_STORAGE_KEY = "house-of-par-cookie-consent";
export const CONSENT_CHANGE_EVENT = "house-of-par-consent-change";

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;
const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;

declare global {
  interface Window {
    dataLayer?: unknown[][];
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

function initialiseGa4() {
  if (!GA4_ID || typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || ((...args: unknown[]) => window.dataLayer?.push(args));
  window.gtag("js", new Date());
  window.gtag("consent", "update", {
    analytics_storage: "granted",
    ad_storage: "granted",
    ad_user_data: "granted",
    ad_personalization: "granted",
  });
  window.gtag("config", GA4_ID);
}

function initialiseMetaPixel() {
  if (!PIXEL_ID || typeof window === "undefined" || window.fbq) return;

  const bootstrap = document.createElement("script");
  bootstrap.id = "meta-pixel-bootstrap";
  bootstrap.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${PIXEL_ID}');fbq('track', 'PageView');`;
  document.head.appendChild(bootstrap);
}

export function AnalyticsScripts() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const syncConsent = () => {
      const accepted = window.localStorage.getItem(CONSENT_STORAGE_KEY) === "accepted";
      setHasConsent(accepted);
    };

    syncConsent();
    window.addEventListener(CONSENT_CHANGE_EVENT, syncConsent);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, syncConsent);
  }, []);

  useEffect(() => {
    if (!hasConsent) return;

    initialiseGa4();
    initialiseMetaPixel();
  }, [hasConsent]);

  if (!hasConsent) return null;

  return (
    <>
      {GA4_ID && (
        <Script
          id="ga4-loader"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
          strategy="afterInteractive"
        />
      )}
    </>
  );
}

export function trackMeta(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (window.fbq) {
    window.fbq("track", event, params);
  }
}

export function trackGa4(event: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (window.gtag) {
    window.gtag("event", event, params);
  }
}
