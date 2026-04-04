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
import { addGalleryData, handleRefreshGallery } from '../redux/dashboardSlicer';
import DeleteConfirmationModal from './Modals/DeleteConfirmationModel';
import PageSpinner from '../Components/Modals/Spinner';

const GalleryDashboard = () => {
    // Dummy data state to allow for visual deletion

    const dispatch = useDispatch()
    const { gallery , refreshGallery } = useSelector((state) => state.dashboard)
    const [confirmModal , setConfirmModal] = useState(false)
    const [confirmData , setConfirmData] = useState({})
    const [spinner , setSpinner] = useState(false)
    const [isFormOpen, setFormOpen] = useState(false)
    const [videoControls , setVideoControls] = useState(false)

    const handleAddMedia = () => {
        alert("Triggering file upload modal...");
    };

    async function initializeMediaItems() {
        try {
            setSpinner(true)
            const res = await getGalleryData()

            if (res?.status == 200) {
                dispatch(addGalleryData(res?.data?.data))
                dispatch(handleRefreshGallery(false))
                setSpinner(false)
            }
        } catch (error) {
            setSpinner(false)
            console.log(error?.message)
        }
    }

    console.log(gallery)

    useEffect(() => {
        if(refreshGallery)
        initializeMediaItems()
    }, [refreshGallery])

    return (
        /* Removed hardcoded p-6 md:p-10 and replaced with w-full */
<div className="w-full text-[var(--text-primary)]">

    {isFormOpen && <UploadModal
        isOpen={isFormOpen}
        onClose={() => setFormOpen(false)}
    />}

    {confirmModal && <DeleteConfirmationModal
    isOpen={confirmModal}
    onClose={() =>{
        setConfirmModal(false)
        setConfirmData({})
    }}
    data={confirmData}
     />}

    {/* 1. HEADER SECTION - Improved spacing and text alignment */}
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-8 md:mb-12">
        <div className="space-y-1">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Gallery</h1>
            <p className="text-[var(--text-secondary)] text-xs md:text-sm lg:text-base">
                Dashboard / <span className="text-[var(--accent)] font-medium">Media Assets</span>
            </p>
        </div>

        <button
            onClick={() => setFormOpen(true)}
            className="flex items-center justify-center gap-2 px-5 py-3 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-[var(--radius-md)] transition-all shadow-[var(--shadow-md)] font-semibold active:scale-95 w-full sm:w-auto text-sm md:text-base"
        >
            <Upload size={18} />
            <span>Add Image / Video</span>
        </button>
    </div>

    {/* 2. GALLERY GRID - Better responsive column distribution */}
    {!spinner ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">

        {/* 3. FIRST CARD (Special Add Card) - Optimized for touch */}
        <div
            onClick={() => setFormOpen(true)}
            className="group cursor-pointer aspect-video flex flex-col items-center justify-center border-2 border-dashed border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] transition-all hover:bg-[var(--bg-tertiary)] p-4"
        >
            <div className="p-3 md:p-4 rounded-full bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent)] transition-all mb-3">
                <Plus size={28} className="text-[var(--accent)] group-hover:text-white" />
            </div>
            <span className="text-[var(--text-secondary)] text-sm md:text-base font-semibold group-hover:text-[var(--text-primary)]">Add Media</span>
        </div>

        {/* 4. MEDIA CARDS */}
        {gallery.map((item) => (
            <div
                key={item.id}
                
                className="group relative overflow-hidden bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--border)] transition-all hover:shadow-[var(--shadow-lg)]"
            >
                {/* Delete Button - Optimized: Higher z-index and larger touch area on mobile */}
                <button
                    onClick={() => {
                        setConfirmData({public_id : item?.public_id , resource_type : item?.resource_type})
                        setConfirmModal(true)
                    }}
                    className="absolute top-2 right-2 z-30 p-2.5 rounded-full bg-black/60 text-white backdrop-blur-md hover:bg-[var(--danger)] transition-all md:opacity-0 group-hover:opacity-100"
                    title="Delete Media"
                >
                    <Trash2 size={16} />
                </button>

                {/* Media Content - Fixed Aspect Ratio */}
                <div onClick={() => setVideoControls(true)} className="aspect-video w-full overflow-hidden bg-neutral-900 flex items-center justify-center">
                    {item.resource_type === 'image' ? (
                        <img
                            src={item.url}
                            alt="Gallery content"
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <video
                            className="w-full h-full object-cover"
                            controls={videoControls}
                            muted
                            playsInline
                        >
                            <source src={item.url} type="video/mp4" />
                        </video>
                    )}
                </div>

                {/* Overlay - Visible on mobile for context, hover-only on desktop */}
                <div  className={`absolute inset-0 bg-black/30 md:bg-black/40 ${videoControls ? 'opacity-0' : 'opacity-100'} md:opacity-0 ${!videoControls && 'group-hover:opacity-100'} transition-opacity flex items-center justify-center backdrop-blur-[1px] pointer-events-none`}>
                    {item.resource_type === 'video' ? (
                        <PlayCircle  size={40} className="text-white opacity-80" />
                    ) : (
                        <ImageIcon size={32} className="text-white opacity-80" />
                    )}
                </div>

                {/* Type Label - Simplified for smaller screens */}
                <div className="absolute bottom-2 left-2 px-2 py-0.5 bg-black/70 rounded-[var(--radius-sm)] text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur-md border border-white/10 pointer-events-none">
                    {item.resource_type}
                </div>
            </div>
        ))}
    </div> : <PageSpinner bgColor={'bg-[var(--bg-primary)]'} />}
</div>
    );
};

export default GalleryDashboard;