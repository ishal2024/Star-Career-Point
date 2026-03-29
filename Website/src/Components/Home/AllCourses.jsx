import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calendar, ArrowRight } from 'lucide-react';

const courses = [
  {
    id: 1,
    name: "IIT-JEE Ultimate Batch",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=800&auto=format&fit=crop",
    subjects: ["Physics", "Chemistry", "Mathematics"],
    classesPerWeek: 6,
    price: "$499",
    tag: "Popular",
  },
  {
    id: 2,
    name: "NEET FastTrack 2024",
    image: "https://images.unsplash.com/photo-1576086213369-97a306dca1c5?q=80&w=800&auto=format&fit=crop",
    subjects: ["Biology", "Physics", "Chemistry"],
    classesPerWeek: 5,
    price: "$450",
    tag: "New",
  },
  {
    id: 3,
    name: "Foundation (Class 9-10)",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop",
    subjects: ["Science", "Maths", "English", "SST"],
    classesPerWeek: 4,
    price: "$299",
    tag: null,
  },
  {
    id: 4,
    name: "Advanced Web Development",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
    subjects: ["React.js", "Tailwind", "Node.js"],
    classesPerWeek: 3,
    price: "$199",
    tag: "Trending",
  },
  {
    id: 5,
    name: "UPSC Civil Services Prep",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop",
    subjects: ["History", "Polity", "Geography", "CSAT"],
    classesPerWeek: 6,
    price: "$599",
    tag: null,
  },
  {
    id: 6,
    name: "Digital Marketing Pro",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    subjects: ["SEO", "SMM", "Ads", "Analytics"],
    classesPerWeek: 2,
    price: "$150",
    tag: "Sale",
  },
];

const CourseCard = ({ course, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-[var(--radius-lg)] overflow-hidden shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-lg)] transition-all duration-300 border border-gray-100 flex flex-col h-full hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-52">
        {course.tag && (
          <span className="absolute top-4 left-4 z-20 bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            {course.tag}
          </span>
        )}
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-[var(--color-black)] mb-4 group-hover:text-[var(--color-primary)] transition-colors duration-300">
          {course.name}
        </h3>

        {/* Details List */}
        <div className="space-y-2 mb-6 flex-grow">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={18} className="text-[var(--color-primary)] mt-1 shrink-0" />
            <p className="text-[var(--text-secondary)] text-sm">
              <span className="font-semibold text-gray-700">Subjects:</span> {course.subjects.join(", ")}
            </p>
          </div>
          <div className="flex items-start gap-2">
            <Calendar size={18} className="text-[var(--color-primary)] mt-1 shrink-0" />
            <p className="text-[var(--text-secondary)] text-sm">
              <span className="font-semibold text-gray-700">Classes:</span> {course.classesPerWeek} days/week
            </p>
          </div>
        </div>

        {/* Footer: Price & Button */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <span className="block text-xs text-gray-400 uppercase font-bold tracking-wider">Course Fee</span>
            <span className="text-2xl font-black text-[var(--color-primary)]">{course.price}</span>
          </div>
          <button className="flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-5 py-2.5 rounded-[var(--radius-md)] font-bold transition-all duration-300 active:scale-95 shadow-sm hover:shadow-md">
            View Details
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const AllCourses = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-2"
          >
            <span className="text-[var(--color-primary)] font-bold tracking-widest uppercase text-sm">
              Top Categories
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[var(--color-black)] relative inline-block">
              All Courses
              <span className="block h-1.5 w-24 bg-[var(--color-primary)] mt-2 rounded-full"></span>
            </h2>
          </motion.div>
        </div>

        {/* Grid System */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllCourses;