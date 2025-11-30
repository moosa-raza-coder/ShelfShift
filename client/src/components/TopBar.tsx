import { motion } from "framer-motion";
import { Phone, Mail, Sparkles } from "lucide-react";

export default function TopBar() {
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden border-b border-border/50"
      data-testid="top-bar"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5" />
      <div className="absolute inset-0 shimmer opacity-30" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-2.5">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-3 text-sm">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-2 text-accent"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">Premium Funding Solutions</span>
          </motion.div>
          
          <div className="flex flex-wrap items-center gap-4 md:gap-6">
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              href="tel:5551234567"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>(555) 123-4567</span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              href="mailto:Support@WholesaleShelfCorps.com"
              className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-email"
            >
              <Mail className="w-3.5 h-3.5 text-primary" />
              <span className="hidden sm:inline">Support@WholesaleShelfCorps.com</span>
              <span className="sm:hidden">Email Us</span>
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
