import React, { useEffect, useState } from 'react';
import {
  X,
  ExternalLink,
  Award,
  Calendar,
  FileText,
  CheckCircle2,
  ZoomIn,
  ZoomOut,
  RotateCcw
} from 'lucide-react';

export default function CertificateModal({ certificate, onClose }) {
  const [zoom, setZoom] = useState(1);

  // Reset zoom whenever certificate changes or modal opens
  useEffect(() => {
    setZoom(1);
  }, [certificate]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!certificate) return null;

  const handleZoomIn = () => setZoom((prev) => Math.min(Number((prev + 0.25).toFixed(2)), 3.0));
  const handleZoomOut = () => setZoom((prev) => Math.max(Number((prev - 0.25).toFixed(2)), 0.5));
  const handleResetZoom = () => setZoom(1);

  const hasImage = Boolean(certificate.imageUrl);

  return (
    <div data-testid="certificate-modal" className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[94vh] overflow-y-auto bg-obsidian-900 border border-cyber-500/40 rounded-3xl shadow-2xl p-5 sm:p-7 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 mb-4 pb-3 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase bg-cyber-500/10 text-cyber-400 border border-cyber-500/30">
                {certificate.category}
              </span>
              <span className="flex items-center gap-1 text-xs font-mono text-slate-400">
                <Calendar className="w-3 h-3" />
                {certificate.date}
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-heading font-bold text-white">
              {certificate.title}
            </h3>
            <p className="text-xs sm:text-sm text-electric-400 font-medium mt-0.5">
              Issued by: {certificate.issuer}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
            aria-label="Close certificate modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Display Area with Fit & Zoom */}
        <div className="w-full bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden mb-5 flex flex-col items-center">
          {/* Zoom Controls Toolbar */}
          {hasImage && (
            <div className="w-full px-3 sm:px-4 py-2 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between text-xs text-slate-300">
              <span className="font-mono text-[11px] text-slate-400">
                Display: <strong className="text-cyber-400">Fit-to-Screen</strong>
              </span>

              <div className="flex items-center gap-1 sm:gap-2">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={zoom <= 0.5}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 transition-colors flex items-center gap-1"
                  title="Zoom Out (-)"
                  aria-label="Zoom Out"
                >
                  <ZoomOut className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Zoom Out</span>
                </button>

                <span className="px-2 py-0.5 rounded bg-slate-800 font-mono text-cyber-300 text-[11px] min-w-[48px] text-center border border-slate-700">
                  {Math.round(zoom * 100)}%
                </span>

                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={zoom >= 3.0}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed border border-slate-700 transition-colors flex items-center gap-1"
                  title="Zoom In (+)"
                  aria-label="Zoom In"
                >
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline text-[11px]">Zoom In</span>
                </button>

                <button
                  type="button"
                  onClick={handleResetZoom}
                  className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors flex items-center gap-1"
                  title="Reset to Fit View (100%)"
                  aria-label="Reset Zoom"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-cyber-400" />
                  <span className="hidden sm:inline text-[11px]">Reset</span>
                </button>
              </div>
            </div>
          )}

          {/* Certificate Viewing Canvas: fit-to-screen without scrollbars at 1x */}
          <div className={`w-full h-[48vh] sm:h-[54vh] flex items-center justify-center p-2 sm:p-4 bg-slate-950/80 ${zoom > 1 ? 'overflow-auto' : 'overflow-hidden'}`}>
            {hasImage ? (
              <div className="w-full h-full flex items-center justify-center">
                <img
                  src={certificate.imageUrl}
                  alt={certificate.title}
                  style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'center center',
                    transition: 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}
                  className="max-w-full max-h-full object-contain select-none rounded shadow-lg"
                  draggable={false}
                />
              </div>
            ) : certificate.fileUrl ? (
              <iframe
                src={`${certificate.fileUrl}#toolbar=0&navpanes=0`}
                title={certificate.title}
                className="w-full h-full rounded-xl border border-slate-800 bg-white"
              />
            ) : (
              <div className="text-center p-8 max-w-md">
                <div className="w-16 h-16 rounded-2xl bg-cyber-500/10 border border-cyber-500/30 text-cyber-400 flex items-center justify-center mx-auto mb-4 shadow-glow-cyan">
                  <Award className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-heading font-bold text-white mb-2">
                  Verified Academic & Course Credential
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  This certification is documented on the client's official engineering resume. Physical PDF copy is retained in client archives.
                </p>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Verified Resume Credential</span>
                </div>
              </div>
            )}
          </div>

          {/* Subtext info */}
          {hasImage && (
            <div className="w-full px-4 py-2 bg-slate-900/50 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="text-[11px] text-slate-400">Complete certificate fitted to viewing area</span>
              {certificate.fileUrl && (
                <a
                  href={certificate.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-cyber-400 hover:underline text-[11px]"
                >
                  <span>Open Full PDF</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Details & Verifications */}
        <div className="space-y-3 text-xs text-slate-300">
          <p className="leading-relaxed">
            {certificate.description}
          </p>

          {certificate.credentialId && (
            <div className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/60 flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-slate-400">
                Credential Authentication ID: <strong className="text-white">{certificate.credentialId}</strong>
              </span>
              {certificate.credentialUrl && (
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyber-400 hover:underline font-mono"
                >
                  <span>Verify Online</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-5 pt-3 border-t border-slate-800 flex items-center justify-between">
          {certificate.credentialUrl ? (
            <a
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-cyber-500 to-electric-600 text-black font-semibold text-xs shadow-glow-cyan"
            >
              <span>Verify on Issuer Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : certificate.fileUrl ? (
            <a
              href={certificate.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyber-500/30 text-xs"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Open Original PDF</span>
            </a>
          ) : (
            <div />
          )}

          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs border border-slate-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
