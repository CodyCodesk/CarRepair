"use client";

import { useEffect } from "react";
import Script from "next/script";
import Link from "next/link";

export default function SchemaScript() {
  return (
    <>
      <Script
        id="schema-script"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "KC Performance Meisterwerkstatt",
            "image": "https://www.kcperformancemeisterwerkstatt.de/images/logo.png",
            "url": "https://www.kcperformancemeisterwerkstatt.de",
            "telephone": "01732301193",
            "email": "info@kc-performance.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rosenheim",
              "addressRegion": "Bayern",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "47.8571",
              "longitude": "12.1181"
            },
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/kcperformancemeisterwerkstatt",
              "https://www.instagram.com/kcperformancemeisterwerkstatt",
              "https://www.youtube.com/kcperformancemeisterwerkstatt"
            ],
            "priceRange": "€€",
            "description": "KC Performance Meisterwerkstatt ist Ihre zuverlässige Autowerkstatt in Rosenheim für Reparaturen aller Art und allen Herstellern. Motorinstandsetzung, Unfallinstandsetzung, Inspektion und Wartung."
          })
        }}
      />
    </>
  );
}
