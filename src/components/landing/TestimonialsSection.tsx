import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, TrendingUp } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCardHover } from "@/hooks/use-card-hover";

const testimonials = [
  {
    id: 1,
    quote: "The mock felt scarier than the real thing—so the actual exam was a breeze.",
    name: "Priya S.",
    result: "GATE EE 2025 AIR 112",
    improvement: "+14 percentile",
    avatar: "PS",
    rating: 5
  },
  {
    id: 2,
    quote: "Analytics told me exactly which chapters to revisit; my score jumped 18% in 3 weeks.",
    name: "Rahul M.", 
    result: "GATE ME 2024 AIR 298",
    improvement: "+18 percentile",
    avatar: "RM",
    rating: 5
  },
  {
    id: 3,
    quote: "Community threads turned lonely nights into group problem-solving sessions that kept me going.",
    name: "Dr. Karan Verma",
    result: "Mentor • 5 yrs coaching",
    improvement: "Mentor",
    avatar: "KV",
    rating: 5
  }
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef } = useScrollAnimation();
  const { cardProps, hoverState } = useCardHover();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-muted-foreground">
            Real results from real students
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main testimonial card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ 
                  opacity: 0, 
                  x: 100, 
                  scale: 0.9,
                  rotateY: -15
                }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  scale: 1,
                  rotateY: 0
                }}
                exit={{ 
                  opacity: 0, 
                  x: -100, 
                  scale: 0.9,
                  rotateY: 15
                }}
                transition={{ 
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
               <Card 
                 className="glass-strong text-white p-8 md:p-12 rounded-2xl shadow-2xl border-0"
               >
                <div className="relative z-10">
                <div className="flex flex-col md:flex-row items-start gap-8">
                  {/* Avatar and Info */}
                  <div className="flex flex-col items-center text-center min-w-fit">
                    <div className="w-20 h-20 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                      {currentTestimonial.avatar}
                    </div>
                    
                    <h4 className="font-bold text-lg mb-1">
                      {currentTestimonial.name}
                    </h4>
                    
                    <p className="text-gray-300 text-sm mb-3">
                      {currentTestimonial.result}
                    </p>
                    
                    {currentTestimonial.improvement !== "Mentor" && (
                      <motion.div
                        className="flex items-center gap-2 bg-success/10 text-success px-3 py-1 rounded-full"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-semibold text-sm">{currentTestimonial.improvement}</span>
                      </motion.div>
                    )}
                  </div>

                  {/* Quote */}
                  <div className="flex-1">
                    <div className="flex mb-4">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-xl md:text-2xl leading-relaxed text-white italic">
                      "{currentTestimonial.quote}"
                    </blockquote>
                  </div>
                </div>

                {/* Improvement Progress Bar */}
                {currentTestimonial.improvement !== "Mentor" && (
                  <motion.div
                    className="mt-8 pt-6 border-t border-gray-400"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-300">Percentile Improvement</span>
                      <span className="text-sm font-semibold text-success">{currentTestimonial.improvement}</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        className="bg-success h-2 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${parseInt(currentTestimonial.improvement) * 5}%` }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                   </motion.div>
                 )}
                </div>
               </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={prevTestimonial}
                  className="border-gray-3 hover:bg-surface-dark transition-all duration-300"
                >
                  <ChevronLeft className="w-5 h-5 mr-2" />
                  Previous
                </Button>
              </motion.div>

              {/* Dots indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex 
                        ? "bg-primary scale-125" 
                        : "bg-gray-3 hover:bg-gray-2"
                    }`}
                  />
                ))}
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  onClick={nextTestimonial}
                  className="border-gray-3 hover:bg-surface-dark transition-all duration-300"
                >
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};