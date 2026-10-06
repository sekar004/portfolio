import React from 'react';
import { Mail, FileText, ArrowUp } from 'lucide-react';
import { LinkedinIcon } from './TechIcons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenResume }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050e] border-t border-blue-900/30 py-12 overflow-hidden text-slate-400">
      
      {/* Background Infrastructure Grid Line Graphic */}
      <div className="absolute inset-0 bg-devops-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/80">
          
          {/* Logo & Role */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-blue-600 text-white font-extrabold font-mono text-sm shadow-md">
              S
            </div>
            <div>
              <span className="text-base font-extrabold text-white tracking-wide block">
                SEKAR S
              </span>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                DevOps Engineer
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-6 text-xs font-semibold">
            <a 
              href="https://www.linkedin.com/in/sekar-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
            >
              <LinkedinIcon size={16} className="text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a 
              href="mailto:shanmugamsekar004@gmail.com" 
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>Email</span>
            </a>

            <button 
              onClick={onOpenResume} 
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors text-slate-300"
            >
              <FileText className="w-4 h-4 text-indigo-400" />
              <span>Resume</span>
            </button>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-blue-500/40 text-slate-300 hover:text-white transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>

        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} SEKAR S. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span>AWS • Kubernetes • Docker • CI/CD</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
