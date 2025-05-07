
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import CharactersSection from "@/components/landing/CharactersSection";
import GameplaySection from "@/components/landing/GameplaySection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import DownloadSection from "@/components/landing/DownloadSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <CharactersSection />
      <GameplaySection />
      <TestimonialsSection />
      <DownloadSection />
      <Footer />
    </div>
  );
};

export default Index;
