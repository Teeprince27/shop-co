import Navbar from "@/components/pages/shared/navbar";
import Footer from "@/components/pages/shared/footer";
import Hero from "@/components/pages/home/hero";
import Brands from "@/components/pages/home/brands";
import NewArrivals from "@/components/pages/home/new-arrivals";
import TopSelling from "@/components/pages/home/top-selling";
import BrowseStyle from "@/components/pages/home/browse-style";
import Reviews from "@/components/pages/home/reviews";


export default function Home() {
  return (
    <div className="bg-red" >
      <Navbar/>
      <Hero/>
      <Brands/>
      <NewArrivals/>
      <TopSelling/>
      <BrowseStyle/>
      <Reviews/>
      <Footer/>
    </div>
  );
}
