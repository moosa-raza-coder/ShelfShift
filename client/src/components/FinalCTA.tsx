import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Sparkles, ArrowRight } from "lucide-react";

interface FinalCTAProps {
  onSecureCorporation?: () => void;
}

export default function FinalCTA({ onSecureCorporation }: FinalCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="book-call"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="final-cta-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-sm font-medium text-accent"
          >
            <Sparkles className="w-4 h-4" />
            Limited Availability
          </motion.div>

          <h2
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold"
            data-testid="text-cta-headline"
          >
            Ready to Unlock{" "}
            <span className="text-gradient-gold">Real Business Funding?</span>
          </h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
            className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            <p>Take the fastest path to credibility.</p>
            <p>Take the shortcut that experienced entrepreneurs already know.</p>
            <p>Take advantage while inventory lasts.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="pt-6"
          >
            <Button
              size="lg"
              className="text-lg px-10 py-6 h-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 font-semibold"
              onClick={onSecureCorporation}
              data-testid="button-secure-now"
            >
              Schedule My Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <p className="mt-6 text-sm text-accent font-medium" data-testid="badge-scarcity">
              <AlertTriangle className="w-4 h-4 mr-2 inline" />
              Only 4 Premium Aged Corporations Available This Week
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
