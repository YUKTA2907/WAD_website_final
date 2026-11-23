import React, { useEffect } from 'react';
import { X, ExternalLink, Cpu, CheckCircle2, Layers, AlertCircle, Sparkles } from 'lucide-react';
import ProjectIllustration from './ProjectIllustrations';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div data-testid="project-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-obsidian-900 border border-cyber-500/40 rounded-3xl shadow-2xl p-6 sm:p-8 z-10 transition-all animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono uppercase bg-cyber-500/10 text-cyber-400 border border-cyber-500/30">
                {project.category}
              </span>
              <span className="px-2.5 py-1 rounded-full text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30">
                {project.status}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-heading font-bold text-white">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyber-500 transition-colors"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Technical Diagram Showcase */}
        <div className="w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-slate-800 mb-6 bg-slate-950">
          <ProjectIllustration id={project.id} />
        </div>

        {/* Detailed Sections */}
        <div className="space-y-6 text-sm text-slate-300">
          {/* Detailed Narrative */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-400 mb-2 flex items-center gap-1.5">
              <Cpu className="w-3.5 h-3.5" /> Project Overview & Engineering Methodology
            </h4>
            <p className="leading-relaxed text-slate-300">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture Pipeline */}
          {project.architecture && (
            <div className="p-4 rounded-xl bg-obsidian-950/80 border border-slate-800 font-mono text-xs">
              <h4 className="text-[11px] uppercase tracking-wider text-electric-400 mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" /> System Architecture & Signal Flow
              </h4>
              <p className="text-slate-300 leading-relaxed break-words">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Verified Performance Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-cyber-400 mb-2.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Verified Performance Results
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.metrics.map((metric, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-xs text-slate-200 font-mono"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Technologies & Tools
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 rounded-md bg-slate-800 border border-slate-700 text-xs font-mono text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Attribution Notice */}
          <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-start gap-3 text-xs text-slate-400">
            <AlertCircle className="w-4 h-4 text-cyber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-300">Project Attribution: </span>
              {project.attribution}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
          {project.repository ? (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyber-500 hover:bg-cyber-400 text-black font-semibold text-xs transition-colors shadow-glow-cyan"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-xs font-mono text-slate-500 italic">
              Academic course project (Software Resume)
            </span>
          )}

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-medium border border-slate-700 transition-colors"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
