import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerHome from "../components/baner/BannerHome"
import Intro from "../components/Intro";
import MenuCTA from "../components/MenuCTA";
import Awards from "../components/Awards";

export default function Home() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <Header/>
      <main>
        <BannerHome/>
        <Intro/>
        <MenuCTA/>
        <Awards/>
      </main>
      <Footer/>
    </div>
  );
}
