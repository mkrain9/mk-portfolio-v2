import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { base, code, cursor } from "../../data/mongoDBCode";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const blogOne = () => {
  return (
    <div className={`${inter.className} w-full flex flex-col gap-y-4 px-2`}>
      <div className='flex flex-col text-slate-300 font-light gap-y-4'>
        <div className='bg-slate-700 rounded-xl drop-shadow-lg mb-4'>
          <h2 className='font-normal text-center text-2xl text-amber-300 mb-2 bg-slate-800 rounded-xl px-4 py-4 drop-shadow-lg'>
            Utilizing MongoDB Aggregate Pipeline to delete children via parent
            root
          </h2>
          <h3 className='text-center py-2 px-4'>
            by Matthew Krain | June 1, 2023
          </h3>
        </div>
        <p>
          This example comes from my Kitchen Inventory Application: Knock. The
          function that we plan to create will aggregate the parent, child(ren),
          and grandchild(ren) nodes for deletion. These nodes contain data for
          sections that are displayed within the app.
        </p>
        <p>
          First, we will add a basic deletion function in our server repo. It
          will pull the id of the section and verify that the section exists.
        </p>
        <div className='rounded-xl overflow-hidden my-4 drop-shadow-lg'>
          <CodeBlock text={base} language={"js"} theme={dracula} />
        </div>
        <p>
          With the basics taken care of. We will define a cursor, calling the
          database.aggregate property. The pipeline below will locate child
          id's, which will be saved in the constant{" "}
          <code className='text-green-200 bg-slate-800'>dataIds</code>.
        </p>
        <p>`More explanation for aggregate fields.`</p>
        <div className='rounded-xl overflow-hidden my-4 drop-shadow-lg'>
          <CodeBlock
            text={cursor}
            language={"js"}
            theme={dracula}
            highlight='7-9,10-38'
          />
        </div>
      </div>
    </div>
  );
};

blogOne.Layout = BlogLayout;

export default blogOne;
