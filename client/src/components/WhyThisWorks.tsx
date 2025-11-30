import { CheckCircle } from "lucide-react";

const lenderFactors = [
  "stability",
  "default probability",
  "risk profile",
  "creditworthiness",
];

const benefits = [
  "higher limits",
  "faster approvals",
  "better terms",
  "more trust",
];

export default function WhyThisWorks() {
  return (
    <section className="py-16 md:py-20 lg:py-24 bg-muted/30" data-testid="why-this-works-section">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-wtw-headline">
            The #1 Reason Startups Get Denied:{" "}
            <span className="text-primary">"Not Enough Time in Business."</span>
          </h2>

          <div className="text-left space-y-6">
            <p className="text-lg text-muted-foreground">
              Lenders use corporate age to determine:
            </p>
            <ul className="grid grid-cols-2 gap-3">
              {lenderFactors.map((factor) => (
                <li key={factor} className="flex items-center gap-2 text-foreground">
                  <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  {factor}
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground pt-4">
              A brand-new LLC is treated as a liability, no matter how skilled the founder is.
            </p>

            <div className="bg-card border border-card-border rounded-md p-6 my-8">
              <p className="text-lg font-medium mb-4">
                But an aged corporation tells lenders:
              </p>
              <p className="text-xl font-heading font-semibold text-primary italic">
                "This business is established, structured, and stable."
              </p>
            </div>

            <p className="text-lg text-muted-foreground">
              That is why aged corporations consistently get:
            </p>
            <ul className="space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-lg font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <p className="text-xl font-heading font-bold text-center pt-6" data-testid="text-wtw-tagline">
              This is the ultimate funding advantage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
