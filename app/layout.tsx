import './globals.css';
import { Suspense } from 'react';
import { Inter } from 'next/font/google';
import Header from "@/components/header";
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import ActiveSectionContextProvider from '@/context/active-section-context';
import AuthSessionContextProvider from '@/context/auth-session-context';
import Loading from './loading';

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
      <body className={inter.className}>
          <ThemeContextProvider>
            <div className="w-full min-h-screen bg-gray-50 dark:bg-gray-900">
              {/* Background gradients */}
              <div className="fixed top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] 
                bg-[#dbe9ee] dark:bg-[#2c3e50] sm:w-[68.75rem]" />
              <div className="fixed top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] 
                bg-[#e4f9ff] dark:bg-[#1c3a57] 
                sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]" />

              {/* Content */}
              <div className="relative z-10 pt-28 sm:pt-36 text-gray-950 dark:text-gray-50 dark:text-opacity-90">
                <ActiveSectionContextProvider>
                  <AuthSessionContextProvider>
                    <Suspense fallback={<Loading />}>
                      <Header />
                        {children}
                      <Footer />
                    </Suspense>
                  </AuthSessionContextProvider>
                  <Toaster position="bottom-right" />
                  <ThemeSwitch />
                </ActiveSectionContextProvider>
              </div>
            </div>
          </ThemeContextProvider>
      </body>
    </html>
  )
}