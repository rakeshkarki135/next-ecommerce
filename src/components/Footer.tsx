import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className="py-24 px-4 lg:px-8 xl:px-32 2xl:px-64 mb-12 bg-gray-100 text-sm mt-24">
            {/* top */}
            <div className="flex flex-col md:flex-row justify-between gap-24">
                {/* left */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <Link href="/">
                        <div className="text-2xl tracking-wide">LAMA</div>
                    </Link>

                    <p className="">
                        3252 winding way, Central Plaza, Willowbrook, CA 90210, United States
                    </p>

                    <span className="font-semibold">rakesh@gmail.com</span>
                    <span className="font-semibold">+977 897 345 45</span>

                    {/* icons container */}
                    <div className="flex gap-6">
                        <Image src="/facebook.png" alt="" width={16} height={16} />
                        <Image src="/instagram.png" alt="" width={16} height={16} />
                        <Image src="/youtube.png" alt="" width={16} height={16} />
                        <Image src="/pinterest.png" alt="" width={16} height={16} />
                        <Image src="/x.png" alt="" width={16} height={16} />
                    </div>
                </div>

                {/* center */}
                <div className="hidden lg:flex justify-between w-1/2">
                    <div className="flex flex-col justify-between">
                        <h1 className="">COMPANY</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">About Us</Link>
                            <Link href="/">Careers</Link>
                            <Link href="/">Affilities</Link>
                            <Link href="/">Blog</Link>
                            <Link href="/">Contact Us</Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <h1 className="">SHOP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">New Arrivals</Link>
                            <Link href="/">Accessories</Link>
                            <Link href="/">Mens</Link>
                            <Link href="/">Womensf</Link>
                            <Link href="/">All Products</Link>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between">
                        <h1 className="">HELP</h1>
                        <div className="flex flex-col gap-6">
                            <Link href="/">Customer Services</Link>
                            <Link href="/">My Account</Link>
                            <Link href="/">Find a Store</Link>
                            <Link href="/">Legal & Privacy</Link>
                            <Link href="/">Gift Card</Link>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
                    <h1 className="font-medium text-lg">SUBSCRIBE</h1>
                    <p className="">Be the first one to get latest news about trends, promotions, and much more!</p>
                    <div className="flex">
                        <input type="text" 
                            placeholder="Email Address" 
                            className="p-4 w-3/4" 
                        />
                        <button className="w-1/4 bg-rakesh">JOIN</button>
                    </div>

                    <span className="font-semibold">Secure Payments</span>
                    <div className="flex justify-between">
                        <Image src="/discover.png" alt="" width={40} height={20} />
                        <Image src="/visa.png" alt="" width={40} height={20} />
                        <Image src="/youtube.png" alt="" width={40} height={20} />
                        <Image src="/paypal.png" alt="" width={40} height={20} />
                        <Image src="/mastercard.png" alt="" width={40} height={20} />
                    </div>

                </div>
            </div>

            {/* bottom */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                <div className="">@ 2025 Rakesh Shop</div>
                <div className="flex items-center flex-col gap-8 md:flex-row">
                    <div className="">
                        <span className="text-gray-500 mr-4">Language</span>
                        <span className="font-medium">Nepal | Nepali</span>
                    </div>

                    <div className="">
                        <span className="text-gray-500 mr-4">Currency</span>
                        <span className="font-medium">Rs. Nepali</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer