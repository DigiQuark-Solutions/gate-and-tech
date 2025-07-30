import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { InteractiveDemoSection } from "@/components/landing/InteractiveDemoSection";
import { FeatureTrioSection } from "@/components/landing/FeatureTrioSection";
import { YouTubeSection } from "@/components/landing/YouTubeSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";
import { LoadingScreen } from "@/components/ui/loading-screen";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Prevent scrolling during loading
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onLoadingComplete={handleLoadingComplete} />
        )}
      </AnimatePresence>
      
      {!isLoading && (
        <div className="min-h-screen bg-background">
          <Navigation />
          <main>
            <HeroSection />
            <SocialProofSection />
            <InteractiveDemoSection />
            <YouTubeSection />
            <FeatureTrioSection />
            <TestimonialsSection />
            <PricingSection />
            <FAQSection />
            <FinalCTASection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
};

export default Index;
