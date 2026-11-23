import React, { useState } from 'react';
import { Award, Calendar, ExternalLink, FileText, CheckCircle2, ShieldCheck } from 'lucide-react';
import { certifications } from '../data/portfolioData';
import CertificateModal from './CertificateModal';

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 text-xs font-mono mb-3">
            <Award className="w-3.5 h-3.5" />
            SECTION 08 // PROFESSIONAL CREDENTIALS
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white dark:text-white light:text-slate-900 tracking-tight">
            Licenses & <span className="bg-gradient-to-r from-cyber-400 via-electric-400 to-quantum-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-sm sm:text-base">
            Formal technical certifications across machine learning, digital VLSI design, Python programming, and analytical computing.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="p-6 rounded-2xl glass-card border border-slate-700/60 hover:border-cyber-500/40 hover:shadow-glow-cyan transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyber-500/20 to-electric-500/20 border border-cyber-500/30 text-cyber-400 group-hover:scale-105 transition-transform">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-base font-heading font-bold text-white mb-1.5 group-hover:text-cyber-300 transition-colors line-clamp-2">
                  {cert.title}
                </h3>

                <p className="text-xs font-medium text-electric-400 mb-2">
                  {cert.issuer}
                </p>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-slate-500" />
                  <span>{cert.date}</span>
                </div>

                <button
                  onClick={() => setSelectedCertificate(cert)}
                  className="flex items-center gap-1 text-xs font-semibold text-cyber-400 hover:text-cyan-300 group-hover:underline underline-offset-4"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Certificate</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCertificate && (
          <CertificateModal
            certificate={selectedCertificate}
            onClose={() => setSelectedCertificate(null)}
          />
        )}
      </div>
    </section>
  );
}
