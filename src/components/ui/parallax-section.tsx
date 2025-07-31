import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down';
}

export const ParallaxSection = ({ 
  children, 
  className = "",
  speed = 0.5,
  direction = 'up'
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' 
      ? [`${speed * 100}px`, `-${speed * 100}px`]
      : [`-${speed * 100}px`, `${speed * 100}px`]
  );

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxImage = ({ 
  src, 
  alt, 
  className = "",
  speed = 0.3 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  speed?: number;
}) => {
  return (
    <ParallaxSection speed={speed} className={className}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
    </ParallaxSection>
  );
};