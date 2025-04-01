"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image
              src="/logo.png"
              alt="KC Performance Meisterwerkstatt Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <div className="relative group">
            <button className="nav-link flex items-center">
              Dienstleistungen
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white shadow-lg rounded-md overflow-hidden z-50">
              <Link
                href="/dienstleistungen/motorinstandsetzung"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Motorinstandsetzung
              </Link>
              <Link
                href="/dienstleistungen/unfallinstandsetzung"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Unfallinstandsetzung
              </Link>
              <Link
                href="/dienstleistungen/inspektion-wartung"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Inspektion und Wartung
              </Link>
            </div>
          </div>
          <Link href="/ueber-uns" className="nav-link">
            Über uns
          </Link>
          <Link href="/kundenbewertungen" className="nav-link">
            Kundenbewertungen
          </Link>
          <Link href="/spezialangebote" className="nav-link">
            Spezialangebote
          </Link>
          <Link href="/kontakt" className="nav-link">
            Kontakt
          </Link>
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link href="/kontakt" className="btn-primary">
            Termin vereinbaren
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          isMenuOpen ? "mobile-menu-open" : "mobile-menu-closed"
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-end mb-8">
            <button
              className="text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4">
            <Link
              href="/"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <p className="text-white text-xl mb-2">Dienstleistungen</p>
              <div className="pl-4 flex flex-col space-y-2">
                <Link
                  href="/dienstleistungen/motorinstandsetzung"
                  className="text-white text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Motorinstandsetzung
                </Link>
                <Link
                  href="/dienstleistungen/unfallinstandsetzung"
                  className="text-white text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Unfallinstandsetzung
                </Link>
                <Link
                  href="/dienstleistungen/inspektion-wartung"
                  className="text-white text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inspektion und Wartung
                </Link>
              </div>
            </div>
            <Link
              href="/ueber-uns"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Über uns
            </Link>
            <Link
              href="/kundenbewertungen"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kundenbewertungen
            </Link>
            <Link
              href="/spezialangebote"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Spezialangebote
            </Link>
            <Link
              href="/kontakt"
              className="text-white text-xl py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </Link>
          </nav>
          <div className="mt-8">
            <Link
              href="/kontakt"
              className="block w-full py-3 text-center bg-white text-[#1a3c6e] font-semibold rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Termin vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
