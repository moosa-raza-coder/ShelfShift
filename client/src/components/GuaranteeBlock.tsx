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
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div
            className="relative bg-muted/20 rounded-xl p-8 md:p-10 text-center border border-border/50"
            data-testid="card-guarantee"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-12 h-12 mx-auto rounded-lg bg-primary/10 flex items-center justify-center mb-6 border border-primary/20"
            >
              <ShieldCheck className="w-6 h-6 text-primary" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="font-heading text-2xl md:text-3xl font-bold mb-2"
              data-testid="text-guarantee-headline"
            >
              Our <span className="text-gradient-gold">Commitment</span> to You
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground text-sm mb-6"
            >
              No surprises. No hidden risks. Just results.
            </motion.p>

            <div className="grid sm:grid-cols-5 gap-2 mb-6">
              {guaranteeItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + index * 0.08 }}
                  className="flex flex-col items-center gap-1 p-3 bg-primary/5 rounded-lg border border-primary/20 text-center"
                  data-testid={`guarantee-item-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium text-sm">{item}</span>
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
