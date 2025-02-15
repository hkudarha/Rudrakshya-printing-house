import { Link } from "react-router";

interface Product {
  name: string;
  image: string;
  price: string;
}

const BestSellingItem: React.FC<Product> = ({ name, image, price }) => {
  return (
    <div className=" rounded-lg p-4 shadow-lg mb-8">
      <img src={image} alt={name} className="w-full h-64 object-cover mb-2 rounded-lg" />
      <h3 className="font-semibold text-lg mb-1">{name}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  );
};

const BestSellingItems: React.FC = () => {
  const products: Product[] = [
    {
      name: 'Sony PlayStation Move',
      image: 'https://i.etsystatic.com/8736928/r/il/09c6c8/1600121273/il_1588xN.1600121273_70sm.jpg',
      price: '$870',
    },
    {
      name: 'GoPro',
      image: 'https://i.etsystatic.com/44907668/r/il/65bd37/5647664631/il_794xN.5647664631_8ijs.jpg',
      price: '$600',
    },
    {
      name: 'AirPods Pro',
      image: 'https://th.bing.com/th/id/OIP.aFWN-RTPaluynyjQzCeuqwHaHa?w=500&h=500&rs=1&pid=ImgDetMain',
      price: '$400',
    },
    {
      name: 'Iphone 15 Pro',
      image: 'https://www.gujaratgifts.com/media/catalog/product/cache/1/image/1200x/040ec09b1e35df139433887a97daa66f/l/e/led-heart-pillow-1.jpg',
      price: '$2000',
    },
    {
      name: 'Apple MacBook Pro',
      image: 'https://i.pinimg.com/originals/69/f8/b2/69f8b2fb183f1bde1900107dc5334aa4.jpg',
      price: '$3000',
    },
    {
      name: 'Iphone X Pro',
      image: 'https://www.fnp.com/images/pr/l/v20210901141231/personalised-water-bottle-set_1.jpg',
      price: '$900',
    },
    {
      name: 'PlayStation 5',
      image: 'https://th.bing.com/th/id/OIP.ryfZ-zFFUKhxCTiGSn9V7AHaHa?w=2362&h=2362&rs=1&pid=ImgDetMain',
      price: '$750',
    },
    {
      name: 'Gimbal Parts',
      image: 'https://m.media-amazon.com/images/I/71fJ1xNoheL._AC_UY1000_.jpg',
      price: '$250',
    },
  ];

  return (
    <div className="w-full px-14 pb-14 text-black">
      <h2 className="text-2xl font-bold mb-8 text-center">Best Selling Items</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <BestSellingItem key={index} {...product} />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link to='/shop'>
            <button className="bg-black hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-3xl">
            GO TO SHOP
            </button>
        </Link>
      </div>
    </div>
  );
};

export default BestSellingItems;