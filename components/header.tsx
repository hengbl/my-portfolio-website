"use client";

import React, { useState } from 'react';
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { Roboto_Mono, Shadows_Into_Light } from 'next/font/google';
import Link from 'next/link';
import clsx from "clsx";
import { useActiveSectionContext } from '@/context/active-section-context';
import Image from 'next/image';

const robotoMono = Roboto_Mono({ weight:["100", "400", "700"], subsets: ['latin'] });
const robotoSerif = Shadows_Into_Light({ weight: "400", subsets: ['latin'] });

interface HamburgerIconProps {
    isOpen: boolean;
    toggleMenu: () => void;
  }
  
  const HamburgerIcon: React.FC<HamburgerIconProps> = ({ isOpen, toggleMenu }) => (
    <button
      className="fixed top-4 right-4 z-5"
      onClick={toggleMenu}
    >
      <div className={`w-6 h-0.5 bg-black dark:bg-gray-300 mb-1 rounded-full transition-all ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
      <div className={`w-6 h-0.5 bg-black dark:bg-gray-300 mb-1 transition-all rounded-full ${isOpen ? 'opacity-0' : ''}`} />
      <div className={`w-6 h-0.5 bg-black dark:bg-gray-300 transition-all rounded-full ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
    </button>
  );

export default function Header() {
  
  const { activeSection, setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const toggleMenu = (): void => setIsMenuOpen(!isMenuOpen);

  return <header className="z-[999] relative mb-[-8rem] sm:mb-auto">

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
   className="fixed top-7 right-7"
   initial={{ y: -100, x: "-50%", opacity: 0 }}
   animate={{ y: 0, x: "-50%", opacity: 1}}>
        <HamburgerIcon isOpen={isMenuOpen} toggleMenu={toggleMenu} />
   </motion.div>
   
    <div 
        className={`fixed top-0 sm:left-3/4 sm:-translate-x-80 h-[4.5rem] w-full rounded-none border border-black border-opacity-20
        bg-white bg-opacity-80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem]
        sm:top-6 sm:h-[3.25rem] sm:w-[37rem] sm:rounded-lg
        dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75 ${isMenuOpen ? 'block' : 'hidden'} transform sm:skew-x-12`}
    >
    </div>

    <nav className={`flex fixed top-[0.15rem] left-1/2 sm:left-3/4 h-12 -translate-x-1/2 sm:-translate-x-80 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
        
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
                    {"text-gray-950 dark:text-gray-100 font-bold": activeSection === link.name,}
                    )} 
                    href={link.hash}
                    onClick={() => {
                        setActiveSection(link.name);
                        setTimeOfLastClick(Date.now());
                    }}
                    >

                        <span className="focus:scale-110 hover:scale-110 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-100 transition">
                            {activeSection === link.name ? `<${link.name}/>` : link.name}
                        </span>

                        {link.name === activeSection && (
                            <motion.span className="bg-gray-100 rounded-full absolute inset-0 -z-10 dark:bg-gray-800"
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