"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container relative z-10 mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
          Ihre zuverlässige Meisterwerkstatt in Rosenheim
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl text-white">
          Wir sind Ihr Partner für Reparaturen aller Art und allen Herstellern mit Fachwissen und Leidenschaft für Autos.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/kontakt" className="btn-primary text-lg px-8 py-3">
            Termin vereinbaren
          </Link>
          <Link href="/dienstleistungen" className="btn-outline bg-transparent text-white border-white hover:bg-white hover:text-[#1a3c6e] text-lg px-8 py-3">
            Unsere Dienstleistungen
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
