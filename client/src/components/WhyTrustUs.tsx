import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Award, Users, FileCheck } from "lucide-react";

const clientTypes = [
  "high-growth startups",
  "consultants",
  "e-commerce founders",
  "real estate investors",
  "agency owners",
  "small business operators",
];

const trustPoints = [
  { icon: ShieldCheck, text: "Legal expertise" },
  { icon: Award, text: "Credit system knowledge" },
  { icon: FileCheck, text: "Corporate structuring experience" },
  { icon: Users, text: "Personalized client engagement" },
];

export default function WhyTrustUs() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24" data-testid="why-trust-us-section">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold" data-testid="text-wtu-headline">
            Over a Decade of Experience.{" "}
            <span className="text-primary">Thousands of Entrepreneurs Served.</span>
          </h2>

          <p className="text-lg text-muted-foreground">
            We are one of the most trusted providers of aged corporations in the U.S.
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {clientTypes.map((type) => (
              <Badge key={type} variant="secondary" className="text-sm px-3 py-1">
                {type}
              </Badge>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            {trustPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/50 rounded-md"
                data-testid={`trust-point-${index}`}
              >
                <point.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium">{point.text}</span>
              </div>
            ))}
          </div>

          <p className="text-xl font-heading font-semibold pt-4" data-testid="text-wtu-tagline">
            You're not guessing — you're guided by experts.
          </p>
        </div>
      </div>
    </section>
  );
}
