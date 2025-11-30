import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Play, Clock, FileCheck, Users, Sparkles } from "lucide-react";

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
  onBooking?: (data: { name: string; email: string; phone?: string }) => void;
}

export default function HeroSection({ onScheduleCall, onWatchVideo }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen overflow-hidden animated-gradient-bg" data-testid="hero-section">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl float-slow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl float" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-4 h-4 border border-accent/30 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/3 w-6 h-6 border border-primary/30 rotate-45"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Exclusive Funding Strategy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              data-testid="text-hero-headline"
            >
              Get{" "}
              <span className="text-gradient-gold">$150,000+</span>
              {" "}in Business Credit — Without Waiting 2 Years
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl"
              data-testid="text-hero-subheadline"
            >
              Acquire a lender-ready aged corporation and unlock high-limit business funding in days, not years.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-4"
            >
              {quickBenefits.map((benefit, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3"
                  data-testid={`text-benefit-${index}`}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                <Button
                  size="lg"
                  className="relative text-lg px-8 py-6 h-auto bg-gradient-to-r from-primary to-primary/80 border-0 font-semibold"
                  onClick={onScheduleCall}
                  data-testid="button-schedule-call-hero"
                >
                  Book My Strategy Call
                </Button>
              </div>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-sm text-muted-foreground"
            >
              Speak with a business credit specialist & learn about our verified inventory.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer group"
              onClick={onWatchVideo}
              data-testid="card-vsl"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative glass-card rounded-2xl overflow-hidden glow-border">
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-background to-accent/10 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center shadow-2xl glow-gold"
                    data-testid="button-play-video"
                  >
                    <Play className="w-8 h-8 text-accent-foreground ml-1" fill="currentColor" />
                  </motion.button>
                </div>
                <div className="p-6 space-y-3">
                  <p className="font-heading font-semibold text-lg">
                    Your Aged Corporation Could Unlock <span className="text-accent">$150K+</span> in Unsecured Funding
                  </p>
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Play className="w-4 h-4" /> WATCH NOW
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-xl p-5 glow-border"
              data-testid="card-quick-info"
            >
              <p className="font-semibold mb-4 text-accent">Ready to Begin?</p>
              <ul className="space-y-3">
                {quickInfoItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm text-muted-foreground"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span>{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
