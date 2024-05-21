"use client";

import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { useTheme } from '@/context/theme-context';


export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed bottom-5 left-5">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only" checked={theme === "dark"} onChange={toggleTheme} />
        <div className={`relative w-16 h-8 rounded-full transition-colors duration-300 
          ${theme === "dark" ? "bg-[#4D46BF] border-white border-2" : "bg-[#73BDBB] border-gray-200 border-2" }`}>
          <div className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full shadow-md transition-transform duration-300 ease-in-out
            ${theme === "dark" ? "translate-x-8 bg-[#7D79D3]" : "translate-x-1 bg-[#F8DC6E]"}`}>
            <div className="flex items-center justify-center h-full text-gray-700 dark:text-yellow-300">
              {theme === "light" ? <BsSun size={18} /> : <BsMoon size={18} />}
            </div>
          </div>
        </div>
      </label>
    </div>
  );
}
