import React, { useState, useEffect } from 'react';
import { X, Maximize2, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

// --- DYNAMIC DATA ---
const galleryImages = [
  { id: 1, title: "Modern Classroom", url: "https://images.unsplash.com/photo-1523050335456-adabc08b97e4?q=80&w=800&auto=format&fit=crop" },
  { id: 2, title: "Chemistry Lab", url: "https://images.unsplash.com/photo-1581093583449-80d50ad9db2e?q=80&w=1000&auto=format&fit=crop" },
  { id: 3, title: "Annual Science Fair", url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop" },
  { id: 4, title: "Library Study Session", url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop" },
  { id: 5, title: "Toppers Award Ceremony", url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1100&auto=format&fit=crop" },
  { id: 6, title: "Computer Lab", url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=900&auto=format&fit=crop" },
  { id: 7, title: "Outdoor Discussion", url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop" },
  { id: 8, title: "Digital Smart Boards", url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop" },
];

const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (img, index) => {
    setSelectedImg(img);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scroll
  };

  const closeModal = () => {
    setSelectedImg(null);
    setCurrentIndex(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % galleryImages.length;
    setSelectedImg(galleryImages[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    setSelectedImg(galleryImages[prevIdx]);
    setCurrentIndex(prevIdx);
  };

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20">
      {/* --- PAGE HEADER --- */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
          <div className="h-1 w-12 bg-[var(--color-primary)] rounded-full"></div>
          <span className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm">Visual Tour</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Campus <span className="text-[var(--color-primary)]">Gallery</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl text-lg">
          Explore our world-class infrastructure, modern classrooms, and the vibrant life of students at EduBoost.
        </p>
      </header>

      {/* --- CREATIVE MASONRY GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <ImageCard 
              key={image.id} 
              image={image} 
              index={index} 
              onClick={() => openModal(image, index)} 
            />
          ))}
        </div>
      </section>

      {/* --- FULLSCREEN MODAL --- */}
      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-10 animate-fade-in"
          onClick={closeModal}
        >
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
            onClick={closeModal}
          >
            <X size={32} />
          </button>

          <button 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hidden md:block"
            onClick={nextImage}
          >
            <ChevronLeft size={60} />
          </button>

          <div className="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
            <img 
              src={selectedImg.url} 
              alt={selectedImg.title} 
              className="w-full h-full object-contain rounded-lg shadow-2xl animate-zoom-in"
            />
            <h3 className="text-white text-xl font-bold mt-6 tracking-wide">{selectedImg.title}</h3>
            <p className="text-gray-400 text-sm mt-1 uppercase tracking-widest">EduBoost Campus</p>
          </div>

          <button 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-all hidden md:block"
            onClick={prevImage}
          >
            <ChevronRight size={60} />
          </button>
        </div>
      )}

      {/* --- CUSTOM CSS FOR ANIMATIONS --- */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .animate-zoom-in {
          animation: zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </main>
  );
};

// --- REUSABLE IMAGE CARD COMPONENT ---
const ImageCard = ({ image, index, onClick }) => {
  return (
    <figure 
      className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-[var(--radius-lg)] bg-white shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        {/* Image Zoom Effect */}
        <img 
          src={image.url} 
          alt={image.title} 
          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Desktop Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-primary-dark)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:flex hidden">
          <Maximize2 className="text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500" size={24} />
          <h3 className="text-white text-xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {image.title}
          </h3>
        </div>

        {/* Small Icon Badge (always visible desktop/mobile) */}
        <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
          <Camera size={18} className="text-white" />
        </div>
      </div>

      {/* Mobile Title (Visible only on small screens) */}
      <figcaption className="p-4 md:hidden">
        <h3 className="text-gray-900 font-bold text-lg leading-tight">{image.title}</h3>
        <p className="text-[var(--color-primary)] text-xs font-bold uppercase mt-1">Campus Life</p>
      </figcaption>
    </figure>
  );
};

export default GalleryPage;