"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import ThemeToggleSwitch from "./light-dark-toggle";
import { Montserrat_Alternates } from "next/font/google";
import { AiOutlineMenu } from "react-icons/ai";

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
  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    // Function to close navbar when resizing to a larger screen
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setNavbar(false);
      }
    };

    // Attach event listener on resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount 
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    
      <header className="text-black dark:text-white w-full  fixed top-0 left-0 flex  bg-opacity-80 dark:bg-[#081115] bg-[#547380] px-8 py-4 z-50"
      style={{ zIndex: 100 }}>
        {/* Desktop Navbar */}
        <div className="hidden md:flex w-full max-w-7xl  mx-auto justify-end items-center">
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

        {/* Hamburger Icon (Mobile only) */}
        <button
          className="md:hidden flex  max-w-7xl  mx-auto  items-center justify-center p-2"
          onClick={() => setNavbar(!navbar)}
        >
          <AiOutlineMenu className="text-2xl" />
        </button>

        {/* Overlay Menu for Mobile */}
        {navbar && (
          <div className="fixed inset-0 bg-[#081115] text-white flex flex-col items-center justify-center z-40">
            <ul className="space-y-8 text-center">
              {routes.map((route) => (
                <li key={route.name}>
                  <Link
                    href={route.path}
                    className={`${montserrat_alternates.className} text-2xl`}
                    onClick={() => setNavbar(false)} // close menu after clicking a link
                  >
                    {route.name}
                  </Link>
                </li>
              ))}
              <ThemeToggleSwitch />
            </ul>
            <button
              className="absolute top-8 right-8 text-xl"
              onClick={() => setNavbar(false)}
            >
              Close
            </button>
          </div>
        )}
      </header>
    
  );
}

export default NavBar;
