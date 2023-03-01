import BlogLayout from "@/layouts/BlogLayout";
import React from "react";
import { CodeBlock, obsidian } from "react-code-blocks";
import { base, code, cursor } from "../../data/mongoDBCode";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

const blogOne = () => {
  return (
    <div className={`${inter.className} w-full flex flex-col gap-y-4 px-2`}>
      <div className='flex flex-col text-slate-300 font-light gap-y-4'>
        <div className='bg-slate-700 rounded-xl drop-shadow-lg mb-4'>
          <h2 className='font-normal text-center text-2xl text-amber-300 mb-2 bg-slate-800 rounded-xl px-4 py-4 drop-shadow-lg'>
            Utilizing MongoDB Aggregate Pipeline to delete child nodes via
            parent root
          </h2>
          <h3 className='text-center py-2 px-4'>
            by Matthew Krain | June 1, 2023
          </h3>
        </div>
        <p>This example comes from my Kitchen Inventory Application: Knock.</p>
        <h3 className='font-bold text-xl text-slate-900'>Overview</h3>
        <p>
          In this context, these nodes contain data for sections that are
          displayed within the app. The function that we plan to create will
          aggregate the parent, child(ren), and grandchild(ren) nodes for
          deletion. The parent node does not need to be the first node in
          series, but can be a child of another node.
        </p>
        <p>
          Before we get started, let&apos;s discuss nodes, documents, and
          pointers in in MongoDB.
        </p>
        <h3 className='font-bold text-xl text-slate-900'>Definitions</h3>
        <h4 className='font-bold text-lg text-emerald-500'>Nodes</h4>
        <p>
          There is no direct reference to nodes in MongoDB, however it is
          important to understand how they fit in this problem. Nodes are part
          of the tree data structure, containing data at the current node, and
          references to related nodes via a parent-child relationship.
          Traversing up the tree will lead to the parent, while traversing down
          the tree will lead to children.
        </p>
        <h4 className='font-bold text-lg text-emerald-500'>Documents</h4>
        <p>Documents in MongoDB reference data</p>
        <h4 className='font-bold text-lg text-emerald-500'>Pointers</h4>
        <p>...</p>
        <p>
          First, we will add a basic deletion function in our server repo. It
          will pull the id of the section and verify that the section exists.
        </p>
        <div className='rounded-lg overflow-hidden my-4 drop-shadow-lg'>
          <CodeBlock text={base} language={"js"} theme={obsidian} />
        </div>
        <p>
          With the basics taken care of. We will define a cursor, calling the
          database.aggregate property. The pipeline below will locate child
          id&apos;s, which will be saved in the constant
          <code className='text-green-200 bg-slate-800'>dataIds</code>.
        </p>
        <p>`More explanation for aggregate fields.`</p>
        <div className='rounded-lg overflow-hidden my-4 drop-shadow-lg'>
          <CodeBlock
            text={cursor}
            language={"js"}
            theme={obsidian}
            highlight='7-9,10-38'
          />
        </div>
      </div>
    </div>
  );
};

blogOne.Layout = BlogLayout;

export default blogOne;
