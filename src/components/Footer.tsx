import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { LinkedinIcon, GitHubIcon } from './TechIcons';

interface FooterProps {
  onOpenResume: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#03050e] light:bg-slate-900 border-t border-blue-900/30 py-12 overflow-hidden text-slate-400">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-devops-grid opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Left: Logo & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-black font-mono text-base shadow-md">
              S
            </div>
            <div>
              <span className="text-lg font-black text-white tracking-wide block">
                SEKAR S
              </span>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                DevOps Engineer
              </span>
            </div>
          </div>

          {/* Center: Quick Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold">
            <a href="#home" className="hover:text-cyan-300 transition-colors">Home</a>
            <a href="#about" className="hover:text-cyan-300 transition-colors">About</a>
            <a href="#experience" className="hover:text-cyan-300 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-cyan-300 transition-colors">Skills</a>
            <a href="#devops" className="hover:text-cyan-300 transition-colors">DevOps</a>
            <a href="#projects" className="hover:text-cyan-300 transition-colors">Projects</a>
            <a href="#education" className="hover:text-cyan-300 transition-colors">Education</a>
            <a href="#contact" className="hover:text-cyan-300 transition-colors">Contact</a>
          </div>

          {/* Right: Social Links & Back to Top */}
          <div className="flex items-center gap-4 text-xs font-semibold">
            <a 
              href="https://github.com/sekar004" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition-colors"
              title="GitHub"
            >
              <GitHubIcon size={18} />
            </a>

            <a 
              href="https://www.linkedin.com/in/sekar-s" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 transition-colors"
              title="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>

            <a 
              href="mailto:shanmugamsekar004@gmail.com"
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-lg"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {new Date().getFullYear()} SEKAR S. All rights reserved.</p>
          <p className="text-cyan-400 font-bold">Built with passion for DevOps</p>
        </div>
      </div>
    </footer>
  );
};
