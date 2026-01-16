"use client";

import { motion } from "framer-motion";

const experience = [
  {
    company: "Dharach Pte. Lte",
    role: "Director",
    period: "May 2022 - Present",
    description: "Software development and consultancy, focusing on bridging the gap between complex technologies and human-centric solutions."
  },
  {
    company: "GovTech Barbados Ltd.",
    role: "Full Stack Developer",
    period: "Sep 2025 - Nov 2025",
    description: "Built the new alpha.gov.bb site as part of a cross-functional team. Worked across frontend and backend to deliver citizen-centric public services."
  },
  {
    company: "ASIMOV Protocol",
    role: "Head of Developer Growth and Engineering",
    period: "Mar 2025 - Nov 2025",
    description: "Led DevRel at the intersection of AI and structured data. Championed Positron (on-device intelligence layer) and grew the developer community for verified knowledge graphs."
  },
  {
    company: "The Arbitrum Foundation",
    role: "Senior DevRel",
    period: "May 2024 - Feb 2025",
    description: "Helped developers build on the leading Layer 2 network for Ethereum. Focused on L3 chains and Stylus (Rust smart contracts)."
  },
  {
    company: "Protocol Labs",
    role: "Principal Developer Advocate",
    period: "Aug 2022 - May 2024",
    description: "Worked on Filecoin Virtual Machine (FVM) and Interplanetary Consensus (IPC), helping developers build on decentralized infrastructure."
  },
  {
    company: "Bittensor",
    role: "Director of Developer Relations",
    period: "May 2022 - Aug 2022",
    description: "Led early developer relations strategy for decentralized machine learning network."
  },
  {
    company: "Ripple",
    role: "Director of Developer Relations",
    period: "Feb 2021 - Mar 2022",
    description: "Led global DevRel strategy, managed XRP Ledger Grants ($5M+), launched Discord community, and hosted weekly developer livestreams."
  },
  {
    company: "IBM",
    role: "Developer Advocate (AI/ML)",
    period: "Mar 2018 - Feb 2021",
    description: "Focused on AI/ML cloud services. Hosted IBM Think! 'Hallway Track' and co-created award-winning solution 'Choirless'."
  },
  {
    company: "Netsight Internet Solutions",
    role: "Technical Director",
    period: "2000 - Nov 2014",
    description: "Co-founded and led technical strategy for a web development agency. Specialized in Python/Plone CMS, managed hosting infrastructure, and delivered solutions for national and international clients."
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-between mb-16">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-center flex-1">Experience</h2>
            <a 
              href="/MattHamilton_CV_2026.pdf" 
              target="_blank"
              className="hidden md:inline-flex items-center gap-2 px-4 py-2 border border-primary/50 text-primary text-sm font-medium rounded-full hover:bg-primary/10 transition-colors"
            >
              Download CV
            </a>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-700 bg-slate-900 group-hover:bg-primary group-hover:border-primary transition-colors shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-slate-500 group-hover:bg-white transition-colors" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-slate-900/50 p-6 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-white">{job.company}</h3>
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded whitespace-nowrap ml-0 sm:ml-2 mt-1 sm:mt-0 w-fit">{job.period}</span>
                  </div>
                  <div className="text-sm font-medium text-slate-400 mb-3">{job.role}</div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12 md:hidden">
            <a 
              href="/MattHamilton_CV_2026.pdf" 
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary/50 text-primary font-medium rounded-full hover:bg-primary/10 transition-colors"
            >
              Download Full CV
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
