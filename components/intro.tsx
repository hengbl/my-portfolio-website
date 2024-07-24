"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Roboto_Mono, Roboto_Serif } from 'next/font/google';
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';
import { FaGithub } from "react-icons/fa";

import { useEffect, useState } from 'react';


const robotoMono = Roboto_Mono({ weight:["100", "400","700"], subsets: ['latin'] });
const robotoSerif = Roboto_Serif({ weight:["400","700"], subsets: ['latin'] });

export default function Intro() {
    const { ref } = useSectionInView("Home", 0.5);
    const mailtoLink = `mailto:${"boonlong.heng@u.nus.edu"}`;
    const [typedText, setTypedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);

    useEffect(() => {
        const fullText = "An aspiring Data Scientist / Engineer from the sunny island of Singapore";
        let i = 0;
        const duration = 60;
        const typingEffect = setInterval(() => {
            if (i <= fullText.length) {
                setTypedText(fullText.substring(0, i));
                i++;
            } else {
                clearInterval(typingEffect);
                setIsTypingComplete(true);
            }
        }, duration);

        return () => clearInterval(typingEffect);
    }, []);

    const renderTypedText = (text: String) => {
        const specialWords = [
            { word: 'Data Scientist / Engineer', className: 'font-bold' },
        ];
        
        const regex = new RegExp(`(${specialWords.map(w => w.word).join('|')})`, 'gi');
        const parts = text.split(regex);

        return parts.map((part, index) => {
            const specialWord = specialWords.find(w => w.word.toLowerCase() === part.toLowerCase());
            return specialWord 
                ? <span key={index} className={specialWord.className}>{part}</span> 
                : part;
        });
    };

    return (
        <section ref={ref} id="home" className={`${robotoMono.className} relative flex flex-col h-screen items-center justify-center sm:mb-28 max-w-[70rem] mx-auto mt:0 sm:mt-[-10rem] scroll-mt-[100rem]`}>
            <div className="flex flex-col sm:flex-row sm:items-start items-center sm:justify-start justify-center w-full">
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
                        className="rounded-full object-cover border-[0.2rem] border-white shadow-xl w-[12rem] h-[12rem] sm:w-[20rem] sm:h-[20rem]" 
                        />
                    </motion.div>
                </div>
                
                <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
                    {/* Introduction Message */}
                    <motion.div className="mb-10 mt-4 px-4 text-xl text-center font-medium !leading-[1.5] sm:text-[1.7rem] sm:text-left"
                    initial={{ opacity: 0, y: 100}}
                    animate={{ opacity: 1, y: 0 }}
                    >
                        <h1 className={`${robotoSerif.className} text-3xl/[2.5rem] sm:text-5xl/[4rem] mb-4`}>Hello, my <br/> name is  <span className="font-bold">Boon Long</span> 👋</h1> 
                        <div className="font-normal text-base sm:text-xl text-gray-800 dark:text-gray-200">
                            <span className="typing-text font-normal text-base sm:text-xl text-gray-700 dark:text-gray-300">{renderTypedText(typedText)}</span>
                            {isTypingComplete && (
                                <Image src="/singapore.png" alt="Singapore" width="30" height="30" className="inline-block h-[1rem] w-[1rem] sm:h-[2rem] sm:w-[2rem] ml-2" />
                            )}
                            <span className="cursor">|</span>
                        </div>
                    </motion.div>

                    {/* Social Links and CV */}
                    <div className={`${robotoSerif.className} flex sm:flex-row sm:items-start sm:justify-start gap-1 sm:gap-4 px-4 mt-[-1rem]`}>   
                        {/* Redirect to Github */}
                        <motion.a className="group flex flex-col items-center gap-2 dark:text-white"
                        href="https://github.com/hengbl" target="_blank"
                        initial={{ opacity: 0, y: 100}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.1,
                        }}>
                            <FaGithub className="text-3xl sm:text-[2.5rem] group-hover:animate-bounce transition mb-0" />
                            <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold dark:text-gray-200">Github</span>
                        </motion.a>

                        {/* Redirect to Linkedin */}
                        <motion.a className="group flex flex-col items-center gap-2"
                        href="https://www.linkedin.com/in/hengboonlong/" target="_blank"
                        initial={{ opacity: 0, y: 100}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.15,
                        }}>
                            <Image src="/linkedin.png" alt="linkedin" width="40" height="40" className="h-[1.875rem] w-[1.875rem] sm:h-[2.5rem] sm:w-[2.5rem] group-hover:animate-bounce transition mb-0" />
                            <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold dark:text-gray-200">LinkedIn</span>
                        </motion.a>
                        
                        {/* Open CV in new tab */}
                        <motion.div
                        initial={{ opacity: 0, y: 100}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.2,
                        }}>
                            <Link className="group flex flex-col items-center gap-2"
                            href="/Boon_Long_CV.pdf" target="_blank">
                                <Image src="/curriculum-vitae.png" alt="cv" width="40" height="40" className="h-[1.875rem] w-[1.875rem] sm:h-[2.5rem] sm:w-[2.5rem] group-hover:animate-bounce transition mb-0" />
                                <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold dark:text-gray-200">Portfolio</span>
                            </Link>
                        </motion.div>
                        
                        {/* Redirect to Email */}
                        <motion.div
                        initial={{ opacity: 0, y: 100}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.25,
                        }}>
                            <Link href={mailtoLink} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2">
                                <Image src="/email.png" alt="email" width="40" height="40" className="h-[1.875rem] w-[1.875rem] sm:h-[2.5rem] sm:w-[2.5rem] group-hover:animate-bounce transition mb-0" />
                                <span className="text-sm mt-0 opacity-0 group-hover:opacity-100 transition-opacity text-gray-500 font-bold dark:text-gray-200">Email</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div className="hidden sm:flex flex-col"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}>
                <Link href="#about">
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                        <div className="mouse-icon sm:w-8 sm:h-12 w-6 h-9 border-2 border-gray-700 dark:border-gray-300 rounded-full flex items-center justify-center overflow-hidden">
                        <motion.div
                            className="scroll-dot sm:w-2 sm:h-2 w-1 h-1 bg-gray-700 dark:bg-gray-300 rounded-full"
                            initial={{ y: -10, opacity: 1 }}
                            animate={{ y: [-10, 10], opacity: [1, 0.2] }}
                            transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 1.5,
                            ease: "easeInOut",
                            repeatDelay: 0.5
                            }}
                        />
                        </div>
                    </div>
                    <span className="absolute bottom-20 translate-y-7 -translate-x-1/2 dark:text-gray-300 text-sm">Scroll</span>
                </Link>
            </motion.div>

            <style jsx>{`
                @keyframes blink {
                    0% { opacity: 1; }
                    50% { opacity: 0; }
                    100% { opacity: 1; }
                }

                .cursor {
                    animation: blink 0.7s infinite;
                }

                .typing-text {
                    @apply inline-block;
                }
            `}</style>
        </section>
    )
}