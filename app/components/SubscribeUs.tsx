const SubscribeUs = () => {
    return (
      <>
      <div
                className="rounded-xl mb-10 mt-10 relative w-full h-96 bg-cover bg-center flex flex-col items-center justify-center text-white p-6"
                style={{ backgroundImage: "url('https://i.pinimg.com/736x/42/f5/39/42f539e4ed97299ec3b7ef61f3bee090.jpg')" }}
                >
                <div className=" p-6 rounded-lg text-center">
                    <h3 className="text-2xl font-bold">Subscribe Us Now</h3>
                    <p className="mt-2">Get Latest News, Updates And Deals Directly Mailed To Your Inbox.</p>
                    <div className="mt-4 flex items-center  rounded-md overflow-hidden">
                        <input
                            type="email"
                            placeholder="Your email address here"
                            className="w-64 ml-10 p-2 text-black focus:outline-none"
                        />
                        <button className="bg-[#fd8500] text-white px-4 py-2 uppercase">Subscribe</button>
                    </div>
                </div>
            </div>

      </>
    );
  };
  
  export default SubscribeUs;
  