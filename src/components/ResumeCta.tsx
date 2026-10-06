import React from 'react';
import { Download, FileText, Sparkles } from 'lucide-react';

interface ResumeCtaProps {
  onOpenResume: () => void;
}

export const ResumeCta: React.FC<ResumeCtaProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 bg-[#070b1a] relative border-t border-blue-900/20 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/40 shadow-2xl shadow-blue-950/60 text-center relative overflow-hidden bg-gradient-to-br from-[#09112a] via-[#060b1d] to-[#040816]">
          
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-xl shadow-cyan-500/30 mb-6 border border-cyan-400/40 animate-float-slow">
            <FileText className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">
            Want to know more about my experience?
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8 leading-relaxed font-medium">
            View my complete resume and technical background.
          </p>

          <div className="flex justify-center">
            <button
              onClick={onOpenResume}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-extrabold text-sm sm:text-base flex items-center gap-3 shadow-xl shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 transition-all group"
            >
              <Download className="w-5 h-5 text-white group-hover:translate-y-0.5 transition-transform" />
              <span>Download Resume</span>
              <Sparkles className="w-4 h-4 text-cyan-200" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
