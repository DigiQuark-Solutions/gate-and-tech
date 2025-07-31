import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { Button, ButtonProps } from "./button";

interface MagneticButtonProps extends ButtonProps {
  magneticStrength?: number;
  children: React.ReactNode;
}

export const MagneticButton = ({ 
  magneticStrength = 0.3, 
  children, 
  className = "",
  ...props 
}: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * magneticStrength;
    const deltaY = (e.clientY - centerY) * magneticStrength;
    
    setPosition({ x: deltaX, y: deltaY });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <motion.div
      className="inline-block"
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
      }}
    >
      <Button
        ref={buttonRef}
        className={`relative overflow-hidden transition-all duration-300 ${
          isHovered ? 'shadow-xl shadow-primary/25' : ''
        } ${className}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        {...props}
      >
        <motion.div
          className="relative z-10"
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
        
        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0"
          initial={{ x: "-100%" }}
          animate={{
            x: isHovered ? "100%" : "-100%",
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
        />
      </Button>
    </motion.div>
  );
};