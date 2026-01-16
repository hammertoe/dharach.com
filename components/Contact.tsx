"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-900/50 to-slate-950">
      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Let's Build Together</h2>
          <p className="text-slate-400 text-lg mb-12">
            Interested in working together? Whether you need technical consulting, 
            developer advocacy strategy, or a full-stack solution, I'm here to help.
          </p>
          
          <div className="flex justify-center gap-6 mb-16">
            <Link 
              href="mailto:matt@dharach.com"
              className="group flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <Mail size={24} />
              </div>
              <span className="text-sm font-medium">Email</span>
            </Link>
            
            <Link 
              href="https://linkedin.com/in/matthamilton77/"
              target="_blank"
              className="group flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <Linkedin size={24} />
              </div>
              <span className="text-sm font-medium">LinkedIn</span>
            </Link>
            
            <Link 
              href="https://twitter.com/hammertoe"
              target="_blank"
              className="group flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <Twitter size={24} />
              </div>
              <span className="text-sm font-medium">Twitter</span>
            </Link>
            
            <Link 
              href="https://github.com/hammertoe"
              target="_blank"
              className="group flex flex-col items-center gap-2 hover:text-primary transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-900 border border-slate-800 group-hover:border-primary group-hover:bg-primary/10 transition-all">
                <Github size={24} />
              </div>
              <span className="text-sm font-medium">GitHub</span>
            </Link>
          </div>
          
          <p className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} Matt Hamilton. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
