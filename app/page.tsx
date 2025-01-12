import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Experience from "@/components/home/experience";
import Intro from "@/components/intro";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import ScrollManager from '@/components/scrollManager';

export default async function Home() {
  
  return (
    <main className="flex flex-col items-center px-4">
      <ScrollManager />
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
