import React, { useState, useEffect } from 'react';

// Đổi tên component để tránh trùng lặp
export default function ToastNotification({ message }) {
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExit(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed top-5 right-5 z-50 transform transition-all duration-300 ease-in-out
        ${exit ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'}`}
    >
      <div className="bg-gray-100 rounded-lg shadow-lg p-4 max-w-sm">
        <p className="text-sm font-medium text-gray-800 border-b-2 border-green-500 pb-2">
          {message}
        </p>
      </div>
    </div>
  );
}