import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";
import { base, code, cursor } from "../../data/mongoDBCode";
import { Inter } from "@next/font/google";
import BlogLayout from "@/layouts/BlogLayout";

const inter = Inter({ subsets: ["latin"] });

const index = ({ children }: { children: any }) => {
  return <div className={`${inter.className} w-full flex flex-col`}>Index</div>;
};

index.Layout = BlogLayout;

export default index;
