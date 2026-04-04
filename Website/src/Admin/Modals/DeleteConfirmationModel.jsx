import { motion, AnimatePresence } from "motion/react";
import { AlertTriangle, Trash2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { deleteDocument } from "../../axios/adminApi";
import { handleRefreshGallery, handleRefreshResource } from "../../redux/dashboardSlicer";
import { useDispatch } from "react-redux";

export default function DeleteConfirmationModal({
    isOpen,
    onClose,
    data,
    title = "Confirm Deletion",
    description = "Are you sure you want to delete this file? This action cannot be undone.",
}) {
    // Close on Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEscape);
            document.body.style.overflow = "hidden";
        }

        return () => {
            window.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const [spinner, setSpinner] = useState(false)
    const dispatch = useDispatch()

    async function handleDeleteDocument() {
        if (!data?.public_id || !data?.resource_type) {
            onClose()
        }
        try {
            setSpinner(true)
            const res = await deleteDocument(data)
            if (res.status == 200) {
                setSpinner(false)
                onClose()
                if (data?.resource_type == "raw")
                    dispatch(handleRefreshResource(true))
                else
                    dispatch(handleRefreshGallery(true))
                alert("File is deleted")

            }
        } catch (error) {
            setSpinner(false)
            alert(error?.message)
        }
    }

    console.log(data)

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5, bounce: 0.3 }}
                        className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:p-8"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
                        >
                            <X size={20} />
                        </button>

                        <div className="flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-500">
                                <AlertTriangle size={32} strokeWidth={2.5} />
                            </div>

                            {/* Text */}
                            <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">
                                {title}
                            </h3>
                            <p className="mb-8 text-gray-500">
                                {description}
                            </p>

                            {/* Buttons */}
                            <div className="flex w-full flex-col gap-3 sm:flex-row">
                                <button
                                    onClick={onClose}
                                    className="flex-1 rounded-xl border border-gray-200 px-4 py-3 font-semibold text-gray-700 hover:bg-gray-50 active:scale-95"
                                >
                                    Cancel
                                </button>

                                <button
                                    onClick={() => {
                                        handleDeleteDocument()
                                        onClose();
                                    }}
                                    disabled={spinner}
                                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-red-600 px-4 py-3 font-semibold text-white hover:bg-red-700 active:scale-95 shadow-lg shadow-red-200"
                                >
                                    <Trash2 size={18} />
                                    {!spinner ? "Delete" :
                                        <div className="flex justify-center items-center">
                                            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                                        </div>
                                    }
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}