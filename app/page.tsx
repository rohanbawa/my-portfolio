import ThemeToggle from "../components/ThemeToggle";
import Section from "../components/Section";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500 selection:text-white">
      {/* HEADER */}
      <nav className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-200/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-16 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-tight hover:text-blue-500 transition-colors">
            John Doe
          </a>

          <div className="flex items-center gap-6">
            {/* Text Links (Hidden on Mobile) */}
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <a href="#projects" className="hover:text-black dark:hover:text-white transition-colors">Projects</a>
              <a href="#experience" className="hover:text-black dark:hover:text-white transition-colors">Experience</a>
              <a 
                href="https://drive.google.com/file/d/YOUR_ACTUAL_RESUME_ID/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                Resume
              </a>
            </div>

            {/* Divider (Hidden on Mobile) */}
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 hidden md:block"></div>

            {/* Social Icons & Toggle (Visible on All Screens) */}
            <div className="flex items-center gap-4">
              <a href="https://github.com" target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@example.com" className="text-gray-500 hover:text-red-500 transition-colors">
                <Mail size={20} />
              </a>
              
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-24 flex flex-col gap-24">
        
        {/* HERO */}
        <Section id="about">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Full Stack Engineer building <span className="text-gray-400 dark:text-gray-600">minimal</span> & <span className="text-blue-500">robust</span> software.
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
            I craft accessible, pixel-perfect, performant web applications using Next.js and TypeScript.
          </p>
          {/* Call to Action Buttons (kept for emphasis) */}
          <div className="flex gap-4">
            <a href="#projects" className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-medium rounded-full hover:opacity-80 transition-opacity">
              View Work
            </a>
            <a href="mailto:hello@example.com" className="px-6 py-2 border border-gray-200 dark:border-gray-800 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              Contact Me
            </a>
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" delay={0.1}>
          <h3 className="text-xl font-bold mb-8 tracking-tight">Selected Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="group relative border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/20 p-6 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">
                    Project {item}
                  </h4>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">
                  A modern web application built with high performance in mind. Features subtle animations and clean UI.
                </p>
                <div className="flex gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">Next.js</span>
                  <span className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">TypeScript</span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" delay={0.2}>
          <h3 className="text-xl font-bold mb-8 tracking-tight">Experience</h3>
          <div className="space-y-12 border-l border-gray-200 dark:border-gray-800 ml-2 pl-8 relative">
            
            {/* Job 1 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border border-white dark:border-black bg-gray-200 dark:bg-gray-800"></div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-medium">Senior Developer</h4>
                <span className="text-sm font-mono text-gray-500">2022 — Present</span>
              </div>
              <p className="text-gray-500 mb-2">Company Name • New York</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                Led the migration of legacy codebases to Next.js 14, improving site performance by 40%.
              </p>
            </div>

            {/* Job 2 */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border border-white dark:border-black bg-gray-200 dark:bg-gray-800"></div>
              
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-2">
                <h4 className="text-lg font-medium">Software Engineer</h4>
                <span className="text-sm font-mono text-gray-500">2020 — 2022</span>
              </div>
              <p className="text-gray-500 mb-2">Tech Corp • Remote</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-2xl">
                Developed reusable component libraries using Tailwind CSS and React.
              </p>
            </div>

          </div>
        </Section>

        <footer className="pt-20 pb-10 flex justify-between items-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
          <p>© {new Date().getFullYear()} John Doe.</p>
        </footer>
      </div>
    </main>
  );
}