// NỘI DUNG TEXT ĐÃ ĐƯỢC RÚT GỌN LẠI
import michelin from "../assets/images/michelin.png";
import travelers from "../assets/images/travelers.png";
import top80 from "../assets/images/top80.png";

export default function Awards() {
  return (
    <div className="bg-white py-20 px-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-gray-800">
              Khẳng định về chất lượng sản phẩm và dịch vụ
            </h2>

            <p className="mt-4 text-base text-gray-600">
              Sự ủng hộ của thực khách là niềm vinh dự lớn nhất, giúp Madame Lân liên tiếp đạt được các giải thưởng danh giá: <strong>Michelin Selected (2024 & 2025)</strong>, <strong>Travelers' Choice 2023</strong>, và <strong>Top 80 Nhà hàng tại Việt Nam</strong>. Đây là động lực để chúng tôi không ngừng mang ẩm thực Việt vươn xa.
            </p>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="flex flex-row justify-center md:justify-start items-center gap-6">
                <img 
                  src={michelin} 
                  alt="Michelin Award" 
                  className="h-20 w-auto" 
                />
                <img 
                  src={travelers} 
                  alt="Travelers Choice Award" 
                  className="h-20 w-auto" 
                />
                <img 
                  src={top80} 
                  alt="Top 80 Award" 
                  className="h-20 w-auto" 
                />
            </div>
          </div>
        </div>
    </div>
  );
}