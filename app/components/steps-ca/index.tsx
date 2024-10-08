"use client";
import Image from "next/image";
import { useState } from "react";

type StepName = {
  stepType: "createAccount" | "form" | "bioInfo" | "finish"
}

export default function StepsCA({ stepType }: StepName) {

  const [changeArrow, setChangeArrow] = useState(false);
 
  return(
    <div className="flex flex-row justify-center pt-8 gap-48">
      <div onMouseOver={() => setChangeArrow(true)} onMouseLeave={() => setChangeArrow(false)}>
        <Image
          alt="Arrow left"
          src={`${changeArrow ? '/images/icons/arrow-left-pink.svg' : '/images/icons/arrow-left-blue.svg'}`}
          height={40}
          width={40}
          className={"hover:cursor-pointer"}
        />
      </div>
      <div className={`font-jua cursor-default ${stepType === "createAccount" ? "text-primary-hotPint text-4xl" : "text-primary-darkBlue text-2xl"}`}>
        1
      </div>
      <div className={`font-jua cursor-default ${stepType === "form" ? "text-primary-hotPint text-4xl" : "text-primary-darkBlue text-2xl"}`}>
        2
      </div>
      <div className={`font-jua cursor-default ${stepType === "bioInfo" ? "text-primary-hotPint text-4xl" : "text-primary-darkBlue text-2xl"}`}>
        3
      </div>
      <div className={`font-jua cursor-default ${stepType === "finish" ? "text-primary-hotPint text-4xl" : "text-primary-darkBlue text-2xl"}`}>
        4
      </div>
      <div onMouseOver={() => setChangeArrow(true)} onMouseLeave={() => setChangeArrow(false)}>
        <Image
          alt="Arrow right"
          src={`${changeArrow ? '/images/icons/arrow-right-pink.svg' : '/images/icons/arrow-right-blue.svg'}`}
          height={40}
          width={40}
          className={"hover:cursor-pointer"}
        />
      </div>
    </div>
  )
}