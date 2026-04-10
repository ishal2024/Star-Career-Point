import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Coaching from "../../assets/Hero/Coaching_Centre.jpeg"
import spoken from "../../assets/Hero/Spoken_English.jpeg"
import ielts from "../../assets/Hero/IELTS.jpeg"
import ssc from "../../assets/Hero/SSC.jpeg"
import sainik from "../../assets/Hero/Sainik_School.jpeg"


const sliderData =[
  {
    id : 1,
    image: Coaching,
    title: "Coaching Centre for CBSE and other board V to XII",
    description: "A team of IIT graduates with 10–12 years of CBSE teaching experience, providing quality notes, assignments, and guidance for board and competitive exams."
  },
  {
    id : 2,
    image: spoken,
    title: "British Spoken Institute",
    description: "Offers modern communication skills training for students and professionals to achieve fluency and confidence in English."
  },
  {
    id : 3,
    image: ielts,
    title: "Institute for IELTS / PTE",
    description: "Provides IELTS (Academic & General) and PTE coaching with expert guidance for study abroad, immigration, and visa assistance."
  },
{
  id: 4,
  image: ssc,
  title: "SSC/Delhi Police/Railway Entrance Exam",
  description: "Provides complete coaching for SSC exams including CGL, CHSL, MTS, and GD. Covers Quantitative Aptitude, Reasoning, English, and General Awareness with regular mock tests, doubt sessions, and expert guidance to help students secure government jobs."
},
{
  id: 5,
  image: sainik,
  title: "Sainik/Narvodya School Entrance Coaching",
  description: "Offers specialized preparation for Sainik School entrance exams with focus on Mathematics, Intelligence, and English. Includes physical training guidance, personality development, and disciplined learning to help students succeed in military school admissions."
}
];

const PremiumHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleSlideChange = useCallback((newIndex) => {
    setIsExiting(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsExiting(false);
    }, 300); // Half of transition-normal
  }, []);

  const nextSlide = useCallback(() => {
    const next = (currentIndex + 1) % sliderData.length;
    handleSlideChange(next);
  }, [currentIndex, handleSlideChange]);

  const prevSlide = () => {
    const prev = (currentIndex - 1 + sliderData.length) % sliderData.length;
    handleSlideChange(prev);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 5000);
      return () => clearInterval(timer);
    }
  }, [nextSlide, isPaused]);

  return (
    <section 
      style={{ background: 'var(--gradient-primary)' }}
      className="relative w-full h-auto lg:h-[60vh] min-h-[600px] lg:min-h-[500px] flex items-center overflow-hidden py-12 lg:py-0"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-16 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* LEFT SECTION: TEXT CONTENT */}
          <div 
            className={`w-full lg:w-1/2 space-y-6 transition-all duration-500 transform ${
              isExiting ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-[2px] bg-yellow-400"></div>
              <span className="text-yellow-400 font-bold tracking-[0.2em] text-sm">NEW ARRIVAL</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-[var(--text-light)] leading-[1.1]">
              {sliderData[currentIndex].title}
            </h1>
            
            <p className="text-lg text-[var(--text-secondary)] max-w-md leading-relaxed">
              {sliderData[currentIndex].description}
            </p>

          
          </div>

          {/* RIGHT SECTION: PORTRAIT IMAGE CARD */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Image Container Card */}
              <div 
                style={{ 
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: 'var(--shadow-lg)',
                  transition: 'var(--transition-normal)'
                }}
                className={`p-6 backdrop-blur-sm border border-white/10 flex items-center justify-center transform group-hover:scale-[1.02] ${
                  isExiting ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                }`}
              >
                <img 
                  src={sliderData[currentIndex].image} 
                  alt={sliderData[currentIndex].title}
                  className="h-[300px] md:h-[400px] w-auto object-contain rounded-[var(--radius-md)] drop-shadow-2xl"
                />
              </div>

              {/* Navigation Controls Overlay */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-[var(--bg-dark)] p-2 rounded-[var(--radius-md)] border border-white/10 shadow-2xl">
                <button 
                  onClick={prevSlide}
                  className="p-3 bg-[var(--color-white)] text-[var(--bg-dark)] rounded-[var(--radius-md)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-[var(--transition-normal)] shadow-[var(--shadow-md)]"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <div className="flex gap-2 px-2">
                  {sliderData.map((_, idx) => (
                    <div 
                      key={idx}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === idx ? 'w-6 bg-[var(--color-primary)]' : 'w-2 bg-gray-600'
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={nextSlide}
                  className="p-3 bg-[var(--color-white)] text-[var(--bg-dark)] rounded-[var(--radius-md)] hover:bg-[var(--color-primary-light)] hover:text-[var(--color-primary)] transition-[var(--transition-normal)] shadow-[var(--shadow-md)]"
                  aria-label="Next Slide"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PremiumHero;