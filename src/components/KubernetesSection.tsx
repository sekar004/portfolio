import React from 'react';
import { Layers, ArrowRight, Activity, Network } from 'lucide-react';
import { KubernetesIcon, DockerIcon, AwsIcon, AzureIcon } from './TechIcons';

export const KubernetesSection: React.FC = () => {
  const k8sFlow = [
    { title: 'Ingress', sub: 'Routing & SSL', desc: 'Traffic entry point' },
    { title: 'Service', sub: 'Load Balancing', desc: 'Internal / External IPs' },
    { title: 'Deployment', sub: 'ReplicaSets', desc: 'Declarative updates' },
    { title: 'Pods', sub: 'Container Instances', desc: 'Application containers' },
  ];

  const keyConcepts = [
    { title: 'Deployments', desc: 'Manage application rollout & scaling' },
    { title: 'Services', desc: 'Expose pods via ClusterIP, NodePort, LoadBalancer' },
    { title: 'ConfigMaps', desc: 'Decouple configuration artifacts from image' },
    { title: 'Ingress', desc: 'HTTP & HTTPS routing rules to cluster services' },
  ];

  return (
    <section className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            KUBERNETES EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white flex items-center justify-center gap-3">
            <KubernetesIcon size={32} />
            Container Orchestration
          </h2>
          <p className="text-slate-400 text-sm">
            Container orchestration for scalable and reliable applications.
          </p>
        </div>

        {/* Main Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Architecture Flow (Ingress -> Service -> Deployment -> Pods) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/40 mb-6">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                  <Network className="w-4 h-4 text-cyan-400" />
                  Cluster Architecture Topology
                </span>
                <span className="text-[11px] font-mono text-blue-400">
                  k8s v1.30+
                </span>
              </div>

              {/* Flow boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 relative">
                {k8sFlow.map((item, idx) => (
                  <div key={idx} className="relative group">
                    <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/30 group-hover:border-cyan-400 transition-all text-center space-y-1">
                      <span className="text-[10px] font-mono text-blue-400 font-bold block uppercase">
                        LAYER 0{idx + 1}
                      </span>
                      <h4 className="text-sm font-extrabold text-white">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-mono">
                        {item.sub}
                      </p>
                    </div>

                    {/* Arrow between items */}
                    {idx < k8sFlow.length - 1 && (
                      <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-cyan-400">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Stack Flow */}
            <div className="mt-8 pt-6 border-t border-slate-800/80">
              <span className="text-xs font-mono text-slate-400 font-bold block mb-3">
                INTEGRATED STACK FLOW:
              </span>
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#070e24] border border-blue-500/20">
                <div className="flex items-center gap-2">
                  <DockerIcon size={18} />
                  <span className="text-xs font-mono font-semibold text-slate-200">Docker</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500" />
                <div className="flex items-center gap-2">
                  <KubernetesIcon size={18} />
                  <span className="text-xs font-mono font-semibold text-cyan-300">Kubernetes</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500" />
                <div className="flex items-center gap-2">
                  <AwsIcon size={16} />
                  <AzureIcon size={16} />
                  <span className="text-xs font-mono font-semibold text-amber-300">AWS / Azure</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500" />
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-semibold text-emerald-300">Monitoring</span>
                </div>
              </div>
            </div>

          </div>

          {/* Key Concepts List (Right) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/25 flex flex-col justify-between">
            <div>
              <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-blue-900/40 flex items-center gap-2">
                <Layers className="w-4 h-4 text-cyan-400" />
                Key Concepts
              </h3>
              <div className="space-y-3">
                {keyConcepts.map((concept, cIdx) => (
                  <div key={cIdx} className="p-3 rounded-xl bg-slate-900/70 border border-slate-800/80 space-y-0.5">
                    <span className="text-xs font-bold text-cyan-400 block font-mono">
                      {concept.title}
                    </span>
                    <p className="text-xs text-slate-300">
                      {concept.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
