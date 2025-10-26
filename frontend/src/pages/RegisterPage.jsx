import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      // Gọi đến API đăng ký
      await axios.post('http://localhost:5000/api/auth/register', {
        ...formData,
        role: 'customer', // Mặc định role là customer
      });

      setSuccess('Đăng ký thành công! Đang chuyển đến trang đăng nhập...');
      
      // Đợi 2 giây rồi chuyển hướng
      setTimeout(() => {
        navigate('/admin/login'); // Chuyển đến trang đăng nhập
      }, 2000);

    } catch (err) {
      setError(err.response?.data?.message || 'Đã có lỗi xảy ra. Vui lòng thử lại.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
        <Header />
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
          Tạo tài khoản mới
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Hoặc{' '}
          <Link to="/admin/login" className="font-medium text-[#8B1E24] hover:text-[#7f1d1d]">
            đăng nhập nếu bạn đã có tài khoản
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && <p className="text-center text-sm text-red-600">{error}</p>}
            {success && <p className="text-center text-sm text-green-600">{success}</p>}
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Họ và Tên
              </label>
              <input id="name" name="name" type="text" required onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24]" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Địa chỉ Email
              </label>
              <input id="email" name="email" type="email" autoComplete="email" required onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24]" />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Mật khẩu
              </label>
              <input id="password" name="password" type="password" autoComplete="new-password" required onChange={handleChange} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#8B1E24] focus:ring-[#8B1E24]" />
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="flex w-full justify-center rounded-md border border-transparent bg-[#8B1E24] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#7f1d1d] focus:outline-none focus:ring-2 focus:ring-[#8B1E24] focus:ring-offset-2 disabled:bg-gray-400"
              >
                {loading ? 'Đang xử lý...' : 'Đăng ký'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
        <Footer />
    </>
  );
}