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
    { name: 'Cloud & K8s', href: '#cloud', id: 'cloud' },
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
          ? 'bg-[#050814]/90 backdrop-blur-xl border-b border-slate-800 py-3 shadow-xl' 
          : 'bg-white/95 backdrop-blur-xl border-b border-slate-300 py-3 shadow-lg shadow-blue-500/10'
        : 'bg-transparent py-5 border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left Brand */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-black shadow-lg shadow-blue-600/30 group-hover:scale-105 transition-all duration-300 border border-blue-400/40">
              <span className="text-lg tracking-wider font-mono">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black tracking-tight text-white light:text-slate-900 group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
                SEKAR S
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" title="System Operational" />
              </span>
              <span className="text-[10px] font-mono text-blue-400 light:text-blue-700 font-bold tracking-widest uppercase">
                DEVOPS COMMAND
              </span>
            </div>
          </a>

          {/* Center Navigation Links (8 links) */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/80 light:bg-slate-200/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800 light:border-slate-300 shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 relative ${
                    isActive 
                      ? 'text-white light:text-white bg-blue-600 border border-blue-500 shadow-sm' 
                      : 'text-slate-300 light:text-slate-800 hover:text-white light:hover:text-blue-600 hover:bg-slate-800/60 light:hover:bg-slate-300/60'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTAs: Theme Toggle & Download Resume */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              className="p-2.5 rounded-xl bg-slate-900/90 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-blue-400 light:text-blue-700 transition-all shadow-md"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-600" />}
            </button>

            {/* Download Resume Button with crisp white text in both themes */}
            <button
              onClick={onOpenResume}
              className="btn-primary-cta px-4 py-2 rounded-xl text-xs font-black flex items-center gap-2 shadow-lg hover:scale-105 transition-all"
            >
              <Download className="w-3.5 h-3.5 text-white" />
              <span>Download Resume</span>
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
                className="btn-primary-cta w-full py-3 px-4 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg"
              >
                <Download className="w-4 h-4 text-white" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
