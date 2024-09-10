"use client";

import RatingStatic from "../rating";

export default function CSOptions() {
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
        <div>
            {coffeeShops.map((item, index) => (
                <div key={index}>
                    <div className="flex flex-col items-center">
                        <div className="bg-primary-darkPink bg-opacity-50 cursor-pointer mb-10">
                            <img src={item.image} alt={item.name + " image"} className="object-cover h-48 w-[900px] lg:hover:w-[1000px] lg:hover:h-52 object-center lg:opacity-0 lg:hover:opacity-70 opacity-70 transition-all duration-300" />
                        </div>
                        <p className="absolute lg:left-[20%] left-[10%] mt-5 font-semibold">{item.name}</p>
                        <span className="absolute lg:right-[20%] right-[10%] mt-36">
                            <RatingStatic rating={item.rating}/>
                        </span>
                    </div>
                </div>
            ))}
        </div>
    )
}