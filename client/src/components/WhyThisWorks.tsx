import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, TrendingUp, Shield, Clock, Award } from "lucide-react";

const lenderFactors = [
  { text: "stability", icon: Shield },
  { text: "default probability", icon: TrendingUp },
  { text: "risk profile", icon: Clock },
  { text: "creditworthiness", icon: Award },
];

const benefits = [
  "higher limits",
  "faster approvals",
  "better terms",
  "more trust",
];

export default function WhyThisWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="why-this-works-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-accent/20 text-sm font-medium text-accent"
          >
            The Secret
          </motion.span>

          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-wtw-headline"
          >
            The #1 Reason Startups Get Denied:{" "}
            <span className="text-gradient-gold">"Not Enough Time in Business."</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-8 text-left">
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="text-lg text-muted-foreground text-center"
            >
              Lenders use corporate age to determine:
            </motion.p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {lenderFactors.map((factor, index) => (
                <motion.div
                  key={factor.text}
                  initial={{ opacity: 0, y: 30, rotateX: -20 }}
                  animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.08, y: -8, rotateY: 5 }}
                  style={{ perspective: 1000, transformStyle: "preserve-3d" }}
                  className="relative"
                >
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary/40 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity" />
                  <div className="relative glass-card rounded-2xl p-6 text-center h-full">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center mx-auto mb-4">
                      <factor.icon className="w-7 h-7 text-primary" />
                    </div>
                    <span className="text-sm font-semibold capitalize">{factor.text}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
              className="text-lg text-muted-foreground text-center pt-4"
            >
              A brand-new LLC is treated as a liability, no matter how skilled the founder is.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ delay: 0.9, type: "spring" }}
              className="relative my-8"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-primary/50 via-accent/40 to-primary/50 rounded-3xl blur-2xl opacity-50" />
              <div className="relative glass-card rounded-3xl p-10 md:p-12 text-center glow-border">
                <p className="text-base font-medium mb-6 text-muted-foreground uppercase tracking-wide">
                  But an aged corporation tells lenders:
                </p>
                <p className="text-3xl md:text-4xl font-heading font-bold text-gradient-gold">
                  "This business is established, structured, and stable."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="space-y-4 pt-4"
            >
              <p className="text-lg text-muted-foreground text-center">
                That is why aged corporations consistently get:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center gap-2.5 px-6 py-3 rounded-full glass-card border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="font-semibold capitalize">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.5 }}
              className="text-2xl font-heading font-bold text-center pt-8 text-gradient"
              data-testid="text-wtw-tagline"
            >
              This is the ultimate funding advantage.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
