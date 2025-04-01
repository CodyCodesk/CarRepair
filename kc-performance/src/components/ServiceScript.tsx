"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ServiceScript({ serviceName, serviceDescription, serviceUrl }) {
  return (
    <Script
      id="service-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": serviceName,
          "provider": {
            "@type": "LocalBusiness",
            "name": "KC Performance Meisterwerkstatt"
          },
          "description": serviceDescription,
          "url": `https://www.kcperformancemeisterwerkstatt.de${serviceUrl}`
        })
      }}
    />
  );
}
