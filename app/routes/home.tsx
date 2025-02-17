// import type { Route } from "./+types/home";
import SubscribeUs from "~/components/SubscribeUs";
import ShopOurInsta from "~/components/ShopOurInsta";
import CustomerReview from "~/components/CustomerReview";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import FeatureCards from "~/components/FeatureCards";
import CategoryCard from "~/components/CategoryCard";
import BestSellingItems from "~/components/BestSellingItem";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    title: "iPhone 15 Series",
    description: "Limited Stocks Available. Grab It Now!",
    image:
      "https://images.pexels.com/photos/2983401/pexels-photo-2983401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    description: "Experience the Next-Gen Performance!",
    image:
      "https://th.bing.com/th/id/OIP.e-VE144Sx1TlDtQKCOy4aAHaGa?rs=1&pid=ImgDetMain",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "The Best Camera Smartphone Yet!",
    image:
      "https://images.pexels.com/photos/7801140/pexels-photo-7801140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default function Home() {
  return (
    <>
      <div className="text-black">
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
            renderBullet: (index, className) => {
              return `<span class="${className}" style="background-color: #dddce3;"></span>`;
            },
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          effect="fade"
          speed={1000}
          modules={[Pagination, Autoplay, EffectFade]}
          className="mySwiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative bg-cover bg-center h-[90vh] flex items-center rounded-xl transition-all duration-1000 ease-in-out"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="max-w-md ml-14 text-white text-start">
                  <h1 className="text-4xl font-bold mb-2">{slide.title}</h1>
                  <p className="text-lg mb-4">{slide.description}</p>
                  <button className="bg-white uppercase text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-all duration-300">
                    Shop Collection
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <style>
          {`
        .swiper-pagination-bullet-active {
        background-color: white;
        }
      `}
        </style>
      </div>

      <CategoryCard />

      <BestSellingItems />
      <CustomerReview />


      <div className="mt-14 w-full mb-14 flex flex-col md:flex-row gap-6 px-4 md:px-14 justify-center">
        {/* Left Card */}
        <div
          className="relative w-full md:w-[45vw] h-[40vh] md:h-[40vh] lg:h-[60vh] bg-cover bg-center rounded-2xl flex items-center justify-center p-6 text-white shadow-lg"
          style={{
            backgroundImage:
              "url('https://th.bing.com/th/id/OIP.v6VtRumA6_3Bd0iKsutKWQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain')",
          }}
        >
          <div className="p-4 rounded-lg text-start">
            <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold">
              20% Off On Laptops
            </h2>
            <p className="mt-2 text-lg md:text-base lg:text-lg">
              Products On Sale For Limited Time Only.
            </p>
            <button className="bg-white uppercase text-black px-5 py-2 rounded-full mt-5 text-lg md:text-base lg:text-lg hover:bg-gray-300 transition">
              <Link to="/shop">Shop it now</Link>
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div
          className="relative w-full md:w-[45vw] h-[40vh] md:h-[40vh] lg:h-[60vh] bg-cover bg-left rounded-2xl flex items-center justify-center p-6 text-white shadow-lg"
          style={{
            backgroundImage:
              "url('https://i.etsystatic.com/23353655/r/il/420121/2840582135/il_1588xN.2840582135_22fj.jpg')",
          }}
        >
          <div className="p-4 rounded-lg text-start">
            <h2 className="text-4xl md:text-2xl lg:text-3xl font-bold">
              Apple Collection
            </h2>
            <p className="mt-2 text-lg md:text-base lg:text-lg">
              Get Your Best Apple Products.
            </p>
            <button className="bg-white uppercase text-black px-5 py-2 rounded-full mt-5 text-lg md:text-base lg:text-lg hover:bg-gray-300 transition">
              <Link to="/shop">Shop Collection</Link>
            </button>
          </div>
        </div>
      </div>

      <FeatureCards />
      <SubscribeUs />
      <ShopOurInsta />
    </>
  );
}
