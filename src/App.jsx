import AboutUs from "./components/aboutus/AboutUs";
import Banner from "./components/banner/Banner";
import BestSellings from "./components/bestsellings/BestSellings";
import Categories from "./components/categories/Categories";
import Header from "./components/header/Header";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";

export default function App() {

  return (
    <div className="w-[1440px] h-full">
      <Header />
      <Banner />
      <BestSellings />
      <AboutUs />
      <Categories />
      <Testimonial />
      <Footer/>
    </div>
  )
}