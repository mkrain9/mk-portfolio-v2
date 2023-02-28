import React from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const SectionHeader = ({ title }: { title: string }) => {
  return (
    <div className={`${inter.className} w-full pb-20 bg-sky-600/10`}>
      <div className='flex mx-auto justify-center rounded-full rounded-t-sm bg-slate-500/25 w-[75%] h-40 shadow-xl'>
        <div className='flex flex-row justify-center items-center'>
          <h1
            className={`${inter.className} text-center font-bold text-6xl text-slate-400`}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
