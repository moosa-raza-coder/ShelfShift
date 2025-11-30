import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, Award, Zap, Clock } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "No Capital Required",
    description: "The corporation's age does the heavy lifting for you.",
  },
  {
    icon: Award,
    title: "Instant Credibility",
    description: "Present yourself as an established business — from day one.",
  },
  {
    icon: Zap,
    title: "Zero Startup Delays",
    description: "Avoid formation delays, paperwork, and slow credit-building.",
  },
  {
    icon: Clock,
    title: "Minimal Time Investment",
    description: "Setup takes hours — approvals arrive in days.",
  },
];

interface BenefitsProps {
  onCheckInventory?: () => void;
}

export default function Benefits({ onCheckInventory }: BenefitsProps) {
  return (
    <section id="benefits" className="py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="benefits-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-benefits-headline">
            Why Entrepreneurs Choose Aged Corporations
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 md:p-8 hover-elevate" data-testid={`card-benefit-${index}`}>
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={onCheckInventory} data-testid="button-schedule-benefits">
            Schedule Your Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
