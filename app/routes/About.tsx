import React from "react"
import SubscribeUs from "../components/SubscribeUs"
import ShopOurInsta from "../components/ShopOurInsta"
import FeatureCards from "~/components/FeatureCards"
import CustomerReview from "~/components/CustomerReview"


 function About() {
    return (
        <div>
            {/* banner image  */}
            <div
            className="relative bg-cover bg-center h-[50vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://i.pinimg.com/originals/27/3a/7b/273a7b2bf723c9a8cb35b0d403fa8fc4.jpg')" }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-white ">About Us</h1>  
                    <p className="text-white">Home &gt; <span className="underline">About Us</span> </p>
                </div>             
            </div>

            <FeatureCards/>
             
             
            <div className="flex mt-15 mb-15 px-15 flex-col md:flex-row items-center justify-center  gap-10">
                {/* Left Side - Video */}
                <div className="w-full md:w-1/2">
                    <video className="w-full h-[80vh] rounded-lg shadow-lg " controls>
                    <source src="https://cdn.pixabay.com/video/2016/06/27/3576-172488163_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                
                {/* Right Side - Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl mb-5 font-bold">Best Digital Store BasicStore</h2>
                    <p className=" text-gray-700">
                        Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra eros at.

                        Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.
                    </p>
                    <button className="bg-black uppercase mt-10 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-500 transition">Go To shop</button>
                </div>
            </div>

            <CustomerReview/>

            <SubscribeUs/>
            <ShopOurInsta/>    
        </div>
    )
}
export default About