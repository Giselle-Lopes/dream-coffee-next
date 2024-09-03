"use client";

export default function CSOptions() {
    const coffeeShops = [
        {             
            name: "cafe-1",
            image: "/images/assets/cafeterias/cafe-1.jpg",
            rating: 5 
        },
        {             
            name: "cafe-2",
            image: "/images/assets/cafeterias/cafe-2.jpg",
            rating: 5 
        },
        {             
            name: "cafe-3",
            image: "/images/assets/cafeterias/cafe-3.jpg",
            rating: 5 
        },
        {             
            name: "cafe-4",
            image: "/images/assets/cafeterias/cafe-4.jpg",
            rating: 5 
        },
        {             
            name: "cafe-5",
            image: "/images/assets/cafeterias/cafe-5.jpg",
            rating: 5 
        },
        {             
            name: "cafe-6",
            image: "/images/assets/cafeterias/cafe-6.jpg",
            rating: 5 
        },
        {             
            name: "cafe-7",
            image: "/images/assets/cafeterias/cafe-7.jpg",
            rating: 5 
        },
        {             
            name: "cafe-8",
            image: "/images/assets/cafeterias/cafe-8.jpg",
            rating: 5 
        },
        {             
            name: "cafe-9",
            image: "/images/assets/cafeterias/cafe-9.jpg",
            rating: 5 
        },
        { 
            name: "cafe-10",
            image: "/images/assets/cafeterias/cafe-10.jpg",
            rating: 5 
        }
    ];

    return (
        <div>
            {coffeeShops.map((item, index) => (
                <div className="text-black" key={index}>
                    <div className="flex flex-col items-center">
                        <div className="bg-primary-darkPink bg-opacity-50 cursor-pointer mb-10">
                            <img src={item.image} alt={item.name + " image"} className="object-cover h-48 w-[900px] lg:hover:w-[1000px] lg:hover:h-52 object-center lg:opacity-0 lg:hover:opacity-70 opacity-70 transition-all duration-300" />
                        </div>
                        <p className="absolute lg:left-[20%] left-[10%] mt-5 text-white">{item.name}</p>
                        <p className="absolute lg:right-[20%] right-[10%] mt-36 text-white">{item.rating}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}