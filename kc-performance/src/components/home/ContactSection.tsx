"use client";

import Link from "next/link";

const ContactSection = () => {
  return (
    <section className="section bg-[#f8f9fa]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Kontaktieren Sie uns</h2>
            <p className="text-lg text-gray-600 mb-8">
              Kontaktieren Sie uns für eine unverbindliche Beratung und Terminvereinbarung. Wir stehen Ihnen gerne zur Verfügung, um Ihren Reparaturbedarf zu besprechen.
            </p>
            
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4">Kontaktdaten</h3>
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-semibold">Adresse:</p>
                  <p>Rosenheim/Bayern/Deutschland</p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-semibold">Telefon:</p>
                  <p><a href="tel:01732301193" className="hover:text-[#e63946] transition-colors">01732301193</a></p>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="font-semibold">E-Mail:</p>
                  <p><a href="mailto:info@kc-performance.de" className="hover:text-[#e63946] transition-colors">info@kc-performance.de</a></p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Öffnungszeiten</h3>
              <div className="grid grid-cols-2 gap-2">
                <div>Montag - Freitag:</div>
                <div>08:00 - 17:00 Uhr</div>
                <div>Samstag & Sonntag:</div>
                <div>Geschlossen</div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Schreiben Sie uns</h3>
              <form className="space-y-4">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name *</label>
                  <input type="text" id="name" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">E-Mail-Adresse *</label>
                  <input type="email" id="email" className="form-input" required />
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone" className="form-label">Telefonnummer</label>
                  <input type="tel" id="phone" className="form-input" />
                </div>
                
                <div className="form-group">
                  <label htmlFor="service" className="form-label">Dienstleistung</label>
                  <select id="service" className="form-input">
                    <option value="">Bitte wählen</option>
                    <option value="motorinstandsetzung">Motorinstandsetzung</option>
                    <option value="unfallinstandsetzung">Unfallinstandsetzung</option>
                    <option value="inspektion">Inspektion und Wartung</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Nachricht *</label>
                  <textarea id="message" rows={5} className="form-input" required></textarea>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn-primary w-full">Formular absenden</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
