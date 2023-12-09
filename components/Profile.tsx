import React from "react";
import Image from "next/image";
import { lato } from "@/lib/fonts";

const LinkConnect = ({ link, image }: any) => {
  return (
    <a href={link} target="_blank" className="">
      <img
        src={image}
        alt=""
        className="w-16 px-3 transition-all hover:scale-105"
      />
    </a>
  );
};

const Profile = () => {
  return (
    <div className="w-full py-10">
      <div className="w-[1366px] mx-auto flex justify-center  py-10">
        <div className="basis-2/5 h-full flex items-center ">
          <div className="w-full text-center">
            <Image
              src="/profile.jpg"
              width={400}
              height={500}
              alt="Picture of the author"
              className="mx-auto object-contain border-8 border-solid border-white shadow-2xl  "
            />
          </div>
        </div>
        <div className={`basis-3/5 h-full flex flex-col ${lato.className}`}>
          <h1 className="text-5xl font-bold py-4">Who I Am</h1>
          <p className="text-3xl py-3 text-white relative bg-black px-[1rem] left-[-1rem]  w-[calc(100%+1rem)]">
            Software Developer based on Jakarta, Indonesia
          </p>
          <p className="w-full text-xl py-4 text-justify">
            Hello there! I'm Kukuh Kurniadi Rahardjo, a software developer with
            2 years of experiences. Expertise in backend and devops using PHP,
            GO, Node JS, Java Android Studio, MySQL, Linux Server, and C++. Keen
            to learn about building and developing system. Able to learn quickly
            and adapt to new technologies.
            <br />
          </p>
          <h1 className="text-3xl font-bold ">Connect with me</h1>
          <div className="py-4 flex justify-items-center">
            <LinkConnect link={"mailto:"} image={"/email.png"} />
            <LinkConnect
              link={
                "https://www.linkedin.com/in/kukuh-kurniadhi-raharjo-9b702113b/"
              }
              image={"/linkedin.png"}
            />
            <LinkConnect link={"mailto:"} image={"/github.png"} />
          </div>
        </div>
      </div>
      <div className="w-[1366px] mx-auto"></div>
    </div>
  );
};

export default Profile;
