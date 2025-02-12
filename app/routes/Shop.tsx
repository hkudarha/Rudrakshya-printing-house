import CustomerReview from "~/components/CustomerReview"
import ShopOurInsta from "~/components/ShopOurInsta"
import SubscribeUs from "~/components/SubscribeUs"


 function Shop() {
    return(
        <div>
             <div
            className="relative bg-cover bg-center h-[40vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/a9/05/00/a90500db9cf05ac5683e988020bba6ec.jpg')" }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-white ">Shop</h1>  
                    <p className="text-white">Home &gt; <span className="underline">Shop</span> </p>
                </div>             
            </div>

            <CustomerReview/>
            <SubscribeUs/>
            <ShopOurInsta/>
            
        </div>
        
    )
 }
 export default Shop