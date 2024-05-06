"use client";

import React from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { Roboto_Mono, Shadows_Into_Light } from 'next/font/google';
import Link from 'next/link';
import clsx from "clsx";
import { useActiveSectionContext } from '@/context/active-section-context';
import Image from 'next/image';

const robotoMono = Roboto_Mono({ weight:["100", "400", "700"], subsets: ['latin'] });
const robotoSerif = Shadows_Into_Light({ weight: "400", subsets: ['latin'] });

export default function Header() {
  
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return <header className="z-[999] relative">

   <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   onClick={() => {
    window.location.href="/"
   }}
   >
    <Link href="/" onClick={(e) => {
        e.preventDefault(); 
    }}
    className={`${robotoSerif.className} flex items-baseline text-3xl fixed top-[0.1rem] left-5 h-12 py-2 sm:top-[1.5rem] sm:h-[initial]`}>
        <Image src="/programmer.png" alt="profile_header" width="30" height="30" className="mr-1" />
        <span>HBL.</span> 
    </Link>
   </motion.div>

    <motion.div 
        className="fixed top-0 left-3/4 h-[4.5rem] w-full rounded-none border border-black border-opacity-20
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[40rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1}}
    >
    </motion.div>

    <nav className="flex fixed top-[0.15rem] left-3/4 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        
        <ul className={`${robotoMono.className} flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[1rem] font-medium text-gray-700 sm:w-[initial] sm:flex-nowrap sm:gap-1`}>
            <motion.span 
                className="h-3/4 flex items-center justify-center text-[1.5rem]"
                initial={{ y: -100,  opacity: 0 }}
                animate={{ y: 0, opacity: 1}}
            >
            </motion.span>
            {links.map(link => (
                <motion.li 
                    className="h-3/4 flex items-center justify-center relative" key={link.hash}
                    initial={{ y: -100,  opacity: 0 }}
                    animate={{ y: 0, opacity: 1}}
                >
                    <Link className={clsx("flex w-full items-center justify-center px-3 py-3",
                    {"text-gray-950 font-bold": activeSection === link.name,}
                    )} 
                    href={link.hash}
                    onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                    }}
                    >

                        <span className="focus:scale-110 hover:scale-110 hover:text-gray-950 transition">
                            {activeSection === link.name ? `<${link.name}/>` : link.name}
                        </span>

                        {link.name === activeSection && (
                            <motion.span className="bg-gray-100 rounded-full absolute inset-0 -z-10"
                            layoutId="activeSection"
                            transition={{
                                type: "spring",
                                stiffness: 380,
                                damping: 30
                            }}>
                            </motion.span>
                        )}
                        
                    </Link>
                </motion.li>
            ))}
            <motion.span 
                className="h-3/4 flex items-center justify-center text-[1.5rem]"
                initial={{ y: -100,  opacity: 0 }}
                animate={{ y: 0, opacity: 1}}
            >
            </motion.span>
        </ul>
        
    </nav>
  </header>
};