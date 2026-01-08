
import ThemeToggle from "../components/ThemeToggle";
import Section from "../components/Section";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen max-w-3xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-24">
      {/* Header / Nav */}
      <nav className="flex justify-between items-center mb-12">
        <h1 className="text-xl font-bold tracking-tight">Rohan Bawa</h1>
        <ThemeToggle />
      </nav>

      {/* Hero Section */}
      <Section>
        <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6">
          Full Stack Engineer crafting minimal, robust digital experiences.
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-8">
          I build accessible, pixel-perfect, performant web applications using
          Next.js and TypeScript.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/rohanbawa" target="_blank" className="p-2 hover:text-gray-600 dark:hover:text-gray-300 transition"><Github /></a>
          <a href="https://linkedin.com" target="_blank" className="p-2 hover:text-blue-500 transition"><Linkedin /></a>
          <a href="mailto:hello@example.com" className="p-2 hover:text-red-500 transition"><Mail /></a>
        </div>
      </Section>

      {/* Projects Section */}
      <Section delay={0.1}>
        <h3 className="text-2xl font-bold mb-8">Selected Projects</h3>
        <div className="grid gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="group border border-gray-200 dark:border-gray-800 p-6 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition cursor-pointer">
              <h4 className="text-xl font-semibold mb-2 flex justify-between items-center">
                Project Name {item} 
                <span className="text-xs font-normal border border-gray-300 dark:border-gray-700 px-2 py-1 rounded-full">2024</span>
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                A brief description of the project goes here. It uses Next.js and Tailwind to achieve high performance.
              </p>
              <div className="flex gap-2 text-xs text-gray-500">
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Next.js</span>
                <span className="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">TypeScript</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experience Section */}
      <Section delay={0.2}>
        <h3 className="text-2xl font-bold mb-8">Experience</h3>
        <div className="space-y-8">
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-medium">Senior Developer</h4>
              <span className="text-sm text-gray-500">2022 — Present</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Company Name • New York, NY</p>
          </div>
          <div>
            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-lg font-medium">Software Engineer</h4>
              <span className="text-sm text-gray-500">2020 — 2022</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">Tech Corp • Remote</p>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="pt-20 pb-10 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Rohan Bawa. All rights reserved.</p>
      </footer>
    </main>
  );
}