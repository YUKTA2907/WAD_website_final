import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Briefcase, FileText, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar({ isDark, setIsDark, onOpenRecruiter }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Interests', href: '#interests' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section spy
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'py-2.5 glass-panel border-b shadow-lg shadow-black/20'
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyber-500 rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-cyber-500/20 via-electric-500/20 to-quantum-500/20 border border-cyber-500/40 flex items-center justify-center font-heading font-bold text-lg text-cyber-400 group-hover:border-cyber-400 group-hover:shadow-glow-cyan transition-all duration-300">
              <span className="bg-gradient-to-r from-cyber-400 to-electric-400 bg-clip-text text-transparent">
                {personalInfo.initials}
              </span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyber-400 rounded-full animate-ping opacity-75" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-cyber-500 rounded-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-semibold text-sm tracking-wider uppercase text-slate-100 dark:text-slate-100 group-hover:text-cyber-400 transition-colors">
                Maithrayi S V
              </span>
              <span className="text-[11px] font-mono text-cyan-400/80 tracking-tight">
                ECE • NMIT '27
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 bg-obsidian-900/60 dark:bg-obsidian-900/60 light:bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-700/40">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 text-xs font-medium rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyber-500/20 to-electric-500/20 text-cyber-400 border border-cyber-500/40 shadow-sm'
                      : 'text-slate-300 hover:text-cyber-300 hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Recruiter Quick View Pill */}
            <button
              onClick={onOpenRecruiter}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-cyber-500/15 via-electric-500/15 to-quantum-500/15 border border-cyber-500/50 hover:border-cyber-400 text-cyan-300 hover:text-white shadow-glow-cyan hover:shadow-cyan-500/30 transition-all duration-300 group"
              title="Open quick executive summary for recruiters"
            >
              <Briefcase className="w-3.5 h-3.5 text-cyber-400 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Recruiter View</span>
              <span className="sm:hidden">Recruiter</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-400 animate-pulse" />
            </button>

            {/* Dark / Light Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle color theme"
              className="p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-cyber-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-500"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 transition-transform hover:rotate-45" />
              ) : (
                <Moon className="w-4 h-4 text-electric-400 transition-transform hover:-rotate-12" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              className="xl:hidden p-2 rounded-xl bg-slate-800/50 hover:bg-slate-800 border border-slate-700/60 text-slate-300 hover:text-cyber-400 focus:outline-none focus:ring-2 focus:ring-cyber-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-obsidian-950/95 dark:bg-obsidian-950/95 light:bg-slate-900/95 backdrop-blur-xl border-b border-cyber-500/20 px-6 py-6 shadow-2xl transition-all duration-300 animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-cyber-500/20 text-cyber-400 border-l-4 border-cyber-400'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-cyber-300'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}

            <div className="pt-4 mt-2 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRecruiter();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyber-500 to-electric-600 text-black shadow-glow-cyan"
              >
                <Briefcase className="w-4 h-4" />
                Open Recruiter Quick View
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
