import ThemeToggle from "../components/ThemeToggle";
import Section from "../components/Section";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    // RESPONSIVE UPDATE: 
    // - px-6 (standard padding)
    // - md:px-12 (more breathing room on desktop)
    // - max-w-4xl (slightly wider to fit 2-column project grid better)
    <main className="min-h-screen max-w-4xl mx-auto px-6 md:px-12 py-12 md:py-20 flex flex-col gap-20 md:gap-24">
      
      {/* Header / Nav */}
      <nav className="flex justify-between items-center mb-8 md:mb-12">
        <h1 className="text-xl font-bold tracking-tight">John Doe</h1>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <Section>
        {/* RESPONSIVE UPDATE: text-4xl on mobile, text-6xl on tablet/desktop */}
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

      {/* Projects Section */}
      <Section delay={0.1}>
        <h3 className="text-2xl font-bold mb-8">Selected Projects</h3>
        
        {/* RESPONSIVE UPDATE: 
            - grid-cols-1 (1 column by default/mobile) 
            - md:grid-cols-2 (2 columns on tablet/desktop) 
        */}
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

      {/* Experience Section */}
      <Section delay={0.2}>
        <h3 className="text-2xl font-bold mb-8">Experience</h3>
        <div className="space-y-10">
          <div>
            {/* RESPONSIVE UPDATE: 
                - flex-col (stacked vertically on mobile) 
                - sm:flex-row (side-by-side on small tablets and up) 
            */}
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
        {/** TO-DO : Add a navbar to navigate easily between sections */}
      {/* Footer */}
      <footer className="pt-20 pb-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} John Doe. All rights reserved.</p>
      </footer>
    </main>
  );
}