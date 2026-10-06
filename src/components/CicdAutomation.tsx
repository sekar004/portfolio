import React from 'react';
import { CheckCircle2, Play, Cpu, Activity, Terminal } from 'lucide-react';
import { GitIcon, JenkinsIcon, DockerIcon, KubernetesIcon, SonarQubeIcon } from './TechIcons';

export const CicdAutomation: React.FC = () => {
  const pipelineSteps = [
    { name: 'Git', icon: <GitIcon size={18} /> },
    { name: 'Jenkins', icon: <JenkinsIcon size={18} /> },
    { name: 'Build', icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
    { name: 'Test', icon: <Terminal className="w-4 h-4 text-emerald-400" /> },
    { name: 'Security Code Analysis', icon: <SonarQubeIcon size={18} /> },
    { name: 'Docker', icon: <DockerIcon size={18} /> },
    { name: 'Deploy', icon: <Play className="w-4 h-4 text-purple-400" /> },
    { name: 'Kubernetes', icon: <KubernetesIcon size={18} /> },
    { name: 'Monitoring', icon: <Activity className="w-4 h-4 text-amber-400" /> },
  ];

  const bulletPoints = [
    'Jenkins pipelines',
    'Build/test/release processes',
    'Docker-based deployments',
    'Kubernetes deployments',
    'SonarQube / OWASP integration',
    'GitLab collaboration',
  ];

  return (
    <section className="py-20 bg-[#070b1a] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CI/CD & AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Automating Builds, Tests & Deployments
          </h2>
          <p className="text-slate-400 text-sm">
            Automating builds, tests, security and deployments.
          </p>
        </div>

        {/* Pipeline Visualization Container */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/25 shadow-2xl mb-12">
          
          <div className="flex items-center justify-between pb-4 border-b border-blue-900/30 mb-8">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              Continuous Integration & Continuous Deployment
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Pipeline Execution: Success
            </span>
          </div>

          {/* Horizontal Flow Steps */}
          <div className="flex flex-wrap items-center justify-between gap-3 relative">
            {pipelineSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-blue-500/30 group-hover:border-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-105 transition-all">
                    {step.icon}
                  </div>
                  <span className="text-[11px] font-mono font-medium text-slate-300 group-hover:text-cyan-300">
                    {step.name}
                  </span>
                </div>

                {idx < pipelineSteps.length - 1 && (
                  <div className="hidden md:block text-slate-600 font-bold">
                    →
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* Short Bullet Points Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bulletPoints.map((point, idx) => (
            <div 
              key={idx}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-900/60 border border-blue-500/15 hover:border-blue-500/30 transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span className="text-sm font-semibold text-slate-200">
                {point}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
