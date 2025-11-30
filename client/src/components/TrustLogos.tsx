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
    <section className="relative py-12 overflow-hidden" data-testid="trust-logos-section">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-foreground mb-8"
        >
          Trusted by leading financial institutions
        </motion.p>
        
        <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-14 overflow-x-auto pb-2">
          {trustLogos.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="flex-shrink-0 cursor-pointer hover-elevate"
              data-testid={`logo-${item.name.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <img 
                src={item.logo} 
                alt={item.name}
                className="h-14 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                title={item.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
