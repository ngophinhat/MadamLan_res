import banner from "../../assets/images/banner/home.jpg";

export default function Banner() {
  return (
      <div className="w-full h-[800px]">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover object-center"
        />
      </div>
  );
}
