import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { SonarQubeIcon, OwaspIcon, ZapIcon } from './TechIcons';

export const SecurityQuality: React.FC = () => {
  const securityTools = [
    {
      name: 'SonarQube',
      desc: 'Code analysis and quality checks',
      badge: 'Static Analysis (SAST)',
      icon: <SonarQubeIcon size={32} />,
      border: 'border-cyan-500/30',
    },
    {
      name: 'OWASP',
      desc: 'Security testing and vulnerability checks',
      badge: 'Security Standards',
      icon: <OwaspIcon size={32} />,
      border: 'border-blue-500/30',
    },
    {
      name: 'ZAP',
      desc: 'Dynamic analysis and security scanning',
      badge: 'Dynamic Analysis (DAST)',
      icon: <ZapIcon size={32} />,
      border: 'border-sky-500/30',
    },
  ];

  return (
    <section className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CODE ANALYSIS & SECURITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Code Analysis & Security
          </h2>
          <p className="text-slate-400 text-sm">
            Integrated security testing and code quality checks built into CI/CD pipelines.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {securityTools.map((tool, idx) => (
            <div 
              key={idx}
              className={`glass-panel glass-panel-hover rounded-2xl p-6 border ${tool.border} flex flex-col justify-between group`}
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue-900/30">
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-blue-950/80 px-2.5 py-1 rounded-md border border-blue-500/30 font-bold">
                    {tool.badge}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  {tool.desc}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>CI/CD Pipeline Integrated</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="glass-panel rounded-xl p-4 border border-blue-500/20 text-center font-mono text-xs text-slate-300">
          Integrated into CI/CD workflows for secure and reliable application deployments.
        </div>

      </div>
    </section>
  );
};
