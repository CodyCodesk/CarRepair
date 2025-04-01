"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ReviewScript({ reviews }) {
  return (
    <Script
      id="review-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "KC Performance Meisterwerkstatt",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "48"
          },
          "review": reviews.map(review => ({
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": review.author
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": review.rating
            },
            "reviewBody": review.text
          }))
        })
      }}
    />
  );
}
