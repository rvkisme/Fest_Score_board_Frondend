import React, { useState } from "react";

export default function Dialog({ isOpen, onClose, title, children }) {
  if (!isOpen) return null; // Don’t render if closed

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 relative">
        {/* Close button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  );
}

  

