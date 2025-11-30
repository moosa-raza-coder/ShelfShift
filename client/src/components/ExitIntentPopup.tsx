import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calculator, Play, Gift } from "lucide-react";

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
      <DialogContent className="max-w-md" data-testid="dialog-exit-intent">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-heading text-2xl">
            <Gift className="w-6 h-6 text-primary" />
            Wait! Don't Miss This
          </DialogTitle>
          <DialogDescription>
            Before you go, discover your funding potential or watch how entrepreneurs are getting $150K+ in business credit.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <Button
            className="w-full justify-start gap-3 h-auto py-4"
            variant="outline"
            onClick={handleCalculator}
            data-testid="button-exit-calculator"
          >
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Calculator className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Calculate Your Funding Potential</div>
              <div className="text-sm text-muted-foreground">See how much credit you could unlock</div>
            </div>
          </Button>

          <Button
            className="w-full justify-start gap-3 h-auto py-4"
            variant="outline"
            onClick={handleVideo}
            data-testid="button-exit-video"
          >
            <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Play className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <div className="font-semibold">Watch Our Strategy Video</div>
              <div className="text-sm text-muted-foreground">Learn the 3-step funding system</div>
            </div>
          </Button>

          <button
            className="w-full text-sm text-muted-foreground hover:text-foreground pt-2"
            onClick={() => setOpen(false)}
          >
            No thanks, I'll leave
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
