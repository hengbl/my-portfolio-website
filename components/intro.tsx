"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
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
                <span className="font-bold">Hello, I'm Boon Long </span> 
                <span className="mr-0">and an aspiring Data Scientist / Engineer based in Singapore</span>
                <Image src="/singapore.png" alt="Singapore" width="30" height="30" className="ml-0" />
                <span className="font-thin">|</span>
            </motion.h1>

            <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-7 px-4"
            initial={{ opacity: 0, y: 100}}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                delay: 0.1,
            }}
            >   
                {/* Redirect to Linkedin */}
                <a className="group flex flex-col items-center gap-2"
                href="https://github.com/hengbl" target="_blank">
                    <Image src="/github.png" alt="github" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                    <span className={`${robotoMono.className} text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity`}>Github</span>
                </a>

                {/* Redirect to Github */}
                <a className="group flex flex-col items-center gap-2"
                href="https://www.linkedin.com/in/hengboonlong/" target="_blank">
                    <Image src="/linkedin.png" alt="linkedin" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                    <span className={`${robotoMono.className} text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity`}>LinkedIn</span>
                </a>
                
                {/* Download CV */}
                <Link className="group flex flex-col items-center gap-2"
                href="/CV.pdf" download={ true }>
                    <Image src="/cv.png" alt="cv" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                    <span className={`${robotoMono.className} text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity`}>Portfolio</span>
                </Link>

                {/* Redirect to Contact Me section */}
                <Link href="#contact" className="group flex flex-col items-center gap-2">
                    <Image src="/mail.png" alt="email" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                    <span className={`${robotoMono.className} text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity`}>Email</span>
                </Link>


            </motion.div>

        </div>
    </section>
  )
}
