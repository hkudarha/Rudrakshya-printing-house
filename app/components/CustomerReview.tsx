// import { FaStar, FaRegStar } from "react-icons/fa";
// import { motion } from "framer-motion";

// const reviews = [
//   {
//     text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
//     author: "Emma Chamberlin",
//     rating: 4,
//   },
//   {
//     text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
//     author: "Thomas John",
//     rating: 5,
//   },
//   {
//     text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
//     author: "Kevin Bryan",
//     rating: 4,
//   },
//   {
//     text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
//     author: "Sophia Miller",
//     rating: 5,
//   },
// ];

// const CustomerReview = () => {
//   return (
//     <div className="mx-14 my-14">
//       <div className="flex flex-wrap justify-center gap-6">
//         {reviews.map((review, index) => (
//           <motion.div
//             key={index}
//             className="w-full sm:w-[calc(50%-12px)] md:w-[calc(33.33%-16px)] lg:w-[calc(25%-18px)] p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <div className="text-gray-700  mb-4">"{review.text}"</div>
//             <div className="flex justify-center space-x-1 mb-4">
//               {[...Array(5)].map((_, i) =>
//                 i < review.rating ? (
//                   <FaStar key={i} className="text-[#fd8500]" />
//                 ) : (
//                   <FaRegStar key={i} className="text-[#fd8500]" />
//                 )
//               )}
//             </div>
//             <div className="text-center text-gray-900 font-semibold">
//               {review.author}
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CustomerReview;



import { FaStar, FaRegStar } from "react-icons/fa";
// import "./CustomerReview.css"; // Make sure to import the CSS

const reviews = [
  {
    text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
    author: "Emma Chamberlin",
    rating: 4,
  },
  {
    text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
    author: "Thomas John",
    rating: 5,
  },
  {
    text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
    author: "Kevin Bryan",
    rating: 4,
  },
  {
    text: "Tempus oncu enim pellentesque este pretium in neque, elit morbi sagittis lorem habi mattis Pellentesque pretium.",
    author: "Sophia Miller",
    rating: 5,
  },
  {
    text: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    author: "Liam Anderson",
    rating: 5,
  },
  // {
  //   text: "Vestibulum id ligula porta felis euismod semper.",
  //   author: "Olivia Brown",
  //   rating: 4,
  // },
];

const CustomerReview = () => {
  // Duplicate the array for infinite loop effect
  const loopedReviews = [...reviews, ...reviews];

  return (
    <div className="review-wrapper w-full px-4 sm:px-14 mb-14 mt-14">
      <div className="review-scroll-track">
        {loopedReviews.map((review, index) => (
          <div className="review-card" key={index}>
            <p className="review-text">"{review.text}"</p>
            <div className="review-stars">
              {[...Array(5)].map((_, i) =>
                i < review.rating ? (
                  <FaStar key={i} className="text-[#fd8500]" />
                ) : (
                  <FaRegStar key={i} className="text-[#fd8500]" />
                )
              )}
            </div>
            <p className="review-author">{review.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerReview;
