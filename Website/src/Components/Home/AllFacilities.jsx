import React from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Wifi, 
  Droplets, 
  MonitorPlay, 
  BookOpenCheck, 
  ShieldCheck 
} from 'lucide-react';

const facilities = [
  {
    id: 1,
    name: "CCTV Security",
    icon: <Camera size={40} />,
    description: "24/7 Campus Surveillance"
  },
  {
    id: 2,
    name: "Free WiFi",
    icon: <Wifi size={40} />,
    description: "High-speed Internet Access"
  },
  {
    id: 3,
    name: "Drinking Water",
    icon: <Droplets size={40} />,
    description: "RO Purified Water Facility"
  },
  {
    id: 4,
    name: "Visual Aids",
    icon: <MonitorPlay size={40} />,
    description: "Smart Visual Learning"
  },
  {
    id: 5,
    name: "Study Modules",
    icon: <BookOpenCheck size={40} />,
    description: "Comprehensive Materials"
  }
];

const FacilityCard = ({ facility, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.2 }
      }}
      className="group bg-white p-8 rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] border border-gray-100 flex flex-col items-center text-center transition-all duration-300 cursor-default"
    >
      {/* Icon Container */}
      <div className="mb-5 text-gray-700 group-hover:text-[var(--color-primary)] transition-colors duration-300 transform group-hover:scale-110">
        {facility.icon}
      </div>

      {/* Name */}
      <h3 className="text-lg font-bold text-[var(--color-black)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
        {facility.name}
      </h3>
      
      {/* Subtle Divider */}
      <div className="w-8 h-1 bg-gray-100 group-hover:w-12 group-hover:bg-[var(--color-primary-light)] transition-all duration-300 my-3 rounded-full"></div>
      
      {/* Description (Optional for better UX) */}
      <p className="text-xs text-[var(--text-secondary)] font-medium">
        {facility.description}
      </p>
    </motion.div>
  );
};

const AllFacilities = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[var(--color-gray-100)]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header - EXACT MATCH to "All Courses" Styling */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm">
              Our Amenities
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-black)] relative inline-block">
              All Facilities
              <span className="block h-1.5 w-24 bg-[var(--color-primary)] mt-2 rounded-full"></span>
            </h2>
          </motion.div>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={facility.id} facility={facility} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default AllFacilities;