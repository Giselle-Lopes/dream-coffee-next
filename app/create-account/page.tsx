"use client";
import Link from "next/link";
import StepsCA from "../components/steps-ca";
import Image from "next/image";
import { useState } from "react";

export default function Delivery() {

  const [hideImageCustomer, setHideImageCustomer] = useState(false);
  const [hideImageOwner, setHideImageOwner] = useState(false);

  return (
    <div className="bg-white h-screen overflow-hidden">
      <StepsCA stepType={"createAccount"}/>
      <div className="flex flex-row justify-center gap-32 py-20">
        <Link href={"/form-account"} onMouseEnter={() => setHideImageCustomer(true)} onMouseLeave={() => setHideImageCustomer(false)} className="rounded-full">
          <div className="flex justify-center border-primary-darkPink border-[20px] shadow-primary-darkPink hover:bg-primary-darkPink transition-all duration-300 rounded-full h-80 w-80 shadow-2xl">
            <Image
              src={"/images/icons/customer.svg"}
              alt="Customer icon"
              height={170}
              width={170}
              className={`rounded-full ${hideImageCustomer ? "hidden" : "flex"}`}
            />
          </div>
        </Link>
        <Link href={"/form-account"} onMouseEnter={() => setHideImageOwner(true)} onMouseLeave={() => setHideImageOwner(false)} className="rounded-full">
          <div className="flex justify-center border-primary-darkBlue border-[20px] shadow-primary-darkBlue hover:bg-primary-darkBlue transition-all duration-300 rounded-full h-80 w-80 shadow-2xl">
            <Image
              src={"/images/icons/owner.svg"}
              alt="Customer icon"
              height={220}
              width={220}
              className={`rounded-full ${hideImageOwner ? "hidden" : "flex"}`}
            />
          </div>
        </Link>
      </div>
    </div>
  )
}