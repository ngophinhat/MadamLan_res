import { Link } from "react-router-dom";
import introImg from "../assets/images/intro.png";
import langCoImg from "../assets/images/lang-co.png";

export default function Intro() {
  return (
    <section className="bg-stone-50 py-24 sm:py-32 overflow-hidden">
     <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full lg:w-1/2">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Vị ngon, trọn khoảnh khắc
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Ra đời vào năm 2012, Nhà hàng Madame Lân là chốn dừng chân của trải
              nghiệm ẩm thực trọn vẹn bên bờ sông Hàn – trái tim giữa lòng thành
              phố xinh đẹp Đà Nẵng.
            </p>
            <p className="mt-4 text-lg leading-8 text-gray-600">
              Được ấp ủ bởi những con người yêu và trân trọng nét tinh tế trong ẩm
              thực Việt Nam, Madame Lân tái hiện bầu không khí đầm ấm, nơi mọi câu chuyện
              khởi đầu bên vô vàn sắc thái của hương vị trong không gian kết nối thiên nhiên.
            </p>
            <div className="mt-10">
              <Link
                to="/gioi-thieu"
                className="inline-block rounded-md bg-[#8B1E24] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#7f1d1d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B1E24] transition-transform hover:scale-105"
              >
                Xem thêm về chúng tôi 
              </Link>
            </div>
          </div>
          <figure className="mt-12">
            <img
              src={langCoImg}
              alt="Bản vẽ làng cổ"
              className="w-full max-w-lg"
            />
          </figure>
        </div>
        <div className="mt-12 lg:mt-0 lg:absolute lg:bottom-0 lg:right-0 lg:w-1/2 flex justify-center lg:justify-end">
          <div className="max-w-md"> 
            <img
              src={introImg}
              alt="Không gian nhà hàng Madame Lân"
              className="rounded-xl shadow-2xl ring-1 ring-gray-900/10 w-full"
            />
          </div>
        </div>

      </div>
    </section>
  );
}