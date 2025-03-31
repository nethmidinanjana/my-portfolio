import React from "react";
import {
  Alegreya_Sans,
  Roboto,
  Rajdhani,
  Montserrat_Alternates,
} from "next/font/google";
import graduateIcon from "@/public/graduateicon.svg";
import pointerIcon from "@/public/pointericon.svg";
import fbicon from "@/public/fbicon.svg";
import xicon from "@/public/xicon.svg";
import instaicon from "@/public/instaicon.svg";
import linkedinicon from "@/public/linkedinicon.svg";
import whatsappicon from "@/public/whtsappicon.svg";
import emailicon from "@/public/emailicon.svg";
import tiktokicon from "@/public/tiktokicon.svg";
import profileImg from "@/public/profileimg.svg";
import Image from "next/image";

// Font configurations
const alegreya_sans = Alegreya_Sans({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const roboto = Roboto({ weight: "500", subsets: ["latin"], display: "swap" });
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
    <div className="text-black dark:text-white flex flex-col lg:flex-row flex-wrap w-full justify-center items-center lg:h-screen py-32 relative mt-3 px-5">
      {/* Intro div: Start */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start mb-10 lg:mb-0">
        <div className="flex flex-col justify-start items-start">
          <div
            className={`text-5xl -mb-6 leading-none ms-8 text-white opacity-60 ${alegreya_sans.className}`}
          >
            Hello I am,
          </div>
          <div className="flex justify-center items-center mt-0">
            <div>
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
              className={`${rajdhani.className} text-2xl font-light text-white opacity-64 tracking-wide`}
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
              <Image src={xicon} alt="X icon" />
              <Image src={instaicon} alt="Insta icon" />
              <Image src={linkedinicon} alt="LinkedIn icon" />
              <Image src={whatsappicon} alt="WhatsApp icon" />
              <Image src={emailicon} alt="Email icon" />
              <Image src={tiktokicon} alt="TikTok icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Intro div: End */}

      {/* Image div: Start */}
      <div className="w-full lg:w-1/2 flex justify-center items-center ">
        <Image src={profileImg} alt="Profile image" width={300} height={300} />
        
        <div className="w-[300px] h-[300px] bg-green-800"></div>
      </div>
      {/* Image div: End */}
    </div>
  );
}

export default HomePage;
