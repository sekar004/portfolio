import React from 'react';
import { Download, Mail } from 'lucide-react';

interface ResumeCtaProps {
  onOpenResume: () => void;
}

export const ResumeCTA: React.FC<ResumeCtaProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 bg-[#070b1a] light:bg-slate-100 relative border-t border-blue-900/20 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-blue-500/40 light:border-slate-300 shadow-2xl text-center space-y-6">
          
          <span className="text-xs font-mono font-bold text-cyan-400 light:text-blue-800 uppercase tracking-widest bg-blue-950/80 light:bg-blue-100 px-3.5 py-1.5 rounded-full border border-blue-500/30 light:border-blue-300">
            ENGINEERING COLLABORATION
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white light:text-slate-900 leading-tight">
            READY TO BUILD RELIABLE INFRASTRUCTURE?
          </h2>

          <p className="text-slate-300 light:text-slate-600 text-sm sm:text-base max-w-xl mx-auto font-medium">
            Let's discuss how automated CI/CD pipelines, container orchestration, and cloud infrastructure can elevate system reliability.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenResume}
              className="btn-primary-cta px-8 py-4 rounded-xl text-white font-extrabold text-sm flex items-center gap-2.5 shadow-xl shadow-cyan-500/30 hover:scale-105 transition-all"
            >
              <Download className="w-5 h-5 text-white" />
              <span>DOWNLOAD RESUME</span>
            </button>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-slate-900/90 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 border border-blue-500/40 light:border-slate-300 text-slate-200 light:text-slate-900 font-extrabold text-sm flex items-center gap-2.5 transition-all shadow-sm"
            >
              <Mail className="w-5 h-5 text-cyan-400 light:text-blue-600" />
              <span>GET IN TOUCH</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
