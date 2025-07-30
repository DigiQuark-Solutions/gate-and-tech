import { useRef, useCallback, useState } from "react";

interface CardHoverState {
  x: number;
  y: number;
  isHovering: boolean;
}

export const useCardHover = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [hoverState, setHoverState] = useState<CardHoverState>({
    x: 0,
    y: 0,
    isHovering: false,
  });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Calculate relative position (0-1)
    const relativeX = x / rect.width;
    const relativeY = y / rect.height;
    
    // Calculate tilt values
    const tiltX = (relativeY - 0.5) * 20; // Max 10deg tilt
    const tiltY = (relativeX - 0.5) * -20; // Max 10deg tilt (negative for natural feel)
    
    requestAnimationFrame(() => {
      setHoverState({
        x: relativeX * 100,
        y: relativeY * 100,
        isHovering: true,
      });
      
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
      }
    });
  }, []);

  const handleMouseEnter = useCallback(() => {
    setHoverState(prev => ({ ...prev, isHovering: true }));
  }, []);

  const handleMouseLeave = useCallback(() => {
    requestAnimationFrame(() => {
      setHoverState({
        x: 0,
        y: 0,
        isHovering: false,
      });
      
      if (cardRef.current) {
        cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }
    });
  }, []);

  const cardProps = {
    ref: cardRef,
    onMouseMove: handleMouseMove,
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    style: {
      transformStyle: 'preserve-3d' as const,
      transition: 'transform 0.1s ease-out',
    },
  };

  return { cardProps, hoverState };
};