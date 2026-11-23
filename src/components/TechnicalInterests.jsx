import React from 'react';
import {
  Cpu,
  Layers,
  Binary,
  Microchip,
  CircuitBoard,
  BrainCircuit,
  Code2,
  Server,
  ArrowUpRight,
  Compass
} from 'lucide-react';
import { technicalInterests } from '../data/portfolioData';

// Map icon string to Lucide component
const iconMap = {
  Cpu,
  Layers,
  Binary,
  Microchip: Cpu, // fallback to Cpu if Microchip not exported
  CircuitBoard,
  BrainCircuit,
  Code2,
  Server,
};

export default function TechnicalInterests() {
  return (
    <section id="interests" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-500/10 border border-electric-500/30 text-electric-400 text-xs font-mono mb-3">
            <Compass className="w-3.5 h-3.5" />
            SECTION 03 // ACADEMIC & TECHNICAL FOCUS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Technical <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Interests</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Key domains of ongoing research, academic coursework, and engineering exploration.
          </p>
        </div>

        {/* Interests Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalInterests.map((interest, index) => {
            const Icon = iconMap[interest.icon] || Cpu;
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/50 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 relative"
              >
                {/* Circuit Grid Subtle Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-bl-full group-hover:bg-cyan-500/15 transition-all duration-300" />

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80 text-cyber-400 group-hover:text-black group-hover:bg-cyber-400 group-hover:shadow-glow-cyan transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-800/60 text-slate-400 border border-slate-700/60 group-hover:border-cyber-500/40 group-hover:text-cyber-300 transition-colors">
                      {interest.tag}
                    </span>
                  </div>

                  <h3 className="text-lg font-heading font-bold text-white mb-2 group-hover:text-cyber-300 transition-colors flex items-center justify-between">
                    <span>{interest.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                    {interest.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-cyber-400/90 transition-colors">
                  <span>FOCUS AREA 0{index + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyber-400 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Unified Scope */}
        <div className="mt-12 p-4 rounded-xl bg-obsidian-900/60 border border-slate-800 text-center max-w-3xl mx-auto">
          <p className="text-xs text-slate-400 font-mono">
            Presented as active domains of academic exploration, hands-on experimentation, and engineering curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}
