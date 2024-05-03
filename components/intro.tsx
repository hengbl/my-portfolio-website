"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import { BsArrowRight } from 'react-icons/bs';
import { HiDownload } from 'react-icons/hi';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';

const robotoMono = Roboto_Mono({ weight:["100", "400","700"], subsets: ['latin'] });

export default function Intro() {

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} id="home" className="h-screen mb-28 max-w-[50rem] text-center sm:mt-20 sm:mb-[-10rem] scroll-mt-[100rem]">
        <div className="flex-col flex items-center justify-center">

            {/* Profile Image and Waving Emoji */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "tween",
                        duration: 0.2,
                    }}
                >
                    <Image src="/profile-pic.png" alt="Portrait" 
                    width="250" height="250" 
                    priority={true} 
                    className="h-250 w-250 rounded-full object-cover border-[0.35rem] border-white shadow-xl" 
                    />
                    <motion.span className="absolute bottom-0 right-0 text-4xl"
                        initial={{ opacity: 0, scale: 0}}
                        animate={{ opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 125, 
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >👋🏻
                    </motion.span>
                </motion.div>
            </div>

            {/* Introduction Message */}
            <motion.h1 className={`${robotoMono.className} mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-[1.7rem]`}
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Boon Long!</span> I enjoy building Data Science and Web Development projects. <span className="font-thin">|</span>
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-s font-medium"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
            >
                {/* Download CV */}
                <a className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
                href="/CV.pdf" download={ true }>
                    Download CV <HiDownload className="opacity-70 group-hover:translate-y-1 transition"/>
                </a>

                {/* Redirect to Contact Me section */}
                <Link href="#contact" className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none 
                focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10">
                    Contact me here <BsArrowRight className="opacity-60 group-hover:translate-x-1 transition"/>
                </Link>

                {/* Redirect to Linkedin */}
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none 
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer"
                href="https://www.linkedin.com/in/hengboonlong/" target="_blank">
                    <BsLinkedin />
                </a>

                {/* Redirect to Github */}
                <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none 
                focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition border border-black/10 cursor-pointer"
                href="https://github.com/hengbl" target="_blank">
                    <FaGithubSquare />
                </a>

            </motion.div>

        </div>
    </section>
  )
}
