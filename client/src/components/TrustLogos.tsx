import { motion } from "framer-motion";
import { 
  CreditCard, 
  Building2, 
  Landmark, 
  DollarSign, 
  TrendingUp,
  Shield
} from "lucide-react";

const trustLogos = [
  { name: "American Express", icon: CreditCard },
  { name: "Chase", icon: Building2 },
  { name: "Capital One", icon: Landmark },
  { name: "Experian", icon: TrendingUp },
  { name: "Nav", icon: DollarSign },
  { name: "Dun & Bradstreet", icon: Shield },
];

export default function TrustLogos() {
  return (
    <section className="relative py-16 overflow-hidden" data-testid="trust-logos-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm text-muted-foreground mb-12"
        >
          Trusted by entrepreneurs approved through institutions like:
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustLogos.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                data-testid={`logo-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Icon className="w-12 h-12 md:w-16 md:h-16 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
