import React from "react";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const ProjectContainer = ({
  reverse,
  title,
  overview,
  keyFeatures,
  techDetails,
}: {
  reverse: boolean;
  title: string;
  overview: string[];
  keyFeatures: string[];
  techDetails: string[];
}) => {
  return (
    <div className='flex bg-sky-600/10 pb-20'>
      <div className='flex flex-row w-[95%] mx-auto justify-between'>
        <div
          className={`flex w-[400px] h-[400px] bg-slate-400 drop-shadow-xl -translate-y-10 rounded-sm ${
            reverse == true && "order-last"
          }`}
        />
        <div className={`${inter.className} w-[65%] flex flex-col gap-y-2`}>
          <div
            className={`pt-4 ${reverse == true ? "text-left" : "text-right"}`}
          >
            <h2 className='translate-y-16 translate-x-1 text-6xl font-bold text-emerald-600/70 drop-shadow-lg'>
              {title}
            </h2>
            <h2 className='text-6xl font-bold text-gray-800 drop-shadow-lg'>
              {title}
            </h2>
          </div>
          <div className={`${reverse == true ? "text-left" : "text-right"}`}>
            <div>
              <h3 className='relative z-10 text-3xl font-bold text-gray-800 drop-shadow-lg bg-slate-300 rounded-lg px-2'>
                Overview
              </h3>
              <div className='mb-2 pt-2 -translate-y-2 px-2 border drop-shadow-lg border-slate-300/50 bg-slate-300/50 rounded-lg backdrop-blur-sm'>
                <p className='text-slate-800'>{overview}</p>
              </div>
              <h3 className='relative z-10 text-3xl font-bold text-gray-800 drop-shadow-lg bg-slate-300 rounded-lg px-2'>
                Key Features
              </h3>
              <div className='mb-2 pt-2 -translate-y-2 px-2 border drop-shadow-lg border-slate-300/50 bg-slate-300/50 rounded-lg backdrop-blur-sm'>
                {keyFeatures.map((feature, index) => (
                  <p key={index} className='text-slate-800'>
                    {feature}
                  </p>
                ))}
              </div>
              <h3 className='relative z-10 text-3xl font-bold text-gray-800 drop-shadow-lg bg-slate-300 rounded-lg px-2'>
                Technical Details
              </h3>
              <div className='pt-2 -translate-y-2 px-2 border drop-shadow-lg border-slate-300/50 bg-slate-300/50 rounded-lg backdrop-blur-sm'>
                {techDetails.map((details, index) => (
                  <p key={index} className='text-slate-800'>
                    {details}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
