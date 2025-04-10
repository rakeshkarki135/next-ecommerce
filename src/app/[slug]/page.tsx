import ProductImages from '@/components/ProductImages'
import React from 'react'
import CustomizeProducts from '@/components/CustomizeProducts'
import Add from '@/components/Add'

const SinglePage = () => {
    return (
        <div className="px-4 lg:px-8 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
            {/* image container */}
            <div className="w-full lg:w-1/2 lg:sticky top-20 h-max ">
                <ProductImages />
            </div>

            {/* text container */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6">
                <h1 className="text-4xl font-medium">Product Name</h1>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Debitis, enim recusandae! Iste, 
                    error ducimus esse illum mollitia sed deleniti totam quod sunt sit? Quidem quas dolore, 
                    vel asperiores reiciendis facilis!
                </p>

                <div className="h-[2px] bg-gray-100" />

                <div className="flex items-center gap-4">
                    <h3 className="text-xl txt-gray-500 line-through">$59</h3>
                    <h2 className="font-medium text-2xl">$49</h2>
                </div>

                <div className="h-[2px] bg-gray-100" />

                <CustomizeProducts />
                <Add />

                <div className="h-[2px] bg-gray-100" />

                <div className="text-sm">
                    <h4 className="font-medium mb-4">PRODUCT INFO</h4>
                    <p className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        In maiores qui pariatur magnam natus repellendus sint perspiciatis 
                        aspernatur illo officiis explicabo, 
                        obcaecati suscipit exercitationem ipsum doloribus, ullam, 
                        provident odio blanditiis!
                    </p>
                </div>

                <div className="text-sm">
                    <h4 className="font-medium mb-4">RETURN & REFUND POLICY</h4>
                    <p className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        In maiores qui pariatur magnam natus repellendus sint perspiciatis 
                        aspernatur illo officiis explicabo, 
                        obcaecati suscipit exercitationem ipsum doloribus, ullam, 
                        provident odio blanditiis!
                    </p>
                </div>

                <div className="text-sm">
                    <h4 className="font-medium mb-4">STORE DETAILS</h4>
                    <p className="">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        In maiores qui pariatur magnam natus repellendus sint perspiciatis 
                        aspernatur illo officiis explicabo, 
                        obcaecati suscipit exercitationem ipsum doloribus, ullam, 
                        provident odio blanditiis!
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SinglePage