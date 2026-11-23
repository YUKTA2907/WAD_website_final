import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  Copy,
  Check,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subjectLine = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name || 'Engineering Portfolio Visitor'}`
    );
    const bodyContent = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    // Genuinely working submission mechanism using mailto protocol
    window.location.href = `mailto:${personalInfo.email}?subject=${subjectLine}&body=${bodyContent}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            SECTION 10 // GET IN TOUCH
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Contact <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Open for technical internships, VLSI design opportunities, embedded engineering collaborations, and graduate recruitment inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-6 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 transition-all duration-300">
              <div className="flex items-center justify-between mb-3">
                <div className="p-3 rounded-xl bg-cyber-500/10 border border-cyber-500/30 text-cyber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-xs font-mono text-slate-300 border border-slate-700 transition-colors"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>
              <h3 className="text-xs font-mono uppercase text-slate-400">Direct Email</h3>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-base sm:text-lg font-heading font-bold text-white hover:text-cyber-400 transition-colors block mt-1"
              >
                {personalInfo.email}
              </a>
              <p className="text-xs text-slate-400 mt-2">
                Click to open your default email client immediately.
              </p>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl glass-card border border-slate-700/60">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-3 rounded-xl bg-electric-500/10 border border-electric-500/30 text-electric-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono uppercase text-slate-400">Location Base</h3>
                  <p className="text-base font-heading font-bold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Open to on-site roles in Bengaluru, hybrid positions, and remote technical work.
              </p>
            </div>

            {/* Professional Profiles Card */}
            <div className="p-6 rounded-2xl glass-card border border-slate-700/60">
              <h3 className="text-xs font-mono uppercase text-slate-400 mb-4">
                Professional Networks
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/80 hover:bg-blue-600/20 text-slate-200 hover:text-blue-400 border border-slate-700 hover:border-blue-500/40 text-xs font-semibold transition-all group"
                >
                  <LinkedinIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400" />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 hover:border-slate-500 text-xs font-semibold transition-all group"
                >
                  <GithubIcon className="w-4 h-4 text-slate-300" />
                  <span>GitHub Profile</span>
                  <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Working Functional Mailto Message Composer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 transition-all duration-300">
              <h3 className="text-lg font-heading font-bold text-white mb-1 flex items-center gap-2">
                <Send className="w-4 h-4 text-cyber-400" /> Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the details below to launch a pre-populated email directly to Maithrayi.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-400 focus:ring-1 focus:ring-cyber-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-400 focus:ring-1 focus:ring-cyber-400 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Subject / Topic *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. VLSI Internship / Software Engineering Role"
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-400 focus:ring-1 focus:ring-cyber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your inquiry or proposal..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyber-400 focus:ring-1 focus:ring-cyber-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500">
                    Direct Mailto Execution
                  </span>

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-500 to-electric-600 hover:from-cyber-400 hover:to-electric-500 text-black font-semibold text-xs shadow-glow-cyan transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Launch Email Client</span>
                    <Send className="w-3.5 h-3.5 text-black" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
