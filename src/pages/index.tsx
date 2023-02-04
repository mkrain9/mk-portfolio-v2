import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar/Navbar";
import Section from "@/components/Section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MK Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='snap-y snap-promixity h-screen w-screen overflow-scroll scrollbar-hide'>
        <Navbar />

        <Section id='sec1' color='bg-slate-400'>
          <div className='bg-slate-100 w-screen pt-20 pb-10 shadow-lg mb-4'>
            <div className='m-auto flex w-24 h-24 border-2 rounded-full items-center justify-center shadow'>
              <p className='text-center text-slate-400'>Profile</p>
            </div>
            <h1
              className={`${inter.className} text-center font-bold text-4xl text-slate-400 select-all`}
            >
              Matthew Krain
            </h1>
            <h2
              className={`${inter.className} font-bold text-center text-sky-300`}
            >
              Full Stack Developer
            </h2>
            <p
              className={`${inter.className} text-center text-sm text-slate-400`}
            ></p>
          </div>

          <div className='flex flex-col w-[80%] justify-evenly gap-y-20 p-4'>
            <div className=''>
              <h2>About Me</h2>
              <p className={`${inter.className} text-md text-slate-200`}>
                Full Stack Engineer with 3 years of experience in developing
                automation software and digital processes for the Chemical
                Manufacturing industry. Proficient in JavaScript/TypeScript with
                experience in React and React Native. Adept at working in
                fast-paced, collaborative environments and continuously seeking
                new knowledge, particularly in the area of Machine Learning
                Models. Proven ability to lead technical teams and produce
                software solutions that yield multi million-dollar savings for a
                Fortune 500 company
              </p>
            </div>
            <div>
              <h2 className=''>Skills</h2> <p>...</p>
            </div>
          </div>
        </Section>

        <Section id='sec2' color='bg-yellow-200'>
          <h1 className={`${inter.className} text-2xl text-slate-500`}>Blog</h1>
        </Section>
        <Section id='sec3' color='bg-blue-200'>
          <h1 className={`${inter.className} text-2xl text-slate-500`}>
            Projects
          </h1>
        </Section>
        <Section id='sec4' color='bg-red-200'>
          <h1 className={`${inter.className} text-2xl text-slate-500`}>
            Contact Me
          </h1>
        </Section>
        <div className={styles.description}>
          <div>
            <a
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              By{" "}
              <Image
                src='/vercel.svg'
                alt='Vercel Logo'
                className={styles.vercelLogo}
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
