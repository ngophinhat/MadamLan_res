import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function BookingManager() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

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
  
  const handleDeleteBooking = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa đơn đặt bàn này?')) {
      try {
        const token = localStorage.getItem('adminToken');
        const config = { headers: { Authorization: `Bearer ${token}` } };
        await axios.delete(`http://localhost:5000/api/bookings/${id}`, config);
        fetchBookings();
      } catch (err) {
        alert('Xóa thất bại. Vui lòng thử lại.');
      }
    }
  };

  if (loading) return <p className="text-gray-800">Đang tải danh sách đặt bàn...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Danh sách Đặt Bàn</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Khách Hàng</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số Điện Thoại</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày Giờ</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Số Khách</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
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
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button onClick={() => handleDeleteBooking(booking._id)} className="text-red-600 hover:text-red-900">Xóa</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};