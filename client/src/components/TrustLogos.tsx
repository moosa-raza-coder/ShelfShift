import { motion } from "framer-motion";

const trustLogos = [
  { name: "American Express", logo: "/logos/amex.png" },
  { name: "Chase", logo: "/logos/chase.png" },
  { name: "Capital One", logo: "/logos/capital-one.png" },
  { name: "Experian", logo: "/logos/experian.png" },
  { name: "Nav", logo: "/logos/nav.png" },
  { name: "Dun & Bradstreet", logo: "/logos/dnb.png" },
];

// Duplicate logos for seamless loop
const duplicatedLogos = [...trustLogos, ...trustLogos];

export default function TrustLogos() {
  return (
    <section className="relative py-16 border-y border-border/30" data-testid="trust-logos-section">
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm font-medium text-muted-foreground mb-10"
        >
          Trusted by leading financial institutions
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 md:gap-10 lg:gap-14 items-center"
            animate={{ x: [0, -50 * trustLogos.length] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
          >
            {duplicatedLogos.map((item, index) => (
              <motion.div
                key={`${item.name}-${index}`}
                className="flex-shrink-0 cursor-pointer hover-elevate"
                data-testid={`logo-${item.name.toLowerCase().replace(/\s+/g, "-")}-${index}`}
              >
                <img 
                  src={item.logo} 
                  alt={item.name}
                  className="h-14 md:h-16 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                  title={item.name}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
