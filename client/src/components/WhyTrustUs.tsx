import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Award, Users, FileCheck, Crown } from "lucide-react";

const clientTypes = [
  "high-growth startups",
  "consultants",
  "e-commerce founders",
  "real estate investors",
  "agency owners",
  "small business operators",
];

const trustPoints = [
  { icon: ShieldCheck, text: "Legal expertise" },
  { icon: Award, text: "Credit system knowledge" },
  { icon: FileCheck, text: "Corporate structuring experience" },
  { icon: Users, text: "Personalized client engagement" },
];

export default function WhyTrustUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="why-trust-us-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background" />
      
      <div className="relative max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-accent/20 text-sm font-medium text-accent"
          >
            <Crown className="w-4 h-4" />
            Trusted Authority
          </motion.div>

          <h2
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold"
            data-testid="text-wtu-headline"
          >
            Over a Decade of Experience.{" "}
            <span className="text-gradient-gold">Thousands of Entrepreneurs Served.</span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="text-lg text-muted-foreground"
          >
            We are one of the most trusted providers of aged corporations in the U.S.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3"
          >
            {clientTypes.map((type, index) => (
              <motion.div
                key={type}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.08 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge
                  variant="secondary"
                  className="text-sm px-4 py-1.5 bg-muted/50 border border-border hover:border-primary/30 transition-colors"
                >
                  {type}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 pt-8">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-4 p-5 glass-card rounded-xl"
                data-testid={`trust-point-${index}`}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                  <point.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{point.text}</span>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 1 }}
            className="text-2xl font-heading font-bold pt-8 text-gradient"
            data-testid="text-wtu-tagline"
          >
            You're not guessing — you're guided by experts.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
