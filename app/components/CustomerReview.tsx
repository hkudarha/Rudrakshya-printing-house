import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar } from "react-icons/fa";

const CustomerReview = () => {
  const reviews = [
    {
      text: "The service was fantastic, the ambiance perfect, and the staff was very friendly and professional.",
      author: "Emma Chamberlin",
      rating: 4,
    },
    {
      text: "A wonderful experience! The rooms were clean, the food delicious, and the service outstanding.",
      author: "Thomas John",
      rating: 5,
    },
    {
      text: "I loved the atmosphere, the friendly staff, and the amazing food. Definitely visiting again soon!",
      author: "Kevin Bryan",
      rating: 4,
    },
    {
      text: "Exceptional experience! The staff was courteous, the location was beautiful, and the service top-notch.",
      author: "Sophia Miller",
      rating: 5,
    },
    {
      text: "Great hospitality, beautiful location, and delicious food. I highly recommend this place to everyone!",
      author: "John Doe",
      rating: 4,
    },
    {
      text: "The best service ever! Staff was helpful, rooms were cozy, and the view was breathtaking.",
      author: "Jane Smith",
      rating: 5,
    },
    {
      text: "Fantastic place! The staff was super friendly, and the experience was truly unforgettable for us.",
      author: "Michael Brown",
      rating: 4,
    },
    {
      text: "I had an amazing stay! The food, service, and ambiance were beyond my expectations. Loved it!",
      author: "Emily Davis",
      rating: 5,
    },
    {
      text: "Highly recommend this place! The rooms were spotless, the staff helpful, and the food was delicious.",
      author: "Robert Wilson",
      rating: 4,
    },
    {
      text: "Incredible experience! Everything from check-in to check-out was smooth, enjoyable, and absolutely perfect.",
      author: "Linda Johnson",
      rating: 5,
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-[#fd8500] text-lg" />
      ) : (
        <FaRegStar key={i} className="text-gray-400 text-lg" />
      )
    );
  };

  return (
    <div className="container mx-auto mt-10 mb-10 px-10">
      <h2 className="text-2xl font-bold mb-4 text-center">Our Customer's Review</h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        freeMode={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper h-64 mt-6"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="border rounded-lg p-5 shadow transition-all duration-300 flex flex-col items-center w-full h-60">
            <p className="mb-2 text-center">{review.text}</p>
            <div className="flex items-center mt-3">{renderStars(review.rating)}</div>
            <p className="mt-2 font-medium text-center">{review.author}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .swiper-pagination-bullet {
          background-color: #ffddb8;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
        background-color: #fd8500;
        }
      `}
    </style>
    </div>
  );
};

export default CustomerReview;



