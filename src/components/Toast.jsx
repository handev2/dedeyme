// components/Toast.js
import React, { useState } from 'react';

function Toast({ onClose }) {
  const [showToast, setShowToast] = useState(true);

  const handleClose = () => {
    setShowToast(false);
    onClose();
  };

  return (
    <div
      className={`fixed bottom-40 z-50 right-5 bg-white p-2 rounded-lg border border-gray-300 shadow-md ${
        showToast ? 'transform translate-y-0 opacity-100' : 'transform translate-y-20 opacity-0'
      } transition-all duration-300 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <p className="text-rose-600 text-xs">Produk Berhasil Ditambahkan Ke Keranjang!</p>
        <button
          onClick={handleClose}
          className="text-red-500 ml-3 hover:text-red-700 focus:outline-none"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default Toast;
