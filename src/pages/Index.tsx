import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TickerBand from "@/components/TickerBand";
import AboutSection from "@/components/AboutSection";
import StatsBand from "@/components/StatsBand";
import CategoriesSection from "@/components/CategoriesSection";
import ProcessSection from "@/components/ProcessSection";
import JurySection from "@/components/JurySection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TickerBand />
      <AboutSection />
      <StatsBand />
      <CategoriesSection />
      <ProcessSection />
      <JurySection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
