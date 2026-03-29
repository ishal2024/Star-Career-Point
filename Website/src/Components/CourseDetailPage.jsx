import React, { useState } from 'react';
import { 
  ChevronDown, 
  Clock, 
  Calendar, 
  Wallet, 
  Users, 
  BookOpen, 
  CheckCircle,
  ArrowRight,
  UserCheck
} from 'lucide-react';

const CourseDetailPage = ({ courseData }) => {
  // State for Accordion logic
  const [openSubjectId, setOpenSubjectId] = useState(0);

  // Fallback data for demonstration/structure
  const data = courseData || {
    name: "Advanced Medical Entrance (NEET) Prep",
    image: "https://imgs.search.brave.com/0wtdJFwJTNSw8tpB5buzU_u-8LDXZMYD79KpWxn33Ws/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjQv/MDY3LzM5NC9zbWFs/bC9pbGx1bWluYXRl/ZC1oaWdoLXNjaG9v/bC1jaGVtaXN0cnkt/bGFib3JhdG9yeS13/aXRoLXN0dWRlbnRz/LWNvbmR1Y3Rpbmct/ZXhwZXJpbWVudHMt/YWktZ2VuZXJhdGVk/LWZyZWUtcGhvdG8u/anBn",
    description: `Our comprehensive NEET Preparation course is designed by top-tier medical professionals and expert faculty. We provide an in-depth understanding of Biology, Physics, and Chemistry, specifically tailored for the latest exam patterns.

    The curriculum focuses on conceptual clarity followed by rigorous testing. Students get access to exclusive modules, previous year solved papers, and daily practice sets. Our methodology ensures that every student builds the stamina and accuracy required to clear one of the toughest entrance exams in the country.`,
    price: "₹45,000",
    duration: "1 Year Program",
    classesPerWeek: "5 Days a Week",
    subjects: [
      { id: 0, title: "Biology & Genetics", topics: ["Cell Structure", "Plant Physiology", "Human Anatomy", "Genetics & Evolution"] },
      { id: 1, title: "Organic Chemistry", topics: ["Hydrocarbons", "Biomolecules", "Polymers", "Reaction Mechanisms"] },
      { id: 2, title: "Modern Physics", topics: ["Atoms & Nuclei", "Dual Nature of Matter", "Semiconductors", "Wave Optics"] }
    ],
    faculty: [
      { name: "Dr. Sameer Khan", qualification: "MBBS, MD (AIIMS)", subject: "Biology Head" },
      { name: "Prof. Ritu Sharma", qualification: "M.Sc. Organic Chemistry", subject: "Chemistry Expert" },
      { name: "Er. Vikas Gupta", qualification: "B.Tech (IIT Delhi)", subject: "Physics Lead" },
      { name: "Dr. Ananya Roy", qualification: "10+ Years Experience", subject: "Botany Specialist" }
    ]
  };

  const toggleAccordion = (id) => {
    setOpenSubjectId(openSubjectId === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-white">
      
      {/* --- SECTION 1: COURSE HEADER (30vh) --- */}
      <section className="relative h-[35vh] md:h-[45vh] w-full overflow-hidden flex items-center">
        {/* Background Image */}
        <img 
          src={data.image} 
          alt={data.name} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark Gradient Overlay for SEO-friendly text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion-fade-in className="block">
            <span className="inline-block bg-[var(--color-primary)] text-white text-xs font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-widest">
              Course Details
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              {data.name}
            </h1>
          </motion-fade-in>
        </div>
      </section>

      {/* --- SECTION 2: MAIN CONTENT --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 
          Mobile Order Logic: 
          flex-col results in Detail Box on Top (HTML Order).
          lg:flex-row-reverse + lg:justify-between results in Sidebar on Right and Description on Left for Desktop.
        */}
        <div className="flex flex-col lg:flex-row-reverse gap-10 lg:items-start">
          
          {/* RIGHT COLUMN: DETAIL BOX (Shows TOP on Mobile) */}
          <aside className="w-full lg:w-1/3 lg:sticky lg:top-24">
            <div className="bg-white rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] border border-gray-100 overflow-hidden transform transition-all duration-300 hover:shadow-2xl">
              <div className="bg-[var(--color-primary)] p-6 text-white">
                <p className="text-sm font-bold opacity-80 uppercase tracking-wider mb-1">Course Fee</p>
                <div className="text-4xl font-black">{data.price}</div>
              </div>
              
              <div className="p-6 space-y-5">
                <div className="flex items-center justify-between text-gray-700 border-b border-gray-50 pb-3">
                  <div className="flex items-center gap-3 font-medium">
                    <Calendar className="text-[var(--color-primary)]" size={20} /> Classes
                  </div>
                  <span className="font-bold">{data.classesPerWeek}</span>
                </div>
                
                <div className="flex items-center justify-between text-gray-700 border-b border-gray-50 pb-3">
                  <div className="flex items-center gap-3 font-medium">
                    <Clock className="text-[var(--color-primary)]" size={20} /> Duration
                  </div>
                  <span className="font-bold">{data.duration}</span>
                </div>

                <div className="flex items-center justify-between text-gray-700 border-b border-gray-50 pb-3">
                  <div className="flex items-center gap-3 font-medium">
                    <UserCheck className="text-[var(--color-primary)]" size={20} /> Batch
                  </div>
                  <span className="font-bold italic">Morning/Evening</span>
                </div>

                <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-black py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 active:scale-95 shadow-lg shadow-red-100 mt-4 group">
                  ENQUIRE NOW <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </aside>

          {/* LEFT COLUMN: DESCRIPTION */}
          <div className="w-full lg:w-2/3">
            <article className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-black text-gray-900 mb-6 flex items-center gap-3">
                Course Description
                <span className="h-1 w-12 bg-[var(--color-primary)] rounded-full"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line text-lg">
                {data.description}
              </p>
              
              {/* Feature highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                {["Full Study Modules", "Weekly Mock Tests", "Personal Mentorship", "Doubt Clearing Sessions"].map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 bg-gray-50 p-4 rounded-lg text-gray-700 font-bold border-l-4 border-[var(--color-primary)]">
                    <CheckCircle size={18} className="text-[var(--color-primary)]" /> {feat}
                  </div>
                ))}
              </div>
            </article>

            {/* --- SECTION 3: SUBJECTS (ACCORDION) --- */}
            <section className="mt-16">
              <h2 className="text-3xl font-black text-gray-900 mb-8">List of Subjects</h2>
              <div className="space-y-4">
                {data.subjects.map((subject) => (
                  <div key={subject.id} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm transition-all duration-300">
                    <button 
                      onClick={() => toggleAccordion(subject.id)}
                      className={`w-full flex items-center justify-between p-5 text-left transition-colors ${openSubjectId === subject.id ? 'bg-red-50' : 'bg-white hover:bg-gray-50'}`}
                    >
                      <div className="flex items-center gap-4">
                        <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold transition-colors ${openSubjectId === subject.id ? 'bg-[var(--color-primary)] text-white' : 'bg-gray-100 text-gray-500'}`}>
                          {subject.id + 1}
                        </span>
                        <span className="text-xl font-bold text-gray-800">{subject.title}</span>
                      </div>
                      <ChevronDown className={`transition-transform duration-300 text-gray-400 ${openSubjectId === subject.id ? 'rotate-180 text-[var(--color-primary)]' : ''}`} />
                    </button>
                    
                    {/* ACCORDION CONTENT (CSS-ONLY Height Transition) */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSubjectId === subject.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="p-6 bg-white border-t border-gray-100">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {subject.topics.map((topic, i) => (
                            <div key={i} className="flex items-center gap-2 text-gray-600">
                              <BookOpen size={16} className="text-red-300" /> {topic}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* --- SECTION 4: FACULTY SECTION --- */}
      <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Our Faculty</h2>
            <div className="h-1.5 w-24 bg-[var(--color-primary)] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.faculty.map((member, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl border border-gray-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[var(--color-primary)] transition-colors duration-300">
                  <Users size={32} className="text-[var(--color-primary)] group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1 leading-tight">{member.name}</h4>
                <p className="text-[var(--color-primary)] font-bold text-sm mb-4">{member.subject}</p>
                <div className="w-full h-px bg-gray-100 mb-4"></div>
                <p className="text-gray-400 text-xs font-semibold uppercase tracking-widest">{member.qualification}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS-Only Fade Animation for Sections */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section, article, aside {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default CourseDetailPage;