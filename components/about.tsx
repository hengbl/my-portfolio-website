"use client";

import React, { useRef } from 'react';
import SectionHeading from './section-heading';
import { motion, useScroll, useTransform } from "framer-motion";


export default function About() {
  const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"]
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1])
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1])

  return (
    <motion.div
    ref={ref}
    style={{
      scale: scaleProgress,
      opacity: opacityProgress
    }}>
      <section className="mb-28 max-w-[60rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      >
          <SectionHeading>{`<`}About Me{`/>`}</SectionHeading>
          <p className="mb-3">
              I'm currently an undergraduate at <span className="font-medium">National University of Singapore (NUS)</span> pursuing a <span className="font-medium">Bachelor of Science in Business Analytics</span>.{" "}
              I have always been fascinated by the troves of insights that lie within raw data hence I enjoy exploring Machine / Deep Learning models to transform the data for problem-solving.{" "}
              Besides Data Science, I also picked up <span className="italic">Web Development</span> and <span className="italic">Data Engineering</span> to better allow me to understand the entire Software Development Lifecycle and deploy ML solutions that are both flexible and scalable.{" "}
              I'm proficient in numerous data science libraries such as <span className="font-medium">Pandas, Seaborn, Scikit-Learn and PyTorch</span>. My core stack is <span className="font-medium">React (Next.js), Python, MongoDB and MySQL</span>.{" "}
              I also have experience in Cloud Computing, such as <span className="font-medium">AWS EC2, S3, RDS</span> and <span className="font-medium">GCP Storage, Function, BigQuery.</span>
          </p>
          <br></br>
          <p> 
              Beyond coding, I'm a fitness enthusiast and regularly keep myself active through <span className="font-medium">weight-lifting and calisthenics</span>. I also play sports such as <span className="font-medium">floorball and basketball</span>.{" "}
              Currently, I'm learning how to cook so that I can prepare meals for myself during my 1-year <a className="underline" href="https://enterprise.nus.edu.sg/education-programmes/nus-overseas-colleges/" target="_blank">NUS Overseas College (NOC)</a> programme in <span className="font-medium">Toronto, Canada</span> starting August 2024.
          </p>
    </section>
    </motion.div>
  )
}
