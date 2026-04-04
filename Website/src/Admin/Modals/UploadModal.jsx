import React, { useState, useRef } from 'react';
import {
    X,
    Upload,
    ChevronDown,
    FileText,
    Image as ImageIcon,
    Film,
    CheckCircle2,
    Loader2
} from 'lucide-react';
import { courseCategories } from '../../Data/Courses';
import { uploadFile } from '../../axios/adminApi';
import { useDispatch } from 'react-redux';
import { handleRefreshGallery, handleRefreshResource } from '../../redux/dashboardSlicer';

const FileUploadModal = ({ isOpen, onClose }) => {
    const [title, setTitle] = useState('');
    const [course, setCourse] = useState('');
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState(null);
    const [isUploading, setIsUploading] = useState(false);
    const fileInputRef = useRef(null);

    if (!isOpen) return null;

    const dispatch = useDispatch()


    const handleFileChange = (e) => {
        console.log(e.target.files)
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            if (selectedFile.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onloadend = () => setPreview(reader.result);
                reader.readAsDataURL(selectedFile);
            } else {
                setPreview(null);
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsUploading(true);

        if (!file || !title || !course)
            alert("Fill the data")

        const formData = new FormData()

        formData.append("file", file) // actual file
        formData.append("title", title)
        formData.append("course", course?.name)

        try {
            console.log(formData)
            const res = await uploadFile(formData)
            if (res.status == 200) {
                console.log(res?.data?.data)
                alert("File uploaded successfully")
                setIsUploading(false)
                if(res?.data?.file?.resource_type == "raw")
                    dispatch(handleRefreshResource(true))
                else
                    dispatch(handleRefreshGallery(true))
                setTitle('');
                setCourse('');
                setFile(null);
                setPreview(null);
                onClose()
            }
        } catch (error) {
            alert(error?.response?.data?.message)
            console.log(error)
            setIsUploading(false)
        }


    };

    const handleClose = () => {
        setTitle('');
        setCourse('');
        setFile(null);
        setPreview(null);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* 1. BACKDROP WITH BLUR */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
                onClick={handleClose}
            />

            {/* 2. MODAL CONTENT */}
            <div className="relative w-full max-w-md bg-[var(--bg-secondary)] border border-[var(--border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)] animate-in fade-in zoom-in duration-300">

                {/* Close Button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-[var(--transition)] z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8">
                    <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-1">Upload Resource</h2>
                    <p className="text-[var(--text-secondary)] text-sm mb-8">Fill in the details to add new media.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* TITLE INPUT */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] ml-1">Title</label>
                            <input
                                type="text"
                                required
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder="e.g. Introduction to React"
                                className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-[var(--radius-md)] text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-[var(--transition)]"
                            />
                        </div>

                        {/* CUSTOM COURSE DROPDOWN */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] ml-1">Select Course</label>
                            <div className="relative group">
                                <select
                                    required
                                    value={course}
                                    onChange={(e) => setCourse(e.target.value)}
                                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-[var(--radius-md)] text-[var(--text-primary)] appearance-none focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] cursor-pointer transition-[var(--transition)]"
                                >
                                    <option value="" disabled className="bg-[var(--bg-secondary)]">Choose a course...</option>
                                    {courseCategories.map(opt => (
                                        <option key={opt} value={opt} className="bg-[var(--bg-secondary)]">{opt}</option>
                                    ))}
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors">
                                    <ChevronDown size={18} />
                                </div>
                            </div>
                        </div>

                        {/* FILE UPLOAD AREA */}
                        <div className="space-y-1.5">
                            <label className="text-xs font-bold uppercase tracking-wider text-[var(--text-muted)] ml-1">Upload File</label>
                            <div
                                onClick={() => fileInputRef.current.click()}
                                className={`cursor-pointer border-2 border-dashed rounded-[var(--radius-lg)] p-6 transition-[var(--transition)] flex flex-col items-center justify-center text-center
                  ${file
                                        ? 'border-[var(--success)] bg-[var(--success)]/5'
                                        : 'border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-primary)] hover:bg-[var(--bg-tertiary)]'}`}
                            >
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    onChange={handleFileChange}
                                    className="hidden"
                                    accept="image/*,video/*,application/pdf"
                                />

                                {!file ? (
                                    <>
                                        <Upload size={28} className="text-[var(--accent)] mb-2" />
                                        <p className="text-sm font-medium text-[var(--text-primary)]">Select Image, Video or PDF</p>
                                        <p className="text-[var(--text-muted)] text-[11px] mt-1">Drag & drop or click to browse</p>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center animate-in fade-in scale-95 duration-300">
                                        {preview ? (
                                            <img src={preview} alt="Preview" className="w-16 h-16 object-cover rounded-[var(--radius-sm)] mb-2 border border-[var(--border)]" />
                                        ) : (
                                            <div className="p-3 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] mb-2">
                                                {file.type.includes('video') ? <Film size={24} /> : <FileText size={24} />}
                                            </div>
                                        )}
                                        <div className="flex items-center gap-1.5 text-[var(--success)] text-xs font-bold">
                                            <CheckCircle2 size={14} />
                                            <span className="truncate max-w-[150px]">{file.name}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* SUBMIT BUTTON */}
                        <button
                            type="submit"
                            disabled={!file || !title || !course || isUploading}
                            className="w-full py-4 mt-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-bold rounded-[var(--radius-md)] shadow-[var(--shadow-md)] transition-[var(--transition)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 active:scale-[0.98]"
                        >
                            {isUploading ? (
                                <>
                                    <Loader2 size={20} className="animate-spin" />
                                    Processing...
                                </>
                            ) : (
                                <>
                                    <Upload size={20} />
                                    Upload Resource
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FileUploadModal;