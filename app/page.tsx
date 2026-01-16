import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Matt Hamilton",
            url: "https://dharach.com",
            image: "https://dharach.com/matt.jpg",
            jobTitle: "Founder & Developer Advocate",
            worksFor: {
              "@type": "Organization",
              name: "Dharach"
            },
            sameAs: [
              "https://twitter.com/hammertoe",
              "https://linkedin.com/in/matthamilton77/",
              "https://github.com/hammertoe",
              "https://hammertoe.io"
            ],
            description: "Technologist, founder, and developer advocate passionate about AI, blockchain, and community impact."
          })
        }}
      />
    </main>
  );
}
