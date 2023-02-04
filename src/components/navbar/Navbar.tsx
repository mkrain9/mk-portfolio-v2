import React from "react";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });
const Navbar = () => {
  const handleClickScroll = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      //Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='absolute'>
      <div className='flex flex-row w-screen justify-around py-2 bg-gray-800/50 shadow-lg'>
        <button
          onClick={() => handleClickScroll("sec1")}
          className={`${inter.className}`}
        >
          Home
        </button>
        <button
          onClick={() => handleClickScroll("sec2")}
          className={`${inter.className}`}
        >
          Blog
        </button>
        <button
          className={`${inter.className}`}
          onClick={() => handleClickScroll("sec3")}
        >
          Projects
        </button>
        <button
          className={`${inter.className}`}
          onClick={() => handleClickScroll("sec4")}
        >
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
