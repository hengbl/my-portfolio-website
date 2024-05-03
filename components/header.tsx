"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';

const robotoMono = Roboto_Mono({ weight:["100", "400", "700"], subsets: ['latin'] });

export default function Header() {
  return <header className="z-[999] relative">

    <motion.div 
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1}}
    >
    </motion.div>

    <nav className={"flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0"}>
        
        <ul className={`${robotoMono.className} flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-purple-700 sm:w-[initial] sm:flex-nowrap sm:gap-1`}>
            <motion.span 
                className="h-3/4 flex items-center justify-center text-[1.5rem]"
                initial={{ y: -100,  opacity: 0 }}
                animate={{ y: 0, opacity: 1}}
            >
            <span className={`${robotoMono.className} font-light text-3xl`}>{"<"}</span>
            </motion.span>
            {links.map(link => (
                <motion.li 
                    className="h-3/4 flex items-center justify-center" key={link.hash}
                    initial={{ y: -100,  opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                >
                    <Link className="flex w-full items-center justify-center px-3 py-3 focus:scale-110 hover:scale-110 hover:text-purple-950 hover:font-bold transition" 
                    href={link.hash}>{link.name}</Link>
                </motion.li>
            ))}
            <motion.span 
                className="h-3/4 flex items-center justify-center text-[1.5rem]"
                initial={{ y: -100,  opacity: 0 }}
                animate={{ y: 0, opacity: 1}}
            >
            <span className={`${robotoMono.className} font-light text-3xl`}>{"/>"}</span>
            </motion.span>
        </ul>
        
    </nav>
  </header>
};