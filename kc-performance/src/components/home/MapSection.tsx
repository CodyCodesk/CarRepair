"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const MapSection = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Unser Standort</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Besuchen Sie uns in der Dr.-Steinbeißer-Straße 3, 83026 Rosenheim
          </p>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-[400px] w-full relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.397675875344!2d12.12872277685435!3d47.50080997117892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479d1b1b9b8a3a2f%3A0x5e3e51449ec1e1a1!2sDr.-Steinbeißer-Straße%203%2C%2083026%20Rosenheim!5e0!3m2!1sde!2sde!4v1719930000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
          <div className="p-6 bg-[#1a3c6e] text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Adresse</p>
                  <p>KC Performance, Dr.-Steinbeißer-Straße 3, 83026 Rosenheim</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Öffnungszeiten</p>
                  <p>Montag - Freitag: 08:00 - 17:00 Uhr</p>
                  <p>Samstag & Sonntag: Geschlossen</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold mb-1">Kontakt</p>
                  <p>Telefon: <a href="tel:01732301193" className="hover:text-[#e63946] transition-colors">01732301193</a></p>
                  <p>E-Mail: <a href="mailto:info@kc-performance.de" className="hover:text-[#e63946] transition-colors">info@kc-performance.de</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
