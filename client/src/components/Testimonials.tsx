import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import markAvatar from "@assets/generated_images/male_entrepreneur_testimonial_avatar.png";
import sarahAvatar from "@assets/generated_images/female_consultant_testimonial_avatar.png";
import derekAvatar from "@assets/generated_images/male_agency_owner_testimonial_avatar.png";

const testimonials = [
  {
    quote: "Went from $10k limits to over $150k in approvals within a month.",
    name: "Mark R.",
    role: "E-Commerce",
    avatar: markAvatar,
    initials: "MR",
  },
  {
    quote: "Browsed Monday, documents Wednesday, $75k approval Friday.",
    name: "Sarah L.",
    role: "Consultant",
    avatar: sarahAvatar,
    initials: "SL",
  },
  {
    quote: "The fastest path to business credibility I've ever seen.",
    name: "Derek P.",
    role: "Agency Owner",
    avatar: derekAvatar,
    initials: "DP",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-20 lg:py-24" data-testid="testimonials-section">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-testimonials-headline">
            What Business Owners Are Saying
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 md:p-8" data-testid={`card-testimonial-${index}`}>
              <div className="space-y-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <blockquote className="text-lg font-medium leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar className="w-12 h-12 border-2 border-border">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
