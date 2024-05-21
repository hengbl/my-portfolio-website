"use client";

import React, { useRef } from 'react';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { motion, useScroll, useTransform } from "framer-motion";
import { GiClick } from "react-icons/gi";
import { FaGithub } from "react-icons/fa";


type ProjectProps = (typeof projectsData)[number];

export default function Project({ title, description, tags, imageUrl, githubUrl }: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

    return (
        <motion.div
            ref={ref}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress
            }}
            className="group mb-3 sm:mb-8 last:mb-0"
            >
            <section className="relative bg-gray-100 max-w-[60rem] border border-black/5 overflow-hidden sm:pr-8 sm:h-[20rem]
            rounded-lg group-even:pl-8 hover:bg-gray-200 transition dark:bg-white/10 dark:hover:bg-white/20 dark:text-white">
                <div className="pt-4 pb-10 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
                group-even:ml-[28rem]">
                    <h3 className="text-2xl font-semibold">{ title }</h3>
                    <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{ description }</p>
                    <a href={githubUrl} target="_blank" className="group/gh flex items-center gap-2 mt-3 mb-5">
                        <FaGithub className="text-xl group-hover/gh:text-red-600" /> 
                            <span className="italic underline text-gray-600 group-hover/gh:text-red-600 dark:text-white/70">View source code here</span> 
                        <GiClick className="text-xl group-hover/gh:text-red-600" />
                    </a>
                    <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
                        {tags.map((tag, index) => (
                            <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                            key={index}>{ tag }</li>
                        ))}
                    </ul>
                </div>

                <Image src={ imageUrl } alt={ title } quality={95}
                className="absolute top-5 -right-40 w-[38.25rem] rounded-t-lg shadow-2xl
                transition
                group-hover:scale-[1.04] 
                group-hover:-translate-x-3 
                group-hover:translate-y-3 
                group-hover:-rotate-2 

                group-even:group-hover:translate-x-3 
                group-even:group-hover:translate-y-3 
                group-even:group-hover:rotate-2 

                group-even:-right-[initial] 
                group-even:-left-40 "/>

            </section>
        </motion.div>

        
    )
}
