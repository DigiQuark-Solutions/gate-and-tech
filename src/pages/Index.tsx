import { Navigation } from "@/components/landing/Navigation";
import { HeroSection } from "@/components/landing/HeroSection";
import { SocialProofSection } from "@/components/landing/SocialProofSection";
import { InteractiveDemoSection } from "@/components/landing/InteractiveDemoSection";
import { FeatureTrioSection } from "@/components/landing/FeatureTrioSection";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { PricingSection } from "@/components/landing/PricingSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <SocialProofSection />
        <InteractiveDemoSection />
        <FeatureTrioSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
