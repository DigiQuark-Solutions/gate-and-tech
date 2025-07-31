import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, Youtube } from "lucide-react";
const footerLinks = {
  Product: ["Features", "Pricing", "Demo", "Roadmap"],
  Company: ["About", "Careers", "Blog", "Contact"],
  Support: ["Help Center", "Community", "Status", "Privacy"],
  Legal: ["Terms", "Privacy", "Security", "Cookies"]
};
const socialLinks = [{
  icon: Youtube,
  href: "https://www.youtube.com/@gateandtechofficial",
  label: "YouTube"
}, {
  icon: Twitter,
  href: "#",
  label: "Twitter"
}, {
  icon: Github,
  href: "#",
  label: "GitHub"
}, {
  icon: Linkedin,
  href: "#",
  label: "LinkedIn"
}, {
  icon: Mail,
  href: "#",
  label: "Email"
}];
export const Footer = () => {
  return <footer className="bg-surface-dark-1 border-t border-gray-3">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <motion.div className="lg:col-span-2" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="mb-6 flex items-center">
              <img 
                src="/lovable-uploads/f71a4ce0-0b53-4b48-aafa-14c7a745fcc3.png" 
                alt="GATE And Tech Logo" 
                className="h-8 w-8 mr-3"
              />
              <span className="text-2xl font-black text-white">GATE And Tech</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Transforming exam anxiety into focused confidence through adaptive learning and community support.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return <motion.a key={social.label} href={social.href} className="w-10 h-10 bg-surface-dark rounded-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200" whileHover={{
                scale: 1.1,
                y: -2
              }} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} viewport={{
                once: true
              }} transition={{
                duration: 0.6,
                delay: index * 0.1
              }}>
                    <Icon className="w-5 h-5" />
                  </motion.a>;
            })}
            </div>
          </motion.div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => <motion.div key={category} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: categoryIndex * 0.1
        }}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, linkIndex) => <motion.li key={link} initial={{
              opacity: 0,
              x: -10
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: linkIndex * 0.05
            }}>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-200 underline-animate">
                      {link}
                    </a>
                  </motion.li>)}
              </ul>
            </motion.div>)}
        </div>

        {/* Bottom Section */}
        <motion.div className="border-t border-gray-3 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.4
      }}>
          <p className="text-muted-foreground text-sm">
            © 2025 <span className="font-semibold">GATE And Tech</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>Developed by</span>
            <a 
              href="https://digiquark.solutions/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-semibold text-primary hover:text-primary-light transition-colors duration-200 underline-animate"
            >
              DigiQuark Solutions
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent pointer-events-none" />
    </footer>;
};