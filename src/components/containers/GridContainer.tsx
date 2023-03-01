import Link from "next/link";
import React from "react";

const GridContainer = ({
  title,
  description,
  span,
  height,
  href,
  background,
}: {
  title: string;
  description: string[][];
  span?: string;
  height?: string;
  href?: string;
  background?: string;
}) => {
  height = height || "h-full";
  href = href || "";
  background = background || "bg-slate-400";
  return (
    <>
      {href == "" ? (
        <div
          className={`w-[400px] ${height} ${background} ${span} drop-shadow-lg rounded-sm`}
        >
          <h1 className='text-md text-center text-slate-800 font-bold pt-2'>
            {title}
          </h1>
          <div className='pt-2'>
            {description[0][1]
              ? description.map((item, index) => (
                  <div
                    key={index}
                    className='grid divide-x-2 divide-y-2 divide-slate-500 grid-cols-2 -translate-x-12'
                  >
                    <p
                      className={`text-sm text-end font-bold text-slate-200 px-4 py-2`}
                    >
                      {item[0]}
                    </p>
                    <p
                      className={`text-sm text-slate-200 px-4 py-2 drop-shadow-md`}
                    >
                      {item[1]}
                    </p>
                  </div>
                ))
              : description.map((item, index) => (
                  <div key={index} className=''>
                    <p className={`text-sm text-slate-200 px-4 py-2`}>{item}</p>
                  </div>
                ))}
          </div>
        </div>
      ) : (
        <Link
          href={href}
          className={`w-[400px] ${height} ${background} ${span} drop-shadow-lg rounded-sm`}
        >
          <h1 className='text-md text-center text-slate-800 font-bold pt-4'>
            {title}
          </h1>
          {description.map((item, index) => (
            <p key={index} className={`text-sm text-slate-200 px-4 py-2`}>
              {item}
            </p>
          ))}
        </Link>
      )}
    </>
  );
};

export default GridContainer;
