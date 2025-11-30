import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Building, FileCheck, CreditCard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building,
    title: "Acquire an Aged Corporation",
    subtitle: "(2–5 Years Old)",
    description:
      "Skip the \"new business\" phase entirely. Start with a corporation that already has age, history, and lender credibility.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Build a Powerful Credit Profile",
    subtitle: "",
    description:
      "We guide you through the exact steps: correct structure, proper filing, verified EIN, vendor alignment, and compliance positioning.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Secure High-Limit Credit Lines",
    subtitle: "",
    description:
      "Access $10k–$50k business cards, $25k–$75k credit lines, $150k+ combined approvals, and Net 30 vendor accounts.",
  },
];

interface HowItWorksProps {
  onViewInventory?: () => void;
}

export default function HowItWorks({ onViewInventory }: HowItWorksProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="how-it-works"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="how-it-works-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
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
            className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            The Process
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-hiw-headline"
          >
            The Proven <span className="text-gradient-gold">3-Step System</span> to Qualify for Real Business Funding
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent hidden md:block" />
          
          <div className="grid md:grid-cols-3 gap-8 md:gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                className="relative"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative h-full"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/50 to-accent/50 rounded-2xl blur opacity-0 hover:opacity-30 transition-opacity duration-500" />
                  <div className="relative h-full glass-card rounded-2xl p-8 glow-border" data-testid={`card-step-${index + 1}`}>
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={isInView ? { scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                        className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
                      >
                        <step.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <span className="font-heading text-5xl font-bold text-primary/20">{step.number}</span>
                    </div>
                    <h3 className="font-heading text-xl font-semibold mb-2" data-testid={`text-step-title-${index + 1}`}>
                      {step.title}
                      {step.subtitle && <span className="text-accent"> {step.subtitle}</span>}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: 0.7 + index * 0.2 }}
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-background border-2 border-primary rounded-full hidden md:flex items-center justify-center z-10"
                >
                  <div className="w-3 h-3 bg-primary rounded-full pulse-glow" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            <Button
              size="lg"
              className="relative bg-gradient-to-r from-primary to-primary/80 border-0 text-lg px-10"
              onClick={onViewInventory}
              data-testid="button-schedule-call-hiw"
            >
              Schedule Your Strategy Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
