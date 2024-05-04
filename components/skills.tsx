"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { techStackUrl, libraries} from '@/lib/data';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';
import { useSectionInView } from '@/lib/hooks';
import { motion } from "framer-motion";

const robotoMono = Roboto_Mono({ weight:"500", subsets: ['latin'] });

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index,
        },
    }),
};

export default function Skills() {

    const { ref } = useSectionInView("Skills", 0.5);

    return (
        <section ref={ref} id="skills" className="mb-28 max-w-[60rem] scroll-mt-28 text-center sm:mb-40">
            <SectionHeading>{`<`}Tech Stacks{`/>`}</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-5">
                {
                    techStackUrl.map((item, index) => (
                        <motion.li key={index}
                        className="bg-white border border-black/[0.1] rounded-2xl px-5 py-3 focus:scale-110 hover:scale-110"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}>
                            <div className="flex flex-col justify-center items-center">
                                <Image src={item.url} alt={item.skill} width="40" height="40" />
                                <span className={`${robotoMono.className} text-gray-500 text-[0.9rem] mt-1`}>{item.skill}</span>
                            </div>
                            
                        </motion.li>
                    ))
                }
            </ul>

            <br></br>
            <br></br>

            <SectionHeading >{`<`}AI/ML Libraries{`/>`}</SectionHeading>
            <ul className="flex flex-wrap justify-center gap-5">
                {
                    libraries.map((item, index) => (
                        <motion.li key={index}
                        className="bg-white border border-black/[0.1] rounded-2xl px-5 py-3"
                        variants={fadeInAnimationVariants}
                        initial="initial"
                        whileInView="animate"
                        viewport={{
                            once: true,
                        }}
                        custom={index}>
                            <div className="flex flex-col justify-center items-center">
                                <Image src={item.url} alt={item.skill} width="40" height="40" />
                                <span className={`${robotoMono.className} text-gray-500 text-[0.9rem] mt-1`}>{item.skill}</span>
                            </div>
                            
                        </motion.li>
                    ))
                }
            </ul>
        </section>
    )
}