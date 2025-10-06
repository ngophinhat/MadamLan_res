import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import EditDishModal from './EditDishModal';

export default function DishManager() {
  const [allDishes, setAllDishes] = useState([]);
  const [filteredDishes, setFilteredDishes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDish, setSelectedDish] = useState(null);
  const [newDish, setNewDish] = useState({ name: '', description: '', price: '', imageUrl: '', category: 'Món chính', discount: 0 });

  const fetchDishes = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/dishes');
      setAllDishes(data);
    } catch (err) { console.error("Lỗi tải món ăn", err); }
  };
  useEffect(() => { fetchDishes(); }, []);

  useEffect(() => {
    const results = allDishes.filter(dish =>
      dish.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredDishes(results);
  }, [searchTerm, allDishes]);
  
  const handleNewDishChange = (e) => setNewDish({ ...newDish, [e.target.name]: e.target.value });

  const handleAddNewDish = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } };
      await axios.post('http://localhost:5000/api/dishes', newDish, config);
      setNewDish({ name: '', description: '', price: '', imageUrl: '', category: 'Món chính', discount: 0 });
      fetchDishes();
    } catch (error) { alert('Thêm món ăn thất bại.'); }
  };

  const handleUpdateDish = async (dishToUpdate) => {
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.put(`http://localhost:5000/api/dishes/${dishToUpdate._id}`, dishToUpdate, config);
      setSelectedDish(null);
      fetchDishes();
    } catch (error) {
      alert('Cập nhật món ăn thất bại.');
    }
  };

  const handleDeleteDish = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn XÓA VĨNH VIỄN món ăn này?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`http://localhost:5000/api/dishes/${id}`, config);
        setSelectedDish(null);
        fetchDishes();
      } catch (err) {
        alert('Xóa món ăn thất bại.');
      }
    }
  };

  return (
    <Fragment>
      {selectedDish && (
        <EditDishModal 
          dish={selectedDish} 
          onClose={() => setSelectedDish(null)}
          onSave={handleUpdateDish}
          onDelete={handleDeleteDish}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 bg-white p-6 rounded-lg shadow-md h-fit">
           <h2 className="text-2xl font-bold mb-4 text-gray-800">Thêm Món Ăn Mới</h2>
            <form onSubmit={handleAddNewDish} className="space-y-4">
                <input name="name" value={newDish.name} onChange={handleNewDishChange} placeholder="Tên món ăn" required className="w-full px-3 py-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500" />
                <textarea name="description" value={newDish.description} onChange={handleNewDishChange} placeholder="Mô tả" required className="w-full px-3 py-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500" />
                <input type="number" name="price" value={newDish.price} onChange={handleNewDishChange} placeholder="Giá" required min="0" className="w-full px-3 py-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <input type="number" name="discount" value={newDish.discount} onChange={handleNewDishChange} placeholder="Giảm giá (%)" min="0" max="100" className="w-full px-3 py-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                <input name="imageUrl" value={newDish.imageUrl} onChange={handleNewDishChange} placeholder="Link hình ảnh" required className="w-full px-3 py-2 border rounded bg-gray-700 text-white placeholder-gray-400 focus:ring-red-500 focus:border-red-500" />
                <select name="category" value={newDish.category} onChange={handleNewDishChange} className="w-full px-3 py-2 border rounded bg-gray-700 text-white focus:ring-red-500 focus:border-red-500">
                    <option className="bg-gray-700 text-white">Món chính</option><option className="bg-gray-700 text-white">Khai vị</option><option className="bg-gray-700 text-white">Tráng miệng</option><option className="bg-gray-700 text-white">Món nướng</option><option className="bg-gray-700 text-white">Đồ uống</option><option>Món Nước</option><option>Món Cơm</option><option>Món Chiên</option>
                </select>
                <button type="submit" className="w-full bg-[#8B1E24] text-white py-2 rounded hover:bg-[#7f1d1d]">Thêm Món</button>
            </form>
        </div>
        
        <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Danh sách Món Ăn</h2>
            <input 
              type="text" 
              placeholder="🔍 Tìm kiếm món ăn..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-xs px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#8B1E24] focus:border-transparent transition"
            />
          </div>
          <div className="overflow-y-auto max-h-[32rem]">
            <ul className="space-y-2">
              {filteredDishes.map(dish => (
                <li key={dish._id} className="flex justify-between items-center p-2 border-b border-gray-200">
                  <span className="flex-grow text-gray-800">{dish.name}</span>
                  <span className="font-semibold text-right text-gray-800 w-24">{dish.price.toLocaleString('vi-VN')}đ</span>
                  
                  {/* === SỬA DUY NHẤT Ở DÒNG NÀY === */}
                  <button onClick={() => setSelectedDish(dish)} className="ml-4 bg-gray-800 text-white text-sm py-1 px-3 rounded-md hover:bg-black transition-colors">Chi tiết</button>
                
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};