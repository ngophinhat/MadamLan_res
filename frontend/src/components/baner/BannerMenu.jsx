import banner from "../../assets/images/banner/infor.jpg";

export default function Banner() {
  return (
      <div className="w-full h-[400px]">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
  );
}
