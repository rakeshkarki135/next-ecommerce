"use client"

import Image from "next/image";

const CartModal = () => {
    const cartItems = true;

    return (
        <div className="absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
            {
                !cartItems ? (
                    <div className="">Cart is Empty</div>
                ) :(
                    <div className="">
                        <Image src="" alt="" width={72} height={96} />

                    </div>
                )
            }
        </div>
    )
}

export default CartModal