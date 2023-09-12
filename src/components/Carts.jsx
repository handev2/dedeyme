'use client';

import { useState } from "react";
import { getCart, removeFromCart } from "@/utils/cart";
import Checkout from "@/components/Checkout";



const Carts = () => {

    const cartItems = getCart();
    const [total, setTotal] = useState(0);

    const removeItemFromCart = (index) => {
        const confDelete = confirm('Yakin Akan Menghapus?')
        if(confDelete) {
            removeFromCart(index)
            window.location.reload();
        }
    } 

    return(
<>
        {cartItems.map((item, index) => (
        <div key={index} className="flex mb-5 px-1 gap-2 py-2 sm:p-3 items-center h-[100px] sm:h-[120px] overflow-hidden justify-between shadow bg-white rounded-lg">
            <div className="image w-[60px] bg-black sm:w-[80px]">
                <img src={item.image} alt="Ini Image" />
            </div>
            <div className="title">
                <h2 className="text-sm sm:text-xl text-gray-800">{item.name}</h2>
                <p className="text-xs sm:text-sm">Stock: {item.stock}</p>
            </div>
            <div className="w-[20%]">
                <form className="flex justify-center items-center">
                    <div>
                        <p className="text-xs sm:text-sm">Quantity: {item.quantity}</p>
                        <p onClick={() => removeItemFromCart(index)} className="cursor-pointer text-xs sm:text-sm text-rose-500 mt-2">Hapus</p>
                    </div>
                </form>
            </div>
            <div className="price">
                <h3 className="text-lg sm:text-3xl text-rose-500"><span className="text-sm sm:text-base">$</span>{item.price}</h3>
                
            </div>
        </div>
        ))}
        
            <div className="fixed bottom-20 lg:bottom-0 w-full bg-white left-0">
                <Checkout total={total} />
            </div>
</>
    )
}

export default Carts