"use client";
import { useState, useEffect } from "react";

interface CoffeeShopInfo {
    key: number;
    content: React.ReactNode;
    onClick?: () => void;
}

export default function CSOptions() {
    const [coffeeShopOptions, setCoffeeShopOptions] = useState<CoffeeShopInfo[]>([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/coffeeShops');
                const data = await response.json();

                const mappedData = data
                setCoffeeShopOptions(mappedData);
            } catch (e) {
                console.error("Error fetching coffee shops options:", e)
            }
        };

        fetchData;
    }, []);

    return (
        <div></div>
    )
}