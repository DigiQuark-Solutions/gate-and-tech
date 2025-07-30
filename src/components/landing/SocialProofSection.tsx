import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const partners = [
  "Ace Coaching",
  "RankMasters", 
  "Pathfinder Academy",
  "GATEPro",
  "Concept Classes"
];

export const SocialProofSection = () => {
  const { ref: sectionRef } = useScrollAnimation();

  return (
    <section ref={sectionRef} className="py-12 bg-surface-dark border-y border-gray-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Trusted by leading coaching institutes
          </p>
          
          {/* Marquee effect for partners */}
          <div className="marquee mb-8">
            <div className="marquee-content">
              {[...partners, ...partners].map((partner, index) => (
                <motion.div
                  key={`${partner}-${index}`}
                  className="text-gray-1 hover:text-primary transition-colors duration-200 font-semibold mx-8 whitespace-nowrap underline-animate"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {partner}
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              type: "spring",
              stiffness: 100
            }}
            className="bg-primary/10 border border-primary/20 rounded-full px-6 py-3 inline-flex items-center gap-3"
          >
            <motion.div 
              className="w-3 h-3 bg-success rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-primary font-bold text-lg">
              27,000+ students practicing every day
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};