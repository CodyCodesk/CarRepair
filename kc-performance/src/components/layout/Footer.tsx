import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Kontakt</h3>
            <address className="not-italic">
              <p className="mb-2">KC Performance Meisterwerkstatt</p>
              <p className="mb-2">Rosenheim/Bayern/Deutschland</p>
              <p className="mb-2">
                <a href="tel:01732301193" className="footer-link">
                  Tel: 01732301193
                </a>
              </p>
              <p>
                <a href="mailto:info@kc-performance.de" className="footer-link">
                  E-Mail: info@kc-performance.de
                </a>
              </p>
            </address>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Öffnungszeiten</h3>
            <ul>
              <li className="mb-2">Montag: 08:00 - 17:00 Uhr</li>
              <li className="mb-2">Dienstag: 08:00 - 17:00 Uhr</li>
              <li className="mb-2">Mittwoch: 08:00 - 17:00 Uhr</li>
              <li className="mb-2">Donnerstag: 08:00 - 17:00 Uhr</li>
              <li className="mb-2">Freitag: 08:00 - 17:00 Uhr</li>
              <li className="mb-2">Samstag & Sonntag: Geschlossen</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="footer-link">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen/motorinstandsetzung" className="footer-link">
                  Motorinstandsetzung
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen/unfallinstandsetzung" className="footer-link">
                  Unfallinstandsetzung
                </Link>
              </li>
              <li>
                <Link href="/dienstleistungen/inspektion-wartung" className="footer-link">
                  Inspektion und Wartung
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="footer-link">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="footer-link">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/impressum" className="footer-link">
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="footer-link">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="footer-link">
                  AGB
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} KC Performance Meisterwerkstatt. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
