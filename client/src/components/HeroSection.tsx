import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Play, Clock, FileCheck, Users } from "lucide-react";
import heroBackground from "@assets/generated_images/premium_business_hero_background.png";

const quickBenefits = [
  "Instantly skip \"startup\" restrictions",
  "Qualify for dramatically higher credit limits",
  "Build business credit separate from personal",
  "Complete setup in 72 hours",
];

const quickInfoItems = [
  { icon: Clock, text: "2-minute inventory review" },
  { icon: Users, text: "24-hour expert response" },
  { icon: FileCheck, text: "3-day full documentation delivery" },
];

interface HeroSectionProps {
  onScheduleCall?: () => void;
  onWatchVideo?: () => void;
}

export default function HeroSection({ onScheduleCall, onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden" data-testid="hero-section">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight" data-testid="text-hero-headline">
              Get $150,000+ in Business Credit — Without Waiting 2 Years
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl" data-testid="text-hero-subheadline">
              Acquire a lender-ready aged corporation and unlock high-limit business credit in days, not years.
            </p>
            
            <ul className="space-y-3">
              {quickBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3" data-testid={`text-benefit-${index}`}>
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="text-lg px-8"
                onClick={onScheduleCall}
                data-testid="button-schedule-call-hero"
              >
                Book My Strategy Call
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Speak with a business credit specialist & learn about our verified inventory.
            </p>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <Card
              className="relative overflow-hidden cursor-pointer group hover-elevate"
              onClick={onWatchVideo}
              data-testid="card-vsl"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                <button
                  className="relative z-10 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  data-testid="button-play-video"
                >
                  <Play className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" />
                </button>
              </div>
              <div className="p-4 space-y-2">
                <p className="font-heading font-semibold text-lg">
                  Your Aged Corporation Could Unlock $150K+ in Unsecured Funding
                </p>
                <p className="text-sm text-primary font-medium flex items-center gap-2">
                  <Play className="w-4 h-4" /> WATCH NOW
                </p>
              </div>
            </Card>

            <Card className="p-4" data-testid="card-quick-info">
              <p className="font-semibold mb-3">Ready to Begin?</p>
              <ul className="space-y-2">
                {quickInfoItems.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
