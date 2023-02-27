import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { base, code, cursor } from "../data/mongoDBCode";
import { Inter } from "@next/font/google";
import Link from "next/link";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

const BlogLayout = ({ children }: { children: any }) => {
  const router = useRouter();
  return (
    <div className={`${inter.className} w-full flex flex-col bg-slate-600`}>
      <div className='relative w-full py-4 shadow-lg'>
        <h1 className='text-center ml-[27%] mr-[9%] text-3xl font-bold text-slate-400'>
          Articles
        </h1>
        <button
          className='absolute right-0 top-3 text-xl font-bold text-sky-300 hover:text-sky-400 mr-4 bg-slate-800 rounded-2xl px-6 py-2 shadow-xl'
          onClick={() => router.back()}
        >
          BACK
        </button>
      </div>
      <div className='flex flex-row justify-center mt-2 ml-2'>
        <div className='flex bg-slate-800 flex-col px-4 py-2 gap-y-2 rounded-md shadow-2xl -translate-y-12 max-w-sm'>
          <h2 className='text-xl text-slate-400 border-b-2 border-slate-600'>
            More Articles
          </h2>
          <div className='flex bg-slate-800 flex-col gap-y-2'>
            <Link
              className='font-normal text-lg text-amber-300 hover:text-sky-300 border-b-2 border-slate-700 pb-2'
              href='/blog/blogOne'
              title='Utilizing MongoDB Aggregate Pipeline to delete children via
                  parent root'
            >
              Utilizing MongoDB Aggregate Pipeline to delete children via parent
              root
            </Link>
            <Link
              className='font-normal text-lg text-amber-300 hover:text-sky-300 border-b-2 border-slate-700 pb-2'
              href='/'
              title='Creating Dynamically Nested Components'
            >
              Creating Dynamically Nested Components
            </Link>
            <Link
              className='font-normal text-lg text-amber-300 hover:text-sky-300 border-b-2 border-slate-700 pb-2'
              href='/'
              title='Extracting tabulated data from SAP'
            >
              Extracting tabulated data from SAP
            </Link>
            <Link
              className='font-normal text-lg text-amber-300 hover:text-sky-300 border-b-2 border-slate-700 pb-2'
              href='/'
              title='Checking for rendered element in SAP'
            >
              Checking for rendered element in SAP
            </Link>
          </div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
