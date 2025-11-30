import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Play, ArrowRight } from "lucide-react";

interface VideoModalGatedProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLeadCaptured?: (leadData: { name: string; email: string; phone?: string }) => void;
  onOpenCalendly?: () => void;
}

export default function VideoModalGated({ 
  open, 
  onOpenChange, 
  onLeadCaptured,
  onOpenCalendly
}: VideoModalGatedProps) {
  const [step, setStep] = useState<"gate" | "video" | "complete">("gate");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLeadCapture = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || null,
          corpAge: null,
          creditScore: null,
          combos: null,
          estimatedMin: 0,
          estimatedMax: 0,
        }),
      });

      if (response.ok) {
        onLeadCaptured?.({ name, email, phone });
        setStep("video");
        setTimeout(() => setStep("complete"), 6000);
      }
    } catch (error) {
      console.error("Error capturing lead:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setStep("gate");
    setName("");
    setEmail("");
    setPhone("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden glass-card border-primary/20" data-testid="dialog-video-gated">
        {/* STEP 1: LEAD CAPTURE GATE */}
        {step === "gate" && (
          <>
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="font-heading text-2xl text-gradient-gold">
                Access Your Video Strategy Session
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-3">
                Enter your information to unlock exclusive content
              </p>
            </DialogHeader>
            <div className="p-6 space-y-5">
              <form onSubmit={handleLeadCapture} className="space-y-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Full Name *</label>
                  <Input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                    data-testid="input-gate-name"
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Email Address *</label>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                    data-testid="input-gate-email"
                    className="h-10"
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">Phone (Optional)</label>
                  <Input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    data-testid="input-gate-phone"
                    className="h-10"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold"
                  size="lg"
                  disabled={isSubmitting}
                  data-testid="button-unlock-video"
                >
                  {isSubmitting ? "Processing..." : "Unlock Video"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4 ml-2" />}
                </Button>
              </form>
            </div>
          </>
        )}

        {/* STEP 2: VIDEO PLAYING */}
        {step === "video" && (
          <>
            <DialogHeader className="p-6 pb-0">
              <DialogTitle className="font-heading text-xl text-gradient-gold">
                How to Unlock $150K+ in Business Credit
              </DialogTitle>
            </DialogHeader>
            <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/10 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center space-y-4 relative z-10"
              >
                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center shadow-lg">
                  <Play className="w-12 h-12 text-accent-foreground ml-1" fill="currentColor" />
                </div>
                <p className="text-muted-foreground font-medium">Video content playing...</p>
                <p className="text-xs text-muted-foreground">Next step coming in a moment</p>
              </motion.div>
            </div>
            <div className="p-6 text-center">
              <p className="text-sm text-muted-foreground">Thank you for watching! We'll show booking options next.</p>
            </div>
          </>
        )}

        {/* STEP 3: VIDEO COMPLETE - OFFER CALENDLY */}
        {step === "complete" && (
          <>
            <DialogHeader className="p-6 pb-4">
              <DialogTitle className="font-heading text-2xl text-gradient-gold">
                Ready to Book Your Strategy Call?
              </DialogTitle>
              <p className="text-sm text-muted-foreground mt-3">
                {name}, you've unlocked exclusive access. Let's schedule your personalized session.
              </p>
            </DialogHeader>
            <div className="p-6 space-y-4">
              <div className="bg-primary/5 rounded-lg p-4 border border-primary/10">
                <p className="text-sm text-foreground">
                  Based on what you learned in the video, we can show you exactly how to:
                </p>
                <ul className="text-sm text-muted-foreground mt-3 space-y-2 ml-4">
                  <li>• Access $150K+ in business credit</li>
                  <li>• Minimize personal guarantees</li>
                  <li>• Build your corporate credit profile</li>
                </ul>
              </div>
              <Button
                onClick={() => {
                  onOpenCalendly?.();
                  handleClose();
                }}
                className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-6"
                size="lg"
                data-testid="button-open-calendly"
              >
                Schedule My Strategy Call
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleClose}
                data-testid="button-skip-booking"
              >
                Maybe Later
              </Button>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
