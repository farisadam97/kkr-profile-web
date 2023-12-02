"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import { typeAnimationValue } from "@/constants";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full">
      <div className="w-[1280px] mx-auto flex justify-center items-center h-[600px]">
        <div className="bg-red-800 basis-3/5 h-full flex items-center  ">
          <div className="w-full font-serif ">
            <h2 className="text-6xl py-1 ">Hi, It's me Kukuh</h2>
            <p className="text-6xl py-1">
              I'm a&nbsp;
              <TypeAnimation sequence={typeAnimationValue} repeat={Infinity} />
            </p>
          </div>
        </div>
        <div className=" basis-2/5 h-full flex items-center ">
          <div className="w-full text-center">
            <Image
              src="/profile.jpg"
              width={300}
              height={300}
              alt="Picture of the author"
              className="mx-auto object-contain border-solid border-8 border-white shadow-md"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
