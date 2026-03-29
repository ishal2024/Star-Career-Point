import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  HeadphonesIcon,
  ExternalLink
} from 'lucide-react';

const ContactUs = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const contactDetails = [
    {
      icon: <MapPin className="text-[var(--color-primary)]" size={24} />,
      title: "Our Location",
      details: ["123 Learning Street, Knowledge Hub,", "New Delhi, India - 110001"],
    },
    {
      icon: <Phone className="text-[var(--color-primary)]" size={24} />,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 011 2345 6789"],
    },
    {
      icon: <Mail className="text-[var(--color-primary)]" size={24} />,
      title: "Email Address",
      details: ["info@eduboostcoaching.com", "admissions@eduboost.com"],
    },
    {
      icon: <Clock className="text-[var(--color-primary)]" size={24} />,
      title: "Office Timings",
      details: ["Mon - Sat: 09:00 AM - 08:00 PM", "Sunday: 10:00 AM - 02:00 PM"],
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 pt-20">
      
      {/* --- PAGE HEADER (SEO Friendly) --- */}
      <section className="bg-[var(--color-primary)] py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-2xl"
          >
            <nav className="text-red-100 text-sm mb-4 font-medium uppercase tracking-widest flex items-center gap-2">
              <HeadphonesIcon size={16} /> Get In Touch
            </nav>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Contact Us
            </h1>
            <p className="text-xl text-red-50 opacity-90 leading-relaxed">
              Have questions about our courses or admission process? Reach out to us 
              and our expert counselors will guide you to the right path.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN INTERACTION SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT SIDE: CONTACT INFO (Takes 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-gray-100 h-full"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b pb-4">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                {contactDetails.map((item, idx) => (
                  <div key={idx} className="flex gap-4 group">
                    <div className="bg-red-50 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      {item.details.map((line, i) => (
                        <p key={i} className="text-gray-600 text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social or CTA reinforcement */}
              <div className="mt-12 p-6 bg-[var(--bg-secondary)] rounded-2xl border border-red-100">
                <p className="text-[var(--color-primary-dark)] font-bold text-sm mb-2 uppercase tracking-wide">Need Immediate Help?</p>
                <p className="text-gray-700 text-sm">Call our 24/7 student helpline at <strong>1800-123-4567</strong> for urgent queries.</p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: ENQUIRY FORM (Takes 7 columns) */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Enquire Now</h2>
              <p className="text-gray-500 mb-8">Fill in the details below and we will get back to you within 24 hours.</p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                    <input 
                      type="text" id="name" placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                    <input 
                      type="tel" id="phone" placeholder="+91 00000 00000" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm font-semibold text-gray-700 ml-1">Address / Location</label>
                  <input 
                    type="text" id="address" placeholder="City, State" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-red-100 outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                  <textarea 
                    id="message" rows="4" placeholder="How can we help you?" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[var(--color-primary)] focus:ring-2 focus:ring-red-100 outline-none transition-all resize-none"
                  ></textarea>
                </div>

                <button 
                  type="button" 
                  className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-red-200 transition-all active:scale-[0.98]"
                >
                  <Send size={18} /> ENQUIRE NOW
                </button>
              </form>
            </motion.div>
          </div>

        </div>
      </section>

      {/* --- GOOGLE MAP SECTION --- */}
      <section className="w-full px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border-4 border-white"
        >
          <div className="relative w-full h-[450px] grayscale hover:grayscale-0 transition-all duration-700">
            {/* Semantic Iframe Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620653676846!2d77.22732107550005!3d28.6128416756749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2daa9eb4d0b%3A0x71797112592fef27!2sIndia%20Gate!5e0!3m2!1sen!2sin!4v1709900000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Coaching Center Location Map"
            ></iframe>
            
            {/* Floating UI overlay on Map */}
            <div className="absolute bottom-6 right-6 hidden md:block">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white px-6 py-3 rounded-full shadow-xl flex items-center gap-2 text-[var(--color-primary)] font-bold hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                Open in Google Maps <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

    </main>
  );
};

export default ContactUs;