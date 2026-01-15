"use client";

import ThemeToggle from "../components/ThemeToggle";
import Section from "../components/Section";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion"; 

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

export default function Home() {
  // --- Data ---
  const skills = ["Java", "Spring Boot", "Next.js", "React", "Tailwind CSS", "Docker", "Git", "PostgreSQL"];

  const projects = [
    {
      title: "Chess",
      description: "Real-time Multiplayer Chess game",
      techStack: ["Next.js", "Tailwind", "Express","Websocket", ],
      link: "https://chess-flame-iota.vercel.app/" 
    },
    {
      title: "API Rate Limiter Gateway",
      description: "High-performance API gateway implementing sliding window rate limiting. Handles high concurrency with distributed state management.",
      techStack: ["Java", "Spring Boot", "Redis", "Docker"],
      link: "#"
    },
    {
      title: "Crypto Exchange Platform",
      description: "A high-frequency trading interface clone. Features real-time WebSocket order book updates and matching engine.",
      techStack: ["Next.js", "WebSockets", "Node.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Developer Portfolio",
      description: "A minimal, accessible personal site built with the latest Next.js 14 features, Framer Motion animations, and a Vercel-inspired dark theme.",
      techStack: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
      link: "https://github.com/yourusername/portfolio"
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      
      {/* HEADER */}
      <nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-gray-200 dark:border-gray-200/10 bg-white/80 dark:bg-black/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6 md:px-12 h-16 flex justify-between items-center">
          <a href="#" className="text-xl font-bold tracking-tight hover:text-blue-500 transition-colors">
            Rohan Bawa
          </a>

          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
              <a href="#skills" className="hover:text-black dark:hover:text-white transition-colors">Skills</a>
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
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800 hidden md:block"></div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/rohanbawa" target="_blank" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors"><Github size={20} /></a>
              <a href="https://linkedin.com/in/rohan-bawa27" target="_blank" className="text-gray-500 hover:text-blue-500 transition-colors"><Linkedin size={20} /></a>
              <a href="mailto:rohanbawa1998@gmail.com" className="text-gray-500 hover:text-red-500 transition-colors"><Mail size={20} /></a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-32 max-w-4xl mx-auto px-6 md:px-12 pb-12 md:pb-24 flex flex-col gap-24">
        
        {/* HERO */}
        <Section id="about">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[1.1]">
              Full Stack Engineer building <span className="text-gray-400 dark:text-gray-600">clean</span> & <span className="text-blue-500">robust</span> software.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mb-10 leading-relaxed">
              I craft accessible, pixel-perfect, performant web and enterprise applications.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-6 py-2 bg-black text-white dark:bg-white dark:text-black font-medium rounded-full hover:opacity-80 transition-opacity">
                View Work
              </a>
              <a href="mailto:hello@example.com" className="px-6 py-2 border border-gray-200 dark:border-gray-800 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Contact Me
              </a>
            </div>
          </motion.div>
        </Section>
        
        {/* EXPERIENCE */}
        <Section id="experience" delay={0.2}>
          <h3 className="text-xl font-bold mb-8 tracking-tight">Experience</h3>
          <div className="space-y-12 border-l border-gray-200 dark:border-gray-800 ml-2 pl-8 relative">
            
            {/* Capgemini */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border border-white dark:border-black bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                <h4 className="text-lg font-semibold text-black dark:text-white">Software Engineer</h4>
                <span className="text-sm font-mono text-gray-500">Feb 2020 — Aug 2023</span>
              </div>
              <p className="text-gray-500 mb-4 font-medium">Capgemini</p>
              <p className="text-gray-800 dark:text-gray-200 text-sm mb-4 font-medium italic">Architected scalable microservices for a user base of 600,000+.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <li><strong className="text-black dark:text-white">High-Scale Engineering:</strong> Designed and deployed 11+ Spring Boot microservices on AWS, optimizing architecture to cut API latency by 10%.</li>
                <li><strong className="text-black dark:text-white">Critical Impact:</strong> Slash system downtime by 30% by diagnosing and resolving core database bottlenecks and integration failures.</li>
                <li><strong className="text-black dark:text-white">Leadership:</strong> Directed a 5-person engineering team through Agile sprints, successfully delivering 10+ production-ready features.</li>
                <li><strong className="text-black dark:text-white">DevOps:</strong> Built the CI/CD pipeline from scratch using Jenkins to automate deployments for a high-traffic portal.</li>
              </ul>
            </div>

            {/* Mitu */}
            <div className="relative">
              <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border border-white dark:border-black bg-gray-200 dark:bg-gray-800"></div>
              <div className="flex flex-col sm:flex-row justify-between sm:items-baseline mb-1">
                <h4 className="text-lg font-semibold text-black dark:text-white">Software Engineering Intern (Big Data)</h4>
                <span className="text-sm font-mono text-gray-500">Jun 2019 — Jan 2020</span>
              </div>
              <p className="text-gray-500 mb-4 font-medium">Mitu Skillologies</p>
              <p className="text-gray-800 dark:text-gray-200 text-sm mb-4 font-medium italic">Optimized distributed systems and Big Data pipelines using Scala & Java.</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                <li><strong className="text-black dark:text-white">Automation:</strong> Wrote custom Scala/Java scripts to automate HDFS data ingestion, reducing manual processing effort by 30%.</li>
                <li><strong className="text-black dark:text-white">Performance Tuning:</strong> Tuned JVM memory configurations for MapReduce jobs, boosting execution speed and reducing latency by 15%.</li>
                <li><strong className="text-black dark:text-white">Reliability:</strong> Maintained 99.5% system uptime across a 100-node cluster by implementing proactive monitoring scripts.</li>
              </ul>
            </div>
          </div>
        </Section>
        

        {/* PROJECTS */}
        <Section id="projects" delay={0.1}>
          <h3 className="text-xl font-bold mb-8 tracking-tight">Selected Projects</h3>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.a 
                key={index} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/20 p-6 rounded-lg hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 block"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-lg font-semibold flex items-center gap-2">{project.title}</h4>
                  <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" />
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 text-xs font-medium text-gray-500 dark:text-gray-400">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded">{tech}</span>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </Section>


        {/* SKILLS */}
        <Section id="skills" delay={0.05}>
          <h3 className="text-xl font-bold mb-8 tracking-tight">Tech Stack</h3>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
               <motion.div
                 key={skill}
                 initial={{ opacity: 0, y: 10 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.05 }}
                 viewport={{ once: true }}
                 className="px-4 py-2 border border-gray-200 dark:border-gray-800 rounded-lg text-sm font-medium bg-gray-50 dark:bg-gray-900/50 hover:border-gray-400 dark:hover:border-gray-600 transition-colors cursor-default"
               >
                 {skill}
               </motion.div>
            ))}
          </div>
        </Section>

        <footer className="pt-20 pb-10 flex justify-between items-center text-sm text-gray-500 border-t border-gray-200 dark:border-gray-800">
          <p>© {new Date().getFullYear()} John Doe.</p>
        </footer>
      </div>
    </main>
  );
}