import React from "react";
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
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Emma Chamberlin",
      rating: 4,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Thomas John",
      rating: 5,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Kevin Bryan",
      rating: 4,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Sophia Miller",
      rating: 5,
    },
    {
      text: "Amazing Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi",
      author: "John Doe",
      rating: 4,
    },
    {
      text: "Loved Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habid.",
      author: "Jane Smith",
      rating: 5,
    },
    {
      text: "The best customer service ever Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis pretium feugiat vel morbi suspen dise sagittis lorem habid.",
      author: "Michael Brown",
      rating: 4,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi.",
      author: "Emily Davis",
      rating: 5,
    },
    {
      text: "Great Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi!",
      author: "Robert Wilson",
      rating: 4,
    },
    {
      text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium feugiat vel morbi suspen dise sagittis lorem habi!",
      author: "Linda Johnson",
      rating: 5,
    }
  ];

  const renderStars = (rating:number) => {
    return Array.from({ length: 5 }, (_, i) =>
      i < rating ? (
        <FaStar key={i} className="text-[#fd8500] text-lg" />
      ) : (
        <FaRegStar key={i} className="text-gray-400 text-lg" />
      )
    );
  };

  return (
    <div className="container my-14 mx-14 text-black overflow-x-hidden">
      <h2 className="text-2xl font-bold mb-8 text-center">Our Customer's Review</h2>
      
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
        className="mySwiper"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className="border rounded-lg p-5 shadow transition-all duration-300 flex flex-col items-center w-64 h-64">
            <p className="mb-2 text-center text-sm overflow-hidden overflow-ellipsis">{review.text}</p>
            <div className="flex items-center mt-3">{renderStars(review.rating)}</div>
            <p className="mt-2 font-medium text-center">{review.author}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
