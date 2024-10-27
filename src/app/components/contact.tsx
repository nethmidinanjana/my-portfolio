import { Montserrat_Alternates } from "next/font/google";
import SocialMediaConatct from "./social-media-conatct";
import githubicon from "@/public/social-media-icons/github-142-svgrepo-com 3.svg";
import xicon from "@/public/social-media-icons/Twitter X New Logo Vector 2@2x.svg";
import instaicon from "@/public/social-media-icons/instagram-svgrepo-com 4.svg";
import fbicon from "@/public/social-media-icons/facebook-svgrepo-com 2.svg";
import linkedinicon from "@/public/social-media-icons/linkedin-svgrepo-com 2.svg";

const montserrat_alternates = Montserrat_Alternates({
  weight: ["200", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function Contact() {
  return (
    <div className="py-36  flex items-center bg-[#081115] px-5">
      {/* Contact details Div: Start */}
      <div className="w-1/2">
        <div className="pr-28">
          <div
            className={`text-[38px] ${montserrat_alternates.className} font-normal `}
          >
            Contact
          </div>

          <div
            className={`text-[64px] ${montserrat_alternates.className} font-bold `}
          >
            Let’s Connect
          </div>
          <p
            className={`text-[26px] ${montserrat_alternates.className} font-medium leading-[38px] mt-4`}
          >
            Drop your queries and i will get back to you as soon possible...
          </p>
          <div
            className={`text-3xl ${montserrat_alternates.className} font-light leading-[36.57px] mt-8 mb-1`}
          >
            Send me an email:
          </div>
          <span
            className={`text-[20px] ${montserrat_alternates.className} font-semibold text-[#00DBB3] `}
          >
            nethmidinanjana@gmail.com
          </span>
          <div
            className={`text-3xl ${montserrat_alternates.className} font-light leading-[36.57px] mt-8 mb-1`}
          >
            Contact me:
          </div>
          <span
            className={`text-[20px] ${montserrat_alternates.className} font-semibold text-[#00DBB3] `}
          >
            +94 71 879 7812{" "}
          </span>
          <div className="mt-9 flex gap-5">
            <SocialMediaConatct icon={githubicon} />
            <SocialMediaConatct icon={xicon} />
            <SocialMediaConatct icon={instaicon} />
            <SocialMediaConatct icon={fbicon} />
            <SocialMediaConatct icon={linkedinicon} />
          </div>
        </div>
      </div>

      {/* Contact details Div: End */}

      {/* Contact form: Start */}

      <div className="w-1/2">
        <div className="flex gap-6 w-full">
          <div className="flex flex-col w-full">
            <span
              className={`text-[21px] ${montserrat_alternates.className} font-medium  `}
            >
              First Name
            </span>
            <input
              type="text"
              className={`mt-2 bg-[rgba(16,23,27,0.96)] text-white px-6 py-4 rounded-xl placeholder:text-gray-400 placeholder:font-normal ${montserrat_alternates.className}`}
              placeholder="eg: Alex"
            />
          </div>
          <div className="flex flex-col w-full">
            <span
              className={`text-[21px] ${montserrat_alternates.className} font-medium  `}
            >
              Last Name
            </span>
            <input
              type="text"
              className={`mt-2 bg-[rgba(16,23,27,0.96)] text-white px-6 py-4 rounded-xl placeholder:text-gray-400 placeholder:font-normal ${montserrat_alternates.className}`}
              placeholder="eg: Cray"
            />
          </div>
        </div>
        <div className="flex flex-col mt-5">
          <span
            className={`text-[21px] ${montserrat_alternates.className} font-medium  `}
          >
            Email
          </span>
          <input
            type="text"
            className={`mt-2 bg-[rgba(16,23,27,0.96)] text-white px-6 py-4 rounded-xl placeholder:text-gray-400 placeholder:font-normal ${montserrat_alternates.className}`}
            placeholder="eg: example@domain.com"
          />
        </div>
        <div className="flex flex-col mt-5">
          <span
            className={`text-[21px] ${montserrat_alternates.className} font-medium  `}
          >
            Subject
          </span>
          <input
            type="text"
            className={`mt-2 bg-[rgba(16,23,27,0.96)] text-white px-6 py-4 rounded-xl placeholder:text-gray-400 placeholder:font-normal ${montserrat_alternates.className}`}
            placeholder="eg: Just saying hi"
          />
        </div>
        <div className="flex flex-col mt-5">
          <span
            className={`text-[21px] ${montserrat_alternates.className} font-medium  `}
          >
            Message
          </span>
          <textarea
            rows={5}
            className={`mt-2 bg-[rgba(16,23,27,0.96)] text-white px-6 py-4 rounded-xl placeholder:text-gray-400 placeholder:font-normal ${montserrat_alternates.className}`}
            placeholder="Let’s talk about..."
          />
        </div>
        <div className="flex flex-col mt-5 w-full">
          <button
            className={`w-full dark:bg-[#00DBB3] py-3 rounded-xl text-xl ${montserrat_alternates.className} font-semibold`}
          >
            Send
          </button>
        </div>
      </div>

      {/* Contact form: End */}
    </div>
  );
}
