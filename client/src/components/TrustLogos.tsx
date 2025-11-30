import { motion } from "framer-motion";

const trustLogos = [
  "American Express",
  "Chase",
  "Capital One",
  "Experian",
  "Nav",
  "Dun & Bradstreet",
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
          className="text-center text-sm text-muted-foreground mb-10"
        >
          Trusted by entrepreneurs approved through institutions like:
        </motion.p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustLogos.map((logo, index) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, color: "hsl(var(--accent))" }}
              className="text-muted-foreground/40 hover:text-accent transition-all duration-300 font-heading font-bold text-lg md:text-xl cursor-default"
              data-testid={`logo-${logo.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
