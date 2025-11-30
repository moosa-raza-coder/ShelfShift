import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onScheduleCall?: () => void;
}

export default function VideoModal({ open, onOpenChange, onScheduleCall }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden glass-card border-primary/20" data-testid="dialog-video">
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
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-accent to-accent/80 flex items-center justify-center glow-gold">
              <Play className="w-12 h-12 text-accent-foreground ml-1" fill="currentColor" />
            </div>
            <p className="text-muted-foreground">Video placeholder - Strategy session content</p>
          </motion.div>
        </div>
        <div className="p-6">
          <Button
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            size="lg"
            onClick={() => {
              onOpenChange(false);
              onScheduleCall?.();
            }}
            data-testid="button-schedule-after-video"
          >
            Schedule My Strategy Call
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
