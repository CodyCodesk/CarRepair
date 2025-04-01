import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spezialangebote | KC Performance Meisterwerkstatt",
  description: "Entdecken Sie unsere aktuellen Spezialangebote für Autoreparatur und Wartung in Rosenheim. Saisonale Aktionen und exklusive Angebote für Ihre Fahrzeugpflege.",
  keywords: "Autowerkstatt Angebote, KFZ-Werkstatt Aktionen, Autoreparatur Rabatte, Fahrzeugwartung Spezialangebote, Rosenheim Autowerkstatt Deals",
};

export default function SpezialangebotePage() {
  return (
    <div className="pt-24">
      <section className="section bg-[#1a3c6e] text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Spezialangebote</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Profitieren Sie von unseren aktuellen Spezialangeboten und Aktionen für Ihr Fahrzeug.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Saisonales Angebot */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#e63946] text-white p-4">
                <h3 className="text-xl font-bold">Frühjahrs-Check</h3>
                <p>Gültig bis 31.05.2025</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-600 mb-4">
                  Machen Sie Ihr Fahrzeug fit für den Frühling! Unser umfassender Frühjahrs-Check umfasst:
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-600">
                  <li>Überprüfung aller Flüssigkeitsstände</li>
                  <li>Kontrolle der Beleuchtung</li>
                  <li>Überprüfung der Bremsen</li>
                  <li>Kontrolle der Klimaanlage</li>
                  <li>Überprüfung der Reifen inkl. Luftdruck</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-500 line-through">Regulär: 89,95 €</p>
                    <p className="text-2xl font-bold text-[#1a3c6e]">Jetzt nur: 59,95 €</p>
                  </div>
                  <a href="/kontakt" className="btn-primary">
                    Termin vereinbaren
                  </a>
                </div>
              </div>
            </div>

            {/* Stammkunden-Angebot */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-[#1a3c6e] text-white p-4">
                <h3 className="text-xl font-bold">Stammkunden-Rabatt</h3>
                <p>Dauerhaftes Angebot</p>
              </div>
              <div className="p-6">
                <p className="text-lg text-gray-600 mb-4">
                  Als Dankeschön für Ihre Treue erhalten Stammkunden bei uns besondere Vorteile:
                </p>
                <ul className="list-disc pl-5 mb-6 text-gray-600">
                  <li>10% Rabatt auf alle Arbeitsleistungen ab dem 3. Besuch</li>
                  <li>Kostenlose Fahrzeugwäsche bei jeder Inspektion</li>
                  <li>Bevorzugte Terminvergabe</li>
                  <li>Kostenloser Hol- und Bringservice im Stadtgebiet</li>
                </ul>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#1a3c6e]">Bis zu 10% sparen</p>
                  </div>
                  <a href="/kontakt" className="btn-primary">
                    Mehr erfahren
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Kleines Angebot 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Ölwechsel-Aktion</h3>
                <p className="text-gray-600 mb-6">
                  Kompletter Ölwechsel inkl. Filter und Arbeitslohn. Hochwertige Markenöle für alle Fahrzeugtypen.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-[#1a3c6e]">Ab 79,95 €</p>
                  <a href="/kontakt" className="btn-outline text-sm">
                    Termin buchen
                  </a>
                </div>
              </div>
            </div>

            {/* Kleines Angebot 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Klimaanlagen-Service</h3>
                <p className="text-gray-600 mb-6">
                  Komplette Klimaanlagenwartung inkl. Kältemittel und Desinfizierung für ein angenehmes Klima im Fahrzeug.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-[#1a3c6e]">99,95 €</p>
                  <a href="/kontakt" className="btn-outline text-sm">
                    Termin buchen
                  </a>
                </div>
              </div>
            </div>

            {/* Kleines Angebot 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">Bremsen-Spezial</h3>
                <p className="text-gray-600 mb-6">
                  Austausch von Bremsbelägen und Bremsscheiben an einer Achse inkl. Material und Arbeitslohn.
                </p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-[#1a3c6e]">Ab 199,95 €</p>
                  <a href="/kontakt" className="btn-outline text-sm">
                    Termin buchen
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#f8f9fa] p-8 rounded-lg mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Servicepakete</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Unsere Servicepakete bieten Ihnen Komplettlösungen zu attraktiven Preisen.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Paket 1 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1a3c6e] text-white p-4 text-center">
                  <h3 className="text-xl font-bold">Basis-Paket</h3>
                </div>
                <div className="p-6">
                  <ul className="mb-8">
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Ölwechsel
                    </li>
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Filterwechsel
                    </li>
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Lichttest
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Reifenkontrolle
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#1a3c6e] mb-4">129,95 €</p>
                    <a href="/kontakt" className="btn-primary w-full">
                      Auswählen
                    </a>
                  </div>
                </div>
              </div>

              {/* Paket 2 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden transform scale-105 border-2 border-[#e63946]">
                <div className="bg-[#e63946] text-white p-4 text-center relative">
                  <span className="absolute top-0 right-0 bg-yellow-400 text-[#1a3c6e] text-xs font-bold px-2 py-1 transform translate-x-2 -translate-y-2">BELIEBT</span>
                  <h3 className="text-xl font-bold">Komfort-Paket</h3>
                </div>
                <div className="p-6">
                  <ul className="mb-8">
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Alles aus dem Basis-Paket
                    </li>
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Bremsencheck
                    </li>
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Klimaanlagencheck
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Fahrzeugwäsche
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#1a3c6e] mb-4">199,95 €</p>
                    <a href="/kontakt" className="btn-primary w-full">
                      Auswählen
                    </a>
                  </div>
                </div>
              </div>

              {/* Paket 3 */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-[#1a3c6e] text-white p-4 text-center">
                  <h3 className="text-xl font-bold">Premium-Paket</h3>
                </div>
                <div className="p-6">
                  <ul className="mb-8">
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Alles aus dem Komfort-Paket
                    </li>
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Komplette Fahrzeugdiagnose
                    </li>
                    <li className="flex items-center mb-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Hol- und Bringservice
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Ersatzfahrzeug
                    </li>
                  </ul>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#1a3c6e] mb-4">299,95 €</p>
                    <a href="/kontakt" className="btn-primary w-full">
                      Auswählen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Newsletter-Anmeldung</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Melden Sie sich für unseren Newsletter an und erhalten Sie exklusive Angebote und Rabatte direkt in Ihr Postfach.
            </p>
            <div className="max-w-md mx-auto">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="form-input flex-grow"
                  required
                />
                <button type="submit" className="btn-primary whitespace-nowrap">
                  Anmelden
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-4">
                Wir respektieren Ihre Privatsphäre. Sie können sich jederzeit abmelden.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
