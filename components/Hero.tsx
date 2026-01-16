"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden mesh-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          <div className="flex-1 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
                Technologist & Founder
              </h2>
              <h1 className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6">
                Building the <span className="text-gradient">Future</span> of Digital Experiences
              </h1>
              <p className="text-slate-300 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                I help organizations bridge the gap between complex emerging technologies and human-centric solutions. 
                Specializing in AI, Blockchain, and Developer Advocacy.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link 
                  href="#contact"
                  className="bg-primary hover:bg-teal-600 text-slate-950 font-bold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  Work with me <ArrowRight size={20} />
                </Link>
                <Link 
                  href="#projects"
                  className="border border-slate-700 hover:border-slate-500 bg-slate-900/50 hover:bg-slate-800 text-white py-4 px-8 rounded-full transition-all"
                >
                  View Projects
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-blue-600 rounded-full blur-2xl opacity-20 animate-pulse" />
              <Image
                src="/matt.jpg"
                alt="Matt Hamilton"
                fill
                className="object-cover rounded-full border-4 border-slate-800/50 shadow-2xl relative z-10"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
