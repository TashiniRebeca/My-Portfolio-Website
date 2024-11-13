import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import SectionDivider from "@/components/ui/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center container mt-24 mx-auto px-12 py-4">
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Contact />
    </main>
  );
}
