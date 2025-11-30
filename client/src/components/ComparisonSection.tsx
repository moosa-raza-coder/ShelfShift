import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

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
  return (
    <section className="py-16 md:py-20 lg:py-24" data-testid="comparison-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-comparison-headline">
            Your Business Age Is the Key to Faster Approvals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lenders rely on time-in-business as their #1 indicator of credibility.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-6 md:p-8 bg-muted/50 border-muted" data-testid="card-new-llc">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground">
                <XCircle className="w-6 h-6" />
                <h3 className="font-heading text-xl font-semibold">Brand New LLC</h3>
              </div>
              <ul className="space-y-3">
                {newLLCItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <XCircle className="w-5 h-5 text-destructive/60 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="p-6 md:p-8 border-primary/20 bg-primary/5" data-testid="card-aged-corp">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle className="w-6 h-6" />
                <h3 className="font-heading text-xl font-semibold text-foreground">Aged Shelf Corporation</h3>
              </div>
              <ul className="space-y-3">
                {agedCorpItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>

        <div className="text-center mt-10 space-y-4">
          <p className="text-xl font-heading font-semibold" data-testid="text-comparison-tagline">
            Start two years ahead — without waiting.
          </p>
          <Button variant="outline" size="lg" onClick={onLearnMore} data-testid="button-learn-more">
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
