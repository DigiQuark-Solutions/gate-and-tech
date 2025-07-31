import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export const AnimatedCounter = ({ 
  value, 
  duration = 2,
  className = "",
  suffix = "",
  prefix = ""
}: AnimatedCounterProps) => {
  const spring = useSpring(0, { stiffness: 75, damping: 15 });
  const display = useTransform(spring, (current) =>
    Math.round(current).toLocaleString()
  );

  useEffect(() => {
    spring.set(value);
  }, [spring, value]);

  return (
    <motion.span
      className={`font-bold ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </motion.span>
  );
};

export const GlowingBadge = ({ 
  children, 
  className = "",
  glowColor = "primary"
}: { 
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}) => {
  return (
    <motion.div
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border ${className}`}
      style={{
        background: `hsl(var(--${glowColor}) / 0.1)`,
        borderColor: `hsl(var(--${glowColor}) / 0.3)`,
        color: `hsl(var(--${glowColor}))`,
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 20px hsl(var(--${glowColor}) / 0.4)`
      }}
      animate={{
        boxShadow: [
          `0 0 10px hsl(var(--${glowColor}) / 0.2)`,
          `0 0 20px hsl(var(--${glowColor}) / 0.4)`,
          `0 0 10px hsl(var(--${glowColor}) / 0.2)`
        ]
      }}
      transition={{
        boxShadow: {
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }}
    >
      {children}
    </motion.div>
  );
};