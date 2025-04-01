import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaScript from "@/components/SchemaScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KC Performance Meisterwerkstatt | Autoreparatur in Rosenheim",
  description: "Ihre zuverlässige Meisterwerkstatt in Rosenheim für Reparaturen aller Art und allen Herstellern. Motorinstandsetzung, Unfallinstandsetzung, Inspektion und Wartung.",
  keywords: "Autowerkstatt Rosenheim, KFZ-Werkstatt Bayern, Motorinstandsetzung, Unfallinstandsetzung, Inspektion, Wartung, Autoreparatur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="DE-BY" />
        <meta name="geo.placename" content="Rosenheim" />
        <link rel="canonical" href="https://www.kcperformancemeisterwerkstatt.de/" />
      </head>
      <body className={inter.className}>
        <SchemaScript />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
