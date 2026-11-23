import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechnicalInterests from './components/TechnicalInterests';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Leadership from './components/Leadership';
import Contact from './components/Contact';
import Footer from './components/Footer';
import RecruiterQuickView from './components/RecruiterQuickView';
import BackgroundAnimation from './components/BackgroundAnimation';
import ScrollProgress from './components/ScrollProgress';

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return true; // Default dark futuristic aesthetic
  });

  const [isRecruiterOpen, setIsRecruiterOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <div className={`min-h-screen relative font-sans ${isDark ? 'bg-obsidian-950 text-slate-100' : 'bg-slate-50 text-slate-900'} transition-colors duration-300`}>
      {/* Scroll Progress Bar at very top */}
      <ScrollProgress />

      {/* Subtle Animated Circuit Canvas Background */}
      <BackgroundAnimation isDark={isDark} />

      {/* Modern Navigation Bar */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenRecruiter={() => setIsRecruiterOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-16">
        <Hero onOpenRecruiter={() => setIsRecruiterOpen(true)} />
        <About />
        <TechnicalInterests />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Certifications />
        <Leadership />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Recruiter Quick View Drawer / Modal */}
      <RecruiterQuickView
        isOpen={isRecruiterOpen}
        onClose={() => setIsRecruiterOpen(false)}
      />
    </div>
  );
}
