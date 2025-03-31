import { Montserrat_Alternates } from "next/font/google";
import Image from "next/image";

// Import your images...
import mongodbicon from "@/public/techStackIcons/mongo-svgrepo-com 2.svg";
import nodeicon from "@/public/techStackIcons/nodejs.svg";
import laravelicon from "@/public/techStackIcons/laravel-svgrepo-com 2.svg";
import jqueryicon from "@/public/techStackIcons/jquery.svg";
import tailwindicon from "@/public/techStackIcons/tailwind-svgrepo-com 2.svg";
import nextjsWhiteicon from "@/public/techStackIcons/nextjs-white.svg";
import reacteicon from "@/public/techStackIcons/react-svgrepo-com.svg";
import jsicon from "@/public/techStackIcons/js-svgrepo-com.svg";
import htmlicon from "@/public/techStackIcons/html-5-svgrepo-com.svg";
import cssicon from "@/public/techStackIcons/css-3-svgrepo-com.svg";
import javaicon from "@/public/techStackIcons/java-svgrepo-com.svg";
import mysqlicon from "@/public/techStackIcons/mysql-svgrepo-com.svg";
import dockericon from "@/public/techStackIcons/docker-svgrepo-com.svg";
import nesticon from "@/public/techStackIcons/nestjs-svgrepo-com.svg";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function TechStack() {
  return (
    <div className="relative w-full h-screen mb-10 px-10 custom-padding">
      {/* For large screens, show the original content */}
      <div className="hidden lg:flex">
        <div className="blur-div-3"></div>

        {/* Top left corner */}
        <div className="absolute top-0 left-0 flex flex-col gap-6 z-50">
          <div className="flex gap-6">
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={reacteicon} alt="React Icon" width={50} height={50} />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={nodeicon} alt="Node.js Icon" width={60} height={60} />
            </div>
          </div>
          <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
            <Image
              src={nextjsWhiteicon}
              alt="Next.js Icon"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* Top right corner */}
        <div className="absolute top-0 right-0 flex flex-col gap-6 items-end z-50">
          <div className="flex gap-6">
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={javaicon} alt="Java Icon" width={50} height={50} />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image
                src={jsicon}
                alt="JavaScript Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image
                src={laravelicon}
                alt="Laravel Icon"
                width={45}
                height={45}
              />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image
                src={jqueryicon}
                alt="jQuery Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image
                src={tailwindicon}
                alt="Tailwind Icon"
                width={50}
                height={50}
              />
            </div>
          </div>
          <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
            <Image
              src={mongodbicon}
              alt="MongoDB Icon"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* Center content */}
        <div className="absolute inset-0 flex items-center justify-center z-50 flex-col">
          <div
            className={`text-xxl-responsive ${montserrat_alternates.className} font-extrabold text-center leading-[85.02px]`}
          >
            Filing your <br /> project{" "}
            <span className="text-[#00DBB3]">
              with my <br /> Tech Stack
            </span>
          </div>
          <div
            className={`text-xl-responsive ${montserrat_alternates.className} font-medium text-center opacity-35 mt-4`}
          >
            Fueling Innovation with My Tech Stack
          </div>
        </div>

        {/* Bottom left corner */}
        <div className="absolute bottom-0 left-0 flex flex-col gap-6 z-50">
          <div className="flex gap-6">
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={htmlicon} alt="HTML Icon" width={50} height={50} />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={cssicon} alt="CSS Icon" width={50} height={50} />
            </div>
          </div>
          <div className="flex gap-6">
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={mysqlicon} alt="MySQL Icon" width={50} height={50} />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image
                src={dockericon}
                alt="Docker Icon"
                width={50}
                height={50}
              />
            </div>
            <div className="border-2 rounded-3xl w-[90px] h-[90px] bg-[rgba(7,12,15,0.45)] border-[#9b989838] flex justify-center items-center">
              <Image src={nesticon} alt="NestJS Icon" width={50} height={50} />
            </div>
          </div>
        </div>

        <div className="blur-div-4"></div>

        {/* Bottom right corner */}
        <div className="absolute bottom-0 right-0 flex flex-col items-end z-20">
          <label
            className={`text-4xl ${montserrat_alternates.className} font-extrabold dark:text-[#FFFFFF1F] dark:text-opacity-15`}
          >
            #dev
          </label>
          <label
            className={`text-xl ${montserrat_alternates.className} font-semibold dark:text-[#FFFFFF1F] dark:text-opacity-15`}
          >
            @nethmi_dinanjana
          </label>
        </div>
      </div>

      {/* For smaller screens, show a simple box */}
      <div className="flex lg:hidden w-full h-full items-center justify-center">
        <div
          className={`text-xxl-responsive ${montserrat_alternates.className} font-extrabold text-center leading-[85.02px]`}
        >
          My Tech Stack
        </div>
      </div>
    </div>
  );
}
