import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CapabilityCards from "@/components/CapabilityCards";
import HowItWorks from "@/components/HowItWorks";
import TornadoSection from "@/components/TornadoSection";
import HurricaneSection from "@/components/HurricaneSection";
import Validation from "@/components/Validation";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ZoomableImage from "@/components/ZoomableImage";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Visual background elements */}
      <div className="noise-overlay" />

      <Header />

      <div className="relative">
        <Hero />
        <CapabilityCards />
        <HowItWorks />
        <TornadoSection />
        <HurricaneSection />
        <Validation />
        <Partners />

        {/* Outcome Section */}
        <section className="py-24 bg-black relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="relative aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl glass-card p-2">
              <div className="relative w-full h-full rounded-[32px] overflow-hidden">
                <ZoomableImage
                  src="/images/stormdef_clear_skies_family_ems_08.png"
                  alt="Clear Skies Outcome"
                  className="object-cover opacity-80"
                  containerClassName="h-full w-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-12 left-12 max-w-lg pointer-events-none">
                  <h3 className="text-3xl font-bold uppercase tracking-tight mb-2">The Mission Outcome</h3>
                  <p className="text-white/60 leading-relaxed uppercase text-xs tracking-widest font-bold">
                    Stabilized atmospheric conditions. Protective envelope maintained.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
