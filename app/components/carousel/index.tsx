"use client";

import Carousel from "react-spring-3d-carousel";
import { useState, useEffect } from "react";
import { config } from "react-spring";
import Image from "next/image";

interface CarouselProps {
  offset: number;
  showArrows: boolean;
  width: string | number;
  height: string | number;
  margin: string | number;
}
  
interface CoffeeShopInfo {
  key: number;
  content: React.ReactNode;
  onClick?: () => void;
}

export default function CarouselDashboard(props: CarouselProps) {
    const [coffeeShopInfos, setCoffeeShopInfos] = useState<CoffeeShopInfo[]>([]);
    const [offsetRadius, setOffsetRadius] = useState<number>(2);
    const [showArrows, setShowArrows] = useState<boolean>(false);
    const [goToSlide, setGoToSlide] = useState<number | undefined>(undefined);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('http://localhost:5000/coffeeShops');
            const data = await response.json();
    
            const mappedData = data.map((element: any, index: number) => ({
              key: index,
              content: 
                <div>
                  <div className="shadow-2xl">
                    <Image
                      src={element.image}
                      alt={element.name + " image"}
                      width={400}
                      height={400}
                    />
                  </div>
                    <p className="font-jua text-primary-darkBlue font-black text-xl mt-2">
                      {element.name}
                    </p>
                </div>,
              onClick: () => setGoToSlide(index),
            }));
    
            setCoffeeShopInfos(mappedData);
          } catch (e) {
            console.error("Error fetching coffee shops:", e);
          }
        };
    
        fetchData();
      }, []);

    useEffect(() => {
      setOffsetRadius(props.offset);
      setShowArrows(props.showArrows);
    }, [props.offset, props.showArrows]);

    return (
        <>
          <div style={{ width: props.width, height: props.height, margin: props.margin, cursor: "pointer" }}>
              <Carousel
                slides={coffeeShopInfos}
                goToSlide={goToSlide}
                offsetRadius={offsetRadius}
                showNavigation={showArrows}
                animationConfig={config.gentle}
              />
          </div>
        </>
    )
}