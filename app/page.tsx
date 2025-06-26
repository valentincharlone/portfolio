import About from "@/components/about";
import Divider from "@/components/divider";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Hero />
      <Divider />
      <About />
      <Projects />
      <Skills />
    </main>
  );
}
