import { motion } from "framer-motion";

const trustLogos = [
  { name: "American Express", logo: "/logos/amex.png" },
  { name: "Chase", logo: "/logos/chase.png" },
  { name: "Capital One", logo: "/logos/capital-one.png" },
  { name: "Experian", logo: "/logos/experian.png" },
  { name: "Nav", logo: "/logos/nav.png" },
  { name: "Dun & Bradstreet", logo: "/logos/dnb.png" },
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
          {trustLogos.map((item, index) => (
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
              <img 
                src={item.logo} 
                alt={item.name}
                className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
