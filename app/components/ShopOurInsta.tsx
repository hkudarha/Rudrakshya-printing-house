const ShopOurInsta = () => {
  const images = [
    "https://wehatke.com/public/uploads/all/myZsWcedqLrIVuR9W7edEvB1gA4cxoW2n1bQ3XEs.jpg",
    "https://i.pinimg.com/736x/4e/fa/e9/4efae944bc4c50309aedff8afedfd21c.jpg",
    "https://www.zestpics.com/cdn/shop/products/Hend_Magic_pillowe.jpg?v=1579134967&width=720",
    "https://skprints.co.in/wp-content/uploads/2024/05/SGOf5H7i.jpeg",
    "https://images.zoomin.com/framedprint_4_4/4.0.0/product_images/web/classic-frames-with-photo-1.jpg",
  ]; 

  return (
    <div className="px-4 sm:px-14 mb-14 mt-14 text-black overflow-hidden w-full">
      <h3 className="text-3xl font-bold mb-8 text-center">Shop Our Insta</h3>
      <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 justify-center sm:justify-between">
        {images.slice(0, 4).map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="w-full sm:w-48 h-48 object-cover rounded-lg"
          />
        ))}
        {images.length > 4 && (
          <img
            key={4}
            src={images[4]}
            alt="Image 5"
            className="w-full sm:w-48 h-48 object-cover rounded-lg hidden sm:block"
          />
        )}
      </div>
    </div>
  );
};

export default ShopOurInsta;
