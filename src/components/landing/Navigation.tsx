import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { name: "Product", href: "#product" },
  { name: "Pricing", href: "#pricing" },
  { name: "Blog", href: "#blog" },
  { name: "Login", href: "#login" }
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "glass-surface border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/lovable-uploads/f71a4ce0-0b53-4b48-aafa-14c7a745fcc3.png" 
              alt="GATE And Tech Logo" 
              className="h-8 w-8 mr-3"
            />
            <span className="text-2xl font-black gradient-text">GATE And Tech</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors duration-200 font-medium underline-animate"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-primary/25">
              Get Started
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 border-t border-gray-3 glass-card rounded-lg mt-6 p-4"
          >
            <div className="space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-foreground hover:text-primary transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};