import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Monitor, BarChart3, Users } from "lucide-react";
import analyticsImage from "@/assets/analytics-dashboard.jpg";
import communityImage from "@/assets/community-interface.jpg";
import demoImage from "@/assets/demo-interface.jpg";
import { useScrollAnimation, useStaggeredAnimation } from "@/hooks/use-scroll-animation";
import { useCardHover } from "@/hooks/use-card-hover";

const features = [
  {
    icon: Monitor,
    title: "Simulate the real exam",
    description: "Feel the pressure-free practice of full-length, timed papers that mirror the exact interface you'll face on test day.",
    image: demoImage,
    stats: "120+ Mock Tests"
  },
  {
    icon: BarChart3,
    title: "See where to focus next",
    description: "Our adaptive dashboard pinpoints weak topics, predicts your percentile, and builds a personalized revision path in one click.",
    image: analyticsImage,
    stats: "AI-Powered Analytics"
  },
  {
    icon: Users,
    title: "Stay motivated with peers",
    description: "Earn streak badges, join topic rooms, and discuss tricky questions with mentors who've already cracked the exam.",
    image: communityImage,
    stats: "27k+ Active Community"
  }
];

const FeatureCard = ({ feature, index, isActive, isEven }: {
  feature: typeof features[0];
  index: number;
  isActive: boolean;
  isEven: boolean;
}) => {
  const { cardProps, hoverState } = useCardHover();

  return (
    <motion.div
      className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Card 
        {...cardProps}
        className="spotlight-card features-border-glow overflow-hidden bg-transparent border-0 p-0 group relative"
        style={{
          ...cardProps.style,
          '--x': `${hoverState.x}%`,
          '--y': `${hoverState.y}%`,
        } as React.CSSProperties}
      >
        <div className="spotlight-overlay" />
        <div className="relative">
          <motion.img
            src={feature.image}
            alt={`${feature.title} interface preview`}
            className="w-full h-auto rounded-2xl"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={isActive ? { scale: 1, opacity: 1 } : { scale: 1.1, opacity: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
          
          {/* Dynamic overlay gradient */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-primary/10 rounded-2xl" 
            initial={{ opacity: 0 }}
            animate={isActive ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          
          {/* Floating badge with physics */}
          <motion.div
            className="absolute top-4 left-4 bg-surface-dark-1/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-semibold border border-primary/30"
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 2, -2, 0] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              delay: index * 0.7,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.1 }}
          >
            Feature {index + 1}
          </motion.div>
          
        </div>
      </Card>
    </motion.div>
  );
};

export const FeatureTrioSection = () => {
  const { ref: sectionRef } = useScrollAnimation();
  const { ref: featuresRef, activeIndex } = useStaggeredAnimation(features.length, 200);

  return (
    <section ref={sectionRef} className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Learn <span className="text-primary">•</span> Practice <span className="text-primary">•</span> Belong
          </motion.h2>
          <motion.p 
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Transform your exam preparation with our three-pillar approach to focused growth
          </motion.p>
        </motion.div>

        <div ref={featuresRef} className="space-y-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isEven = index % 2 === 0;
            const isActive = activeIndex >= index;
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 60, scale: 0.95 }}
                animate={isActive ? { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1 
                } : { 
                  opacity: 0, 
                  y: 60, 
                  scale: 0.95 
                }}
                transition={{ 
                  duration: 0.8, 
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-2'}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-2xl mb-6"
                  >
                    <Icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    {feature.title}
                  </h3>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-primary font-semibold">{feature.stats}</span>
                  </div>
                </div>

                {/* Image */}
                <FeatureCard
                  feature={feature}
                  index={index}
                  isActive={isActive}
                  isEven={isEven}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};