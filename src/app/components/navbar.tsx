import Link from "next/link";
import React from "react";
import ThemeToggleSwitch from "./light-dark-toggle";
import {Montserrat_Alternates} from "next/font/google";

const montserrat_alternates = Montserrat_Alternates({
    weight: "400",
    subsets: ["latin"],
    display: "swap",
});

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "#about",
  },
  {
    name: "Work",
    path: "#work",
  },
  {
    name: "Contact",
    path: "#contact",
  },
];

function NavBar() {
  return (
    <header className="text-black dark:text-white w-full flex justify-end items-center mt-8">
      <ul className="flex gap-9">
        {routes.map((route) => (
          <li key={route.name}>
            <Link href={route.path} className={`${montserrat_alternates.className}`}>{route.name}</Link>
          </li>
        ))}

        <ThemeToggleSwitch/>
      </ul>
    </header>
  );
}

export default NavBar;
