"use client"

import { PROJECTS } from "@/data";
import { ThemeToggle } from "@/components/ThemeToggle"
import { Github, Linkedin, Mail, ArrowDown, ArrowUpRight } from "lucide-react"
import { motion, Variants } from "framer-motion"
import { useState } from 'react';


export default function Home() {
  const containerVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  }

  const itemVars = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  } satisfies Variants;
  

  return (
    <main className="min-h-screen selection:bg-ivory-200 dark:selection:bg-slate-800">
      {/* 1. NAVIGATION */}
      <nav className="fixed top-0 w-full z-50 border-b border-ivory-200/50 dark:border-white/5 bg-ivory-50/50 dark:bg-[#0A0A0A]/50 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-slate-300 font-medium">Available / 2026</span>
            <div className="h-3 w-px bg-slate-300 dark:bg-white/10" />
            <a href="https://github.com/LeroyTan041004" target="_blank" className="font-mono text-[10px] uppercase hover:text-blue-600 transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/leroy-tan-a08740255/" target="_blank" className="font-mono text-[10px] uppercase hover:text-blue-600 transition-colors">LinkedIn</a>
          </div>
          <ThemeToggle />
        </div>
      </nav>

      {/* 2. HERO SECTION */}
      <section className="max-w-5xl mx-auto px-8 pt-48 pb-32">
        <motion.div variants={containerVars} initial="initial" animate="animate" className="flex flex-col">
          <motion.span variants={itemVars} className="font-mono text-xs text-slate-600 dark:text-ivory-300 mb-6 tracking-tight uppercase font-bold block">
            Leroy Tan | Cybersecurity Graduate
          </motion.span>
          <motion.h1 variants={itemVars} className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-10">
            Hello, I'm Leroy. <br />
            <span className="text-slate-400 dark:text-slate-500">
              Scalable code. <br className="hidden md:block" /> 
              <span className="text-slate-400 dark:text-slate-500">
                Secure by design.
              </span>
            </span>
          </motion.h1>
          <motion.div variants={itemVars} className="flex items-center gap-8">
            <div className="flex gap-6">
              {[
                { Icon: Github, href: "https://github.com/LeroyTan041004" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/leroy-tan-a08740255/" },
                { Icon: Mail, href: "mailto:leroytan04@gmail.com" }
              ].map(({ Icon, href }, index) => (
                <motion.a 
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative flex items-center justify-center transition-transform hover:scale-110"
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <motion.div
                    className="dark:group-hover:text-white transition-colors duration-300"
                  >
                    <Icon 
                      size={22} 
                      strokeWidth={2} 
                      style={{ color: 'inherit' }} // Forces the Icon to follow our motion.div color
                    />
                  </motion.div>
                </motion.a>
              ))}
            </div>
            <div className="h-px w-12 bg-ivory-200 dark:bg-white/10" />
            <a href="#about" className="font-mono text-[10px] uppercase tracking-widest font-bold flex items-center gap-2 group">
              Explore <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* 3. ABOUT & PROFICIENCY SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-8 py-24 border-t border-ivory-200/50 dark:border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            

            style={{ color: 'inherit' }} 
            className="text-3xl font-bold tracking-tighter italic text-slate-900 dark:text-white transition-colors duration-500"
          >
            About Me
          </motion.h2>
          
          <div className="md:col-span-2 space-y-12">
            <div className="text-xl md:text-2xl leading-relaxed font-medium">
              <motion.span 
                variants={itemVars}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="text-slate-400 font-bold text-2xl md:text-3xl block mb-4 transition-colors"
              >
                Cybersecurity Graduate & Developer.
              </motion.span> 

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-slate-600 dark:text-slate-400"
              >
                Fully commited to a life-long journey of learning. I'm a full stack developer with a passion for TypeScript, Kali and all things Cybersecurity.
                <br /><br />
                I love spending my time coding and facing challenges. I'm highly adaptable to new challenges and enjoy working with others.
                <br /><br />
                While I'm not at my computer, I spend my time reading or going to the gym to keep fit.
              </motion.p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold mb-8 block text-slate-600 dark:text-slate-400">
                Technical Proficiency
              </span>
              <div className="flex flex-wrap gap-4 md:gap-6">
                {[
                  { name: "Python", slug: "python" },
                  { name: "HTML5", slug: "html" },
                  { name: "CSS3", slug: "css" },
                  { name: "JavaScript", slug: "js" },
                  { name: "React", slug: "react" },
                  { name: "Next.js", slug: "nextjs" },
                  { name: "Tailwind", slug: "tailwind" },
                  { name: "Docker", slug: "docker"},
                  { name: "Kali", slug: "kali"},
                  { name: "MySql", slug: "mysql"}
                ].map((tech, index) => (
                  <motion.div 
                    key={tech.slug} 
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                    className="flex flex-col items-center justify-center p-2 w-22 h-26 md:w-26 md:h-30 
                              bg-transparent rounded-xl 
                              border border-slate-200 dark:border-slate-400 
                              cursor-default transition-colors hover:border-blue-500"
                  >
                    <img 
                      src={`https://skillicons.dev/icons?i=${tech.slug}`} 
                      className="h-14 w-14 md:h-16 md:w-16 object-contain" 
                      alt={tech.name} 
                    />
                    <span className="mt-3 font-mono text-[10px] uppercase font-bold text-slate-600 dark:text-slate-400 tracking-tighter text-center">
                      {tech.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. PROJECTS SECTION (WITH SCREENSHOTS) */}
      <section id="work" className="max-w-5xl mx-auto px-8 py-24 border-t border-ivory-200/50 dark:border-white/5">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-3xl font-bold tracking-tighter italic">Selected Projects</h2>
          <span className="font-mono text-[10px] uppercase opacity-40">GitHub Portals</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {PROJECTS.map((project) => (
            <a key={project.id} href={project.githubUrl} target="_blank" className="group block">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
                <div className="relative aspect-video overflow-hidden rounded-sm border border-ivory-200 dark:border-white/10 bg-ivory-100 dark:bg-white/5">
                  <img src={project.image} alt={project.title} className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Github className="text-white" size={32} />
                  </div>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-bold tracking-tight group-hover:text-blue-600 transition-colors">{project.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{project.description}</p>
                  </div>
                  <ArrowUpRight size={20} className="text-slate-300 group-hover:text-blue-600 transition-all" />
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="max-w-5xl mx-auto px-8 py-40 border-t border-ivory-200/50 dark:border-white/5 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-12">Have a question or want to work together? <br /><span className="text-slate-400">Drop me an email!</span></h2>
          <a href="mailto:leroytan04@gmail.com" className="inline-block px-12 py-5 bg-slate-900 dark:bg-ivory-100 text-white dark:text-slate-900 rounded-full font-bold text-lg hover:scale-105 transition-transform">Get in touch</a>
        </motion.div>
      </footer>

      {/* BACKGROUND DETAILS */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-ivory-100/30 dark:bg-white/2 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-ivory-200/20 dark:bg-white/1 blur-[120px]" />
      </div>
    </main>
  )
}