import { Card } from "@/components/ui/card";
import { CheckCircle, ShieldCheck } from "lucide-react";

const guaranteeItems = [
  "Verified-aged corporations",
  "Clean documentation",
  "Full transparency",
  "Clear process",
  "Reliable support",
];

export default function GuaranteeBlock() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="guarantee-section">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <Card className="p-8 md:p-12 text-center" data-testid="card-guarantee">
          <div className="space-y-6">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold" data-testid="text-guarantee-headline">
              Our Commitment to You
            </h2>
            <p className="text-muted-foreground">We provide:</p>
            <div className="flex flex-wrap justify-center gap-3">
              {guaranteeItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-muted px-4 py-2 rounded-md"
                  data-testid={`guarantee-item-${index}`}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="pt-4 space-y-2">
              <p className="text-lg font-semibold">No surprises. No hidden risks.</p>
              <p className="text-muted-foreground">
                Just a clear path to building real business credit — fast.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
