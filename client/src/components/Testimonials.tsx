import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="testimonials-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            Success Stories
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            data-testid="text-testimonials-headline"
          >
            What Business Owners <span className="text-gradient-gold">Are Saying</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.15, duration: 0.6 }}
              whileHover={{ y: -10, rotateY: 5, scale: 1.02 }}
              style={{ perspective: 1000 }}
              className="relative group"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="absolute -inset-1 bg-gradient-to-br from-primary/30 to-accent/30 rounded-2xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative glass-card rounded-2xl p-8 h-full glow-border">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <div className="space-y-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
                      >
                        <Star className="w-5 h-5 text-accent fill-accent" />
                      </motion.div>
                    ))}
                  </div>
                  <blockquote className="text-lg font-medium leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 pt-2">
                    <Avatar className="w-14 h-14 border-2 border-primary/30">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-primary/20 text-primary">{testimonial.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
