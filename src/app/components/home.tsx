import React from "react";
import { Alegreya_Sans } from "next/font/google";
import { Roboto } from "next/font/google";
import { Rajdhani } from "next/font/google";
import { Montserrat_Alternates } from "next/font/google";
import graduateIcon from "@/public/graduateicon.svg";
import pointerIcon from "@/public/pointericon.svg";
import fbicon from "@/public/fbicon.svg";
import xicon from "@/public/xicon.svg";
import instaicon from "@/public/instaicon.svg";
import linkedinicon from "@/public/linkedinicon.svg";
import whatsappicon from "@/public/whtsappicon.svg";
import emailicon from "@/public/emailicon.svg";
import tiktokicon from "@/public/tiktokicon.svg";
import profileImg from "@/public/profileimg.svg"

import Image from "next/image";

const alegreya_sans = Alegreya_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const roboto = Roboto({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const montserrat_alternates = Montserrat_Alternates({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

function HomePage() {
  return (
    <div className="text-black dark:text-white flex flex-col md:flex-row w-full justify-center items-center h-auto lg:h-screen xl:h-auto 2xl:h-auto py-32 relative mt-3 px-5">
      <div className="w-full flex flex-col justify-center items-start lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/2">
        <div
          className={`text-5xl -mb-6 leading-none ms-10 text-white opacity-60 ${alegreya_sans.className}`}
        >
          Hello I am,
        </div>{" "}
        <div className="flex justify-center items-center mt-0">
          <div className="">
            <span
              className={`text-[20px] vertical-text ${alegreya_sans.className} font-extralight text-lg text-white opacity-60`}
              style={{ letterSpacing: "0.2em" }}
            >
              Nethmi
            </span>
          </div>
          <div className={`text-[100px] ${roboto.className}`}>Dinanjana</div>
        </div>
        <div className="flex flex-col ms-10">
          <span
            className={` ${rajdhani.className} text-2xl font-light text-white opacity-64 tracking-wide`}
          >
            Mastering the Art of Full-Stack Magic
          </span>
          <div className="flex mt-5 gap-5 items-center">
            <div className="p-2 bg-[#383A3D] border-[#585858] rounded-lg border-[1px]">
              <Image src={graduateIcon} alt="Graduate Icon" />
            </div>
            <span
              className={`${montserrat_alternates.className} text-lg text-white opacity-90`}
            >
              BSc (Hons) SE Undergraduate
            </span>
          </div>
          <div className="flex mt-5 gap-5 items-center">
            <div className="p-2 bg-[#383A3D] border-[#585858] rounded-lg border-[1px]">
              <Image src={pointerIcon} alt="Graduate Icon" />
            </div>
            <span
              className={`${montserrat_alternates.className} text-lg text-white opacity-90`}
            >
              Director at ImagineCoreX
            </span>
          </div>

          <div className="flex mt-5 gap-5">
            <div className="px-14 py-3 border-2 border-white">
              <span
                className={`${rajdhani.className} font-extrabold text-xl tracking-wide`}
              >
                Contact
              </span>
            </div>

            <div className="px-20 py-3 border-2 bg-white rounded-full">
              <span
                className={`text-black ${rajdhani.className} font-extrabold text-xl tracking-wide`}
              >
                CV
              </span>
            </div>
          </div>

          <div className="flex mt-7 gap-5">
            <Image src={fbicon} alt="Fb icon" />
            <Image src={xicon} alt="Fb icon" />
            <Image src={instaicon} alt="Fb icon" />
            <Image src={linkedinicon} alt="Fb icon" />
            <Image src={whatsappicon} alt="Fb icon" />
            <Image src={emailicon} alt="Fb icon" />
            <Image src={tiktokicon} alt="Fb icon" />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 md:w-1/2 xl:w-1/2 2xl:w-1/2 flex justify-center items-center">
        <Image src={profileImg} alt="My image" width={300} height={300}/>
      </div>
    </div>
  );
}


export default HomePage;
