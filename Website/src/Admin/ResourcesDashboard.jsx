import React, { useEffect, useState } from 'react';
import {
    FileText,
    Plus,
    Trash2,
    Eye,
    Download,
    Upload,
    ChevronLeft,
    ChevronRight,
    File
} from 'lucide-react';
import { addResourcesData, handleRefreshResource } from '../redux/dashboardSlicer';
import { deleteDocument, getResourcesData } from '../axios/adminApi';
import { useDispatch, useSelector } from 'react-redux';
import FileUploadModal from './Modals/UploadModal';
import DeleteConfirmationModal from './Modals/DeleteConfirmationModel';
import PageSpinner from '../Components/Modals/Spinner';

const ResourcesDashboard = () => {

    const dispatch = useDispatch()
    const { resources , refreshResource } = useSelector((state) => state.dashboard)
    const [isFormOpen, setFormOpen] = useState(false)
    const [confirmModal , setConfirmModal] = useState(false)
    const [confirmData , setConfirmData] = useState({})
    const [spinner , setSpinner] = useState(false)

    function formatBytes(bytes) {
        if (bytes === 0) return "0 Bytes";
        const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
        const i = Math.floor(Math.log(bytes) / Math.log(1024));
        const value = bytes / Math.pow(1024, i);
        return `${value.toFixed(2)} ${sizes[i]}`;
    }

    async function initializeMediaItems() {
        try {
            setSpinner(true)
            const res = await getResourcesData()
            if (res?.status == 200) {
                dispatch(addResourcesData(res?.data?.data))
                dispatch(handleRefreshResource(false))
                setSpinner(false)
            }
        } catch (error) {
            setSpinner(false)
            console.log(error?.message)
        }
    }

    useEffect(() => {
        if(refreshResource)
        initializeMediaItems()
    }, [refreshResource])

    return (
        <div className="min-h-screen bg-[var(--bg-primary)] p-6 md:p-10 text-[var(--text-primary)]">

            {isFormOpen && <FileUploadModal
                isOpen={isFormOpen}
                onClose={() => setFormOpen(false)}
            />}

            {confirmModal && <DeleteConfirmationModal
                isOpen={confirmModal}
                onClose={() => {
                    setConfirmModal(false)
                    setConfirmData({})
                }}
                data={confirmData}
                
            />}

            {/* 1. HEADER SECTION */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-[var(--text-primary)]">Resources</h1>
                    <p className="text-[var(--text-secondary)] mt-1">Manage and share PDF documents with your clients.</p>
                </div>

                <button
                    onClick={() => setFormOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-2.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-[var(--radius-md)] transition-[var(--transition)] shadow-[var(--shadow-md)] font-medium active:scale-95"
                >
                    <Upload size={18} />
                    <span>Add Resource</span>
                </button>
            </div>

            {/* 2. RESOURCES GRID */}
            {!spinner ? <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

                {/* 3. FIRST CARD (Special Add PDF Card) */}
                <div
                    onClick={() => setFormOpen(true)}
                    className="group cursor-pointer aspect-[4/5] flex flex-col items-center justify-center border-2 border-dashed border-[var(--border)] hover:border-[var(--accent)] bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] transition-[var(--transition)] hover:bg-[var(--bg-tertiary)]"
                >
                    <div className="p-4 rounded-full bg-[var(--bg-tertiary)] group-hover:bg-[var(--accent)] transition-[var(--transition)] mb-4">
                        <Plus size={32} className="text-[var(--accent)] group-hover:text-white" />
                    </div>
                    <span className="text-[var(--text-secondary)] font-semibold group-hover:text-[var(--text-primary)]">Add PDF</span>
                    <p className="text-[var(--text-muted)] text-xs mt-2 text-center px-4">Max file size: 25MB</p>
                </div>

                {/* 4. PDF CARDS */}
                {resources.map((file) => (
                    <div
                        key={file._id}
                        className="group relative flex flex-col bg-[var(--bg-secondary)] rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] border border-[var(--border)] transition-[var(--transition)] hover:shadow-[var(--shadow-lg)] hover:-translate-y-1"
                    >
                        {/* Delete Icon (Top-Right) */}
                        <button
                            onClick={() => {
                                setConfirmData({ public_id: file?.public_id, resource_type: file?.resource_type })
                                setConfirmModal(true)
                            }}
                            className="absolute top-3 right-3 z-10 p-2 rounded-full bg-[var(--bg-primary)]/50 text-[var(--text-secondary)] hover:text-white hover:bg-[var(--danger)] backdrop-blur-md transition-[var(--transition)] md:opacity-0 group-hover:opacity-100"
                        >
                            <Trash2 size={16} />
                        </button>

                        {/* Document Preview Area */}
                        <div className="h-40 flex items-center justify-center bg-[var(--bg-tertiary)]/30 rounded-t-[var(--radius-lg)] group-hover:bg-[var(--bg-tertiary)]/50 transition-[var(--transition)] relative overflow-hidden">
                            <div className="relative">
                                <FileText size={64} className="text-[var(--accent)] opacity-80" />
                                <div className="absolute -bottom-1 -right-1 bg-[var(--bg-secondary)] p-1 rounded-sm border border-[var(--border)]">
                                    <p className="text-[8px] font-bold text-[var(--accent)]">PDF</p>
                                </div>
                            </div>
                        </div>

                        {/* File Info Body */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="font-semibold text-[var(--text-primary)] truncate mb-1" title={file.name}>
                                {file?.title}
                            </h3>
                            <p className='text-[10px] text-gray-500 mb-1 font-semibold'>{file.course}</p>
                            <div className="flex items-center justify-between text-xs text-[var(--text-muted)] mb-4">
                                <span>{formatBytes(file?.file_size)}</span>
                                <span>{new Date(file.createdAt).toLocaleDateString('en-GB', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric'
                                })}</span>
                            </div>

                            {/* Action Buttons (Footer) */}
                            <div className="mt-auto flex items-center gap-2 pt-4 border-t border-[var(--border)]">
                                <button
                                    onClick={() => window.open(file.url, '_blank')}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 text-xs font-medium rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] hover:bg-[var(--accent)] hover:text-white transition-[var(--transition)] text-[var(--text-secondary)]"
                                >
                                    <Eye size={14} />
                                    View
                                </button>
                                {/* <button
                                    className="p-2 rounded-[var(--radius-sm)] bg-[var(--bg-tertiary)] hover:bg-[var(--accent)] hover:text-white transition-[var(--transition)] text-[var(--text-secondary)]"
                                    title="Download"
                                >
                                    <Download size={14} />
                                </button> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div> : <PageSpinner bgColor={'bg-[var(--bg-primary)]'} />}

            {/* 5. PAGINATION */}
            {/* <div className="max-w-7xl mx-auto mt-16 flex items-center justify-center gap-4">
                <button
                    disabled
                    className="flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-muted)] cursor-not-allowed opacity-50 transition-[var(--transition)]"
                >
                    <ChevronLeft size={20} />
                    <span>Previous</span>
                </button>

                <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-md)] border border-[var(--border-light)] bg-[var(--bg-secondary)] text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] hover:border-[var(--accent)] transition-[var(--transition)] shadow-[var(--shadow-sm)] font-medium"
                >
                    <span>Next</span>
                    <ChevronRight size={20} />
                </button>
            </div> */}
        </div>
    );
};

export default ResourcesDashboard;