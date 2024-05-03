import React from 'react';
import { Roboto_Mono } from 'next/font/google';

const robotoMono = Roboto_Mono({ weight:"600", subsets: ['latin'] });

type SectionHeadingProps = {
    children: React.ReactNode;
};

export default function SectionHeading({
    children }: SectionHeadingProps) {
  return (
    <h2 className={`${robotoMono.className} text-4xl capitalize mb-8 text-center`}>{ children }</h2>
  )
}
