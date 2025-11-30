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
    <section className="relative h-[90vh] overflow-hidden" data-testid="hero-section">
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
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center w-full">
          <div className="lg:col-span-3 space-y-6">
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
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed font-light"
              data-testid="text-hero-subheadline"
            >
              Acquire a lender-ready aged corporation and unlock high-limit business funding in days, not years.
            </motion.p>
            
            <motion.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-2"
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
                  <div className="w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 pt-8"
            >
              <motion.button
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
                onClick={onScheduleCall}
                className="relative overflow-hidden text-lg px-10 py-3 h-auto font-bold border-0 rounded-lg bg-primary text-primary-foreground"
                data-testid="button-schedule-call-hero"
              >
                {/* Fill-up effect on hover */}
                <motion.div
                  initial={{ scaleY: 0, originY: 1 }}
                  whileHover={{ scaleY: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-r from-accent to-primary pointer-events-none"
                />
                <span className="relative z-10">Book My Strategy Call</span>
              </motion.button>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-xs text-muted-foreground"
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
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative cursor-pointer group"
              onClick={onWatchVideo}
              data-testid="card-vsl"
            >
              {/* Premium border glow on hover */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-accent/50 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              
              <div className="relative rounded-3xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/15 via-background to-accent/10 backdrop-blur-sm">
                {/* Video thumbnail area */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 via-primary/5 to-accent/10 flex items-center justify-center relative overflow-hidden group">
                  {/* Animated background mesh */}
                  <motion.div
                    animate={{ 
                      background: [
                        "linear-gradient(45deg, rgba(26, 53, 94, 0.1), rgba(178, 30, 68, 0.05))",
                        "linear-gradient(45deg, rgba(26, 53, 94, 0.15), rgba(178, 30, 68, 0.1))",
                        "linear-gradient(45deg, rgba(26, 53, 94, 0.1), rgba(178, 30, 68, 0.05))"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute inset-0"
                  />
                  
                  {/* Play button with enhanced design */}
                  <motion.button
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative z-10 w-28 h-28 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center transition-all"
                    data-testid="button-play-video"
                  >
                    {/* Pulse ring effect */}
                    <motion.div
                      animate={{ scale: [1, 1.2], opacity: [1, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="absolute inset-0 rounded-full bg-accent opacity-30"
                    />
                    <Play className="w-12 h-12 text-white ml-1 relative z-10" fill="white" />
                  </motion.button>
                </div>
                
                {/* Content area */}
                <div className="p-6 space-y-3 bg-gradient-to-b from-transparent to-primary/5">
                  <p className="font-heading font-bold text-lg leading-tight text-foreground">
                    Unlock <span className="text-gradient-gold">$150K+</span> in Business Credit
                  </p>
                  <motion.div
                    className="flex items-center gap-2 cursor-pointer"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-sm text-accent font-bold flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" /> WATCH STRATEGY
                    </motion.div>
                  </motion.div>
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

    </section>
  );
}
