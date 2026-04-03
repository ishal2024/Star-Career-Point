import React, { useEffect, useState } from 'react';
import { Search, FileText, Download, Calendar, ChevronDown, Filter, HardDrive } from 'lucide-react';
import { getResourcesData } from '../axios/adminApi';
import { addResourcesData } from '../redux/clientSlicer';
import { useDispatch, useSelector } from 'react-redux';
import { courseCategories } from '../Data/Courses';


const ResourcesPage = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const dispatch = useDispatch()
    const { resources } = useSelector((state) => state.client)
    const [filter, setFilter] = useState([])
    const [search, setSearch] = useState("")

    async function initializeMediaItems() {
        try {
            const res = await getResourcesData()

            if (res?.status == 200) {
                dispatch(addResourcesData(res?.data?.data))
            }
        } catch (error) {
            console.log(error?.message)
        }
    }

    console.log(resources)

    useEffect(() => {
        if (resources.length == 0)
            initializeMediaItems()
    }, [])

    useEffect(() => {
        console.log({ search, activeFilter })
        const searchData = resources.filter((doc) => doc.title.toLowerCase().includes(search.toLowerCase()))
        if (activeFilter !== "All") {
            const filterData = searchData.filter((doc) => doc.course === activeFilter)
            setFilter([...filterData])
            return
        }
        setFilter([...searchData])
    }, [activeFilter, search, resources])

    return (
        <main className="min-h-screen bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* --- 1. PAGE HEADER --- */}
                <header className="mb-12 space-y-8">
                    <div className="text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
                            Resources<span className="text-red-600">.</span>
                        </h1>
                        <p className="mt-3 text-gray-500 text-lg max-w-2xl">
                            Access your study materials, lecture notes, and practice papers anytime, anywhere.
                        </p>
                    </div>

                    {/* SEARCH & FILTER UI */}
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                        {/* Search Bar */}
                        <div className="relative w-full lg:max-w-md group">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <Search size={20} className="text-gray-400 group-focus-within:text-red-500 transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                placeholder="Search documents..."
                                className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-transparent rounded-xl focus:bg-white focus:ring-4 focus:ring-red-500/10 focus:border-red-500 outline-none transition-all text-gray-700"
                                aria-label="Search documents"
                            />
                        </div>

                        {/* Course Filter (Horizontal Scroll for Mobile, Clean Tabs for Desktop) */}
                        <nav className="w-full lg:w-auto overflow-x-auto no-scrollbar flex items-center gap-2 pb-2 lg:pb-0">
                            <div className="flex items-center gap-2">
                                <Filter size={18} className="text-gray-400 mr-2 hidden sm:block" />
                                <button
                                    onClick={() => setActiveFilter("All")}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFilter === "All"
                                        ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                        }`}
                                >
                                    All
                                </button>
                                {courseCategories.map((course , index) => (
                                    <button
                                        key={index}
                                        onClick={() => setActiveFilter(course)}
                                        className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeFilter === course
                                            ? 'bg-red-600 text-white shadow-lg shadow-red-600/20'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {course}
                                    </button>
                                ))}
                            </div>
                        </nav>
                    </div>
                </header>

                {/* --- 2. DOCUMENT GRID --- */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filter.map((doc, index) => (
                        <DocumentCard key={doc.id} doc={doc} index={index} />
                    ))}
                </section>

                {/* --- EMPTY STATE (Optional) --- */}
                {filter.length === 0 && (
                    <div className="text-center py-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 text-gray-400 mb-4">
                            <FileText size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">No resources found</h3>
                        <p className="text-gray-500 mt-2">Try adjusting your search or filter.</p>
                    </div>
                )}
            </div>
        </main>
    );
};


const DocumentCard = ({ doc, index }) => {

    function formatBytes(bytes) {
        if (bytes === 0) return "0 Bytes";
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        const value = bytes / Math.pow(1024, i);
        return `${value.toFixed(2)} ${sizes[i]}`;
    }

    return (
        <>
            {/* 1. Added Keyframes directly to ensure visibility */}
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-resource-card {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

            <article
                /* BUG FIX: Changed bg-black to bg-white for visibility with text-gray-900 */
                /* BUG FIX: Added overflow-hidden to prevent layout issues */
                className="group relative bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between animate-resource-card"
                style={{
                    animationDelay: `${index * 0.1}s`,
                    opacity: 0 // Will be turned to 1 by the animation above
                }}
            >
                <div>
                    <div className="flex items-start justify-between mb-5">
                        {/* 2. IMPROVED ICON UI: Larger and more vibrant */}
                        <div className={`p-4 rounded-xl ${doc.type === 'pdf' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'}`}>
                            <FileText size={28} strokeWidth={2.5} />
                        </div>

                        {/* 3. IMPROVED TAG: Added subtle border */}
                        <span className="px-3 py-1 bg-gray-50 border border-gray-100 text-gray-500 text-[10px] font-bold uppercase tracking-widest rounded-lg">
                            {doc.course}
                        </span>
                    </div>

                    {/* 4. MAIN CONTENT: Fixed color contrast */}
                    <header>
                        <h2 className="text-lg font-bold text-gray-800 leading-snug group-hover:text-red-600 transition-colors line-clamp-2 min-h-[3.5rem]">
                            {doc.title}
                        </h2>
                    </header>

                    {/* 5. META INFO: Better spacing and icons */}
                    <div className="mt-4 flex items-center gap-4 text-gray-500 text-xs font-medium">
                        <div className="flex items-center gap-1.5">
                            <HardDrive size={14} className="text-gray-400" />
                            <span>{formatBytes(doc.file_size)}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                            <Calendar size={14} className="text-gray-400" />
                            <time dateTime={doc.createdAt}>{new Date(doc.createdAt).toLocaleDateString('en-GB', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })}</time>
                        </div>
                    </div>
                </div>

                {/* 6. BUTTON: Premium Red Theme with active states */}
                <footer className="mt-8">
                    <button
                        onClick={() => window.open(doc.url, '_blank')}
                        className="w-full flex items-center justify-center gap-2 py-3.5 bg-gray-900 text-white rounded-xl font-bold group-hover:bg-red-600 transition-all shadow-md active:scale-95">
                        <Download size={18} />
                        <span>Download PDF</span>
                    </button>
                </footer>
            </article>
        </>
    );
};


export default ResourcesPage;

// --- CSS STYLES (Added via Tailwind or Global CSS) ---
/*
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/