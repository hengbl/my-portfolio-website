"use client";

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from "framer-motion";
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

export default function Contact() {

  const { ref } = useSectionInView("Contact", 0.5);

  return (
    <motion.section id="contact" ref={ref}
    className="mb-20 sm:mb-28 w-[min(100%,50rem)]"
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}>
        <SectionHeading>{`<`}Contact Me{`/>`}</SectionHeading>
        <p className="text-center justify-center mb-5 -mt-6 text-gray-700 dark:text-gray-300">
          I'll be happy to schedule a ☕ chat online or irl with you!
        </p>
        <form className="flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success('Email sent successfully!');

        }}>
            <input type="email" className="h-14 rounded-lg border border-black/10 px-4
            dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
            placeholder='Your email'
            name="senderEmail" 
            required
            maxLength={500} />
            
            <textarea className="h-52 my-3 rounded-l-lg border border-black/10 p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none" 
            placeholder='Your message' 
            name="message" 
            required
            maxLength={5000} />

            <SubmitBtn />

        </form>
    </motion.section>
  )
}
