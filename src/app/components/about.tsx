/* eslint-disable react/no-unescaped-entities */
import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function About() {
  return (
    <div className="relative w-full flex h-auto px-10 py-20">
      <div className="w-2/12">
        <span className={`text-4xl ${montserrat_alternates.className}`}>
          About
        </span>
      </div>
      <div className="w-10/12 relative z-10"> {/* z-10 to ensure this content is above the glitter divs */}
        <div className="flex items-end gap-7">
          <div className="flex-shrink-0">
            <span
              className={`text-7xl ${montserrat_alternates.className} font-extrabold`}
            >
              Little bit <br /> about Me
            </span>
          </div>
          <div className="flex-grow border border-white opacity-15 mb-2"></div>
        </div>

        <div className="px-">
          <p
            className={`mt-10 text-3xl ${montserrat_alternates.className} font-extralight`}
          >
            Hello, I'm Nethmi Dinanjana, a full-stack software engineer
            dedicated to crafting exceptional digital experiences. With
            expertise in both front-end and back-end development, I bring your
            ideas to life through innovative web solutions. Feel free to get in
            touch, and let's create something amazing together.
          </p>
        </div>
      </div>

      {/* Glitter Divs positioned below the content */}
      <div
  className="absolute"
  style={{
    width: '531px',
    height: '223px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, rgba(7, 255, 196, 1) 0%, rgba(7, 255, 196, 0.4) 40%, rgba(8, 17, 21, 0) 100%)',
    borderRadius: '50%', // Makes it a perfect circle
    zIndex: '1',
    filter: 'blur(300px)', // Adds blur effect
  }}
></div>

<div
  className="absolute"
  style={{
    width: '571.33px',
    height: '388.43px',
    top: '60%',
    left: '80%',
    transform: 'translate(-50%, -50%)',
    background: 'radial-gradient(circle, rgba(0, 220, 234, 1) 0%, rgba(0, 220, 234, 0.4) 40%, rgba(8, 17, 21, 0) 100%)',
    borderRadius: '50%', // Makes it a perfect circle
    zIndex: '1',
    filter: 'blur(400px)', // Adds blur effect
  }}
></div>






    </div>
  );
}

