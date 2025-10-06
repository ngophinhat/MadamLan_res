import Header from "../components/Header";
import Footer from "../components/Footer";
import BannerInfor from "../components/baner/BannerInfor";
export default function Banner() {
  return (
    <section className="banners">
        <Header/>
        <BannerInfor/>
        <img
            src="/storage/img-2996-mdl-web-pc-tin-tuc-news-landing-page-vie-eng.jpg"
            alt=""
            title="img-2996-mdl-web-pc-tin-tuc-news-landing-page-vie-eng.jpg"
        />
        <div className="text-banner flex">
            <div className="d-block w-100">
            <h1 className="title-text title-font text-white">Tin tức</h1>
            <div className="breadcrumbs font-size-content content-font-light text-white"></div>
            </div>
        </div>
        <Footer/>
    </section>
    
  );
}
