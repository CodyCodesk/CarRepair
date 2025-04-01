import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns | KC Performance Meisterwerkstatt",
  description: "Lernen Sie KC Performance Meisterwerkstatt kennen - Ihre zuverlässige Autowerkstatt in Rosenheim mit erfahrenen Mechanikern und Leidenschaft für Qualität.",
  keywords: "Autowerkstatt Rosenheim, KFZ-Werkstatt Team, Automechaniker Bayern, Werkstatt Geschichte, Qualitätsversprechen",
};

export default function UeberUnsPage() {
  return (
    <div className="pt-24">
      <section className="section bg-[#1a3c6e] text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Über uns</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Willkommen bei KC Performance Meisterwerkstatt! Wir sind Ihre zuverlässige Werkstatt in Rosenheim, Bayern.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Bild: Unsere Werkstatt</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Unsere Geschichte</h2>
              <p className="text-lg text-gray-600 mb-4">
                KC Performance Meisterwerkstatt ist eine etablierte Kfz-Werkstatt in Rosenheim, Bayern, die sich auf Reparaturen aller Art und allen Herstellern spezialisiert hat.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Unser Team ist darauf spezialisiert, Fahrzeuge aller Marken und Modelle zu reparieren, darunter Autos, Transporter und leichte Nutzfahrzeuge.
              </p>
              <p className="text-lg text-gray-600">
                Seit unserer Gründung haben wir uns einen Ruf für Qualität, Zuverlässigkeit und hervorragenden Kundenservice aufgebaut. Wir sind stolz darauf, viele zufriedene Stammkunden zu haben, die uns immer wieder ihr Vertrauen schenken.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Unser Versprechen</h2>
              <p className="text-lg text-gray-600 mb-4">
                Die Dauer einer typischen Reparatur hängt vom Art des Problems ab, aber wir bemühen uns, Reparaturen so schnell wie möglich durchzuführen, ohne die Qualität zu beeinträchtigen.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                Wir bieten Garantien für unsere Dienstleistungen, um die Zufriedenheit unserer Kunden zu gewährleisten.
              </p>
              <p className="text-lg text-gray-600">
                Unser Ziel ist es, unsere Kunden stets zufrieden zu stellen, weshalb wir sie einladen, Feedback zu geben, um unser Unternehmen in allen Bereichen zu verbessern.
              </p>
            </div>
            <div className="order-1 lg:order-2 bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Bild: Unser Qualitätsversprechen</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Unser Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              Lernen Sie die erfahrenen Fachleute kennen, die Ihr Fahrzeug in bestem Zustand halten.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Teammitglied-Foto</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Max Mustermann</h3>
                  <p className="text-gray-600 mb-4">Meister-Mechaniker</p>
                  <p className="text-gray-600">
                    Über 15 Jahre Erfahrung in der Reparatur und Wartung von Fahrzeugen aller Marken.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Teammitglied-Foto</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Lisa Schmidt</h3>
                  <p className="text-gray-600 mb-4">Kundenservice</p>
                  <p className="text-gray-600">
                    Kümmert sich um alle Kundenanfragen und sorgt für einen reibungslosen Ablauf.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <p className="text-gray-500">Teammitglied-Foto</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Thomas Weber</h3>
                  <p className="text-gray-600 mb-4">Diagnose-Spezialist</p>
                  <p className="text-gray-600">
                    Experte für komplexe Fehlerdiagnosen und elektronische Systeme.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Unsere Werkstattausstattung</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir investieren in modernste Technologie und Ausrüstung, um Ihnen den besten Service zu bieten.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a3c6e] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Moderne Diagnosegeräte</h3>
              <p className="text-gray-600 text-center">
                Wir verwenden neueste Diagnosetechnologie für präzise Fehleranalysen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a3c6e] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Hebebühnen</h3>
              <p className="text-gray-600 text-center">
                Mehrere moderne Hebebühnen für effiziente Reparaturen und Inspektionen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a3c6e] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Spezialwerkzeuge</h3>
              <p className="text-gray-600 text-center">
                Umfangreiche Ausstattung mit Spezialwerkzeugen für alle Fahrzeugmarken.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="bg-[#1a3c6e] text-white p-8 md:p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-6">Bereit, Ihr Fahrzeug zu reparieren?</h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren oder mehr über unsere Dienstleistungen zu erfahren.
            </p>
            <a href="/kontakt" className="btn-primary bg-white text-[#1a3c6e] hover:bg-gray-100 text-lg px-8 py-3">
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
