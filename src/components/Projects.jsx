import React, { useState } from 'react';
import {
  ExternalLink,
  Layers,
  ArrowUpRight,
  Code2,
  Sparkles,
  Info
} from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectIllustration from './ProjectIllustrations';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './SocialIcons';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All Projects');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filters = [
    'All Projects',
    'Digital Design',
    'Embedded Systems',
    'Machine Learning',
    'Software Development'
  ];

  const filteredProjects =
    selectedFilter === 'All Projects'
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            SECTION 05 // ENGINEERING SHOWCASE
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Featured <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hardware acceleration, embedded microcontrollers, RTL synthesis, and deep learning architectures with verified experimental outcomes.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-3xl">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all duration-200 ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-cyber-500 to-electric-600 text-black font-semibold shadow-glow-cyan'
                    : 'bg-slate-800/70 text-slate-300 hover:text-cyber-300 hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="p-5 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Technical Diagram Header */}
                <div className="relative w-full h-44 rounded-xl overflow-hidden border border-slate-800/80 mb-5 bg-slate-950 group-hover:border-cyber-500/40 transition-colors">
                  <ProjectIllustration id={project.id} />
                  
                  {/* Category Pill Over Image */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-obsidian-950/85 text-cyber-400 border border-cyber-500/30 backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Status Indicator */}
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Verified
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-base font-heading font-bold text-white mb-2 group-hover:text-cyber-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                {/* Technologies Badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-0.5 rounded bg-slate-800/80 text-[10px] font-mono text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-800/40 text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Card Actions */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                <button
                  onClick={() => setActiveModalProject(project)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-cyber-400 hover:text-cyber-300 group-hover:underline underline-offset-4"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2">
                  {project.repository && (
                    <a
                      href={project.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-slate-800/70 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700/60 transition-colors"
                      title="Open GitHub Repository"
                      aria-label={`View GitHub repository for ${project.title}`}
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeModalProject && (
          <ProjectModal
            project={activeModalProject}
            onClose={() => setActiveModalProject(null)}
          />
        )}
      </div>
    </section>
  );
}
