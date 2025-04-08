import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Menu from './Menu'
import SearchBar from './SearchBar'
import NavbarIcons from './NavbarIcons'

const Navbar = () => {
    return (
        <div className="h-20 px-4 lg:px-8 xl:px-32 2xl:px-64 relative">

            {/* mobile */}
            <div className="h-full flex items-center justify-between md:hidden">
                <Link href="/">
                    <div className="text-2xl tracking-wide">Rakesh</div>
                </Link>

                <Menu />
            </div>

            {/* bigger */}
            <div className="hidden md:flex items-center justify-between gap-8 h-full">
                {/* left */}
                <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
                    <Link href="/" className="flex items-center gap-3">
                        <Image src="/logo.png"  alt="logo-img" width={24} height={24} />
                        <div className="text-2xl tracking-wide">Rakesh</div>
                    </Link>
                    <div className="hidden xl:flex gap-4">
                        <Link href="/">HomePage</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>

                {/* right */}
                <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
                    <SearchBar />
                    <NavbarIcons />
                </div>
            </div>   
        </div>
    )
}

export default Navbar