import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Callout from "@/components/Callout";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      <Navigation />
      <Hero />
      <Callout />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
