import ShopOurInsta from "~/components/ShopOurInsta"
import SubscribeUs from "~/components/SubscribeUs"


 function Cart() {
    return(
        <div>
             <div
            className="relative bg-cover bg-center h-[40vh] flex items-center  justify-center rounded-xl "
            style={{ backgroundImage: "url('https://i.pinimg.com/736x/05/f4/4e/05f44e44d32d7f24f11ef93fecbc113c.jpg')" }}
            >
                <div>
                    <h1 className="text-4xl font-bold mb-2 text-white ">Cart</h1>  
                    <p className="text-white">Home &gt; <span className="underline">Cart</span> </p>
                </div>             
            </div>

            
            <SubscribeUs/>
            <ShopOurInsta/>
            
        </div>
        
    )
 }
 export default Cart