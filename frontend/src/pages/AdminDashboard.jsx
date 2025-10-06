import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingManager from '../components/admin/BookingManager';
import DishManager from '../components/admin/DishManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Trang Quản Trị</h1>
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
            Đăng xuất
          </button>
        </div>
        <div className="mb-6">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button onClick={() => setActiveTab('bookings')} className={`${ activeTab === 'bookings' ? 'border-[#8B1E24] text-[#8B1E24]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                Quản lý Đặt Bàn
              </button>
              <button onClick={() => setActiveTab('dishes')} className={`${ activeTab === 'dishes' ? 'border-[#8B1E24] text-[#8B1E24]' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}>
                Quản lý Thực Đơn
              </button>
            </nav>
          </div>
        </div>
        <div>
          {activeTab === 'bookings' && <BookingManager />}
          {activeTab === 'dishes' && <DishManager />}
        </div>
      </div>
    </div>
  );
}