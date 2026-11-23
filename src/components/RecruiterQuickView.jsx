import React, { useEffect, useState } from 'react';
import {
  X,
  Briefcase,
  Download,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Cpu,
  Check,
  Copy,
  ExternalLink,
  Code2
} from 'lucide-react';
import { personalInfo, experience, projects, technicalSkills } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function RecruiterQuickView({ isOpen, onClose }) {
  const [copiedEmail, setCopiedEmail] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div data-testid="recruiter-modal" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-obsidian-950 border border-cyber-500/50 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-gradient-to-br from-cyber-500 to-electric-600 text-black shadow-glow-cyan">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
                  Recruiter Quick View
                </h3>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                  Ready to Hire
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5 font-mono">
                Executive Candidate Summary • Single-Scan Overview
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close recruiter quick view"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Candidate Profile Strip */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-obsidian-900 border border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          <div className="md:col-span-8 space-y-1">
            <h4 className="text-xl font-heading font-extrabold text-white">
              {personalInfo.name}
            </h4>
            <p className="text-xs sm:text-sm text-cyan-300 font-medium">
              {personalInfo.degree}
            </p>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 pt-1">
              <GraduationCap className="w-3.5 h-3.5 text-slate-400" />
              <span>{personalInfo.college}</span>
              <span>•</span>
              <span>Graduation: <strong>{personalInfo.graduationYear}</strong></span>
              <span>•</span>
              <MapPin className="w-3 h-3 text-slate-400" />
              <span>{personalInfo.location}</span>
            </p>
          </div>

          <div className="md:col-span-4 flex flex-col sm:items-end justify-center">
            <div className="p-3 rounded-xl bg-gradient-to-r from-cyber-500/15 to-electric-500/15 border border-cyber-500/40 text-center sm:text-right w-full sm:w-auto">
              <span className="text-[10px] font-mono uppercase text-slate-400 block">
                Cumulative CGPA
              </span>
              <span className="text-2xl font-heading font-extrabold text-cyber-400">
                {personalInfo.cgpa} / 10
              </span>
            </div>
          </div>
        </div>

        {/* Resume Actions Bar */}
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <a
            href={personalInfo.resumes.hardware}
            download="Maithrayi_S_Viraktamath_Hardware_Resume.pdf"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-cyber-500 to-electric-600 hover:from-cyber-400 hover:to-electric-500 text-black font-semibold text-xs shadow-glow-cyan transition-all"
          >
            <Cpu className="w-4 h-4 text-black" />
            <span>Download Hardware / VLSI Resume (PDF)</span>
            <Download className="w-3.5 h-3.5 text-black" />
          </a>

          <a
            href={personalInfo.resumes.software}
            download="Maithrayi_S_Viraktamath_Software_Resume.pdf"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-obsidian-850 hover:bg-obsidian-800 text-white font-semibold text-xs border border-electric-500/40 hover:border-cyber-400 transition-all"
          >
            <Code2 className="w-4 h-4 text-cyber-400" />
            <span>Download Software / ML Resume (PDF)</span>
            <Download className="w-3.5 h-3.5 text-cyber-400" />
          </a>
        </div>

        {/* Detailed Sections Grid */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Core Technical Competencies */}
          <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-slate-800 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-cyber-400 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Core Competencies
            </h5>
            <div className="space-y-3">
              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  Languages & HDLs:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Verilog HDL', 'SystemVerilog', 'C', 'C++', 'Python', 'Embedded C', 'SQL'].map(
                    (s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-slate-200 border border-slate-700"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  Hardware & EDA:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['Xilinx Vivado', 'Cadence Virtuoso', 'PYNQ-Z2 FPGA', 'RTL Design', 'Functional Verification', 'AMBA AHB/APB'].map(
                    (s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-cyan-300 border border-slate-700"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div>
                <span className="text-[11px] font-mono text-slate-400 block mb-1">
                  Software & ML:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {['TensorFlow', 'Keras', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'DSA', 'OOP'].map(
                    (s) => (
                      <span
                        key={s}
                        className="px-2 py-0.5 rounded bg-slate-800 text-[11px] font-mono text-purple-300 border border-slate-700"
                      >
                        {s}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Internships & Work History */}
          <div className="p-5 rounded-2xl bg-obsidian-900/80 border border-slate-800 space-y-4">
            <h5 className="text-xs font-mono uppercase tracking-wider text-electric-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5" /> Industry Internships
            </h5>
            <div className="space-y-3.5">
              {experience.map((exp) => (
                <div key={exp.id} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                  <div className="flex items-center justify-between text-xs font-heading font-semibold text-white mb-0.5">
                    <span>{exp.role}</span>
                    <span className="text-[10px] font-mono text-cyber-400">{exp.period}</span>
                  </div>
                  <p className="text-xs font-mono text-slate-300">{exp.company}</p>
                  <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                    {exp.points[0]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects Highlights */}
        <div className="mt-6 p-5 rounded-2xl bg-obsidian-900/80 border border-slate-800">
          <h5 className="text-xs font-mono uppercase tracking-wider text-quantum-400 mb-3 flex items-center gap-1.5">
            <Award className="w-3.5 h-3.5" /> Top Engineering Projects
          </h5>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {projects.slice(0, 3).map((p) => (
              <div key={p.id} className="p-3 rounded-xl bg-slate-800/40 border border-slate-700/60">
                <span className="text-[9px] font-mono uppercase text-cyber-400 block mb-1">
                  {p.category}
                </span>
                <h6 className="text-xs font-heading font-bold text-white mb-1 line-clamp-1">
                  {p.title}
                </h6>
                <p className="text-[11px] text-slate-400 line-clamp-2 mb-2">
                  {p.shortDescription}
                </p>
                {p.repository && (
                  <a
                    href={p.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[10px] font-mono text-cyan-400 hover:underline"
                  >
                    <span>View GitHub</span>
                    <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Strip */}
        <div className="mt-6 pt-5 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={handleCopyEmail}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 border border-slate-700 transition-colors"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copiedEmail ? 'Email Copied!' : personalInfo.email}</span>
            </button>

            <a
              href={`mailto:${personalInfo.email}?subject=Opportunity%20Inquiry%20-%20Engineering%20Candidate`}
              className="p-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 transition-colors"
              title="Compose Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/30 transition-colors"
              title="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
              title="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700 font-medium"
          >
            Close Summary
          </button>
        </div>
      </div>
    </div>
  );
}
