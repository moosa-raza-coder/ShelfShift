import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { DollarSign, Award, Zap, Clock } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "No Capital Required",
    description: "The corporation's age does the heavy lifting for you.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Award,
    title: "Instant Credibility",
    description: "Present yourself as an established business — from day one.",
    gradient: "from-primary/20 to-purple-500/20",
  },
  {
    icon: Zap,
    title: "Zero Startup Delays",
    description: "Avoid formation delays, paperwork, and slow credit-building.",
    gradient: "from-accent/20 to-yellow-500/20",
  },
  {
    icon: Clock,
    title: "Minimal Time Investment",
    description: "Setup takes hours — approvals arrive in days.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
];

interface BenefitsProps {
  onCheckInventory?: () => void;
}

export default function Benefits({ onCheckInventory }: BenefitsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="benefits"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="benefits-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-accent/20 text-sm font-medium text-accent mb-6"
          >
            Why Choose Us
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-benefits-headline"
          >
            Why Entrepreneurs Choose <span className="text-gradient-gold">Aged Corporations</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="relative group"
              data-testid={`card-benefit-${index}`}
            >
              <div className="relative bg-muted/30 rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-colors h-full">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                    <benefit.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
          className="text-center mt-12"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary to-primary/80 border-0 text-lg px-10"
              onClick={onCheckInventory}
              data-testid="button-schedule-benefits"
            >
              Schedule Your Strategy Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
