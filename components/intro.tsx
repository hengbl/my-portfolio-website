"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section>
        <div className="flex items-center justify-center">
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
                    width="192" height="192" 
                    priority={true} 
                    className="h-full w-full rounded-full object-cover border-[0.35rem] border-white shadow-xl" 
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

            <p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl">
                <span className="font-bold">Hello, I'm Boon Long.</span> I enjoy building Data Science and Web Development projects.
            </p>

        </div>
    </section>
  )
}
