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
          <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 rounded-3xl blur-xl opacity-30" />
          <div
            className="relative glass-card rounded-3xl p-8 md:p-12 glow-border"
            data-testid="card-value-stack"
          >
            <div className="grid md:grid-cols-2 gap-4">
              {valueItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.08 }}
                  whileHover={{ x: 5, scale: 1.02 }}
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
                  data-testid={`value-item-${index}`}
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + index * 0.08, type: "spring" }}
                    className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </motion.div>
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
