import React from "react";

const categories = [
  {
    name: "Printing Service",
    image:
      "https://th.bing.com/th/id/OIP.Uf8BS4GyDLr0fBAQMeAQnwAAAA?w=370&h=370&rs=1&pid=ImgDetMain",
    products: [1, 2, 3, 4],
  },
  {
    name: "Customised Product",
    image:
      "https://5.imimg.com/data5/SELLER/Default/2022/5/BO/ID/DF/71587631/customised-photo-printed-led-lamp-1000x1000.jpg",
    products: [1, 2],
  },
  {
    name: "Wooden Art",
    image:
      "https://www.woodgeekstore.com/cdn/shop/files/poster-wedding-couple-love2_600x.jpg?v=1704289742",
    products: [1, 2, 3],
  },
  {
    name: "Customized Photo Frame",
    image:
      "https://i.etsystatic.com/39028279/r/il/b452ca/4552902247/il_fullxfull.4552902247_9v1m.jpg",
    products: [1],
  },
];

const CategoryCard: React.FC = () => {
  return (
    <div className="items-center mt-14 mb-14 text-black">
        <h2 className="text-2xl text-center font-bold">Our Categories</h2>
        <div className="flex mx-14 py-14  justify-between">
        {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg text-center cursor-pointer w-60">
            <img
                src={category.image}
                alt={category.name}
                className="w-48 h-48 mx-auto rounded-xl object-cover"
            />
            <h2 className="text-lg font-bold mt-2">{category.name}</h2>
            <p className="text-gray-600">Total Items: {category.products.length}</p>
            </div>
        ))}
        </div>
    </div>
  );
};

export default CategoryCard;
