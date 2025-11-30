import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

interface VideoModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onScheduleCall?: () => void;
}

export default function VideoModal({ open, onOpenChange, onScheduleCall }: VideoModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl p-0 overflow-hidden" data-testid="dialog-video">
        <DialogHeader className="p-4 pb-0">
          <DialogTitle className="font-heading text-xl">
            How to Unlock $150K+ in Business Credit
          </DialogTitle>
        </DialogHeader>
        <div className="aspect-video bg-muted flex items-center justify-center">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <Play className="w-10 h-10 text-primary ml-1" fill="currentColor" />
            </div>
            <p className="text-muted-foreground">Video placeholder - Strategy session content</p>
          </div>
        </div>
        <div className="p-4">
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              onOpenChange(false);
              onScheduleCall?.();
            }}
            data-testid="button-schedule-after-video"
          >
            Schedule My Strategy Call
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
