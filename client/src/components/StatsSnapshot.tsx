import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 150000, prefix: "$", suffix: "", label: "average funding potential" },
  { value: 72, prefix: "", suffix: "-hour", label: "corporate setup" },
  { value: 5, prefix: "2–", suffix: " year", label: "aged entities" },
  { value: 1000, prefix: "", suffix: "+", label: "corporations delivered" },
  { value: 45, prefix: "30–", suffix: " days", label: "average approval timeframe" },
];

function AnimatedNumber({ value, prefix, suffix }: { value: number; prefix: string; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsSnapshot() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-24 md:py-32 overflow-hidden"
      data-testid="stats-snapshot-section"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        className="absolute -top-1/2 -left-1/4 w-full h-full border border-white/5 rounded-full"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-1/2 -right-1/4 w-full h-full border border-white/5 rounded-full"
      />
      
      <div className="relative max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="space-y-2"
              data-testid={`stat-${index}`}
            >
              <div className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                <AnimatedNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-sm text-white/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
