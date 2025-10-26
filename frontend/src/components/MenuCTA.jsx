import { Link } from "react-router-dom";
import food from "../assets/images/food.jpg";

export default function MenuCTA() {
  return (
    <section
      className="relative text-center py-40 bg-cover bg-center"
      style={{ backgroundImage: `url(${food})` }}
    >
      <div className="bg-black/40 absolute inset-0"></div>
      
      <div className="relative flex flex-row justify-center items-center gap-10">
        
        <Link
          to="/dat-cho"
          className="bg-[#8B1E24] text-white hover:text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300"
        >
          Đặt bàn
        </Link>
        
        <Link
          to="/thuc-don"
          className="bg-white !text-[#8B1E24] hover:!text-[#8B1E24] px-8 py-3 rounded-lg shadow-lg hover:scale-105 transition duration-300 font-semibold"
        >
          Xem menu
        </Link>

      </div>
    </section>
  );
}