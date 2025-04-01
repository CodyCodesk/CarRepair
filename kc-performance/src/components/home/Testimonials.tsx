"use client";

import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Ich bin seit Jahren Kunde bei KC Performance Meisterwerkstatt und war immer äußerst zufrieden mit der kompetenten und schnellen Reparatur meines Autos. Das Team ist sehr freundlich und professionell, ich kann sie nur weiterempfehlen!",
      author: "Anna Müller",
      rating: 5,
    },
    {
      quote: "Hervorragender Service! Mein Auto hatte ein komplexes Problem, das andere Werkstätten nicht lösen konnten. Das Team von KC Performance hat es schnell diagnostiziert und repariert. Faire Preise und transparente Kommunikation.",
      author: "Thomas Weber",
      rating: 5,
    },
    {
      quote: "Sehr kompetente Beratung und zuverlässige Arbeit. Ich fühle mich hier gut aufgehoben und weiß, dass mein Fahrzeug in guten Händen ist. Die Termine werden immer pünktlich eingehalten.",
      author: "Sabine Krause",
      rating: 4,
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Was unsere Kunden sagen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Erfahren Sie, warum unsere Kunden uns vertrauen und immer wieder zu uns zurückkehren.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <p className="testimonial-author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
