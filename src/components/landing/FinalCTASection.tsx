import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Send, CheckCircle } from "lucide-react";
import { useCardHover } from "@/hooks/use-card-hover";

export const FinalCTASection = () => {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { cardProps, hoverState } = useCardHover();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && consent) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
        setConsent(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-surface-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
           <Card 
             {...cardProps}
             className="bg-gradient-to-br from-primary/10 via-background to-primary/5 border-primary/20 p-8 md:p-12 rounded-2xl newsletter-border-glow relative"
           >
             <div 
               className="spotlight-overlay"
               style={{
                 '--x': `${hoverState.x}%`,
                 '--y': `${hoverState.y}%`,
               } as React.CSSProperties}
             />
            <div className="text-center mb-8">
              <motion.div
                className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Mail className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get a free <span className="gradient-text">GATE-style question</span> every day
              </h2>
              
              <p className="text-xl text-muted-foreground">
                Sharpen your instincts in under 2 minutes—straight to your inbox.
              </p>
            </div>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-surface-dark-1 border-gray-3 text-foreground placeholder:text-gray-2 focus:border-primary text-lg py-6"
                  />
                  
                  <div className="flex items-start space-x-3">
                    <Checkbox
                      id="consent"
                      checked={consent}
                      onCheckedChange={(checked) => setConsent(checked as boolean)}
                      className="mt-1 border-gray-3 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                    />
                    <label
                      htmlFor="consent"
                      className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                    >
                      I'm okay with occasional product tips.
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={!email || !consent}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-6 text-lg transition-all duration-200 hover:scale-105 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Today's Question
                </Button>

                <p className="text-center text-sm text-gray-2">
                  Zero spam. Unsubscribe anytime.
                </p>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-4"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 bg-success/20 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-10 h-10 text-success" />
                </motion.div>
                
                <h3 className="text-2xl font-bold text-success">
                  Welcome to the community!
                </h3>
                
                <p className="text-muted-foreground">
                  Check your inbox for today's question. We're excited to help you grow!
                </p>
              </motion.div>
            )}
          </Card>

          {/* Additional CTA Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            <motion.div
              className="bg-success/10 border border-success/20 rounded-full px-4 py-2 text-success font-medium"
              whileHover={{ scale: 1.05 }}
            >
              ✓ 27k+ active learners
            </motion.div>
            <motion.div
              className="bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-primary font-medium"
              whileHover={{ scale: 1.05 }}
            >
              ✓ Daily brain training
            </motion.div>
            <motion.div
              className="bg-warning/10 border border-warning/20 rounded-full px-4 py-2 text-warning font-medium"
              whileHover={{ scale: 1.05 }}
            >
              ✓ Free forever
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};