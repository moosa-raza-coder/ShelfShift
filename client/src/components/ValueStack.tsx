import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Sparkles } from "lucide-react";

const valueItems = [
  "Verified 2–5 year corporate age",
  "Clean, unused corporate history",
  "EIN + full documentation",
  "Articles of Incorporation",
  "Registered Agent Setup",
  "Corporate compliance check",
  "Initial credit-building plan",
  "Funding strategy call",
  "Step-by-step vendor activation roadmap",
  "Dedicated support specialist",
];

export default function ValueStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="value-stack-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
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
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-sm font-medium text-accent mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Complete Package
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-value-headline"
          >
            Every Aged Corporation <span className="text-gradient-gold">Comes with:</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            This is everything you need to go from zero to funded.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div
            className="relative"
            data-testid="card-value-stack"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {valueItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.06 }}
                  className="flex flex-col items-start gap-2 p-4 bg-muted/30 rounded-lg border border-border/30 hover:border-primary/30 transition-colors group"
                  data-testid={`value-item-${index}`}
                >
                  <div className="flex items-start gap-2 w-full">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium leading-snug">{item}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
