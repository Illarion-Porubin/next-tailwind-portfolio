import AboutMe from "@/components/main/AboutMe";
import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-flex w-flex">
      <div className="flex flex-col gap-20">
        <Hero/>
        <Projects/>
        <AboutMe/>
        <Skills/>
        <Encryption/>
      </div>
    </main>
  );
}