"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function BreadcrumbScript({ pageTitle, pageUrl }) {
  return (
    <Script
      id="breadcrumb-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://www.kcperformancemeisterwerkstatt.de/"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": pageTitle,
              "item": `https://www.kcperformancemeisterwerkstatt.de${pageUrl}`
            }
          ]
        })
      }}
    />
  );
}
