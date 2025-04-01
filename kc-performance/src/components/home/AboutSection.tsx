"use client";

import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Über uns</h2>
            <p className="text-lg text-gray-600 mb-4">
              KC Performance Meisterwerkstatt ist eine etablierte Kfz-Werkstatt in Rosenheim, Bayern, die sich auf Reparaturen aller Art und allen Herstellern spezialisiert hat.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Unser erfahrenes Team von Mechanikern bietet qualitativ hochwertige Dienstleistungen und erstklassigen Kundenservice. Wir reparieren Fahrzeuge aller Marken und Modelle, einschließlich PKWs, Transportern und leichten Nutzfahrzeugen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/ueber-uns" className="btn-secondary">
                Mehr über uns
              </Link>
              <Link href="/kontakt" className="btn-outline">
                Kontaktieren Sie uns
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/workshop.jpg"
              alt="KC Performance Meisterwerkstatt"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
