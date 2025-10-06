import { Link } from "react-router-dom";
import Logo_1 from "../assets/images/Logo_1.png";

export default function Header() {
  return (
    <header className="bg-[#8B1E24] text-white w-full shadow z-50">
      <div className="max-w-7xl mx-auto flex items-center px-8 py-4">
        <Link to="/">
          <img src={Logo_1} alt="Logo - Về trang chủ" className="h-12 object-contain cursor-pointer" />
        </Link>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
