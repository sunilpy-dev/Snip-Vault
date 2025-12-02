import React, { useEffect } from "react";
import { OctagonAlert } from "lucide-react";

const DeleteComponent = ({
    open,
    title = "Are you sure?",
    message = "This action cannot be undone.",
    confirmText = "Yes, Delete",
    cancelText = "Cancel",
    onConfirm,
    onCancel
}) => {

    // Disable page scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => document.body.classList.remove("overflow-hidden");
    }, [open]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">

            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Dialog Box */}
            <div
                className="
                    relative 
                    bg-white dark:bg-neutral-900
                    rounded-2xl 
                    w-full max-w-[90%] sm:max-w-md md:max-w-lg
                    p-4 sm:p-6
                    shadow-2xl 
                    border border-gray-200 dark:border-neutral-700
                "
            >
                {/* Icon */}
                <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                        bg-red-100 dark:bg-red-900/30 
                        flex items-center justify-center"
                    >
                        <OctagonAlert className="text-red-600 dark:text-red-400 text-2xl sm:text-3xl" />
                    </div>
                </div>

                {/* Title */}
                <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-gray-100 text-center mb-2">
                    {title}
                </h2>

                {/* Message */}
                <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm text-center mb-6">
                    {message}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-3">

                    {/* Cancel Button */}
                    <button
                        onClick={onCancel}
                        className="
                            py-2 px-5 rounded-lg text-sm font-medium
                            bg-gray-200 hover:bg-gray-300 
                            dark:bg-neutral-700 dark:hover:bg-neutral-600 
                            text-gray-800 dark:text-gray-200
                            transition
                            w-full sm:w-auto
                        "
                    >
                        {cancelText}
                    </button>

                    {/* Confirm Button */}
                    <button
                        onClick={onConfirm}
                        className="
                            py-2 px-5 rounded-lg text-sm font-medium
                            bg-red-600 hover:bg-red-700
                            dark:bg-red-500 dark:hover:bg-red-600
                            text-white transition
                            w-full sm:w-auto
                        "
                    >
                        {confirmText}
                    </button>

                </div>
            </div>
        </div>
    );
};

export default DeleteComponent;
