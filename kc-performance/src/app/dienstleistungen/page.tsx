import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dienstleistungen | KC Performance Meisterwerkstatt",
  description: "Entdecken Sie unsere professionellen Dienstleistungen: Motorinstandsetzung, Unfallinstandsetzung, Inspektion und Wartung für alle Fahrzeugmarken in Rosenheim.",
  keywords: "Autowerkstatt Dienstleistungen, Motorinstandsetzung Rosenheim, Unfallinstandsetzung Bayern, KFZ Inspektion, Fahrzeugwartung",
};

export default function DienstleistungenPage() {
  return (
    <div className="pt-24">
      <section className="section bg-[#1a3c6e] text-white">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Unsere Dienstleistungen</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            testWir bieten qualitativ hochwertige Dienstleistungen für Fahrzeuge aller Arten und Marken. Entdecken Sie unser umfassendes Angebot.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid grid-cols-1 gap-16">
            {/* Motorinstandsetzung */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Bild: Motorinstandsetzung</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Motorinstandsetzung</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Optimieren Sie die Leistung Ihres Fahrzeugs mit unserer professionellen Motorinstandsetzung. Wir bieten umfassende Diagnose und Reparatur für alle Motortypen.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Unsere erfahrenen Techniker können eine Vielzahl von Motorproblemen beheben, von einfachen Reparaturen bis hin zu kompletten Motorüberholungen.
                </p>
                <a href="/dienstleistungen/motorinstandsetzung" className="btn-primary">
                  Mehr erfahren
                </a>
              </div>
            </div>

            {/* Unfallinstandsetzung */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2 bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Bild: Unfallinstandsetzung</p>
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Unfallinstandsetzung</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Unkomplizierte Abwicklung mit der Versicherung. Wir kümmern uns um die komplette Instandsetzung nach Unfällen, egal ob Haftpflicht, Teilkasko, Vollkasko oder privat.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Von kleinen Dellen bis hin zu schweren Unfallschäden - wir bringen Ihr Fahrzeug wieder in einen einwandfreien Zustand.
                </p>
                <a href="/dienstleistungen/unfallinstandsetzung" className="btn-primary">
                  Mehr erfahren
                </a>
              </div>
            </div>

            {/* Inspektion und Wartung */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Bild: Inspektion und Wartung</p>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-4">Inspektion und Wartung</h2>
                <p className="text-lg text-gray-600 mb-4">
                  Verlängern Sie die Lebensdauer Ihres Fahrzeugs mit regelmäßiger Inspektion und Wartung. Wir halten Ihr Fahrzeug in bestem Zustand.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Unsere umfassenden Inspektionen umfassen alle wichtigen Komponenten Ihres Fahrzeugs, um sicherzustellen, dass es zuverlässig und sicher bleibt.
                </p>
                <a href="/dienstleistungen/inspektion-wartung" className="btn-primary">
                  Mehr erfahren
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-[#f8f9fa]">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Warum uns wählen?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Wir bieten erstklassigen Service und Expertise für alle Fahrzeugmarken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a3c6e] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Qualität garantiert</h3>
              <p className="text-gray-600 text-center">
                Wir verwenden nur hochwertige Ersatzteile und bieten Garantie auf unsere Arbeit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a3c6e] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Schneller Service</h3>
              <p className="text-gray-600 text-center">
                Wir arbeiten effizient, um Ihr Fahrzeug so schnell wie möglich wieder auf die Straße zu bringen.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#1a3c6e] rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">Erfahrenes Team</h3>
              <p className="text-gray-600 text-center">
                Unser Team besteht aus erfahrenen Fachleuten mit umfassendem Wissen über alle Fahrzeugmarken.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
