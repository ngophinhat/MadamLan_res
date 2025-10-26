import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingManager from '../components/admin/BookingManager';
import DishManager from '../components/admin/DishManager';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('bookings');
  const navigate = useNavigate();
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showDetail, setShowDetail] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleShowDetail = (booking) => {
    setSelectedBooking(booking);
    setShowDetail(true);
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
    setSelectedBooking(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Trang Quản Trị</h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Đăng xuất
          </button>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            <button
              onClick={() => setActiveTab('bookings')}
              className={`${
                activeTab === 'bookings'
                  ? 'border-[#8B1E24] text-[#8B1E24]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Quản lý Đặt Bàn
            </button>
            <button
              onClick={() => setActiveTab('dishes')}
              className={`${
                activeTab === 'dishes'
                  ? 'border-[#8B1E24] text-[#8B1E24]'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Quản lý Thực Đơn
            </button>
          </nav>
        </div>

        {/* Nội dung */}
        <div>
          {activeTab === 'bookings' && <BookingManager onShowDetail={handleShowDetail} />}
          {activeTab === 'dishes' && <DishManager />}
        </div>

        {/* Modal Chi tiết */}
        {showDetail && selectedBooking && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-lg p-6 relative">
              {/* Nút đóng góc phải */}
              <button
                onClick={handleCloseDetail}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>

              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Chi tiết Đặt Bàn
              </h2>

              <div className="space-y-2 text-gray-700">
                <p>
                  <strong>Tên khách hàng:</strong> {selectedBooking.customerName}
                </p>
                <p>
                  <strong>Số điện thoại:</strong> {selectedBooking.customerPhone}
                </p>
                <p>
                  <strong>Ngày:</strong>{" "}
                  {new Date(selectedBooking.date).toLocaleDateString("vi-VN")} 
                </p>
                <p>
                  <strong>Thời gian:</strong>{" "}
                  {selectedBooking.time}
                </p>
                <p>
                  <strong>Số khách:</strong> {selectedBooking.guestCount}
                </p>
                <p>
                  <strong>Ghi chú:</strong>{" "}
                  {selectedBooking.specialRequest || "Không có"}
                </p>

                {/* Phần hiển thị món ăn khách đặt */}
                {selectedBooking.orderedItems && selectedBooking.orderedItems.length > 0 ? (
                  <div className="mt-4">
                    <p className="font-semibold text-gray-800">Món ăn khách đã đặt:</p>
                    <ul className="list-disc list-inside space-y-1">
                      {selectedBooking.orderedItems.map((item, index) => (
                        <li key={index}>
                          {item.name} — Số lượng: {item.quantity}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <p className="italic text-gray-500 mt-3">
                    Không có món ăn nào được đặt trước.
                  </p>
                )}
              </div>

              <div className="mt-6 text-right">
                <button
                  onClick={handleCloseDetail}
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800"
                >
                  Đóng
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
