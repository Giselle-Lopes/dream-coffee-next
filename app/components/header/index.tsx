"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SideBar } from "../sideBar";

type HeaderColor = {
  colorBg: string;
}

export default function Header({ colorBg }: HeaderColor) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const handleSideBar = () => {
    setOpenSideBar(true);
  };

  const handleSideBarClose = () => {
    setOpenSideBar(false);
  };

  return (
    <div className="relative">
      <div className={`flex flex-row justify-between items-center lg:px-8 px-6 sticky top-0 transition-colors duration-300 ${isScrolled ? colorBg : "bg-transparent"} ${openSideBar ? 'z-40' : 'z-50'}`}>
        <div className="flex lg:w-6 lg:h-6 w-4 h-4 cursor-pointer" onClick={handleSideBar}>
          <Image 
            src={"/images/icons/sidebar-open.svg"}
            width={100}
            height={100}
            alt={"Sidebar open sandwich"}
          />
        </div>
        <div className="flex lg:w-28 lg:h-28 w-20 h-20">
          <Image 
            src={"/images/assets/logo.png"}
            width={200}
            height={200}
            alt={"Dream coffe logo"}
          />
        </div>
        <div className="flex lg:w-8 lg:h-8 w-6 h-6">
          <Image 
            src={"/images/icons/cart.svg"}
            width={100}
            height={100}
            alt={"Cart icon"}
          />
        </div>
      </div>
        <SideBar openState={openSideBar} onClose={handleSideBarClose}/>
      <div
                className={`fixed inset-0 bg-white bg-opacity-50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${
                    openSideBar ? 'opacity-100 visible z-40' : 'opacity-0 invisible'
                }`}
                onClick={handleSideBarClose}
            ></div>
    </div>
  );
};