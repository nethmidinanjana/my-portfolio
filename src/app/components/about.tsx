/* eslint-disable react/no-unescaped-entities */
import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <div className="relative w-full flex flex-wrap h-auto px-5 sm:px-10 py-20">
      <div className="w-full sm:w-3/12 lg:w-2/12 mb-6 sm:mb-0">
        <span className={`text-4xl ${montserrat_alternates.className}`}>
          About
        </span>
      </div>

      <div className="w-full sm:w-9/12 lg:w-10/12 relative z-10">
        <div className="flex flex-wrap items-end gap-7">
          <div className="flex-shrink-0">
            <span
              className={`text-5xl sm:text-6xl lg:text-7xl ${montserrat_alternates.className} font-extrabold`}
            >
              Little bit <br /> about Me
            </span>
          </div>
          <div className="flex-grow border border-white opacity-15 mb-2"></div>
        </div>

        <div>
          <p
            className={`mt-10 text-lg sm:text-2xl lg:text-3xl ${montserrat_alternates.className} font-extralight`}
          >
            Hello, I'm Nethmi Dinanjana, a full-stack software engineer
            dedicated to crafting exceptional digital experiences. With
            expertise in both front-end and back-end development, I bring your
            ideas to life through innovative web solutions. Feel free to get in
            touch, and let's create something amazing together.
          </p>
        </div>
      </div>

      <div className="absolute blur-div-1"></div>
      <div className="absolute blur-div-2"></div>
    </div>
  );
}
