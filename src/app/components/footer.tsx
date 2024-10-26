import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
    weight: ["200", "400", "500", "600", "700"],
    subsets: ["latin"],
    display: "swap",
  });

export default function Footer() {
  return (
    <footer className="text-black dark:text-white w-full flex justify-center bg-opacity-80 dark:bg-[#131A20] bg-[#547380]">
      <div className="w-full max-w-7xl flex justify-between items-center px-8 py-8">
        <div  className={`text-sm ${montserrat_alternates.className} font-medium `}>© 2024 • Nethmi Dinanjana – All Rights Reserved</div>
        <div className={`flex gap-2 text-sm ${montserrat_alternates.className} font-medium `}><a href="#" className="hover:text-[#00DBB3]">Privacy Policy  </a>| <a 
         className="hover:text-[#00DBB3]" href="#">  Teams & Conditions</a></div>
      </div>
    </footer>
  );
}
