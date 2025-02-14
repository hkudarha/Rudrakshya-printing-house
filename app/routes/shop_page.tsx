import CustomerReview from "~/components/CustomerReview"
import ShopOurInsta from "~/components/ShopOurInsta"
import SubscribeUs from "~/components/SubscribeUs"


 function Shop() {
    return(
        <div>
             <div
            className="relative bg-cover bg-center h-[50vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://m.media-amazon.com/images/I/61bRO9RxKtL._SL1200_.jpg')" }}
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