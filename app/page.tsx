import ThemeToggle from "../components/ThemeToggle";
import Section from "../components/Section";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* STICKY HEADER 
        - sticky top-0: Keeps it pinned to the top
        - backdrop-blur-md: Gives it that frosted glass effect
        - z-50: Ensures it sits ON TOP of all other content
      */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-[#09090b]/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-16 flex justify-between items-center">
          {/* Logo / Home Link */}
          <a href="#" className="text-xl font-bold tracking-tight hover:opacity-80 transition">
            John Doe
          </a>

          <div className="flex items-center gap-6">
            {/* Navigation Links (Hidden on very small phones, visible on sm+) */}
            <div className="hidden sm:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              <a href="#projects" className="hover:text-black dark:hover:text-white transition">
                Projects
              </a>
              <a href="#experience" className="hover:text-black dark:hover:text-white transition">
                Experience
              </a>
            </div>
            
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 hidden sm:block"></div>
            
            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Main Content Wrapper */}
      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-20 md:gap-24">
        
        {/* Hero Section */}
        <Section id="about">
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 leading-tight">
            Full Stack Engineer crafting minimal, robust digital experiences.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8">
            I build accessible, pixel-perfect, performant web applications using
            Next.js and TypeScript.
          </p>
          <div className="flex gap-4">
            <a href="https://github.com" target="_blank" className="p-2 hover:text-gray-600 dark:hover:text-gray-300 transition"><Github /></a>
            <a href="https://linkedin.com" target="_blank" className="p-2 hover:text-blue-500 transition"><Linkedin /></a>
            <a href="mailto:hello@example.com" className="p-2 hover:text-red-500 transition"><Mail /></a>
          </div>
        </Section>

        {/* Projects Section (Added id="projects") */}
        <Section id="projects" delay={0.1}>
          <h3 className="text-2xl font-bold mb-8 scroll-mt-24">Selected Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition cursor-pointer">
                <h4 className="text-xl font-semibold mb-2 flex justify-between items-center">
                  Project {item} 
                  <span className="text-xs font-normal border border-gray-300 dark:border-gray-700 px-2 py-1 rounded-full">2024</span>
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  A brief description of the project goes here. Responsive design ensures this looks good on all devices.
                </p>
                <div className="flex gap-2 text-xs text-gray-500">
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Tailwind</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section (Added id="experience") */}
        <Section id="experience" delay={0.2}>
          <h3 className="text-2xl font-bold mb-8 scroll-mt-24">Experience</h3>
          <div className="space-y-10">
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2 gap-1">
                <h4 className="text-lg font-medium">Senior Developer</h4>
                <span className="text-sm text-gray-500">2022 — Present</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Company Name • New York, NY</p>
            </div>
            <div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2 gap-1">
                <h4 className="text-lg font-medium">Software Engineer</h4>
                <span className="text-sm text-gray-500">2020 — 2022</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">Tech Corp • Remote</p>
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="pt-20 pb-10 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}