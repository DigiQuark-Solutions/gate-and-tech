import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, CreditCard } from "lucide-react";
import { useCardHover } from "@/hooks/use-card-hover";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { GlowingBadge } from "@/components/ui/animated-counter";

const plans = [
  {
    name: "Starter",
    price: "₹0",
    period: "Forever Free",
    description: "Perfect for getting started",
    features: [
      "Unlimited practice on 30 sample tests",
      "Basic analytics dashboard",
      "Peer discussion access",
      "Progress tracking",
      "Mobile app access"
    ],
    cta: "Get Started Free",
    popular: false,
    accent: "success"
  },
  {
    name: "Pro Test-Series Pack",
    price: "₹999",
    period: "per year",
    description: "Complete exam preparation",
    features: [
      "120+ full-length mock tests",
      "Adaptive analytics & AI insights",
      "Topic-level drilling exercises",
      "Mentor priority replies",
      "Streak rewards & gamification",
      "Detailed performance reports",
      "Exclusive study materials",
      "24/7 doubt solving support"
    ],
    cta: "Upgrade to Pro",
    popular: true,
    accent: "primary"
  }
];

const guarantees = [
  { icon: Shield, text: "No hidden fees" },
  { icon: CreditCard, text: "Razorpay secure" },
  { icon: Zap, text: "7-day money-back guarantee" }
];

export const PricingSection = () => {
  return (
    <section className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-muted-foreground">
            Start free, upgrade when you're ready to accelerate
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {plans.map((plan, index) => {
            const { cardProps, hoverState } = useCardHover();
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <Card 
                  {...cardProps}
                  className={`spotlight-card glass-premium p-8 h-full relative overflow-hidden transition-all duration-300 ${
                    plan.popular 
                      ? "border-primary shadow-2xl shadow-primary/30" 
                      : "border-gray-3"
                  }`}
                  style={{
                    ...cardProps.style,
                    '--x': `${hoverState.x}%`,
                    '--y': `${hoverState.y}%`,
                  } as React.CSSProperties}
                >
                  <div className="spotlight-overlay" />
                  {plan.popular && (
                    <motion.div
                      className="absolute top-0 left-0 right-0 bg-gradient-to-r from-primary to-primary-light text-white text-center py-3 text-sm font-bold z-10 shadow-lg"
                      initial={{ y: -100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        ⭐ Most Popular
                      </motion.span>
                    </motion.div>
                  )}
                  
                  <div className={`relative z-10 ${plan.popular ? "mt-8" : ""}`}>
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                      <p className="text-muted-foreground mb-4">{plan.description}</p>
                      
                      <div className="flex items-baseline gap-2">
                        <motion.span 
                          className="text-4xl font-black gradient-text"
                          animate={{ scale: [1, 1.02, 1] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          {plan.price}
                        </motion.span>
                        <span className="text-muted-foreground">/ {plan.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 * featureIndex }}
                          className="flex items-start gap-3"
                        >
                          <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.accent === 'primary' ? 'text-primary' : 'text-success'
                          }`} />
                          <span className="text-sm leading-relaxed">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <MagneticButton
                      className={`w-full py-6 text-lg font-semibold ${
                        plan.popular
                          ? "bg-primary hover:bg-primary-dark text-white"
                          : "bg-success hover:bg-success/90 text-white"
                      }`}
                      magneticStrength={plan.popular ? 0.25 : 0.15}
                    >
                      {plan.cta}
                    </MagneticButton>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Guarantees */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center items-center gap-8 text-center"
        >
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <motion.div
                key={guarantee.text}
                className="flex items-center gap-2 text-muted-foreground"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="font-medium">{guarantee.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <Button variant="link" className="text-primary hover:text-primary-light underline-animate">
            Compare plans →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};