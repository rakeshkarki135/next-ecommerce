import React from 'react'
import Image from 'next/image'
import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'

const ListPage = () => {
    return (
        <div className="px-4 lg:px-8 xl:px-32 2xl:px-64">
            {/* campain */}
            <div className="hidden bg-pink-50 px-4 sm:flex justify-between h-64">
                {/* text */}
                <div className="w-2/3 flex flex-col items-center justify-center gap-8">
                    <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">Grab up to 50% off on <br /> Selected Products</h1>
                    <button className="rounded-3xl bg-rakesh text-white w-max py-3 px-5 text-sm">Buy Now</button>
                </div>

                {/* image */}
                <div className="relative w-1/3">
                    <Image src="/woman.png" alt="" fill className="object-contain" />
                </div>
            </div>

            <Filter />
            {/* products */}
            <h1 className="mt-12 text-xl font-semibold">Shoes For You!</h1>

            <ProductList />


        </div>
    )
}

export default ListPage