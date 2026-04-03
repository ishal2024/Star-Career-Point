import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  
  
  MessageCircle, // Used for WhatsApp
  GraduationCap,
  ChevronRight,
  Mail
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: <Facebook size={20} />, href: "#", label: "Facebook" },
    // { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
    // { icon: <Youtube size={20} />, href: "#", label: "YouTube" },
    { icon: <MessageCircle size={20} />, href: "#", label: "WhatsApp" },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#" },
    { name: "About Us", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ];

  return (
    <footer className="relative w-full bg-[var(--color-primary-dark)] text-white overflow-hidden">
      
      {/* Optional Top Curve Decoration */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[40px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F3F4F6"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8">
        
        {/* --- Top Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE: Branding & Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start space-y-6"
          >
            {/* Logo & Name */}
            <div className="flex items-center space-x-3 group cursor-pointer">
                <img className='w-12 h-12 rounded-md' src="../../public/logo2.png" alt="logo" />
              <span className="text-2xl font-black tracking-tight">StarPoint Classes</span>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 text-red-50 hover:text-white transition-colors cursor-pointer">
                <MapPin size={20} className="shrink-0" />
                <p className="text-sm">Dharampal Complex, Near Small Red Light, Mahipalpur, New Delhi., 110037</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-red-50 hover:text-white transition-colors cursor-pointer">
                <Phone size={20} className="shrink-0" />
                <p className="text-sm font-semibold">+91 98996 08180</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-red-50 hover:text-white transition-colors cursor-pointer">
                <Phone size={20} className="shrink-0" />
                <p className="text-sm font-semibold">+91 82874 11945</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3 text-red-50 hover:text-white transition-colors cursor-pointer">
                <Mail size={20} className="shrink-0" />
                <p className="text-sm font-semibold"></p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 p-3 rounded-full hover:bg-white hover:text-[var(--color-primary)] transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE: Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center md:items-end"
          >
            <h4 className="text-xl font-bold mb-6 relative">
              Quick Links
              <span className="block h-1 w-10 bg-white/30 mt-1 rounded-full absolute right-0"></span>
            </h4>
            <nav className="flex flex-col space-y-4 text-center md:text-right">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="group flex items-center justify-center md:justify-end space-x-2 text-red-50 hover:text-white transition-all duration-300"
                >
                  <span className="text-lg font-medium">{link.name}</span>
                  <ChevronRight size={16} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </a>
              ))}
            </nav>
          </motion.div>

        </div>

        {/* --- Bottom Section --- */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-red-100 font-light tracking-wide text-center">
              © {currentYear} <span className="font-bold">EduBoost Coaching Center</span>. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-xs text-red-200 uppercase tracking-widest font-semibold">
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;