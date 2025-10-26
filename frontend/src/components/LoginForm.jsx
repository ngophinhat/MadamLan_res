import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });

      if (response.data.token) {
        const userRole = response.data.user.role;
        const userToken = response.data.token;
        
        // === LOGIC PHÂN LUỒNG QUAN TRỌNG NHẤT ===
        if (userRole === 'admin') {
          // Nếu là admin, lưu token admin và chuyển đến trang dashboard
          localStorage.setItem('adminToken', userToken);
          localStorage.setItem('adminUser', JSON.stringify(response.data.user));
          navigate('/admin/dashboard');
        } else {
          // Nếu là customer, lưu token customer và chuyển về trang chủ
          localStorage.setItem('customerToken', userToken);
          localStorage.setItem('customerUser', JSON.stringify(response.data.user));
          navigate('/'); // Chuyển về trang chủ
        }
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Đã có lỗi xảy ra.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-md bg-red-50 p-4">
          <p className="text-sm font-medium text-red-800">{error}</p>
        </div>
      )}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Địa chỉ Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#8B1E24] focus:outline-none focus:ring-[#8B1E24] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Mật khẩu
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-[#8B1E24] focus:outline-none focus:ring-[#8B1E24] sm:text-sm"
          />
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="flex w-full justify-center rounded-md border border-transparent bg-[#8B1E24] py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-[#7f1d1d] focus:outline-none focus:ring-2 focus:ring-[#8B1E24] focus:ring-offset-2 disabled:bg-gray-400"
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
      </div>
    </form>
  );
}