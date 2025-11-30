import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, Play, Gift, Sparkles } from "lucide-react";

interface ExitIntentPopupProps {
  onOpenCalculator: () => void;
  onWatchVideo: () => void;
  disabled?: boolean;
}

export default function ExitIntentPopup({
  onOpenCalculator,
  onWatchVideo,
  disabled = false,
}: ExitIntentPopupProps) {
  const [open, setOpen] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      if (disabled || hasShown) return;
      if (e.clientY <= 0) {
        setOpen(true);
        setHasShown(true);
      }
    },
    [disabled, hasShown]
  );

  useEffect(() => {
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [handleMouseLeave]);

  const handleCalculator = () => {
    setOpen(false);
    onOpenCalculator();
  };

  const handleVideo = () => {
    setOpen(false);
    onWatchVideo();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md glass-card border-accent/20 glow-border" data-testid="dialog-exit-intent">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 font-heading text-2xl">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center"
            >
              <Gift className="w-5 h-5 text-accent-foreground" />
            </motion.div>
            <span className="text-gradient-gold">Wait! Don't Miss This</span>
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Before you go, discover your funding potential or watch how entrepreneurs are getting $150K+ in business credit.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Button
              className="w-full justify-start gap-4 h-auto py-4 px-5 bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30"
              variant="ghost"
              onClick={handleCalculator}
              data-testid="button-exit-calculator"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Calculator className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Calculate Your Funding Potential</div>
                <div className="text-sm text-muted-foreground">See how much credit you could unlock</div>
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Button
              className="w-full justify-start gap-4 h-auto py-4 px-5 bg-muted/50 hover:bg-primary/10 border border-border/50 hover:border-primary/30"
              variant="ghost"
              onClick={handleVideo}
              data-testid="button-exit-video"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20">
                <Play className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-foreground">Watch Our Strategy Video</div>
                <div className="text-sm text-muted-foreground">Learn the 3-step funding system</div>
              </div>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-2 pt-2"
          >
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Limited spots available</span>
          </motion.div>

          <button
            className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors pt-2"
            onClick={() => setOpen(false)}
          >
            No thanks, I'll leave
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
