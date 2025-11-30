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
    <section className="relative min-h-screen overflow-hidden" data-testid="hero-section">
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      <div className="absolute inset-0">
        {/* Gradient Blobs - More Dynamic */}
        <motion.div
          animate={{ 
            y: [0, 50, 0],
            x: [0, 30, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/30 via-primary/20 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -50, 0],
            x: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-accent/20 via-accent/10 to-transparent rounded-full blur-3xl"
        />
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Animated Particles */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-4 h-4 border-2 border-accent/40 rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/3 left-1/3 w-6 h-6 border-2 border-primary/40 rotate-45"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30 bg-primary/5 backdrop-blur-md"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-4 h-4 text-accent" />
              </motion.div>
              <span className="text-sm font-semibold text-accent">Exclusive Funding Strategy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight"
              data-testid="text-hero-headline"
            >
              Get{" "}
              <motion.span 
                className="text-gradient-gold inline-block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                $150,000+
              </motion.span>
              {" "}in Business Credit — <br />Without Waiting 2 Years
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light"
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
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.div 
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="lg"
                  className="relative text-lg px-10 py-7 h-auto bg-gradient-to-r from-primary to-primary/80 border-0 font-bold shadow-2xl hover:shadow-3xl transition-shadow"
                  onClick={onScheduleCall}
                  data-testid="button-schedule-call-hero"
                >
                  Book My Strategy Call
                </Button>
              </motion.div>
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
              whileHover={{ scale: 1.03, rotateY: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer group"
              onClick={onWatchVideo}
              data-testid="card-vsl"
            >
              <motion.div 
                className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative glass-card rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/10 via-background to-accent/5">
                <div className="aspect-video bg-gradient-to-br from-primary/30 via-background to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  <motion.div
                    animate={{ opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-primary/20"
                  />
                  
                  <motion.button
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    className="relative z-10 w-24 h-24 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow border-2 border-accent/50"
                    data-testid="button-play-video"
                  >
                    <Play className="w-10 h-10 text-white ml-1" fill="white" />
                  </motion.button>
                </div>
                <div className="p-8 space-y-4 bg-gradient-to-b from-transparent to-primary/5">
                  <p className="font-heading font-bold text-xl leading-tight">
                    Your Aged Corporation Could Unlock <span className="text-gradient-gold">$150K+</span> in Unsecured Funding
                  </p>
                  <motion.p 
                    className="text-sm text-accent font-semibold flex items-center gap-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-4 h-4" /> WATCH NOW
                  </motion.p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card rounded-2xl p-6 border border-primary/20 bg-gradient-to-br from-primary/8 to-accent/5 backdrop-blur-xl"
              data-testid="card-quick-info"
            >
              <p className="font-heading font-bold mb-5 text-accent text-lg">Ready to Begin?</p>
              <ul className="space-y-4">
                {quickInfoItems.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 border border-primary/20">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-muted-foreground font-medium">{item.text}</span>
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
