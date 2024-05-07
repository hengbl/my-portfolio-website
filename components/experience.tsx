"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { useInView } from "react-intersection-observer";
import { Roboto_Mono } from 'next/font/google';
import Image from 'next/image';

const robotoMono = Roboto_Mono({ weight: "400", subsets: ['latin'] });

export default function Experience() {

  const { ref } = useSectionInView("Experience", 0.5);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28">
        <SectionHeading>{`<`}My Experience{`/>`}</SectionHeading>
        <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
          });
          return (
            <div key={index} ref={ref} className="vertical-timeline-element">
              <VerticalTimelineElement
                contentStyle={{
                  background: '#f3f4f6',
                  boxShadow: 'none',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  textAlign: 'left',
                  padding: '1.3rem 2rem',
                }}
                contentArrowStyle={{
                  borderRight: '0.4rem solid #9ca3af',
                }}
                visible={inView}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background: 'white',
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="!mt-1 font-normal text-gray-800 flex">
                    <Image src="/pin.png" alt="location" width="25" height="5"/>{item.location}
                </p>
                <p className={`${robotoMono.className} !mt-1 !font-normal !text-sm text-gray-500`}>
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </div>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
