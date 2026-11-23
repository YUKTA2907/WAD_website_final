import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Cpu,
  Binary,
  Wrench,
  Boxes,
  GitBranch,
  CheckCircle,
  Layers
} from 'lucide-react';
import { technicalSkills } from '../data/portfolioData';

const categoryIcons = {
  Code,
  Terminal,
  Cpu,
  Binary,
  Wrench,
  Boxes,
  GitBranch,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', ...technicalSkills.map((c) => c.category)];

  const filteredCategories =
    activeTab === 'All'
      ? technicalSkills
      : technicalSkills.filter((c) => c.category === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 text-xs font-mono mb-3">
            <Layers className="w-3.5 h-3.5" />
            SECTION 04 // COMPETENCIES & TOOLCHAINS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Verified technical tools, hardware description languages, and software libraries practiced across laboratory coursework and engineering projects.
          </p>

          {/* Quick Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  activeTab === cat
                    ? 'bg-gradient-to-r from-cyber-500 to-electric-600 text-black font-semibold shadow-glow-cyan'
                    : 'bg-slate-800/60 text-slate-300 hover:text-cyber-300 hover:bg-slate-800 border border-slate-700/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((group, idx) => {
            const Icon = categoryIcons[group.icon] || Code;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyber-500/20 to-electric-500/20 border border-cyber-500/30 text-cyber-400 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-heading font-bold text-white group-hover:text-cyber-300 transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Badges Layout - No Fake Percentages */}
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-cyber-500/10 text-slate-200 hover:text-cyber-300 border border-slate-700 hover:border-cyber-500/30 text-xs font-mono transition-all duration-200"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyber-400" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>{group.skills.length} Competencies</span>
                  <span className="text-cyber-400/80">Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Note */}
        <div className="mt-12 text-center text-xs text-slate-500 font-mono">
          ✓ Structured by technical domains without artificial numerical ratings, adhering to professional corporate standards.
        </div>
      </div>
    </section>
  );
}
