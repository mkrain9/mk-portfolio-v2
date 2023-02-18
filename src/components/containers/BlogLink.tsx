import React from "react";
import Link from "next/link";

const BlogLink = ({
  href,
  title,
  date,
  hashTags,
}: {
  href: string;
  title: string;
  date: string;
  hashTags?: string[];
}) => {
  return (
    <Link href={href}>
      <div className='border-t-2 border-slate-500 py-4'>
        <h2 className='font-normal text-center text-lg text-amber-300 mb-2 bg-slate-800 hover:bg-slate-700 rounded-xl px-4 py-2 drop-shadow-lg'>
          {title}
        </h2>
        <div className='flex flex-row justify-between'>
          <p className='text-slate-400 relative'>{date}</p>
          <div className='flex flex-row gap-x-2 text-slate-400 cursor-pointer'>
            {hashTags?.map((hashTag) => (
              <p className='hover:text-sky-300 relative'>#{hashTag}</p>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogLink;
