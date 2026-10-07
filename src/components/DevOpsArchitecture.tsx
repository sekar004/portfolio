import React from 'react';
import { User, ArrowRight } from 'lucide-react';
import { 
  GitIcon, JenkinsIcon, SonarQubeIcon, DockerIcon, KubernetesIcon, AwsIcon, AzureIcon, PrometheusIcon 
} from './TechIcons';

export const DevOpsArchitecture: React.FC = () => {
  const flowNodes = [
    { label: 'Developer', sub: 'Code Commit', icon: <User className="w-5 h-5 text-blue-400" /> },
    { label: 'Git', sub: 'GitHub / GitLab', icon: <GitIcon size={22} /> },
    { label: 'Jenkins', sub: 'CI Pipeline', icon: <JenkinsIcon size={22} /> },
    { label: 'SonarQube', sub: 'Code Quality', icon: <SonarQubeIcon size={22} /> },
    { label: 'Docker', sub: 'Container Image', icon: <DockerIcon size={22} /> },
    { label: 'Kubernetes', sub: 'Cluster Rollout', icon: <KubernetesIcon size={22} /> },
    { label: 'AWS / Azure', sub: 'Cloud Hosting', icon: <div className="flex items-center gap-1"><AwsIcon size={16} /><AzureIcon size={16} /></div> },
    { label: 'Monitoring', sub: 'Prometheus & Grafana', icon: <PrometheusIcon size={22} /> },
  ];

  return (
    <section className="py-14 bg-[#070b1a] light:bg-slate-100 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 light:text-blue-700 uppercase">
            ARCHITECTURE MAP
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
            DEVOPS DELIVERY FLOW
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm font-medium">
            Automated delivery pipeline connecting code repositories, security scanners, container registries, and cloud clusters.
          </p>
        </div>

        {/* Horizontal Pipeline Diagram Infographic */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-slate-800 light:border-slate-300 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200">
            <span className="text-xs font-mono font-bold text-blue-400 light:text-blue-700 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              Automated Infrastructure Flow
            </span>
            <span className="text-[11px] font-mono text-emerald-400 light:text-emerald-700 bg-emerald-950/80 light:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-500/30 font-bold">Zero Downtime</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 items-center">
            {flowNodes.map((node, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center p-3.5 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm hover:border-blue-500/60 transition-all group">
                  <div className="p-3 rounded-xl bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-300 mb-2 group-hover:scale-110 transition-transform">
                    {node.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-white light:text-slate-900 group-hover:text-blue-400">
                    {node.label}
                  </span>
                  <span className="text-[10px] text-slate-400 light:text-slate-500 font-sans mt-0.5">
                    {node.sub}
                  </span>
                </div>

                {idx < flowNodes.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-blue-500/50 hidden lg:block mx-auto" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
