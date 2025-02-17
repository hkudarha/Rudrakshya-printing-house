import { FaTruck, FaShieldAlt, FaTags, FaCreditCard } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck size={40} />,
    title: "Free Delivery",
    description: "Get your orders delivered without any extra cost.",
  },
  {
    icon: <FaShieldAlt size={40} />,
    title: "Quality Guarantee",
    description: "We ensure the best quality for all our products.",
  },
  {
    icon: <FaTags size={40} />,
    title: "Daily Offers",
    description: "Enjoy new discounts and deals every day.",
  },
  {
    icon: <FaCreditCard size={40} />,
    title: "100% Secure Payment",
    description: "Your transactions are completely safe with us.",
  },
];

export default function FeatureCards() {
  return (
    <div className="flex flex-wrap text-black justify-between gap-6 mx-14 py-14">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col items-center  p-6 bg-white shadow-2xl rounded-xl w-64 text-center"
        >
          <p className="text-[#fd8500]">{feature.icon}</p>
          <h2 className="text-xl font-semibold mt-4">{feature.title}</h2>
          <p className="text-gray-600 mt-2">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
