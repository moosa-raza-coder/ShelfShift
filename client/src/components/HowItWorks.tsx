import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, FileCheck, CreditCard, ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Building,
    title: "Acquire an Aged Corporation (2–5 Years Old)",
    description:
      "Skip the \"new business\" phase entirely. Start with a corporation that already has age, history, and lender credibility. This is the #1 shortcut used by experienced entrepreneurs.",
  },
  {
    number: "02",
    icon: FileCheck,
    title: "Build a Powerful Business Credit Profile",
    description:
      "We guide you through the exact steps that lenders want to see: correct structure, proper filing, verified EIN, vendor alignment, tiered credit building, and compliance positioning.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Secure High-Limit, Unsecured Credit Lines",
    description:
      "Your aged corporation + our system opens access to $10k–$50k business cards, $25k–$75k credit lines, $150k+ combined approvals, Net 30 vendor accounts, and premium tier lenders.",
  },
];

interface HowItWorksProps {
  onViewInventory?: () => void;
}

export default function HowItWorks({ onViewInventory }: HowItWorksProps) {
  return (
    <section id="how-it-works" className="py-16 md:py-20 lg:py-24" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-hiw-headline">
            The Proven 3-Step System to Qualify for Real Business Funding
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow our proven process that thousands of entrepreneurs have used to secure business credit.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="h-full p-6 md:p-8 hover-elevate" data-testid={`card-step-${index + 1}`}>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-heading text-4xl font-bold text-primary/20">{step.number}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold" data-testid={`text-step-title-${index + 1}`}>
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" onClick={onViewInventory} data-testid="button-schedule-call-hiw">
            Schedule Your Strategy Call
          </Button>
        </div>
      </div>
    </section>
  );
}
