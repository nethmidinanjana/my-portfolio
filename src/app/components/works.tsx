/* eslint-disable react/no-unescaped-entities */
import { Montserrat_Alternates } from "next/font/google";
import ProjectsSlider from "./projects-slider";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Works() {
  return (
    <div className="w-full flex flex-col h-auto py-20 justify-center items-center bg-[#081115]">
      <span className={`text-4xl ${montserrat_alternates.className}`}>
        Works
      </span>
      <div className="mt-7">
      <span
        className={`text-7xl ${montserrat_alternates.className} font-extrabold`}
      >
        Explore my
      </span>
      </div>
      <div className="flex items-end gap-7 w-full mt-2 mb-16">
        <div className="flex-grow border border-white opacity-15 mb-2"></div>

        <div className="flex-shrink-0 text-center">
          <span
            className={`text-7xl ${montserrat_alternates.className} font-extrabold`}
          >
            Works
          </span>
        </div>
        <div className="flex-grow border border-white opacity-15 mb-2"></div>
      </div>

      {/* Slider */}
      <ProjectsSlider/>
    </div>
  );
}
