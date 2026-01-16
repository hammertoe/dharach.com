"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          <div className="prose prose-lg prose-invert mx-auto text-slate-300 leading-relaxed space-y-6">
            <p>
              <span className="text-white font-medium">Matt Hamilton</span> is a technologist, founder, and developer advocate passionate about the intersection of artificial intelligence, blockchain, and community impact. With a global career spanning roles at major tech organizations including <span className="text-primary">IBM</span>, <span className="text-primary">Ripple</span>, and the <span className="text-primary">Arbitrum Foundation</span>, Matt has spent years acting as the "voice of the developer," helping to shape tools and experiences that empower creators worldwide to build on decentralized and intelligent systems.
            </p>
            
            <p>
              Currently based in <span className="text-white">Barbados</span>, Matt is leveraging his expertise to drive digital transformation and accessibility within the local landscape. He was previously part of the launch team for the Barbados Government's <strong className="text-white">alpha.gov.bb</strong> portal, working to make government services clearer and faster for the public.
            </p>
            
            <p>
              His commitment to community support continues through AI-powered platforms like <strong className="text-white">We Outside 246</strong> and <strong className="text-white">Yuh Hear Dem</strong>. Most recently, he launched <strong className="text-white">Yuh Gettin Tru?</strong>, the largest unified shopping search in the Caribbean. This platform empowers residents and visitors to easily discover products and services across the island, providing a vital bridge between consumers and Bajan entrepreneurs.
            </p>
            
            <p>
              Beyond his local initiatives, Matt is a recognized speaker and educator in the global tech community. Whether co-creating award-winning solutions like <strong className="text-white">Choirless</strong> for remote musicians or developing <strong className="text-white">Untangle</strong>, a context-aware task manager for neurodiverse minds, his work consistently bridges the gap between complex emerging technologies and human-centric solutions. He brings a unique blend of technical depth and creative problem-solving to every project, championing innovation that is both powerful and inclusive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
