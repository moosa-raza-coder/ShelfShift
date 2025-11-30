import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle } from "lucide-react";

interface FinalCTAProps {
  onSecureCorporation?: () => void;
}

export default function FinalCTA({ onSecureCorporation }: FinalCTAProps) {
  return (
    <section id="book-call" className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/50" data-testid="final-cta-section">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-cta-headline">
            Ready to Unlock Real Business Funding?
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            <p>Take the fastest path to credibility.</p>
            <p>Take the shortcut that experienced entrepreneurs already know.</p>
            <p>Take advantage while inventory lasts.</p>
          </div>

          <div className="pt-4">
            <Button
              size="lg"
              className="text-lg px-10 py-6 h-auto"
              onClick={onSecureCorporation}
              data-testid="button-secure-now"
            >
              Schedule My Strategy Call
            </Button>
          </div>

          <Badge
            variant="outline"
            className="mt-6 px-4 py-2 text-sm bg-destructive/10 border-destructive/30 text-destructive"
            data-testid="badge-scarcity"
          >
            <AlertTriangle className="w-4 h-4 mr-2 inline" />
            Only 4 Premium Aged Corporations Available This Week
          </Badge>
        </div>
      </div>
    </section>
  );
}
