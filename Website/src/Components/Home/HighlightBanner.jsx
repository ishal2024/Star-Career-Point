import React from 'react';
import { motion } from 'framer-motion';

const HighlightBanner = () => {
  return (
    <section className="relative w-full  overflow-hidden bg-[var(--color-primary)] py-10 md:py-10 shadow-[inset_0_0_100px_rgba(0,0,0,0.1)]">
      
      {/* --- Visual Enhancements (Background) --- */}
      
      {/* Soft Glow 1 */}
      {/* <div className="absolute top-[-50%] left-[-10%] w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" /> */}
      
      {/* Soft Glow 2 */}
      {/* <div className="absolute bottom-[-50%] right-[-10%] w-[400px] h-[400px] bg-black/20 rounded-full blur-[100px] pointer-events-none" /> */}

      {/* Subtle Pattern Overlay (SVG Grid) */}
      {/* <div className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }}>
      </div> */}

      {/* Top Wave/Curve Divider (Optional separation from "All Courses") */}
      {/* <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[30px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="#ffffff" opacity="0.1"></path>
        </svg>
      </div> */}

      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          
          {/* Main Text Animation */}
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-white text-3xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight leading-tight"
          >
            3-Day <span className="text-yellow-300 italic">Free</span> Demo Classes <br className="hidden md:block" /> 
            Available for All Courses
          </motion.h2>

          {/* Subtext Animation */}
          {/* <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-red-50 text-lg md:text-xl lg:text-2xl font-medium opacity-90 max-w-2xl"
          >
            Experience our world-class teaching and expert faculty 
            <span className="hidden sm:inline"> before you enroll.</span>
          </motion.p> */}

          {/* Decorative Bottom Element */}
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-1.5 bg-white/30 rounded-full mt-8"
          />
        </div>
      </div>

      {/* Bottom Curve Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[30px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M1200 120L0 16.48V0h1200v120z" fill="#ffffff" opacity="0.05"></path>
        </svg>
      </div>

    </section>
  );
};

export default HighlightBanner;