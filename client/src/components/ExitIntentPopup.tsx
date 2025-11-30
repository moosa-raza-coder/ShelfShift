import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Gift, ArrowRight } from "lucide-react";

interface ExitIntentPopupProps {
  onLeadCapture?: (email: string) => void;
  onScheduleCall?: () => void;
}

export default function ExitIntentPopup({ onLeadCapture, onScheduleCall }: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isDismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !isVisible && !isDismissed) {
        setIsVisible(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [isVisible, isDismissed]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      onLeadCapture?.(email);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsDismissed(true);
      }, 2000);
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setIsVisible(false);
              setIsDismissed(true);
            }}
            className="fixed inset-0 z-[100] bg-black/50 backdrop-blur-sm"
            data-testid="exit-intent-backdrop"
          />

          {/* Centered Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            data-testid="exit-intent-popup"
          >
            <div className="relative w-full max-w-md">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-br from-primary via-accent to-primary rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity" />

              {/* Content */}
              <div className="relative glass-card rounded-2xl p-8 space-y-6">
                {/* Close Button */}
                <button
                  onClick={() => {
                    setIsVisible(false);
                    setIsDismissed(true);
                  }}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="button-close-exit-intent"
                >
                  <X className="w-4 h-4" />
                </button>

                {!isSubmitted ? (
                  <>
                    {/* Icon */}
                    <div className="flex justify-center">
                      <motion.div
                        animate={{ rotate: [0, -10, 10, -5, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/40 to-primary/40 flex items-center justify-center"
                      >
                        <Gift className="w-8 h-8 text-accent" />
                      </motion.div>
                    </div>

                    {/* Headline */}
                    <div className="text-center">
                      <h3
                        className="font-heading text-2xl font-bold mb-2"
                        data-testid="text-exit-headline"
                      >
                        Hold On! <span className="text-gradient-gold">Free Resource Inside</span>
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Get our complete guide: "The $150k Funding Blueprint" — used by 1000+ entrepreneurs to unlock business credit instantly.
                      </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                          className="w-full px-4 py-3 bg-muted/50 border border-primary/20 rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                          data-testid="input-exit-email"
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-accent to-primary hover:from-accent/90 hover:to-primary/90 border-0"
                        data-testid="button-exit-submit"
                      >
                        <Gift className="w-4 h-4 mr-2" />
                        Get Free Guide
                      </Button>
                    </form>

                    {/* Or Divider */}
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                      <span className="text-xs text-muted-foreground">or</span>
                      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                    </div>

                    {/* Schedule Call Button */}
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        onScheduleCall?.();
                        setIsVisible(false);
                        setIsDismissed(true);
                      }}
                      data-testid="button-exit-schedule"
                    >
                      Schedule Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>

                    {/* Small Text */}
                    <p className="text-xs text-muted-foreground text-center">
                      No spam. Unsubscribe anytime.
                    </p>
                  </>
                ) : (
                  /* Success State */
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4 py-6"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5 }}
                      className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500/40 to-emerald-500/40 flex items-center justify-center mx-auto"
                    >
                      <Gift className="w-8 h-8 text-green-500" />
                    </motion.div>
                    <div>
                      <h3 className="font-heading text-xl font-bold mb-2">
                        Check Your Email!
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Your free "$150k Funding Blueprint" guide is on the way.
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
