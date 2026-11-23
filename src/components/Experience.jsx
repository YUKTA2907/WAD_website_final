import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight, Layers } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 text-xs font-mono mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            SECTION 06 // INDUSTRY INTERNSHIPS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Work <span className="bg-gradient-to-r from-cyber-400 to-electric-400 bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Hands-on engineering internships in front-end VLSI verification and mission-critical railway safety automation.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l-2 border-slate-700/60 space-y-12 ml-2 sm:ml-4">
          {experience.map((item, index) => (
            <div key={item.id} className="relative group">
              {/* Timeline Glowing Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-5 h-5 rounded-full bg-obsidian-950 border-2 border-cyber-400 flex items-center justify-center group-hover:scale-125 group-hover:shadow-glow-cyan transition-all duration-300">
                <span className="w-2 h-2 rounded-full bg-cyber-400 animate-pulse" />
              </div>

              {/* Timeline Card */}
              <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 transition-all duration-300 hover:shadow-glow-cyan">
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyber-500/15 text-cyber-300 border border-cyber-500/30 mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-cyber-300 transition-colors">
                      {item.role}
                    </h3>
                    <p className="text-sm font-medium text-electric-400">
                      {item.company}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300">
                      <Calendar className="w-3.5 h-3.5 text-cyber-400" />
                      {item.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-slate-500" />
                      {item.location}
                    </span>
                  </div>
                </div>

                {/* Verified Bullet Points */}
                <div className="space-y-2.5 mb-6">
                  {item.points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyber-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Competencies Badges */}
                <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-2">
                  {item.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded bg-slate-800/80 text-[11px] font-mono text-cyan-300 border border-slate-700/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
