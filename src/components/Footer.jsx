import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-slate-800 bg-obsidian-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Tagline */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-heading font-extrabold text-lg text-white">
              {personalInfo.name}
            </span>
            <span className="text-cyber-400 font-mono text-xs">/ ECE</span>
          </div>
          <p className="text-xs text-slate-400 font-mono">
            {personalInfo.headline}
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyber-400 border border-slate-800 hover:border-cyber-500/40 transition-colors"
            aria-label="LinkedIn profile"
            title="LinkedIn"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-600 transition-colors"
            aria-label="GitHub profile"
            title="GitHub"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 border border-slate-800 hover:border-cyan-500/40 transition-colors"
            aria-label="Send direct email"
            title="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Copyright & Back to Top */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono text-slate-500">
          <span>© {currentYear} Maithrayi S Viraktamath. All rights reserved.</span>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyber-400 border border-slate-800 hover:border-cyber-500/40 transition-all group"
            aria-label="Scroll back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
