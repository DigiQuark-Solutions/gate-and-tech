import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How close are your mocks to the actual exam?",
    answer: "We replicate the official interface, marking scheme, and difficulty distribution using past papers and faculty calibration."
  },
  {
    question: "Is the free plan really free forever?",
    answer: "Yes—no credit card, no expiry. Upgrade only when you need deeper analytics."
  },
  {
    question: "Can I reset a test and try again?",
    answer: "Absolutely. Every mock can be retaken in Review Mode without affecting your score history."
  },
  {
    question: "What happens to my progress if I upgrade?",
    answer: "All previous attempts and analytics carry over seamlessly."
  },
  {
    question: "Do you offer doubt-solving sessions?",
    answer: "Pro members can tag mentors in discussion threads and get verified answers within 24 hours."
  },
  {
    question: "How does the refund work?",
    answer: "If Pro isn't right for you, email support within 7 days—your payment is returned, no questions asked."
  }
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about getting started
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <AccordionItem 
                  value={`item-${index}`}
                  className="bg-surface-dark border border-gray-3 rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors duration-200"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors duration-200 py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};