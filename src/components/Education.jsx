import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, FileText } from 'lucide-react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-quantum-500/10 border border-quantum-500/30 text-quantum-400 text-xs font-mono mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            SECTION 07 // ACADEMIC RECORD
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Academic <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal engineering foundations and secondary education achievements.
          </p>
        </div>

        {/* Academic Timeline Cards */}
        <div className="space-y-6">
          {education.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 transition-all duration-300 relative group overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="p-1.5 rounded-lg bg-cyber-500/10 text-cyber-400 border border-cyber-500/20">
                      <GraduationCap className="w-4 h-4" />
                    </span>
                    <span className="text-xs font-mono text-cyan-300 uppercase tracking-wider">
                      {item.institution}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-bold text-white group-hover:text-cyber-300 transition-colors">
                    {item.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 font-mono">
                    {item.field}
                  </p>
                </div>

                {/* Score & Period Badge */}
                <div className="flex flex-row md:flex-col items-start md:items-end justify-between gap-2">
                  <div className="px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyber-500/15 to-electric-500/15 border border-cyber-500/40 text-cyber-300 font-heading font-bold text-base shadow-glow-cyan">
                    {item.score}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{item.period}</span>
                    <span className="text-slate-600">•</span>
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-4 border-t border-slate-800/80 space-y-2">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-cyber-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
