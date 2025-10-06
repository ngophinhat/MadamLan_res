import React, { useState } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BookingPage() {
  // --- THÊM LOGIC MỚI BẮT ĐẦU TỪ ĐÂY ---

  // Lấy ngày hiện tại
  const today = new Date();
  const todayString = today.toISOString().split('T')[0];

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
      const response = await axios.post('http://localhost:5000/api/bookings', formData);
      
      if (response.status === 201) {
        setMessage('Đặt bàn thành công! Chúng tôi sẽ liên hệ với bạn để xác nhận.');
        setFormData({
          customerName: '',
          customerPhone: '',
          guestCount: 1,
          date: todayString,
          time: '',
          specialRequest: '',
        });
      }
    } catch (error) {
      setMessage('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
      console.error("Lỗi khi đặt bàn:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="bg-stone-50 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#8B1E24]">
              Đặt Bàn
            </h1>
            <p className="mt-2 text-gray-600">Vui lòng điền thông tin để giữ chỗ.</p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="customerName" className="block text-sm font-medium text-gray-700">Họ và Tên</label>
              <input
                type="text"
                name="customerName"
                id="customerName"
                required
                value={formData.customerName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"
              />
            </div>

            <div>
              <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700">Số Điện Thoại</label>
              <input
                type="tel"
                name="customerPhone"
                id="customerPhone"
                required
                value={formData.customerPhone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div>
                <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700">Số khách</label>
                <input
                  type="number"
                  name="guestCount"
                  id="guestCount"
                  min="1"
                  required
                  value={formData.guestCount}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">Ngày</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  required
                  value={formData.date}
                  onChange={handleChange}
                  // THÊM THUỘC TÍNH `min` VÀO ĐÂY
                  min={todayString}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700">Giờ</label>
                <input
                  type="time"
                  name="time"
                  id="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="specialRequest" className="block text-sm font-medium text-gray-700">Yêu cầu đặc biệt (nếu có)</label>
              <textarea
                name="specialRequest"
                id="specialRequest"
                rows="3"
                value={formData.specialRequest}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24] sm:text-sm"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#8B1E24] hover:bg-[#7f1d1d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#8B1E24] disabled:bg-gray-400"
              >
                {isSubmitting ? 'Đang gửi...' : 'Xác nhận Đặt Bàn'}
              </button>
            </div>
            
            {message && <p className="text-center text-green-600 font-medium mt-4">{message}</p>}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}