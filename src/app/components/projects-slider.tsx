import Image from "next/image";
import project1Img from "@/public/project1img.svg";
import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function ProjectsSlider() {
  return (
    <div className="py-5 px-4 w-full h-full flex">
      <div className="w-4/12 h-80 rounded-3xl overflow-hidden">
        <Image
          src={project1Img}
          alt="Project 1 Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-7/12 px-12 flex flex-col justify-center">
        <div
          className={`text-4xl ${montserrat_alternates.className} font-semibold mt-3`}
        >
          giveDonor
        </div>
        <div
          className={`text-2xl ${montserrat_alternates.className} text-[#00FFD1] mt-2`}
        >
          www.givedonor.com
        </div>
        <p
          className={`text-xl ${montserrat_alternates.className} font-normal opacity-60 mt-2`}
        >
          As a full-stack software engineer, I had the privilege to design and
          develop a dynamic and user-friendly charity event website. This
          project is not only a testament to my technical expertise but also a
          demonstration of my commitment to making a positive impact through
          technology.
        </p>
        <div className="flex items-end gap-7 w-full mt-4 mb-16 self-end">
          <div className="flex-shrink-0 text-center">
            <button
              className={`px-10 py-2 bg-[#345E5B] rounded-[34px] text-xl ${montserrat_alternates.className} font-medium`}
            >
              View Site
            </button>
          </div>
          <div className="flex-grow border border-white opacity-15 mb-2"></div>
        </div>
      </div>
      <div className="w-1/12 flex flex-col gap-4 justify-center items-center py-4">
        <button className="border border-[#00FFD1] py-2 px-2 rounded-full bg-[#00FFD1]"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
      </div>
    </div>
  );
}
