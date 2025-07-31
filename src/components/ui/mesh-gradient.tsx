import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface MeshGradientProps {
  className?: string;
  animate?: boolean;
}

export const MeshGradient = ({ className = "", animate = true }: MeshGradientProps) => {
  const meshRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate || !meshRef.current) return;

    const mesh = meshRef.current;
    let animationId: number;
    let mouseX = 0;
    let mouseY = 0;

    const updateGradient = () => {
      const time = Date.now() * 0.001;
      const x = mouseX / window.innerWidth;
      const y = mouseY / window.innerHeight;
      
      mesh.style.background = `
        radial-gradient(circle at ${20 + x * 30}% ${80 - y * 20}%, hsl(var(--primary) / 0.15) 0%, transparent 50%),
        radial-gradient(circle at ${80 - x * 30}% ${20 + y * 20}%, hsl(var(--accent-orange) / 0.15) 0%, transparent 50%),
        radial-gradient(circle at ${40 + Math.sin(time) * 20}% ${40 + Math.cos(time) * 20}%, hsl(var(--accent-green) / 0.1) 0%, transparent 50%)
      `;
      
      animationId = requestAnimationFrame(updateGradient);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);
    updateGradient();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, [animate]);

  return (
    <motion.div
      ref={meshRef}
      className={`absolute inset-0 opacity-60 ${className}`}
      style={{
        background: 'var(--gradient-mesh)',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.6 }}
      transition={{ duration: 2 }}
    />
  );
};

export const FloatingParticles = ({ count = 6 }: { count?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }, (_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/40 rounded-full"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 3) * 20}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 10, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </div>
  );
};