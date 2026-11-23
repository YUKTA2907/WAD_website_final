import React from 'react';
import {
  Award,
  BookOpen,
  Cpu,
  Layers,
  Terminal,
  Zap,
  CheckCircle2,
  Flame,
  Binary
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      label: 'Cumulative GPA',
      value: '9.11 / 10',
      description: 'NITTE Meenakshi Institute of Tech (ECE)',
      icon: Award,
      color: 'from-cyber-500 to-electric-500'
    },
    {
      label: 'Engineering Projects',
      value: '7+ Projects',
      description: 'FPGA, RISC-V, Embedded C & Machine Learning',
      icon: Cpu,
      color: 'from-electric-500 to-quantum-500',
      target: '#projects'
    },
    {
      label: 'Industry Experience',
      value: '2 Internships',
      description: 'Maven Silicon (VLSI) & BHEL (KAVACH ATP)',
      icon: Layers,
      color: 'from-cyber-400 to-teal-400',
      target: '#experience'
    },
    {
      label: 'Graduation Year',
      value: '2027',
      description: 'Preparing for Core & Software Placements',
      icon: BookOpen,
      color: 'from-amber-400 to-orange-500'
    }
  ];

  const handleScrollTo = (e, target) => {
    if (!target) return;
    e.preventDefault();
    const el = document.querySelector(target);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const coreStrengths = [
    {
      title: 'Digital Design & FPGA Acceleration',
      description:
        'Hands-on RTL design in Verilog HDL, synthesizable fixed-point CORDIC accelerators, Field-Oriented Control (FOC) math, and AMBA AHB/APB bus interface verification.',
      icon: Binary
    },
    {
      title: 'Embedded Firmware & Systems Interfacing',
      description:
        'Sensor integration, analog-to-digital data capture, timed finite state machines (FSM), and responsive control loops using ESP32 and Arduino microcontrollers.',
      icon: Zap
    },
    {
      title: 'Machine Learning & Applied Analytics',
      description:
        'Constructing Artificial Neural Networks in TensorFlow/Keras (84.58% test accuracy), financial anomaly detection, and structured Python data analysis.',
      icon: Terminal
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 text-xs font-mono mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-400" />
            SECTION 02 // PROFILE OVERVIEW
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            About <span className="bg-gradient-to-r from-cyber-400 to-electric-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Bridging hardware architecture and computational intelligence through an interdisciplinary engineering mindset.
          </p>
        </div>

        {/* Narrative & Engineering Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-slate-300 dark:text-slate-300 light:text-slate-700 leading-relaxed text-base">
            <div className="p-6 rounded-2xl glass-card border border-cyber-500/20 shadow-lg">
              <h3 className="text-lg font-heading font-semibold text-white mb-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyber-400" />
                Interdisciplinary Electronics & Communication Engineer
              </h3>
              <p className="text-sm sm:text-base text-slate-300 mb-4">
                {personalInfo.about.p1}
              </p>
              <p className="text-sm sm:text-base text-slate-300 mb-4">
                {personalInfo.about.p2}
              </p>
              <p className="text-sm sm:text-base text-slate-300">
                {personalInfo.about.p3}
              </p>
            </div>
          </div>

          {/* Core Strengths Right Column */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-sm font-mono uppercase text-cyber-400 tracking-wider">
              Core Engineering Pillars
            </h3>
            {coreStrengths.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-xl glass-card border border-slate-700/60 hover:border-cyber-500/40 transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-500/10 text-cyber-400 border border-cyber-500/20 group-hover:bg-cyber-500/20 group-hover:scale-105 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-white group-hover:text-cyber-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Highlight Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((stat, index) => {
            const Icon = stat.icon;
            const CardTag = stat.target ? 'a' : 'div';
            return (
              <CardTag
                key={index}
                href={stat.target || undefined}
                onClick={(e) => stat.target && handleScrollTo(e, stat.target)}
                role={stat.target ? 'button' : undefined}
                tabIndex={stat.target ? 0 : undefined}
                aria-label={stat.target ? `Navigate to ${stat.label}` : undefined}
                className={`p-6 rounded-2xl glass-card border border-slate-700/60 relative overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 ${
                  stat.target
                    ? 'cursor-pointer hover:border-cyber-400 hover:shadow-glow-cyan'
                    : 'hover:border-cyber-400/50'
                }`}
              >
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-xl group-hover:opacity-25 transition-opacity`}
                />
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase text-slate-400">
                    {stat.label}
                  </span>
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700 text-cyber-400 group-hover:scale-105 transition-transform">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1 group-hover:text-cyber-300 transition-colors">
                  {stat.value}
                </div>
                <p className="text-xs text-slate-400">
                  {stat.description}
                </p>
                {stat.target && (
                  <div className="mt-3 pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-cyan-400/80 group-hover:text-cyber-300 transition-colors">
                    <span>Explore Section</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                )}
              </CardTag>
            );
          })}
        </div>
      </div>
    </section>
  );
}
