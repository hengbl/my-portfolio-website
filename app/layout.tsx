import './globals.css';
/* add { } if the component is not default export */ 
import { Inter } from 'next/font/google';
import Header from "@/components/header";
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Boon Long | Portfolio Website',
  description: "Boon Long's Personal Portfolio Website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} 
        bg-gray-50 text-gray-950 relative pt-28 sm:pt-36
        dark:bg-gray-900 dark:text-gray-50 dark:text-opacit-90`}>
        
        {/* Background */}
        <div className="bg-[#dbe9ee] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]
        dark:bg-[#946263]"></div>
        <div className="bg-[#e4f9ff] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        dark:bg-[#676394]"></div>
      
      <ThemeContextProvider>
        <ActiveSectionContextProvider>
          <Header/>
          {children}
          <Footer />
          <Toaster position="bottom-right" />
          <ThemeSwitch />
        </ActiveSectionContextProvider>
      </ThemeContextProvider>
      </body>
    </html>
  )
}
