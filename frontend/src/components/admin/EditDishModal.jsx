import React, { useState, useEffect } from 'react';

export default function EditDishModal({ dish, onClose, onSave, onDelete }) {
  const [editedDish, setEditedDish] = useState(dish);

  useEffect(() => {
    setEditedDish(dish);
  }, [dish]);

  const handleChange = (e) => {
    setEditedDish({ ...editedDish, [e.target.name]: e.target.value });
  };
  
  const handleSave = () => {
    onSave(editedDish);
  };
  
  const handleDelete = () => {
    onDelete(editedDish._id);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={onClose}>
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Chi tiết Món Ăn</h2>
        <div className="space-y-4">
            <input name="name" value={editedDish.name} onChange={handleChange} placeholder="Tên món ăn" required className="w-full px-3 py-2 border rounded text-gray-900 bg-gray-50 focus:ring-red-500 focus:border-red-500" />
            <textarea name="description" value={editedDish.description} onChange={handleChange} placeholder="Mô tả" required rows="3" className="w-full px-3 py-2 border rounded text-gray-900 bg-gray-50 focus:ring-red-500 focus:border-red-500" />
            
            <input type="number" name="price" value={editedDish.price} onChange={handleChange} placeholder="Giá" min="0" required className="w-full px-3 py-2 border rounded text-gray-900 bg-gray-50 focus:ring-red-500 focus:border-red-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            <input type="number" name="discount" value={editedDish.discount} onChange={handleChange} placeholder="Giảm giá (%)" min="0" max="100" className="w-full px-3 py-2 border rounded text-gray-900 bg-gray-50 focus:ring-red-500 focus:border-red-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
            
            <input name="imageUrl" value={editedDish.imageUrl} onChange={handleChange} placeholder="Link hình ảnh" required className="w-full px-3 py-2 border rounded text-gray-900 bg-gray-50 focus:ring-red-500 focus:border-red-500" />
            <select name="category" value={editedDish.category} onChange={handleChange} className="w-full px-3 py-2 border rounded text-gray-900 bg-gray-50 focus:ring-red-500 focus:border-red-500">
                <option>Món chính</option><option>Khai vị</option><option>Tráng miệng</option><option>Món nướng</option><option>Đồ uống</option><option>Món Nước</option><option>Món Cơm</option><option>Món Chiên</option>
            </select>
        </div>
        <div className="mt-8 flex justify-between items-center">
          <button onClick={handleDelete} className="bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors duration-300">Xóa Món Ăn</button>
          <div>
            <button onClick={onClose} className="mr-2 bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-black transition-colors duration-300">Đóng</button>
            <button onClick={handleSave} className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors duration-300">Lưu Thay Đổi</button>
          </div>
        </div>
      </div>
    </div>
  );
};