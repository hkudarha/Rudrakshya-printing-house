const SubscribeUs = () => {
    return (
      <>
     

        <div
        className="rounded-xl mb-14 mt-14 relative w-full h-96 bg-cover bg-center flex flex-col items-center justify-center text-white "
        style={{ backgroundImage: "url('https://ik.imagekit.io/j83rchiauw/seo_popular_master/202309071648_wTB0jKoHdUKlaJ3Q.jpg')" }}
        >
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

        {/* Content */}
        <div className="p-6 rounded-lg text-center relative z-10">
            <h2 className="text-2xl mb-5 font-bold">Subscribe Us Now</h2>
            <p >Get Latest News, Updates And Deals Directly Mailed To Your Inbox.</p>
            <div className="mt-4 flex items-center rounded-md overflow-hidden">
            <input
                type="email"
                placeholder="Your email address here"
                className="w-64 ml-10 p-2 bg-white text-black focus:outline-none"
            />
            <button className="bg-[#fd8500] text-white px-4 py-2 uppercase">Subscribe</button>
            </div>
        </div>
        </div>


      </>
    );
  };
  
  export default SubscribeUs;
  