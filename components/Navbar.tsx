"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { clsx } from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md border-b",
        scrolled
          ? "bg-slate-950/80 border-slate-800 py-4"
          : "bg-transparent border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="font-serif text-xl font-bold tracking-tight">
          Matt Hamilton
        </Link>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <Link href="#about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            Work
          </Link>
          <Link href="#experience" className="hover:text-primary transition-colors">
            Experience
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
