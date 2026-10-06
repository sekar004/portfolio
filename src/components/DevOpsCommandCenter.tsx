import React from 'react';
import { Cpu, ArrowRight } from 'lucide-react';
import { 
  GitIcon, JenkinsIcon, SonarQubeIcon, DockerIcon, KubernetesIcon, PrometheusIcon 
} from './TechIcons';

export const DevOpsCommandCenter: React.FC = () => {
  const pipelineStages = [
    { name: 'SOURCE', sub: 'Git Version Control', icon: <GitIcon size={22} /> },
    { name: 'BUILD', sub: 'Jenkins Automation', icon: <JenkinsIcon size={22} /> },
    { name: 'TEST', sub: 'Automated Suite', icon: <Cpu className="w-5 h-5 text-blue-400" /> },
    { name: 'CODE QUALITY', sub: 'SonarQube SAST', icon: <SonarQubeIcon size={22} /> },
    { name: 'CONTAINERIZE', sub: 'Docker Multi-stage', icon: <DockerIcon size={22} /> },
    { name: 'DEPLOY', sub: 'Kubernetes Rolling', icon: <KubernetesIcon size={22} /> },
    { name: 'MONITOR', sub: 'Prometheus & Cloud', icon: <PrometheusIcon size={22} /> },
  ];

  return (
    <section id="devops" className="py-12 bg-[#050814] light:bg-slate-50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            AUTOMATED EXECUTION PIPELINE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
            DevOps Command Center
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            End-to-end automated deployment methodology from commit to continuous observability.
          </p>
        </div>

        {/* Pipeline Container */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 light:border-slate-300 shadow-2xl space-y-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 light:border-slate-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-bold text-white light:text-slate-900 uppercase tracking-wider">
                DEVOPS PIPELINE STATE: ACTIVE & HEALTHY
              </span>
            </div>
            <span className="text-[11px] font-mono text-blue-400 light:text-blue-800 bg-blue-950/60 light:bg-blue-100 px-3 py-1 rounded-md border border-blue-500/30 light:border-blue-300 font-bold">
              0 Failures • Zero Downtime
            </span>
          </div>

          {/* Interactive Flow Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative">
            {pipelineStages.map((stage, idx) => (
              <div key={idx} className="relative group">
                <div className="p-4 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 group-hover:border-blue-500/60 transition-all flex flex-col justify-between h-full space-y-3 shadow-lg group-hover:scale-105">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-blue-400 light:text-blue-800 bg-blue-950/80 light:bg-blue-100 px-2 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-200">
                      {stage.icon}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-extrabold text-white light:text-slate-900 group-hover:text-blue-400">
                      {stage.name}
                    </h4>
                    <p className="text-[10px] font-mono text-slate-400 light:text-slate-600 mt-1">
                      {stage.sub}
                    </p>
                  </div>
                </div>

                {/* Arrow connector */}
                {idx < pipelineStages.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-blue-500">
                    <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
