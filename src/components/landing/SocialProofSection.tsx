import { motion } from "framer-motion";

const partners = [
  "Ace Coaching",
  "RankMasters", 
  "Pathfinder Academy",
  "GATEPro",
  "Concept Classes"
];

export const SocialProofSection = () => {
  return (
    <section className="py-16 bg-surface-dark border-y border-gray-3">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-1 text-lg mb-8">
            Trusted by top coaching institutes
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="underline-animate"
              >
                <span className="text-xl font-semibold text-foreground hover:text-primary transition-colors duration-200 cursor-pointer">
                  {partner}
                </span>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-6 py-3"
          >
            <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
            <span className="text-primary font-semibold text-lg">
              27,000+ students practicing every day
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};