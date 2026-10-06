import React from 'react';
import { Cpu, ArrowRight, CheckCircle2, Container } from 'lucide-react';
import { 
  GitIcon, JenkinsIcon, SonarQubeIcon, DockerIcon, KubernetesIcon, PrometheusIcon 
} from './TechIcons';

export const CICDPipeline: React.FC = () => {
  const cicdStages = [
    { stage: 'Git Push', desc: 'Code commit trigger', icon: <GitIcon size={20} /> },
    { stage: 'Jenkins', desc: 'Pipeline orchestration', icon: <JenkinsIcon size={20} /> },
    { stage: 'Build', desc: 'Compile & dependency check', icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
    { stage: 'Test', desc: 'Unit & integration tests', icon: <CheckCircle2 className="w-4 h-4 text-emerald-400" /> },
    { stage: 'SonarQube', desc: 'Static code analysis', icon: <SonarQubeIcon size={20} /> },
    { stage: 'Docker Build', desc: 'Container image build', icon: <DockerIcon size={20} /> },
    { stage: 'Registry', desc: 'Push image to registry', icon: <Container className="w-4 h-4 text-purple-400" /> },
    { stage: 'Deployment', desc: 'Kubernetes rollout', icon: <KubernetesIcon size={20} /> },
    { stage: 'Monitoring', desc: 'CloudWatch & Prometheus', icon: <PrometheusIcon size={20} /> },
  ];

  return (
    <section className="py-12 bg-[#050814] light:bg-slate-50 relative border-t border-blue-900/20 devops-circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CI/CD PIPELINE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Interactive CI/CD Pipeline
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Automating builds, security testing, image containerization, and cloud deployment.
          </p>
        </div>

        {/* Pipeline Cards Layout */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-blue-500/30 space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-blue-900/40">
            <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              Continuous Delivery Cycle
            </span>
            <span className="text-[11px] font-mono text-emerald-400">100% Automated</span>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3">
            {cicdStages.map((s, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900/90 light:bg-white border border-blue-500/30 group-hover:border-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-all">
                    {s.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-white light:text-slate-900 group-hover:text-cyan-300">
                    {s.stage}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 light:text-slate-500 hidden sm:block">
                    {s.desc}
                  </span>
                </div>

                {idx < cicdStages.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-blue-500 hidden lg:block animate-pulse" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
