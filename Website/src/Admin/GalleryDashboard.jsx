import React, { useEffect, useState } from 'react';
import {
    Plus,
    Trash2,
    Upload,
    ChevronLeft,
    ChevronRight,
    PlayCircle,
    Image as ImageIcon
} from 'lucide-react';
import UploadModal from './Modals/UploadModal';
import { deleteDocument, getGalleryData } from '../axios/adminApi';
import { useDispatch, useSelector } from 'react-redux';
import { addGalleryData } from '../redux/dashboardSlicer';

const GalleryDashboard = () => {
    // Dummy data state to allow for visual deletion

    const dispatch = useDispatch()
    const { gallery } = useSelector((state) => state.dashboard)


    async function handleDeleteDocument(data) {
        try {
            const res = await deleteDocument(data)
            if (res.status == 200) {
                alert("File is deleted")
            }
        } catch (error) {
            alert(error?.response?.data?.message)
        }
    }

    const [isFormOpen, setFormOpen] = useState(false)

    const handleAddMedia = () => {
        alert("Triggering file upload modal...");
    };

    async function initializeMediaItems() {
        try {
            const res = await getGalleryData()

            if (res?.status == 200) {
                dispatch(addGalleryData(res?.data?.data))
            }
        } catch (error) {
            console.log(error?.message)
        }
    }

    console.log(gallery)

    useEffect(() => {
        initializeMediaItems()
    }, [])

    return (
        <div className="min-h-screen  bg-[var(--bg-primary)] p-6 md:p-10 text-[var(--text-primary)]">

            {isFormOpen && <UploadModal
                isOpen={isFormOpen}
                onClose={() => setFormOpen(false)}
            />}

            {/* 1. HEADER SECTION */}
            <div className="max-w-full mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">Gallery</h1>
                    <p className="text-[var(--text-secondary)] mt-1 text-sm md:text-base">
                        Dashboard / <span className="text-[var(--accent)]">Media Assets</span>
                    </p>
                </div>

                <button
                    onClick={() => setFormOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-[var(--radius-md)] transition-[var(--transition)] shadow-[var(--shadow-md)] font-semibold active:scale-95 w-full md:w-auto"
                >
                    <Upload size={20} />
                    <span>Add Image / Video</span>
                </button>
            </div>

            {/* 2. GALLERY GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* 3. FIRST CARD (Special Add Card) */}
                <div
                    onClick={handleAddMedia}
                    className="group cursor-pointer aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] transition-[var(--transition)] hover:bg-[var(--bg-tertiary)]"
                >
                    <div className="p-4 rounded-full bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent)] transition-[var(--transition)] mb-3">
                        <Plus size={32} className="text-[var(--accent)] group-hover:text-white" />
                    </div>
                    <span className="text-[var(--text-secondary)] font-semibold group-hover:text-[var(--text-primary)]">Add Image / Video</span>
                </div>

                {/* 4. MEDIA CARDS */}
                {gallery.map((item) => (
                    <div
                        key={item.id}
                        className="group relative overflow-hidden bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--border)] transition-[var(--transition)] hover:shadow-[var(--shadow-lg)]"
                    >
                        {/* Delete Button (Top-Right) */}
                        <button
                            onClick={() => handleDeleteDocument({public_id : item?.public_id , resource_type : item?.resource_type})}
                            className="absolute top-3 right-3 z-20 p-2 rounded-full bg-black/40 text-white backdrop-blur-md hover:bg-[var(--danger)] transition-[var(--transition)] md:opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100"
                            title="Delete Media"
                        >
                            <Trash2 size={18} />
                        </button>

                        {/* Media Content */}
                        <div className="aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
                            {item.resource_type === 'image' ? (
                                <img
                                    src={item.url}
                                    alt="Gallery content"
                                    className="w-full h-full object-cover transition-[var(--transition)] group-hover:scale-110"
                                />
                            ) : (
                                <video
                                    className="w-full h-full object-cover"
                                    controls={false}
                                    muted
                                    playsInline
                                >
                                    <source src={item.url} type="video/mp4" />
                                </video>
                            )}
                        </div>

                        {/* Hover Overlay Content */}
                        <div className="absolute inset-0 bg-black/40 opacity-100 md:opacity-0 group-hover:opacity-100 transition-[var(--transition)] flex items-center justify-center backdrop-blur-[2px] pointer-events-none">
                            {item.resource_type === 'video' ? (
                                <PlayCircle size={48} className="text-white drop-shadow-2xl" />
                            ) : (
                                <ImageIcon size={40} className="text-white drop-shadow-2xl" />
                            )}
                        </div>

                        {/* Type Label (Bottom-Left) */}
                        <div className="absolute bottom-3 left-3 px-3 py-1 bg-black/60 rounded-[var(--radius-sm)] text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md opacity-100 md:opacity-0 group-hover:opacity-100 transition-[var(--transition)] border border-white/10 pointer-events-none">
                            {item.resource_type}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default GalleryDashboard;