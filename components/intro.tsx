"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Roboto_Mono, Roboto_Serif } from 'next/font/google';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

const robotoMono = Roboto_Mono({ weight:["100", "400","700"], subsets: ['latin'] });
const robotoSerif = Roboto_Serif({ weight:["400","700"], subsets: ['latin'] });


export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
  
    return (
      <section ref={ref} id="home" className={`${robotoMono.className} flex flex-col h-screen items-center justify-center mb-28 max-w-[70rem] mx-auto sm:mt-[-10rem] sm:mb-[-1rem] scroll-mt-[100rem]`}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center w-full">
  
              {/* Profile Image */}
              <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-10">
                  <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                          type: "tween",
                          duration: 0.2,
                      }}
                  >
                      <Image src="/profile-pic.png" alt="Portrait" 
                      width="300" height="300" 
                      priority={true} 
                      className="rounded-full object-cover border-[0.2rem] border-white shadow-xl" 
                      />
                  </motion.div>
              </div>
              
              <div className="flex flex-col items-start justify-start">
                {/* Introduction Message */}
                <motion.div className="mb-10 mt-4 px-4 text-xl font-medium !leading-[1.5] sm:text-[1.7rem] text-left"
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className={`${robotoSerif.className} text-5xl/[4rem] mb-4`}>Hello, my <br/> name is  <span className="font-bold">Boon Long</span> 👋</h1> 
                    <span className="font-normal text-xl text-gray-800">I'm an aspiring <span className='font-bold'>Data Scientist / Engineer</span> from the sunny island of Singapore</span>
                    <span className="font-thin">|</span>
                    <Image src="/singapore.png" alt="Singapore" width="30" height="30" className="ml-3 inline-block" />
                </motion.div>
    
                {/* Social Links and CV */}
                <motion.div className={`${robotoSerif.className} flex flex-col sm:flex-row items-start justify-start gap-4 px-4`}
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.1,
                }}
                >   
                    {/* Redirect to Github */}
                    <a className="group flex flex-col items-center gap-2"
                    href="https://github.com/hengbl" target="_blank">
                        <Image src="/github.png" alt="github" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                        <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold">Github</span>
                    </a>
    
                    {/* Redirect to Linkedin */}
                    <a className="group flex flex-col items-center gap-2"
                    href="https://www.linkedin.com/in/hengboonlong/" target="_blank">
                        <Image src="/linkedin.png" alt="linkedin" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                        <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold">LinkedIn</span>
                    </a>
                    
                    {/* Download CV */}
                    <Link className="group flex flex-col items-center gap-2"
                    href="/CV.pdf" download={ true }>
                        <Image src="/cv.png" alt="cv" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                        <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold">Portfolio</span>
                    </Link>
    
                    {/* Redirect to Contact Me section */}
                    <Link href="#contact" className="group flex flex-col items-center gap-2">
                        <Image src="/mail.png" alt="email" width="40" height="40" className="group-hover:animate-bounce transition mb-0" />
                        <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold">Email</span>
                    </Link>
                </motion.div>
              </div>
          </div>
      </section>
    )
  }