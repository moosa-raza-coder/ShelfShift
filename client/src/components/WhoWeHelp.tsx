import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket,
  ShoppingCart,
  Briefcase,
  Building2,
  Wrench,
  CreditCard,
} from "lucide-react";

const audiences = [
  {
    icon: Rocket,
    title: "Startup Founders",
    description: "Tired of slow credit-building",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Sellers",
    description: "Needing inventory funding",
  },
  {
    icon: Briefcase,
    title: "Consultants",
    description: "Needing operating capital",
  },
  {
    icon: Building2,
    title: "Real Estate Investors",
    description: "Scaling faster",
  },
  {
    icon: Wrench,
    title: "Service Businesses",
    description: "Needing immediate trust",
  },
  {
    icon: CreditCard,
    title: "Entrepreneurs",
    description: "Separating business & personal credit",
  },
];

export default function WhoWeHelp() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="who-we-help-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full glass border border-primary/20 text-sm font-medium text-primary mb-6"
          >
            Perfect For
          </motion.span>
          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-wwh-headline"
          >
            Ideal For:
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you want speed, credibility, and real funding — <span className="text-accent font-medium">you're in the right place.</span>
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group"
              data-testid={`card-audience-${index}`}
            >
              <div className="absolute -inset-0.5 bg-gradient-to-br from-primary/40 to-accent/40 rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="relative glass-card rounded-2xl p-6 h-full">
                <div className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.1 }}
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 border border-primary/20"
                  >
                    <audience.icon className="w-7 h-7 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-1">{audience.title}</h3>
                    <p className="text-muted-foreground text-sm">{audience.description}</p>
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
