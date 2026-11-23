import React from 'react';
import { Radio, Megaphone, HeartHandshake, Users, Sparkles, Award } from 'lucide-react';
import { leadership } from '../data/portfolioData';

const iconMap = {
  Radio,
  Megaphone,
  HeartHandshake
};

export default function Leadership() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono mb-3">
            <Users className="w-3.5 h-3.5" />
            SECTION 09 // COMMUNITY & CO-CURRICULARS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Leadership & <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Extracurriculars</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Professional society memberships, student technical community leadership, and social initiatives.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {leadership.map((item, index) => {
            const Icon = iconMap[item.icon] || Users;
            return (
              <div
                key={index}
                className="p-6 sm:p-7 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-cyber-400 group-hover:scale-105 group-hover:bg-cyber-500/10 group-hover:border-cyber-500/40 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-1.5 group-hover:text-cyber-300 transition-colors">
                    {item.role}
                  </h3>

                  <p className="text-xs font-medium text-electric-400 mb-3">
                    {item.organization}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span>ACTIVITIES & OUTREACH</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-400" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
