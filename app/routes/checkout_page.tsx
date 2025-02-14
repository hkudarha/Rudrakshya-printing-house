import ShopOurInsta from "~/components/ShopOurInsta"
import SubscribeUs from "~/components/SubscribeUs"


 function CheckOut() {
    return(
        <div>
             <div
            className="relative bg-cover bg-center h-[40vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/6f/8b/2d/6f8b2d116fb649d4eedf66d13242521c.jpg')" }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-white ">Checkout</h1>  
                    <p className="text-white">Home &gt; <span className="underline">Checkout</span> </p>
                </div>             
            </div>

            <SubscribeUs/>
            <ShopOurInsta/>
            
        </div>
        
    )
 }
 export default CheckOut