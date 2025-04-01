import Hero from "@/components/home/Hero";
import ServiceCards from "@/components/home/ServiceCards";
import AboutSection from "@/components/home/AboutSection";
import Testimonials from "@/components/home/Testimonials";
import ContactSection from "@/components/home/ContactSection";
import MapSection from "@/components/home/MapSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCards />
      <AboutSection />
      <Testimonials />
      <MapSection />
      <ContactSection />
    </>
  );
}
