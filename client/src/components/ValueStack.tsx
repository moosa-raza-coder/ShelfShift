import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const valueItems = [
  "Verified 2–5 year corporate age",
  "Clean, unused corporate history",
  "EIN + full documentation",
  "Articles of Incorporation",
  "Registered Agent Setup",
  "Corporate compliance check",
  "Initial credit-building plan",
  "Funding strategy call",
  "Step-by-step vendor activation roadmap",
  "Dedicated support specialist",
];

export default function ValueStack() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="value-stack-section">
      <div className="max-w-5xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-value-headline">
            Every Aged Corporation Comes with:
          </h2>
          <p className="text-lg text-muted-foreground">
            This is everything you need to go from zero to funded.
          </p>
        </div>

        <Card className="p-6 md:p-8 lg:p-10" data-testid="card-value-stack">
          <div className="grid md:grid-cols-2 gap-4">
            {valueItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 rounded-md hover-elevate"
                data-testid={`value-item-${index}`}
              >
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
