import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CapabilityCards from "@/components/CapabilityCards";
import BrandSentinel from "@/components/BrandSentinel";
import HowItWorks from "@/components/HowItWorks";
import TornadoSection from "@/components/TornadoSection";
import HurricaneSection from "@/components/HurricaneSection";
import Validation from "@/components/Validation";
import Partners from "@/components/Partners";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import SectionImage from "@/components/SectionImage";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      {/* Visual background elements */}
      <div className="noise-overlay" />

      <Header />

      <div className="relative">
        <Hero />

        <SectionImage
          src="/images/stormdef_vehicle_canisters_approach_tornado_06.png"
          alt="Operational Approach"
        />

        <CapabilityCards />

        <BrandSentinel />

        <HowItWorks />

        <SectionImage
          src="/images/stormdef_tornado_tanks_family_02.png"
          alt="Asset Deployment"
        />

        <TornadoSection />

        <SectionImage
          src="/images/stormdef_twirling_sky_rising_tide_04.png"
          alt="Hurricane Core Visualization"
        />

        <HurricaneSection />

        <SectionImage
          src="/images/stormdef_canisters_impact_clearaway_07.png"
          alt="Energy Dispersion"
        />

        <Validation />
        <Partners />

        <SectionImage
          src="/images/stormdef_clear_skies_family_ems_08.png"
          alt="The Mission Outcome"
        />

        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}
