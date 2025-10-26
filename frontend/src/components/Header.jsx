import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo_1 from "../assets/images/Logo_1.png";

export default function Header() {
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('customerUser');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    localStorage.removeItem('customerToken');
    localStorage.removeItem('customerUser');
    setUser(null);
    setDropdownOpen(false);
    navigate('/');
  };
  // === KẾT THÚC LOGIC THÊM VÀO ===

  return (
    <header className="bg-[#8B1E24] text-white w-full shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center px-8 py-4">
        
        {/* Phần Logo (Giữ nguyên) */}
        <Link to="/">
          <img src={Logo_1} alt="Logo - Về trang chủ" className="h-12 object-contain cursor-pointer" />
        </Link>
        
        {/* Phần Điều hướng chính (Giữ nguyên) */}
        <nav className="flex-1 flex justify-center">
          <ul className="list-none flex gap-[35px] text-sm tracking-wide">
            <li>
              <Link to="/ve-chung-toi">Về chúng tôi</Link>
            </li>
            <li>
              <Link to="/thuc-don">Thực đơn</Link>
            </li>
            <li>
              <Link to="/dat-cho">Đặt chỗ</Link>
            </li>
            <li>
              <Link to="/tin-tuc">Tin tức</Link>
            </li>
            <li>
              <Link to="/tuyen-dung">Tuyển dụng</Link>
            </li>
            {/* Đã xóa 2 link Đăng nhập/Đăng ký ở đây để thay bằng logic mới */}
          </ul>
        </nav>
        <div className="flex items-center">
          {user ? (
            // NẾU ĐÃ ĐĂNG NHẬP: Hiển thị Profile Dropdown
            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                className="flex items-center gap-3 focus:outline-none"
              >
                <span className="font-semibold text-sm hidden sm:block">{user.name}</span>
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#8B1E24] font-bold text-xl">
                  {user.name ? user.name.charAt(0).toUpperCase() : '?'} 
                </div>
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg py-1 text-gray-800">
                  <Link to="/lich-su-dat-ban" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Lịch sử đặt bàn
                  </Link>
                  <Link to="/cai-dat-thong-tin" className="block px-4 py-2 text-sm hover:bg-gray-100">
                    Cài đặt thông tin
                  </Link>
                  <div className="border-t border-gray-200 my-1"></div>
                  <button 
                    onClick={handleLogout} 
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-[35px] text-sm tracking-wide">
              <Link to="/admin/login">Đăng Nhập</Link>
              <Link to="/register">Đăng Ký</Link>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
}