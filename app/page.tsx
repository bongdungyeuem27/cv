import { Contact, Languages } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
      <Hero />
      <Profile />
      <Education />
      <Experience />
      <Skills />
      <Languages />
      <Contact />
    </main>
  );
}
