"use client";

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { motion, useScroll, useTransform } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import Image from 'next/image';

export default function About() {

  const { ref } = useSectionInView("About", 0.75);

  const ref2 = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
    ref={ref2}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}>
    <section ref={ref} className="mb-28 max-w-[70rem] sm:text-start leading-8 sm:mb-40 scroll-mt-28 "
    id="about"
    >
        <SectionHeading>{`<`}About Me{`/>`}</SectionHeading>

        <div className="flex items-end"> 
          
          <div className="sm:w-3/4 pl-4 transform sm:-skew-x-6 -skew-x-2 bg-gray-100 border border-black/5 p-5 inline-block rounded-lg dark:bg-white/10"> 
            <p className="mb-3">
                Hello! I'm currently an undergraduate at the <span className="font-medium">National University of Singapore (NUS)</span> pursuing a <span className="font-medium">Bachelor of Science in Business Analytics</span>.{" "}
                My academic and professional journey is fueled by a profound passion for uncovering the hidden stories within data. I specialise in Machine Learning, striving to transform complex data into actionable insights and innovative solutions.{" "}
                Besides Data Science, I also picked up <span className="italic">Web Development</span> and <span className="italic">Data Engineering</span> to equip me with the skills to manage the entire Software Development Lifecycle (SDLC) and deploy scalable ML solutions.
            </p>
            <p> 
                Beyond coding, I'm a fitness enthusiast and regularly keep myself active through <span className="font-medium">weight-lifting</span> and <span className="font-medium">calisthenics</span>. I also enjoy team sports such as <span className="font-medium">floorball</span> and <span className="font-medium">basketball</span>.{" "}
                Currently, I'm doing a 1-year internship as a Software Engineer at PolicyMe as part of the <a className="underline" href="https://enterprise.nus.edu.sg/education-programmes/nus-overseas-colleges/" target="_blank">NUS Overseas College (NOC)</a> programme in <span className="font-medium">Toronto, Canada</span> since August 2024.
            </p>
          </div>
          <Image src="/hbl.png" alt="Me" width="275" height="369" priority={true} 
          className="w-1/4 hidden sm:block" /> 
        </div>
        
    </section>
  </motion.div>
  )
}
