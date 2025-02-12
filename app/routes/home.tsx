// import type { Route } from "./+types/home";
import SubscribeUs from "~/components/SubscribeUs";
import ShopOurInsta from "~/components/ShopOurInsta";
import CustomerReview from "~/components/CustomerReview";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';


const slides = [
  {
    id: 1,
    title: "iPhone 15 Series",
    description: "Limited Stocks Available. Grab It Now!",
    image: "https://i.pinimg.com/736x/5d/c0/d2/5dc0d2dec85b7369fde3c510901ed603.jpg",
  },
  {
    id: 2,
    title: "Samsung Galaxy S23",
    description: "Experience the Next-Gen Performance!",
    image: "https://i.pinimg.com/736x/a3/ea/a5/a3eaa5f5e2650b687551e1c60065f9f9.jpg",
  },
  {
    id: 3,
    title: "Google Pixel 7",
    description: "The Best Camera Smartphone Yet!",
    image: "https://i.pinimg.com/736x/47/40/6d/47406ddf252dd1a83df1f32775642d36.jpg",
  },
];



export default function Home() {
  return (
    <>
      {/* <div
            className="relative bg-cover bg-center h-[90vh] flex items-center rounded-xl"
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/5d/c0/d2/5dc0d2dec85b7369fde3c510901ed603.jpg')" }}
            >
                <div className="max-w-md ml-12 text-white text-start">
                    <h1 className="text-4xl font-bold mb-2">Iphone 15 Series</h1>
                    <p className="text-lg mb-4">
                    Limited Stocks Available. Grab It Now! 
                    </p>
                    <button className="bg-white uppercase text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
                    Shop Collection
                    </button>
                </div>
      </div> */}



      <div>
         <Swiper
      pagination={{
        clickable: true,
        dynamicBullets: true,
        renderBullet: (index, className) => {
          return `<span class="${className}" style="background-color: #dddce3;"></span>`;
        }
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
            <div className="max-w-md ml-12 text-white text-start">
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
    <style>{`
        .swiper-pagination-bullet-active {
        background-color: white;
        }
      `}
    </style>
      </div>


      <div className=" mt-10  mb-10 flex flex-col md:flex-row gap-6 p-6 justify-center">
                {/* Left Card */}
                <div
                    className="relative w-full md:w-1/2 h-80 bg-cover bg-center rounded-2xl flex items-center justify-center p-6 text-white shadow-lg"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/f8/29/47/f829470fab972a74d2d0cb6a18b2bb1a.jpg')" }}
                    >
                    <div className=" p-4 rounded-lg text-start">
                    <h2 className="text-2xl font-bold">20% Off On Laptops</h2>
                    <p className="mt-2">Products On Sale For Limited Time Only.</p>
                    <button className="bg-white uppercase text-black px-5 py-2 rounded-full mt-5 text-sm  hover:bg-gray-300 transition">Shop it now</button>
                    </div>
                </div>
                
                {/* Right Card */}
                <div
                    className="relative w-full md:w-1/2 h-80 bg-cover bg-center rounded-2xl flex items-center justify-center p-6 text-white shadow-lg"
                    style={{ backgroundImage: "url('https://i.pinimg.com/736x/10/f2/59/10f259d86d58999d8dc2c0e19473d3e1.jpg')" }}
                    >
                    <div className="  p-4 rounded-lg text-start">
                    <h2 className="text-2xl font-bold">Apple Collection</h2>
                    <p className="mt-2">Get Your Best Apple Products.</p>
                    <button className="bg-white uppercase text-black px-5 py-2 rounded-full mt-5 text-sm  hover:bg-gray-300 transition">Shop Collection</button>
                    </div>
                </div>
      </div>

      <CustomerReview/>
      <SubscribeUs/>
      <ShopOurInsta/>

               
    </>
  );
}


