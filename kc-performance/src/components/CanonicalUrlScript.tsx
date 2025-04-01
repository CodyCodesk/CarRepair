"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function CanonicalUrlScript({ url }) {
  return (
    <Script
      id="canonical-url-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          // Ensure canonical URL is properly set
          const linkElement = document.querySelector('link[rel="canonical"]');
          if (linkElement) {
            linkElement.setAttribute('href', 'https://www.kcperformancemeisterwerkstatt.de${url || '/'}');
          } else {
            const newLink = document.createElement('link');
            newLink.rel = 'canonical';
            newLink.href = 'https://www.kcperformancemeisterwerkstatt.de${url || '/'}';
            document.head.appendChild(newLink);
          }
        `
      }}
    />
  );
}
