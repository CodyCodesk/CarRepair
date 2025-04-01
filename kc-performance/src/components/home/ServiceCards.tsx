"use client";

import Image from "next/image";
import Link from "next/link";

const ServiceCards = () => {
  const services = [
    {
      title: "Motorinstandsetzung",
      description: "Optimieren Sie die Leistung Ihres Fahrzeugs mit unserer professionellen Motorinstandsetzung. Wir bieten umfassende Diagnose und Reparatur für alle Motortypen.",
      icon: "/icons/engine.svg",
      link: "/dienstleistungen/motorinstandsetzung",
    },
    {
      title: "Unfallinstandsetzung",
      description: "Unkomplizierte Abwicklung mit der Versicherung. Wir kümmern uns um die komplette Instandsetzung nach Unfällen, egal ob Haftpflicht, Teilkasko, Vollkasko oder privat.",
      icon: "/icons/car-crash.svg",
      link: "/dienstleistungen/unfallinstandsetzung",
    },
    {
      title: "Inspektion und Wartung",
      description: "Verlängern Sie die Lebensdauer Ihres Fahrzeugs mit regelmäßiger Inspektion und Wartung. Wir halten Ihr Fahrzeug in bestem Zustand.",
      icon: "/icons/maintenance.svg",
      link: "/dienstleistungen/inspektion-wartung",
    },
  ];

  return (
    <section className="section bg-[#f8f9fa]">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unsere Dienstleistungen</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Wir bieten qualitativ hochwertige Dienstleistungen für Fahrzeuge aller Arten und Marken.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="service-card-content">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1a3c6e] text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <Link href={service.link} className="text-[#1a3c6e] font-semibold hover:text-[#e63946] transition-colors duration-300 flex items-center">
                  Mehr erfahren
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
