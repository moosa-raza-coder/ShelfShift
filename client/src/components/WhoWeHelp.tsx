import { Card } from "@/components/ui/card";
import {
  Rocket,
  ShoppingCart,
  Briefcase,
  Building2,
  Wrench,
  CreditCard,
} from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description: "Tired of slow credit-building",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sellers",
    description: "Needing inventory funding",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description: "Needing operating capital",
  },
  {
    icon: Building2,
    title: "Real Estate Investors",
    description: "Scaling faster",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "Needing immediate trust",
  },
  {
    icon: CreditCard,
    title: "Entrepreneurs",
    description: "Separating business & personal credit",
  },
];

export default function WhoWeHelp() {
  return (
    <section className="py-16 md:py-20 lg:py-24" data-testid="who-we-help-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-wwh-headline">
            Ideal For:
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you want speed, credibility, and real funding — you're in the right place.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate"
              data-testid={`card-audience-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <audience.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{audience.title}</h3>
                  <p className="text-muted-foreground text-sm">{audience.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
