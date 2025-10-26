import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext'; 
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BookingPage() {
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];
  const { cartItems, removeFromCart, addToCart, decreaseQuantity } = useCart();
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    guestCount: 1,
    date: todayString,
    time: '',
    specialRequest: '',
  });

  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  setMessage('');

  try {
    const token = localStorage.getItem('customerToken');

    const orderedItems = cartItems.map(item => ({
      name: item.name,
      quantity: item.qty,
      price: item.price
    }));

    if (token) {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post('http://localhost:5000/api/bookings/user', { ...formData, orderedItems }, config);
    } else {
      await axios.post('http://localhost:5000/api/bookings/guest', { ...formData, orderedItems });
    }

    setMessage('Đặt bàn thành công!');
    // reset form 
    setFormData({
      customerName: '',
      customerPhone: '',
      guestCount: 1,
      date: todayString,
      time: '',
      specialRequest: '',
      orderedItems:'',
    });
  } catch (error) {
    setMessage('Đã có lỗi xảy ra.');
  } finally {
    setIsSubmitting(false);
  }
};

return (
    <>
      <Header />
      <main className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E24]">
                Đặt Bàn
              </h1>
              <p className="mt-2 text-gray-600">Vui lòng điền thông tin để giữ chỗ.</p>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Họ và Tên</label>
                <input type="text" name="customerName" id="customerName" required value={formData.customerName} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm" />
              </div>
              <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
                <input type="tel" name="customerPhone" id="customerPhone" required value={formData.customerPhone} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700">Số khách</label>
                  <input type="number" name="guestCount" id="guestCount" min="1" required value={formData.guestCount} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Ngày</label>
                  <input type="date" name="date" id="date" required value={formData.date} onChange={handleChange} min={todayString} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm" />
                </div>
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Giờ</label>
                  <input type="time" name="time" id="time" required value={formData.time} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm" />
                </div>
              </div>
              <div>
                <label htmlFor="specialRequest" className="block text-sm font-medium text-gray-700">Yêu cầu đặc biệt (nếu có)</label>
                <textarea name="specialRequest" id="specialRequest" rows="3" value={formData.specialRequest} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"></textarea>
              </div>
              <div>
                <button type="submit" disabled={isSubmitting} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B1E24] hover:bg-[#7f1d1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E24] disabled:bg-gray-400">
                  {isSubmitting ? 'Đang gửi...' : 'Xác nhận Đặt Bàn'}
                </button>
              </div>
              {message && <p className="text-center text-green-600 font-medium mt-4">{message}</p>}
            </form>
          </div>
          
          {/* SỬA 3: CỘT BÊN PHẢI ĐÃ ĐƯỢC CẬP NHẬT */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-serif font-bold text-gray-800 border-b pb-4">
              Các món đã chọn trước
            </h2>
            <div className="mt-6 space-y-4 max-h-96 overflow-y-auto">
              {cartItems.length > 0 ? (
                cartItems.map(item => (
                  <div key={item._id} className="flex justify-between items-center border-b pb-3">
                    {/* Tên và giá */}
                    <div className="flex-grow">
                      <p className="font-semibold text-gray-800">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.price.toLocaleString('vi-VN')}đ</p>
                    </div>
                    {/* Bộ nút tăng giảm số lượng */}
                    <div className="flex items-center gap-3">
                      <button onClick={() => decreaseQuantity(item)} className="w-7 h-7 rounded-full border text-lg font-bold flex items-center justify-center hover:bg-gray-100">-</button>
                      <span className="font-semibold w-6 text-center">{item.qty}</span>
                      <button onClick={() => addToCart(item)} className="w-7 h-7 rounded-full border text-lg font-bold flex items-center justify-center hover:bg-gray-100">+</button>
                    </div>
                    {/* Nút xóa */}
                    <button onClick={() => removeFromCart(item)} className="ml-4 text-red-500 hover:text-red-700">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center py-10">Bạn chưa chọn món nào.</p>
              )}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}