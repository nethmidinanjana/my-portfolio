"use client";

import sun from "@/public/sun.png";
import moon from "@/public/moon.png";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function LightDarkToggleBtn() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" && systemTheme ? systemTheme : theme;

  if (!mounted || !currentTheme) return null;

  return (
    <>
      <button
        className="bg-white rounded-full p-1"
        onClick={() => {
          setTheme(currentTheme === "dark" ? "light" : "dark");
        }}
      >
        <Image src={currentTheme === "dark" ? moon : sun} alt="Theme image" width={21} />
      </button>
    </>
  );
}

export default LightDarkToggleBtn;
