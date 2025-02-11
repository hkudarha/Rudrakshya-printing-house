import React from "react"
import SubscribeUs from "../components/SubscribeUs"
import ShopOurInsta from "../components/ShopOurInsta"


 function About() {
    return (
        <div>
            {/* banner image  */}
            <div
            className="relative bg-cover bg-center h-[40vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/72/65/0b/72650bd4c3bb1aaa061053d5a3684531.jpg')" }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-white ">About Us</h1>  
                    <p className="text-white">Home &gt; <span className="underline">About Us</span> </p>
                </div>             
            </div>

             
             
            <div className="flex flex-col md:flex-row items-center justify-center p-6 gap-6">
                {/* Left Side - Video */}
                <div className="w-full md:w-1/2">
                    <video className="w-full h-[80vh] rounded-lg shadow-lg " controls>
                    <source src="https://cdn.pixabay.com/video/2016/06/27/3576-172488163_large.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                    </video>
                </div>
                
                {/* Right Side - Text Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-2xl font-bold">Best Digital Store BasicStore</h2>
                    <p className="mt-2 text-gray-700">
                        Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra eros at.

                        Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et.
                    </p>
                    <button className="bg-black uppercase mt-10 text-white px-6 py-2 rounded-full text-sm hover:bg-gray-500 transition">Go To shop</button>
                </div>
            </div>

            

            <SubscribeUs/>
            <ShopOurInsta/>    
        </div>
    )
}
export default About