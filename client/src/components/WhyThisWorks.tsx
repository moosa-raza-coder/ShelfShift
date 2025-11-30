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
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <factor.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <span className="text-sm font-medium">{factor.text}</span>
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
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.9 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-lg" />
              <div className="relative glass-card rounded-2xl p-8 text-center">
                <p className="text-lg font-medium mb-4 text-muted-foreground">
                  But an aged corporation tells lenders:
                </p>
                <p className="text-2xl md:text-3xl font-heading font-bold text-gradient-gold italic">
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
              <div className="flex flex-wrap justify-center gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 1.1 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
                  >
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="font-medium">{benefit}</span>
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
