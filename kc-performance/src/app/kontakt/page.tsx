import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | KC Performance Meisterwerkstatt",
  description: "Kontaktieren Sie KC Performance Meisterwerkstatt in Rosenheim für Terminvereinbarungen, Beratung oder Fragen zu unseren Dienstleistungen.",
  keywords: "Autowerkstatt Kontakt, KFZ-Werkstatt Rosenheim, Termin vereinbaren, Autoreparatur Anfrage, Werkstatt Telefonnummer",
};

export default function KontaktPage() {
  return (
    <div className="pt-24">
      <section className="section bg-[#1a3c6e] text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Kontakt</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Wir freuen uns auf Ihre Nachricht. Kontaktieren Sie uns für eine Terminvereinbarung oder bei Fragen zu unseren Dienstleistungen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Schreiben Sie uns</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="form-group">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input type="text" id="name" className="form-input" required />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">E-Mail-Adresse *</label>
                    <input type="email" id="email" className="form-input" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Nachricht *</label>
                  <textarea id="message" rows={6} className="form-input" required></textarea>
                </div>
                
                <div className="form-group">
                  <div className="flex items-start">
                    <input type="checkbox" id="privacy" className="mt-1 mr-2" required />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Ich habe die <a href="/datenschutz" className="text-[#1a3c6e] hover:text-[#e63946]">Datenschutzerklärung</a> gelesen und stimme der Verarbeitung meiner Daten zu. *
                    </label>
                  </div>
                </div>
                
                <div className="form-group">
                  <button type="submit" className="btn-primary w-full md:w-auto px-8">Nachricht senden</button>
                </div>
              </form>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Kontaktinformationen</h2>
              
              <div className="bg-[#f8f9fa] p-6 rounded-lg mb-8">
                <div className="flex items-start mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-600">Rosenheim/Bayern/Deutschland</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Telefon</h3>
                    <p className="text-gray-600">
                      <a href="tel:01732301193" className="hover:text-[#e63946] transition-colors">01732301193</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">E-Mail</h3>
                    <p className="text-gray-600">
                      <a href="mailto:info@kc-performance.de" className="hover:text-[#e63946] transition-colors">info@kc-performance.de</a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#1a3c6e] mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Öffnungszeiten</h3>
                    <p className="text-gray-600">Montag - Freitag: 08:00 - 17:00 Uhr</p>
                    <p className="text-gray-600">Samstag & Sonntag: Geschlossen</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Standort</h3>
              <div className="h-[300px] bg-gray-200 rounded-lg flex items-center justify-center mb-6">
                <p className="text-gray-500">Google Maps Einbettung würde hier erscheinen</p>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Folgen Sie uns</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-[#1a3c6e] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#1a3c6e] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" className="bg-[#1a3c6e] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#e63946] transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Dienstleistungen.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Wie kann ich einen Termin vereinbaren?</h3>
              <p className="text-gray-600">
                Sie können einen Termin telefonisch unter 01732301193, per E-Mail an info@kc-performance.de oder über unser Kontaktformular vereinbaren.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Wie lange dauert eine typische Reparatur?</h3>
              <p className="text-gray-600">
                Die Dauer einer Reparatur hängt von der Art des Problems ab. Kleinere Reparaturen können oft am selben Tag erledigt werden, während komplexere Arbeiten mehrere Tage in Anspruch nehmen können. Wir geben Ihnen immer eine realistische Einschätzung, bevor wir mit der Arbeit beginnen.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Bieten Sie einen Hol- und Bringservice an?</h3>
              <p className="text-gray-600">
                Ja, für Kunden im Stadtgebiet Rosenheim bieten wir einen Hol- und Bringservice an. Bitte fragen Sie bei der Terminvereinbarung nach dieser Option.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">Welche Zahlungsmethoden akzeptieren Sie?</h3>
              <p className="text-gray-600">
                Wir akzeptieren Barzahlung, EC-Karte und Überweisung. Kreditkartenzahlungen sind leider nicht möglich.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-2">Bieten Sie eine Garantie auf Ihre Arbeiten?</h3>
              <p className="text-gray-600">
                Ja, wir bieten eine Garantie von 12 Monaten auf alle durchgeführten Arbeiten und verwendeten Ersatzteile.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
