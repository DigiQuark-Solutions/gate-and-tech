import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import heroImage from "@/assets/hero-dashboard.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Turn exam anxiety into{" "}
              <span className="gradient-text">focused confidence</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Adaptive mock tests and insights that fuel growth.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-6 text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/25"
              >
                Get Started Free
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-gray-3 text-foreground hover:bg-surface-dark px-8 py-6 text-lg transition-all duration-200 hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch 90-sec Tour
              </Button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="glow-border rounded-2xl overflow-hidden">
              <motion.img
                src={heroImage}
                alt="Dashboard showing exam simulation interface with analytics and progress tracking"
                className="w-full h-auto rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-4 -right-4 bg-success text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              +18% Score
            </motion.div>
            
            <motion.div
              className="absolute -bottom-4 -left-4 bg-primary text-white px-4 py-2 rounded-full font-semibold shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            >
              27k+ Students
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-3 rounded-full flex justify-center"
          whileHover={{ scale: 1.1 }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};