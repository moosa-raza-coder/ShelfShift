import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "Is this legal?",
    answer:
      "Yes. Aged corporations are fully legal and commonly used for business credit positioning.",
  },
  {
    question: "Do these corporations have credit histories?",
    answer:
      "No. They have aged history, not credit activity — making them clean and ready for your credit building journey.",
  },
  {
    question: "Will this hurt my personal credit?",
    answer: "No. Business credit is built separately from personal credit.",
  },
  {
    question: "How fast can I get approved?",
    answer: "Most clients see approvals within 30–45 days.",
  },
  {
    question: "How fast do I get my corporation?",
    answer: "Within 72 hours of completing your strategy call and making your decision.",
  },
  {
    question: "Can I choose the age of the corporation?",
    answer: "Yes. We have multiple age tiers available (2-5 years) to match your funding goals.",
  },
  {
    question: "What is the investment to get started?",
    answer:
      "Our full-service funding solutions start at $5,000. This investment includes your aged corporation, all documentation, and our complete credit building and funding program.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="faq-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="relative max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            FAQ
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-faq-headline"
          >
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4" data-testid="accordion-faq">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.08 }}
              className="relative"
              data-testid={`faq-item-${index}`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 hover:opacity-30 transition-opacity" />
              <div className="relative glass-card rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-semibold pr-4">{faq.question}</span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-accent" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-muted-foreground border-t border-border/30 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
