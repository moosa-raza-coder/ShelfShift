import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, ArrowRight } from "lucide-react";

const newLLCItems = [
  "High-risk startup",
  "Limited credit (typically $10k–$50k)",
  "Takes 2+ years to build trust",
  "Net 15 vendor terms",
];

const agedCorpItems = [
  "Established business",
  "$150k+ typical approvals",
  "Instant credibility",
  "Preferred Net 30+ terms",
];

interface ComparisonSectionProps {
  onLearnMore?: () => void;
}

export default function ComparisonSection({ onLearnMore }: ComparisonSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<"left" | "right" | null>(null);

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="comparison-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
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
            className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            Comparison
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-comparison-headline"
          >
            Your Business Age Is the Key to <span className="text-gradient-gold">Faster Approvals</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lenders rely on time-in-business as their #1 indicator of credibility.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.02, rotateY: -5 }}
            onHoverStart={() => setHoveredCard("left")}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative"
            style={{ perspective: 1000 }}
            data-testid="card-new-llc"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-br from-destructive/30 to-muted rounded-2xl blur transition-opacity duration-300 ${hoveredCard === "left" ? "opacity-50" : "opacity-20"}`} />
            <div className="relative glass-card rounded-2xl p-8 h-full border border-destructive/20">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                  <XCircle className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-muted-foreground">Brand New LLC</h3>
              </div>
              <ul className="space-y-4">
                {newLLCItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ scale: 1.02, rotateY: 5 }}
            onHoverStart={() => setHoveredCard("right")}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative"
            style={{ perspective: 1000 }}
            data-testid="card-aged-corp"
          >
            <div className={`absolute -inset-0.5 bg-gradient-to-br from-primary/40 to-accent/40 rounded-2xl blur transition-opacity duration-300 ${hoveredCard === "right" ? "opacity-60" : "opacity-30"}`} />
            <div className="relative glass-card rounded-2xl p-8 h-full border border-primary/30 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-gradient-gold">Aged Shelf Corporation</h3>
              </div>
              <ul className="space-y-4">
                {agedCorpItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="text-center mt-12 space-y-6"
        >
          <p className="text-xl font-heading font-semibold text-gradient" data-testid="text-comparison-tagline">
            Start two years ahead — without waiting.
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={onLearnMore}
            className="group border-primary/30 hover:border-primary hover:bg-primary/10"
            data-testid="button-learn-more"
          >
            See How It Works
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
