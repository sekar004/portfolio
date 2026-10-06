import React, { useState, useEffect } from 'react';
import { Download, Menu, X, ChevronRight, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, theme, onToggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'DevOps', href: '#devops', id: 'devops' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Education', href: '#education', id: 'education' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map(link => link.id);
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? theme === 'dark' 
          ? 'bg-[#050814]/90 backdrop-blur-xl border-b border-blue-500/20 py-3 shadow-xl shadow-blue-950/20' 
          : 'bg-white/95 backdrop-blur-xl border-b border-slate-300 py-3 shadow-lg shadow-blue-500/10'
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Logo & Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white font-black shadow-lg shadow-blue-500/30 group-hover:shadow-blue-400/50 transition-all duration-300 border border-blue-400/40">
              <span className="text-lg tracking-wider font-mono">S</span>
              <div className="absolute inset-0 rounded-xl bg-blue-400/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-tight text-white light:text-slate-900 group-hover:text-blue-500 transition-colors flex items-center gap-1.5">
                SEKAR S
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="System Operational" />
              </span>
              <span className="text-[10px] font-mono text-blue-400 light:text-blue-600 font-bold tracking-widest uppercase">
                DEVOPS COMMAND
              </span>
            </div>
          </a>

          {/* Center Navigation Links (8 links) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 light:bg-slate-200/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-blue-500/15 light:border-slate-300 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold tracking-wide transition-all duration-200 relative ${
                    isActive 
                      ? 'text-white light:text-white bg-blue-600 border border-blue-400/50 shadow-sm shadow-blue-500/30' 
                      : 'text-slate-300 light:text-slate-800 hover:text-white light:hover:text-blue-600 hover:bg-slate-800/50 light:hover:bg-slate-300/60'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-blue-400 rounded-full shadow-sm shadow-blue-400" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs: Theme Toggle & Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-slate-900/80 light:bg-slate-200 border border-blue-500/30 light:border-slate-300 text-blue-400 light:text-blue-700 hover:text-cyan-300 transition-all shadow-md"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>

            <button
              onClick={onOpenResume}
              className="relative group overflow-hidden rounded-xl p-[1px] font-semibold focus:outline-none"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-xl group-hover:opacity-100 transition-opacity opacity-90" />
              <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#090d20] light:bg-blue-600 transition-all duration-300 group-hover:bg-transparent text-xs font-black text-white tracking-wide">
                <Download className="w-3.5 h-3.5 text-cyan-400 light:text-white group-hover:translate-y-0.5 transition-transform" />
                Download Resume
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-lg bg-slate-900 light:bg-slate-200 border border-blue-500/30 text-amber-400 text-xs"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900/80 light:bg-slate-200 border border-slate-700/60 light:border-slate-300 text-slate-300 light:text-slate-800 hover:text-white transition-all"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-blue-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070b1a]/95 light:bg-white/95 backdrop-blur-2xl border-b border-blue-500/20 px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                  activeSection === link.id
                    ? 'bg-blue-600 text-white font-extrabold'
                    : 'text-slate-300 light:text-slate-800 hover:bg-slate-900/70 hover:text-white'
                }`}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 mt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
              >
                <Download className="w-4 h-4" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
