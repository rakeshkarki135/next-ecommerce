import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
    return (
        <div className="px-4 lg:px-8 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* image container */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
                <ProductImages />
            </div>

            {/* text container */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">Texts</div>
        </div>
    )
}

export default SinglePage