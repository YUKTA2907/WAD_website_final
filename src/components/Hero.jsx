import React, { useState, useEffect } from 'react';
import {
  Download,
  Mail,
  MapPin,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Code2,
  Briefcase
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Hero({ onOpenRecruiter }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const words = personalInfo.typingWords;

  useEffect(() => {
    // Respect user reduced-motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setDisplayedText(words[0]);
      return;
    }

    const currentFullWord = words[currentWordIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        setDisplayedText(currentFullWord.substring(0, displayedText.length + 1));
        setTypingSpeed(90);

        if (displayedText.length === currentFullWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayedText(currentFullWord.substring(0, displayedText.length - 1));
        setTypingSpeed(45);

        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentWordIndex, words, typingSpeed]);

  return (
    <section id="home" className="relative min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Hero Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 dark:bg-slate-800/80 light:bg-slate-200/80 border border-cyber-500/30 text-xs text-cyber-300 mb-6 backdrop-blur-md shadow-sm">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="font-mono tracking-tight">Available for 2026 Internships & Placements</span>
            <span className="text-slate-500">•</span>
            <span className="flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-cyber-400" /> {personalInfo.location}
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-1 mb-4">
            <h2 className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-cyber-400 font-semibold">
              Interdisciplinary Engineering Portfolio
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-white dark:text-white light:text-slate-900 leading-[1.1]">
              MAITHRAYI S{' '}
              <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">
                VIRAKTAMATH
              </span>
            </h1>
          </div>

          {/* Dynamic Typing Subtitle */}
          <div className="h-10 sm:h-12 flex items-center gap-2 mb-6 text-lg sm:text-2xl font-mono text-slate-300 dark:text-slate-300">
            <span className="text-electric-400">&gt;</span>
            <span className="text-white dark:text-white font-medium">{displayedText}</span>
            <span className="w-2.5 h-6 bg-cyber-400 animate-pulse inline-block" />
          </div>

          {/* Headline & Mission */}
          <div className="border-l-2 border-cyber-500/50 pl-4 py-1 mb-6">
            <p className="text-xl sm:text-2xl font-heading font-medium text-slate-200 dark:text-slate-200 light:text-slate-800 italic">
              "{personalInfo.headline}"
            </p>
          </div>

          {/* Professional Introduction */}
          <p className="text-base sm:text-lg text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed mb-8 max-w-2xl">
            {personalInfo.intro}
          </p>

          {/* Primary Action Buttons */}
          <div className="w-full flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            {/* Download Hardware Resume */}
            <a
              href={personalInfo.resumes.hardware}
              download="Maithrayi_S_Viraktamath_Hardware_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-cyber-500 to-electric-600 hover:from-cyber-400 hover:to-electric-500 text-black font-semibold text-sm shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              title="Download verified Hardware & VLSI Resume"
            >
              <Cpu className="w-4 h-4 text-black group-hover:rotate-12 transition-transform" />
              <span>Download Hardware Resume</span>
              <Download className="w-4 h-4 text-black" />
            </a>

            {/* Download Software Resume */}
            <a
              href={personalInfo.resumes.software}
              download="Maithrayi_S_Viraktamath_Software_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-5 py-3 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-white font-semibold text-sm border border-electric-500/40 hover:border-cyber-400 shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group"
              title="Download verified Software & ML Resume"
            >
              <Code2 className="w-4 h-4 text-cyber-400 group-hover:rotate-12 transition-transform" />
              <span>Download Software Resume</span>
              <Download className="w-4 h-4 text-cyber-400" />
            </a>

            {/* Recruiter Quick View */}
            <button
              onClick={onOpenRecruiter}
              className="flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 border border-cyber-500/30 text-sm font-medium transition-all hover:border-cyber-400"
            >
              <Briefcase className="w-4 h-4 text-cyber-400" />
              <span>Recruiter Quick View</span>
            </button>
          </div>

          {/* Social Links & Quick Contact */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider mr-1">
              Connect:
            </span>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-electric-600/20 text-slate-300 hover:text-electric-400 border border-slate-700/70 hover:border-electric-400 transition-all duration-200"
              aria-label="Visit LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-cyber-600/20 text-slate-300 hover:text-cyber-400 border border-slate-700/70 hover:border-cyber-400 transition-all duration-200"
              aria-label="Visit GitHub Profile"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-lg bg-slate-800/60 hover:bg-quantum-600/20 text-slate-300 hover:text-quantum-400 border border-slate-700/70 hover:border-quantum-400 transition-all duration-200 flex items-center gap-2"
              aria-label="Send Email to Maithrayi"
              title="Direct Email"
            >
              <Mail className="w-4 h-4" />
              <span className="text-xs hidden sm:inline font-mono">{personalInfo.email}</span>
            </a>
          </div>
        </div>

        {/* Right Column: Photograph & Circuit Aesthetics */}
        <div className="lg:col-span-5 flex justify-center items-center z-10">
          <div className="relative group w-72 sm:w-88 md:w-96 aspect-square">
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyber-500 via-electric-500 to-quantum-500 rounded-3xl opacity-30 blur-2xl group-hover:opacity-60 transition duration-700" />

            {/* Outer Circuit Frame */}
            <div className="relative w-full h-full rounded-3xl p-2 bg-gradient-to-b from-cyber-500/30 via-slate-800/60 to-electric-500/30 backdrop-blur-md border border-cyber-500/40 shadow-2xl overflow-hidden">
              {/* Corner Circuit Accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyber-400 z-20 pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-cyber-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-electric-400 z-20 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-quantum-400 z-20 pointer-events-none" />

              {/* The Actual Client Headshot */}
              <div className="w-full h-full rounded-2xl overflow-hidden relative bg-slate-900">
                <img
                  src={personalInfo.profileImage}
                  alt="Maithrayi S Viraktamath - Electronics and Communication Engineer"
                  className="w-full h-full object-cover object-top filter contrast-[1.04] brightness-95 group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle dark gradient overlay at bottom for crisp contrast */}
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-obsidian-950 via-obsidian-950/60 to-transparent" />

                {/* Verified Engineering Floating Badge */}
                <div className="absolute bottom-3 inset-x-3 p-2.5 rounded-xl bg-obsidian-900/90 backdrop-blur-md border border-cyber-500/40 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-wider text-cyber-400">
                      Academic Standing
                    </p>
                    <p className="text-xs font-semibold text-white">
                      B.E. ECE • CGPA 9.11
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-cyber-500/20 text-cyber-300 text-[11px] font-mono border border-cyber-500/30">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyber-400" />
                    <span>NMIT '27</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
