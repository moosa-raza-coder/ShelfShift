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
      <div className="absolute inset-0 animated-gradient-bg" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-primary/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-accent/10 rounded-full"
      />
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-primary/5 rounded-full"
      />
      
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
            className="pt-4"
          >
            <div className="relative inline-block group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <Button
                size="lg"
                className="relative text-xl px-12 py-7 h-auto bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 border-0 font-semibold shadow-2xl"
                onClick={onSecureCorporation}
                data-testid="button-secure-now"
              >
                Schedule My Strategy Call
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
          >
            <Badge
              variant="outline"
              className="mt-6 px-5 py-2.5 text-sm bg-destructive/10 border-destructive/30 text-destructive animate-pulse"
              data-testid="badge-scarcity"
            >
              <AlertTriangle className="w-4 h-4 mr-2 inline" />
              Only 4 Premium Aged Corporations Available This Week
            </Badge>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
