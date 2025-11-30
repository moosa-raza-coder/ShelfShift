import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, ShieldCheck, Lock } from "lucide-react";

const guaranteeItems = [
  "Verified-aged corporations",
  "Clean documentation",
  "Full transparency",
  "Clear process",
  "Reliable support",
];

export default function GuaranteeBlock() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="guarantee-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-40" />
          <div
            className="relative glass-card rounded-3xl p-10 md:p-14 text-center glow-border"
            data-testid="card-guarantee"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-8"
            >
              <ShieldCheck className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-heading text-3xl md:text-4xl font-bold mb-6"
              data-testid="text-guarantee-headline"
            >
              Our <span className="text-gradient-gold">Commitment</span> to You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground mb-8"
            >
              We provide:
            </motion.p>

            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {guaranteeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/20"
                  data-testid={`guarantee-item-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-accent" />
                  <span className="font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1.1 }}
              className="space-y-3"
            >
              <div className="flex items-center justify-center gap-2 text-lg font-semibold">
                <Lock className="w-5 h-5 text-primary" />
                No surprises. No hidden risks.
              </div>
              <p className="text-muted-foreground">
                Just a clear path to building real business credit — fast.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
