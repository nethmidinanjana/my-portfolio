import Image from "next/image";
import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

interface ProjectSliderProps {
  image: string;
  description: string;
  link: string;
  name: string;
}

const ProjectsSlider: React.FC<ProjectSliderProps> = ({
  image,
  description,
  link,
  name,
}) => {
  return (
    <div className="py-5 px-4 w-full h-full flex flex-col lg:flex-row gap-6 items-center">
      {/* Image container */}
      <div className="w-full lg:w-4/12 h-60 sm:h-80 rounded-3xl overflow-hidden ">
        <Image
          src={image}
          alt="Project Image"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Text content */}
      <div className="w-full lg:w-7/12 px-4 lg:px-12 flex flex-col justify-center ">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl ${montserrat_alternates.className} font-semibold mt-3`}
        >
          {name}
        </h2>
        <a
          href={link}
          className={`text-xl sm:text-2xl ${montserrat_alternates.className} text-[#00FFD1] mt-2`}
        >
          {link}
        </a>
        <p
          className={`text-base sm:text-lg lg:text-xl ${montserrat_alternates.className} font-normal opacity-60 mt-2`}
        >
          {description}
        </p>
        <div className="flex items-end gap-5 w-full mt-5 mb-6 self-end">
          <div className="flex-shrink-0 text-center">
            <a
              href={link}
              className={`px-6 sm:px-10 py-2 bg-[#345E5B] rounded-[34px] text-base sm:text-xl ${montserrat_alternates.className} font-medium`}
            >
              View Site
            </a>
          </div>
          <div className="flex-grow border border-white opacity-15 mb-2"></div>
        </div>
      </div>

      {/* Buttons on the right */}
      <div className="w-full lg:w-1/12 flex flex-row lg:flex-col gap-4 justify-center items-center py-4">
        <button className="border border-[#00FFD1] py-2 px-2 rounded-full bg-[#00FFD1]"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
        <button className="border py-2 px-2 rounded-full"></button>
      </div>
    </div>
  );
};

export default ProjectsSlider;
