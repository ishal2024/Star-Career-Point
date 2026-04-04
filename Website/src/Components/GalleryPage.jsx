import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Camera, PlayCircle, Video as VideoIcon, FileText } from 'lucide-react';
import { getGalleryData } from '../axios/adminApi';
import { addGalleryData } from '../redux/clientSlicer';
import { useDispatch, useSelector } from 'react-redux';
import Spinner from './Modals/Spinner';


const GalleryPage = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [spinner , setSpinner] = useState(false)

  const { gallery } = useSelector((state) => state.client)
  const dispatch = useDispatch()

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
    const nextIdx = (currentIndex + 1) % gallery.length;
    setSelectedImg(gallery[nextIdx]);
    setCurrentIndex(nextIdx);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + gallery.length) % gallery.length;
    setSelectedImg(gallery[prevIdx]);
    setCurrentIndex(prevIdx);
  };


  async function initializeMediaItems() {
    try {
      setSpinner(true)
      const res = await getGalleryData()

      if (res?.status == 200) {
        dispatch(addGalleryData(res?.data?.data))
        setSpinner(false)
      }
    } catch (error) {
      console.log(error?.message)
      setSpinner(false)
    }
  }

  console.log(gallery)

  useEffect(() => {
    if (gallery.length == 0)
      initializeMediaItems()
  }, [])

  return (
    <main className="min-h-screen bg-gray-50 pt-24 pb-20 overflow-x-hidden">
      {/* --- PAGE HEADER --- */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
          <div className="h-1 w-12 bg-red-600 rounded-full"></div>
          <span className="text-red-600 font-bold uppercase tracking-widest text-sm">Visual Tour</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight">
          Campus <span className="text-red-600">Gallery</span>
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl text-lg">
          Explore our world-class infrastructure, modern classrooms, and vibrant student life.
        </p>
      </header>

      {/* --- CREATIVE MASONRY GRID --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!spinner ? <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {gallery.map((item, index) => (
            <MediaCard
              key={item._id}
              item={item} // Renamed from image to item
              index={index}
              onClick={() => openModal(item, index)}
            />
          ))}
        </div> : <Spinner />}
      </section>

      {!spinner && gallery.length === 0 && (
        <div className="text-center py-20">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-4">
            <FileText size={40} />
          </div>
          <h3 className="text-xl font-bold text-gray-900">No images and videos found</h3>
          {/* <p className="text-gray-500 mt-2">Try adjusting your search or filter.</p> */}
        </div>
      )}

      {/* --- FULLSCREEN MODAL --- */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 backdrop-blur-md p-4 animate-fade-in"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button onClick={closeModal} className="absolute top-6 right-6 text-white/70 hover:text-red-500 transition-colors z-[110]" >
            <X size={32} />
          </button>

          {/* Navigation */}
          <button className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-red-500 transition-all hidden lg:block z-[110]" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
            <ChevronLeft size={60} />
          </button>

          <div className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {/* DYNAMIC CONTENT LOADER */}
            {selectedImg.resource_type === 'video' ? (
              <video
                src={selectedImg.url}
                className="w-full h-full max-h-[75vh] rounded-lg shadow-2xl animate-zoom-in border border-white/10"
                controls
                autoPlay
                playsInline
              />
            ) : (
              <img
                src={selectedImg.url}
                alt={selectedImg.title}
                className="w-full h-full max-h-[75vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
              />
            )}

            <div className="text-center mt-6 animate-fade-in-up">
              <h3 className="text-white text-2xl font-bold tracking-wide">{selectedImg.title}</h3>
              <p className="text-red-500 text-sm mt-1 uppercase tracking-[0.2em] font-semibold">{selectedImg.course}</p>
            </div>
          </div>

          <button className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-red-500 transition-all hidden lg:block z-[110]" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
            <ChevronRight size={60} />
          </button>
        </div>
      )}

      {/* --- PERSISTENT ANIMATION STYLES --- */}
      <style>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoomIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
        .animate-fade-in { animation: fadeIn 0.3s ease-out forwards; }
        .animate-zoom-in { animation: zoomIn 0.3s ease-out forwards; }
      `}</style>
    </main>
  );
};

// --- REUSABLE IMAGE CARD COMPONENT ---
const MediaCard = ({ item, index, onClick }) => {
  const isVideo = item.resource_type === 'video';

  return (
    <figure
      className="relative break-inside-avoid group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-gray-100"
      style={{ animationDelay: `${index * 100}ms` }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden bg-gray-200">
        {/* MEDIA RENDERER */}
        {isVideo ? (
          <div className="relative">
            {/* Use a thumbnail if available, otherwise video tag */}
            <video
              src={item.url}
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              muted
              playsInline
            />
            {/* Center Play Icon for Video */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-red-600/90 text-white p-4 rounded-full shadow-xl transform transition-transform group-hover:scale-110">
                <PlayCircle size={32} fill="currentColor" className="opacity-90" />
              </div>
            </div>
          </div>
        ) : (
          <img
            src={item.url}
            alt={item.title}
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
        )}

        {/* DESKTOP HOVER OVERLAY (Red Tint) */}
        <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 md:flex hidden flex-col justify-end p-6">
          <div className="flex items-center gap-2 text-white/80 mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {isVideo ? <VideoIcon size={20} /> : <Maximize2 size={20} />}
            <span className="text-xs uppercase font-bold tracking-widest">{isVideo ? 'Play Video' : 'View Image'}</span>
          </div>
          <h3 className="text-white text-2xl font-black translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
            {item.title}
          </h3>
        </div>

        {/* TYPE BADGE (Always visible desktop/mobile) */}
        <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-white/20">
          {isVideo ? (
            <VideoIcon size={18} className="text-white" />
          ) : (
            <Camera size={18} className="text-white" />
          )}
        </div>
      </div>

      {/* MOBILE INFO BAR */}
      <figcaption className="p-4 md:hidden flex justify-between items-center bg-white">
        <div>
          <h3 className="text-gray-900 font-bold text-lg leading-tight">{item.title}</h3>
          <p className="text-red-600 text-xs font-bold uppercase mt-1 tracking-tighter">{item.course}</p>
        </div>
        {isVideo && <PlayCircle size={24} className="text-red-600" />}
      </figcaption>
    </figure>
  );
};

export default GalleryPage;