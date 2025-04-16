"use client"

import React from 'react'
import Image from 'next/image'
import { useState } from 'react'

const images = [
    {
        "id":1,
        "url":"https://images.pexels.com/photos/30683952/pexels-photo-30683952/free-photo-of-serene-pine-forest-landscape-in-england.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        "id":2,
        "url":"https://images.pexels.com/photos/31416362/pexels-photo-31416362/free-photo-of-dusk-skyline-of-minato-city-tokyo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        "id":3,
        "url":"https://images.pexels.com/photos/31200609/pexels-photo-31200609/free-photo-of-young-woman-posing-on-rocks-by-the-sea-in-antalya.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        "id":4,
        "url":"https://images.pexels.com/photos/30749835/pexels-photo-30749835/free-photo-of-close-up-of-dew-on-green-leaves.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },
    {
        "id":5,
        "url":"https://images.pexels.com/photos/30683952/pexels-photo-30683952/free-photo-of-serene-pine-forest-landscape-in-england.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
    },

]

const ProductImages = ({ items }: { items:any }) => {
    const [index, setIndex] = useState(0)
    return (
        <div className="">
            <div className="h-[500px] relative">
                <Image 
                    src={ items[index].image?.url } 
                    alt="" 
                    fill 
                    sizes="50vw"
                    className="object-cover rounded-md"
                />
            </div>

            <div className="flex justify-between gap-4 mt-8">
                { 
                    items.map(( item : any, index : number )=>(
                        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"  onClick={()=>setIndex(index)} key={items._id}>
                            <Image 
                                src={item.image.url} 
                                alt="" 
                                fill 
                                sizes="50vw"
                                className="object-cover rounded-md"
                                
                            />
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}

export default ProductImages