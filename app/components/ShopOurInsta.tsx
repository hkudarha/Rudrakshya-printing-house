const ShopOurInsta = () => {
    const images = [
      "https://wehatke.com/public/uploads/all/myZsWcedqLrIVuR9W7edEvB1gA4cxoW2n1bQ3XEs.jpg",
      "https://i.pinimg.com/736x/4e/fa/e9/4efae944bc4c50309aedff8afedfd21c.jpg",
      "https://www.zestpics.com/cdn/shop/products/Hend_Magic_pillowe.jpg?v=1579134967&width=720",
      "https://skprints.co.in/wp-content/uploads/2024/05/SGOf5H7i.jpeg",
      "https://images.zoomin.com/framedprint_4_4/4.0.0/product_images/web/classic-frames-with-photo-1.jpg"
    ];
  
    return (
      <div className="px-14 mb-14 mt-14 text-black">
        <h3 className="text-3xl font-bold mb-8 text-center">Shop Our Insta</h3>
        <div className="flex gap-4 justify-between">
          {images.map((src, index) => (
            <img key={index} src={src} alt={`Image ${index + 1}`} className="w-48 h-48 object-cover rounded-lg" />
          ))}
        </div>
      </div>
    );
  };
  
  export default ShopOurInsta;
  