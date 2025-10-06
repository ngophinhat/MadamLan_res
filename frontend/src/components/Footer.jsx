import Logo_2 from "../assets/images/logo_2.png"; 

export default function Footer() {
  return (
    <footer className="bg-[#8B1E24] text-white py-12">
      <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-8 px-6">
        
        <div>
          <img
            src={Logo_2}
            alt="Madame Lân Logo"
            className="w-28 h-auto"
          />
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base text-white/90 mb-3">Địa chỉ</h3>
          <a 
            href="https://www.google.com/maps/place/Nh%C3%A0+h%C3%A0ng+Madame+L%C3%A2n/@16.0814063,108.2232528,1213m/data=!3m1!1e3!4m15!1m8!3m7!1s0x3142183c8671cc7d:0xe7ce39344edf79df!2zMzZKRitINzksIDA0IELhuqFjaCDEkOG6sW5nLCBUaOG6oWNoIFRoYW5nLCBI4bqjaSBDaMOidSwgxJDDoCBO4bq1bmcgNTUwMDAw!3b1!8m2!3d16.0814063!4d108.2232528!16s%2Fg%2F11x2t31tms!3m5!1s0x31421831ce4d457b:0xc2f54574a65b6322!8m2!3d16.0814063!4d108.2232528!16s%2Fg%2F11b7vz9kgm?entry=ttu&g_ep=EgoyMDI1MDkzMC4wIKXMDSoASAFQAw%3D%3D" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-white/70 hover:text-white transition"
          >
            Số 04 Bạch Đằng, Q. Hải Châu, TP. Đà Nẵng
          </a>
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base text-white/90 mb-3">Thời gian mở cửa</h3>
          <p className="text-sm text-white/70">6:30 - 21:30</p>
          <p className="text-sm text-white/70">Monday - Sunday</p>
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="font-semibold text-base text-white/90 mb-3">Liên hệ</h3>
          <p>
            <a href="mailto:sale1@madamelan.vn" className="text-sm text-white/70 hover:text-white transition">
              sale1@madamelan.vn
            </a>
          </p>
          <p>
            <a href="tel:0905697555" className="text-sm text-white/70 hover:text-white transition">
              0905 697 555
            </a>
          </p>
        </div>
        
      </div>
    </footer>
  );
}