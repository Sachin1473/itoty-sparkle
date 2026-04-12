import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import WinnersSection from "@/components/WinnersSection";
import CategoriesSection from "@/components/CategoriesSection";
import GallerySection from "@/components/GallerySection";
import JurySection from "@/components/JurySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <WinnersSection />
      <CategoriesSection />
      <GallerySection />
      <JurySection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
