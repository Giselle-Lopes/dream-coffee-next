"use client";

import Link from "next/link";
import RatingStatic from "../rating";
import { useState } from "react";

export default function CSOptions() {
    const [showOptions, setShowOptions] = useState<number | null>(0);
    const coffeeShops = [
        {             
            name: "The Mocha Mystery",
            image: "/images/assets/cafeterias/cafe-1.jpg",
            rating: 2.5 
        },
        {             
            name: "Perky Penguin Espresso",
            image: "/images/assets/cafeterias/cafe-2.jpg",
            rating: 3 
        },
        {             
            name: "Velvet Bean Café",
            image: "/images/assets/cafeterias/cafe-3.jpg",
            rating: 3.5 
        },
        {             
            name: "Whisk & Brew",
            image: "/images/assets/cafeterias/cafe-4.jpg",
            rating: 1 
        },
        {             
            name: "Steamy Stories Coffee House",
            image: "/images/assets/cafeterias/cafe-5.jpg",
            rating: 4.5 
        },
        {             
            name: "Cup of Creavity",
            image: "/images/assets/cafeterias/cafe-6.jpg",
            rating: 5 
        },
        {             
            name: "Brewed Awakening",
            image: "/images/assets/cafeterias/cafe-7.jpg",
            rating: 2.5 
        },
        {             
            name: "Sip 'n Spin Latte Lounge",
            image: "/images/assets/cafeterias/cafe-8.jpg",
            rating: 1.5 
        },
        {             
            name: "Fantasia French Press",
            image: "/images/assets/cafeterias/cafe-9.jpg",
            rating: 3 
        },
        { 
            name: "Dream Bean Café",
            image: "/images/assets/cafeterias/cafe-10.jpg",
            rating: 4.5 
        }
    ];
    
    return (
        <div onMouseLeave={() => setShowOptions(null)}>
            {coffeeShops.map((item, index) => (
                <div onClick={() => setShowOptions(index)} key={index}>
                    <div onMouseLeave={() => setShowOptions(null)} className="flex flex-col items-center">
                        <div className={`bg-primary-darkPink bg-opacity-50 cursor-pointer mb-10`}>
                            <img src={item.image} alt={item.name + " image"} className={`${showOptions === index ? "w-[2000px] opacity-70" : "w-[900px] lg:hover:opacity-70"} object-cover h-48 lg:hover:w-[1000px] lg:hover:h-52 object-center lg:opacity-0 opacity-70 transition-all duration-300`} />
                        </div>
                        <p className={`${showOptions === index ? "opacity-0" : "opacity-100"} absolute lg:left-[20%] 2xl:left-[30%] left-[10%] mt-5 font-semibold`}>{item.name}</p>
                        <span className={`${showOptions === index ? "opacity-0" : "opacity-100"} absolute lg:right-[20%] 2xl:right-[30%] right-[10%] mt-36`}>
                            <RatingStatic rating={item.rating}/>
                        </span>
                        <div className={`${showOptions === index ? "flex" : "hidden"} flex-row items-center justify-center absolute gap-48 mt-4 transition-all duration-100 w-full`}>
                            <Link href={"/"} className="flex flex-row hover:text-primary-hotPint hover:underline transition-all duration-100">
                                <p className="font-bold font-mono -rotate-90 mb-14">Delivery</p>
                                <img src="/images/assets/coffee-cart.svg" alt="Coffee cart" className="w-[130px]"/>
                            </Link>
                            <Link href={"/"} className="flex flex-row hover:text-primary-hotPint hover:underline transition-all duration-100">
                                <img src="/images/assets/post.svg" alt="Post" className="w-[130px]"/>
                                <p className="font-bold font-mono rotate-90 mt-14">Perfil</p>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}