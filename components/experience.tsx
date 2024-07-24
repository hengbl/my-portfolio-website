"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useInView } from "react-intersection-observer";
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';
import { useTheme } from '@/context/theme-context';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from 'react';
import { SectionName } from "@/lib/types";


const robotoMono = Roboto_Mono({ weight: "400", subsets: ['latin'] });

function useSectionInView(sectionName : SectionName, threshold = 0.5) {
  const { ref, inView } = useInView({
      threshold,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName])

  return {
      ref, inView
  }
}

export default function Experience() {

  const { theme } =  useTheme();

  const { ref, inView } = useSectionInView("Experience", 0.25);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28">
        <SectionHeading>{`<`}My Experience{`/>`}</SectionHeading>
        <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                contentStyle={{
                  background: 
                    theme === 'light' ? '#f3f4f6' : 'rgba(255, 255, 255, 0.05)',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: 
                  theme === "light" ? '0.4rem solid #9ca3af' : "0.4rem solid rgba(255, 255, 255, 0.5)",
                }}
                visible={ inView }
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: theme === "light" ? 'white' : "rgba(255, 255, 255, 0.15)",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-1 font-normal text-gray-800 flex dark:text-white/75">
                    <Image src="/pin.png" alt="location" width="25" height="5"/>{item.location}
                </p>
                <p className={`${robotoMono.className} !mt-1 !font-normal !text-sm text-gray-500 dark:text-white/50`}>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          )
        )}
      </VerticalTimeline>
    </section>
  );
}
