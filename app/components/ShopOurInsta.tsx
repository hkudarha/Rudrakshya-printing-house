const ShopOurInsta = () => {
    const images = [
      "https://i.pinimg.com/736x/de/2d/2d/de2d2dcbbc8796d20a9b81b274b2fa3d.jpg",
      "https://i.pinimg.com/736x/b4/1d/ad/b41dad2ef2a9bd5d164f9a0c3ad98ca9.jpg",
      "https://i.pinimg.com/736x/70/8c/85/708c856af59f1e5960610334e5debbec.jpg",
      "https://i.pinimg.com/736x/84/29/66/84296617b2f49ac27cb262fb0a833827.jpg",
      "https://i.pinimg.com/736x/0c/82/0e/0c820e904689d18cedda91b20bd0b659.jpg"
    ];
  
    return (
      <div className="px-10 mb-10">
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
  