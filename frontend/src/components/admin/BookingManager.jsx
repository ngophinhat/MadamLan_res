import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookingManager({ onShowDetail }) {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [toast, setToast] = useState('');
  const [deleteTarget, setDeleteTarget] = useState(null); // ✅ lưu booking muốn xoá

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      const { data } = await axios.get('http://localhost:5000/api/bookings', config);
      setBookings(data);
    } catch (err) {
      setError('Không thể tải danh sách đặt bàn.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  // ✅ Xử lý xoá
  const handleDeleteBooking = async () => {
    if (!deleteTarget) return;
    try {
      const token = localStorage.getItem('adminToken');
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.delete(`http://localhost:5000/api/bookings/${deleteTarget}`, config);
      setDeleteTarget(null);
      fetchBookings();
      showToast('✅ Đã xóa đơn đặt bàn thành công!');
    } catch (err) {
      showToast('❌ Xóa thất bại, vui lòng thử lại.');
    }
  };

  // ✅ Hiển thị thông báo góc phải
  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 3000);
  };

  if (loading) return <p className="text-gray-800">Đang tải danh sách đặt bàn...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="relative bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Danh sách Đặt Bàn</h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Tên Khách Hàng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số Điện Thoại</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Ngày Giờ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Số Khách</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Hành Động</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {bookings.map((booking) => (
              <tr key={booking._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{booking.customerName}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{booking.customerPhone}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                  {new Date(booking.date).toLocaleDateString('vi-VN')} - {booking.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{booking.guestCount}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                  <button
                    onClick={() => onShowDetail && onShowDetail(booking)}
                    className="bg-gray-800 text-white px-3 py-1 rounded hover:bg-gray-900"
                  >
                    Chi tiết
                  </button>
                  <button
                    onClick={() => setDeleteTarget(booking._id)} // ✅ mở modal xoá
                    className="text-red-600 hover:text-red-900"
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Modal xác nhận xoá */}
      {deleteTarget && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-96 border border-gray-300 text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Xác nhận xoá</h3>
            <p className="text-gray-600 mb-6">Bạn có chắc chắn muốn xóa đơn đặt bàn này không?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleDeleteBooking}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Xóa
              </button>
              <button
                onClick={() => setDeleteTarget(null)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
              >
                Hủy
              </button>
            </div>
          </div>
        </div>
      )}
      {toast && (
        <div className="fixed bottom-5 right-5 bg-white border border-black text-black px-5 py-3 rounded-full shadow-md underline decoration-green-500 transition-all duration-500 animate-slide-up">
          {toast}
        </div>
      )}
    </div>
  );
}
