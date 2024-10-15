import Link from "next/link";
import React from "react";
import ThemeToggleSwitch from "./light-dark-toggle";
import { Montserrat_Alternates } from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const routes = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Work", path: "#work" },
  { name: "Contact", path: "#contact" },
];

function NavBar() {
  return (
    <header className="text-black dark:text-white w-full fixed top-0 left-0 z-50 flex justify-center bg-opacity-80 dark:bg-[#081115] bg-[#547380]">
      <div className="w-full max-w-7xl flex justify-end items-center px-8 py-4 mt-3">
        <ul className="flex gap-9">
          {routes.map((route) => (
            <li key={route.name}>
              <Link
                href={route.path}
                className={`${montserrat_alternates.className}`}
              >
                {route.name}
              </Link>
            </li>
          ))}
          <ThemeToggleSwitch />
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
