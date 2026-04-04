import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "../../assets/Hero/Coaching_Centre.jpeg",
    title: "Coaching Center for CBSE and other board V to XII",
    subtitle: "A team of IIT graduates with 10–12 years of CBSE teaching experience, providing quality notes, assignments, and guidance for board and competitive exams."
  },
  {
    image: "../../assets/Hero/Spoken_English.jpeg",
    title: "British Spoken Institute",
    subtitle: "Offers modern communication skills training for students and professionals to achieve fluency and confidence in English."
  },
  {
    image: "../../assets/Hero/IELTS.jpeg",
    title: "Institute for IELTS / PTE",
    subtitle: "Provides IELTS (Academic & General) and PTE coaching with expert guidance for study abroad, immigration, and visa assistance."
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);
 
  return (
    <section className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden mt-16 md:mt-18">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute  inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image Overlay */}
          <div className="absolute  inset-0 bg-black/50 z-10" />
          <img 
            src={slide.image} 
            alt={slide.title}
            className="w-full h-full object-contain "
          />
          
          {/* Content */}
          <div className="absolute  inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
              {slide.title}
            </h1>
            <p className="text-gray-100 text-lg md:text-lg mb-8 max-w-2xl">
              {slide.subtitle}
            </p>
            {/* <button className="bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button> */}
          </div>
        </div>
      ))}

      {/* Desktop Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full backdrop-blur-sm transition-all"
      >
        <ChevronRight size={32} />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, i) => (
          <div 
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              current === i ? 'w-8 bg-[var(--color-primary)]' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;