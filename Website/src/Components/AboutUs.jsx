import React from 'react';
import { motion } from 'framer-motion';
import {
  Target,

  Video,
  CheckCircle,
  Users,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';

const AboutUs = () => {
  // Animation variants for reusability
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="min-h-screen bg-gray-50 ">
      {/* --- SEO FRIENDLY HEADER SECTION --- */}
      <section className="bg-[var(--color-primary)] py-16 md:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="max-w-3xl"
          >
            <nav className="text-red-100 text-sm mb-4 font-medium uppercase tracking-widest">
              Learn More • Empowering Students
            </nav>
            <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              About Us
            </h1>
            <p className="text-xl text-red-50 leading-relaxed opacity-90">
              The <span className="font-bold underline decoration-white/30">Best Coaching Center</span> for competitive excellence,
              providing affordable coaching classes both online and offline since 2010.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- MAIN CONTENT GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* LEFT SIDE: OVERVIEW (Takes 2 columns on desktop) */}
          <article className="lg:col-span-2 space-y-8">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-gray-100"
            >
              <h2 className="text-3xl font-black text-[var(--color-black)] mb-6 flex items-center gap-3">
                <Users className="text-[var(--color-primary)]" />
                Who We Are
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-lg">
                {/* <p>
                  At <strong>EduBoost Coaching Center</strong>, we believe that every student possesses a unique potential that needs the right guidance to flourish. As a premier institute for <span className="text-[var(--color-primary)] font-semibold">JEE, NEET, and Board Exam preparation</span>, we have spent over a decade refining our teaching methodologies.
                </p>
                <p>
                  Our teaching approach is not just about completing the syllabus; it's about conceptual clarity. We blend traditional classroom discipline with modern pedagogical tools to ensure that our students stay ahead in an increasingly competitive landscape.
                </p> */}
                <p>
                  At <strong>Star Career Point</strong>, located in Mahipalpur, New Delhi, we are committed to providing high-quality education and guiding students toward academic excellence. We specialize in <span className="text-[var(--color-primary)] font-semibold">Class 1st to 12th coaching, JEE, NEET, CUET, and Board exam preparation</span>, helping students build a strong foundation for their future.
                </p>

                <p>
                  With experienced faculty and a student-focused approach, we emphasize conceptual clarity, regular practice, and personalized attention. Our goal is not just to complete the syllabus but to ensure that every student understands the core concepts deeply and performs confidently in exams.
                </p>

                <p>
                  Located at Dharampal Complex, Mahipalpur, our institute offers a disciplined and motivating environment where students can grow academically. We combine traditional teaching methods with modern techniques to help students stay ahead in today’s competitive world.
                </p>

                <p>
                  Join <strong>Star Career Point</strong> and take the first step toward success in academics and competitive exams.
                </p>

                <h3 className="text-xl font-bold text-gray-900 pt-4 mb-4">What Sets Us Apart?</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Expert Ph.D. Level Faculty",
                    "Personalized Mentorship",
                    "Comprehensive Study Modules",
                    "Weekly Performance Tracking",
                    "Hybrid Learning Environment",
                    "Doubt Clearing Sessions"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-base">
                      <CheckCircle size={18} className="text-[var(--color-primary)] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative Image/Illustration Placement */}
              <div className="mt-10 rounded-2xl overflow-hidden h-64 bg-gray-200">
                <img
                  src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200"
                  alt="Students learning in our modern classroom environment"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </article>

          {/* RIGHT SIDE: SIDEBAR CONTENT */}
          <aside className="space-y-8">

            {/* Our Aim Card */}
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[var(--bg-secondary)] p-8 rounded-[var(--radius-lg)] shadow-[var(--shadow-sm)] border-l-4 border-[var(--color-primary)]"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <Target className="text-[var(--color-primary)]" />
                Our Aim
              </h2>
              <p className="text-gray-400 leading-relaxed italic">
                "Our mission is to democratize high-quality education. We aim to provide top-tier academic coaching to students from all walks of life, ensuring that financial barriers never stand in the way of a student's dreams."
              </p>
            </motion.section>

            {/* Online Classes Card */}
            {/* <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white p-8 rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-gray-100"
            >
              <div className="bg-red-50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Video className="text-[var(--color-primary)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--color-black)] mb-3">
                Hybrid Learning
              </h2>
              <p className="text-gray-600 mb-4">
                Can't make it to the center? No problem. We provide <strong>Online and Offline Coaching</strong> to suit your schedule. Access live lectures and recorded sessions from anywhere.
              </p>
              <button className="text-[var(--color-primary)] font-bold flex items-center gap-1 hover:gap-2 transition-all">
                Learn about Online Classes <ArrowUpRight size={18} />
              </button>
            </motion.section> */}

            {/* YouTube Card */}
            <motion.section
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-slate-900 p-8 rounded-[var(--radius-lg)] text-white shadow-xl relative overflow-hidden"
            >
              {/* Subtle background icon */}
              {/* <Youtube className="absolute -bottom-4 -right-4 text-white/10 w-32 h-32" /> */}

              <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                {/* <Youtube className="text-red-500" /> */}
                Study for Free
              </h2>
              <p className="text-gray-400 mb-6 relative z-10">
                Subscribe to our YouTube channel for free concept videos, exam tips, and topper interviews.
              </p>
              <a
                href="https://youtube.com/@starcareerpoint855?si=hiwzU4ImzyRAyIoE"
                target="_blank"
                rel="noopener noreferrer"
                className="relative z-10 inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-red-500/20"
              >
                Visit Channel
              </a>
            </motion.section>

          </aside>
        </div>
      </section>

      {/* --- SEO KEYWORD FOOTER / STATS --- */}
      <section className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">5k+</p>
              <p className="text-gray-500 font-medium uppercase tracking-tighter text-sm">Students Taught</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">98%</p>
              <p className="text-gray-500 font-medium uppercase tracking-tighter text-sm">Success Rate</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">10+</p>
              <p className="text-gray-500 font-medium uppercase tracking-tighter text-sm">Expert Tutors</p>
            </div>
            <div>
              <p className="text-4xl font-black text-[var(--color-primary)]">21</p>
              <p className="text-gray-500 font-medium uppercase tracking-tighter text-sm">Years Experience</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;