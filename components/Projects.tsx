"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  role: string;
}

const projects: Project[] = [
  {
    title: "Yuh Gettin Tru?",
    description: "The largest unified shopping search in the Caribbean. Aggregates products from 60+ local stores allowing users to search over 280,000 items instantly.",
    tags: ["AI", "Search", "Next.js", "Python"],
    link: "https://yuhgettintru.com",
    role: "Founder & Lead Dev"
  },
  {
    title: "We Outside 246",
    description: "AI-powered events discovery platform for Barbados. Automatically aggregates and categorizes social events, parties, and concerts.",
    tags: ["AI", "Automation", "Events"],
    link: "https://weoutside246.com",
    role: "Founder"
  },
  {
    title: "Talk to Tali (prev Untangle)",
    description: "A shame-free, context-aware task manager designed specifically for neurodiverse minds (ADHD). Integrates directly into WhatsApp for frictionless capture.",
    tags: ["AI", "LLMs", "Accessibility", "Productivity"],
    link: "https://untangleapp.ai",
    role: "Creator"
  },
  {
    title: "GovTech (alpha.gov.bb)",
    description: "The Government of Barbados' digital services portal. Helped re-engineer how citizens access public services with a focus on speed and clarity.",
    tags: ["GovTech", "Digital Transformation", "UX"],
    link: "https://alpha.gov.bb",
    role: "Full Stack Developer"
  },
  {
    title: "Yuh Hear Dem",
    description: "AI guide to Barbadian Parliament. Transcribes and analyzes parliamentary debates to make democracy more accessible to citizens.",
    tags: ["AI", "Civic Tech", "NLP"],
    link: "https://yuhheardem.com",
    role: "Creator"
  },
  {
    title: "Choirless",
    description: "Award-winning solution allowing remote musicians to play together asynchronously. 2nd Place winner in IBM Call for Code Global Challenge.",
    tags: ["Audio Processing", "Cloud", "Open Source"],
    link: "https://choirless.github.io",
    role: "Co-Creator"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Selected Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A collection of platforms and tools I've built to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-primary/50 transition-colors group flex flex-col h-full"
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-primary">{project.role}</span>
                <div className="flex gap-3">
                  {project.github && (
                    <Link href={project.github} target="_blank" className="text-slate-400 hover:text-white">
                      <Github size={18} />
                    </Link>
                  )}
                  {project.link && (
                    <Link href={project.link} target="_blank" className="text-slate-400 hover:text-white">
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-slate-400 mb-6 leading-relaxed flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs bg-slate-900 text-slate-300 px-3 py-1 rounded-full border border-slate-800">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
