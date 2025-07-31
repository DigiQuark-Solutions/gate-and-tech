import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    // Show logo after a brief delay
    const logoTimer = setTimeout(() => setShowLogo(true), 300);
    
    // Complete loading sequence
    const completeTimer = setTimeout(() => {
      onLoadingComplete();
    }, 2800);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(completeTimer);
    };
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        filter: "blur(10px)",
        scale: 1.1
      }}
      transition={{ 
        duration: 0.8,
        ease: "easeInOut"
      }}
    >
      {showLogo && (
        <motion.div
          className="flex flex-col items-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1.2, 1],
            opacity: [0, 1, 1, 0],
            filter: ["blur(0px)", "blur(0px)", "blur(8px)"]
          }}
          transition={{
            scale: {
              duration: 1.2,
              ease: "easeOut"
            },
            opacity: {
              duration: 2,
              times: [0, 0.3, 0.8, 1],
              ease: "easeInOut"
            },
            filter: {
              duration: 2,
              times: [0, 0.7, 1],
              ease: "easeInOut"
            }
          }}
        >
          <motion.div
            className="flex items-center mb-4"
            initial={{ letterSpacing: "0.2em" }}
            animate={{ letterSpacing: "0.05em" }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img 
              src="/lovable-uploads/f71a4ce0-0b53-4b48-aafa-14c7a745fcc3.png" 
              alt="GATE And Tech Logo" 
              className="h-12 w-12 mr-4"
            />
            <span className="text-6xl font-black text-white">GATE And Tech</span>
          </motion.div>
          
          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-white to-white/60 rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};