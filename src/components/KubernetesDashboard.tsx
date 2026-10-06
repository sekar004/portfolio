import React from 'react';
import { Network, Server, Layers, Box } from 'lucide-react';
import { KubernetesIcon } from './TechIcons';

export const KubernetesDashboard: React.FC = () => {
  const k8sCards = [
    { title: 'Cluster', desc: 'Managed High Availability Kubernetes Cluster' },
    { title: 'Nodes', desc: 'Multi-node worker pools (Node 01, 02, 03)' },
    { title: 'Pods', desc: 'Container instances running frontend, backend, and APIs' },
    { title: 'Services', desc: 'ClusterIP, NodePort & LoadBalancer traffic exposure' },
    { title: 'Ingress', desc: 'HTTP/HTTPS path routing & SSL termination' },
    { title: 'ConfigMaps', desc: 'Decoupled environment configuration artifacts' },
  ];

  const nodesList = [
    { name: 'k8s-node-01', status: 'ONLINE', cpu: '18%', mem: '2.1 GB' },
    { name: 'k8s-node-02', status: 'ONLINE', cpu: '22%', mem: '2.8 GB' },
    { name: 'k8s-node-03', status: 'ONLINE', cpu: '14%', mem: '1.9 GB' },
  ];

  return (
    <section id="kubernetes" className="py-20 bg-[#070b1a] light:bg-slate-100 relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CONTAINER ORCHESTRATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 flex items-center justify-center gap-3">
            <KubernetesIcon size={32} />
            Kubernetes Operations
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Production container orchestration, workload deployment, pod management, and traffic routing.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Visual K8s Cluster Monitor (Left) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-blue-900/40">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <Network className="w-4 h-4 text-cyan-400" />
                K8s CLUSTER TOPOLOGY
              </span>
              <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                ● Cluster Active
              </span>
            </div>

            {/* Nodes Status Grid */}
            <div className="space-y-3">
              <span className="text-xs font-mono text-slate-400 font-semibold block">ACTIVE CLUSTER NODES:</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {nodesList.map((node, nIdx) => (
                  <div key={nIdx} className="p-3.5 rounded-xl bg-slate-900/90 light:bg-white border border-blue-500/20 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-white light:text-slate-900 flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-cyan-400" />
                        {node.name}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>CPU: {node.cpu}</span>
                      <span>MEM: {node.mem}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pod Workloads Row */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono text-slate-400 font-semibold block">DEPLOYED POD WORKLOADS:</span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {['Frontend Pods', 'Backend Pods', 'API Gateway', 'Microservices'].map((pod, pIdx) => (
                  <div key={pIdx} className="p-3 rounded-xl bg-slate-900/60 light:bg-slate-200 border border-slate-800 text-center">
                    <Box className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                    <span className="text-xs font-mono font-semibold text-slate-200 light:text-slate-800">{pod}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* 6 K8s Concept Cards (Right) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30 space-y-4">
            <h3 className="text-base font-bold text-white light:text-slate-900 pb-3 border-b border-blue-900/40 flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              Core Objects
            </h3>

            <div className="grid grid-cols-1 gap-2.5">
              {k8sCards.map((card, cIdx) => (
                <div key={cIdx} className="p-3 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 space-y-0.5">
                  <span className="text-xs font-mono font-bold text-cyan-400 block">{card.title}</span>
                  <p className="text-[11px] text-slate-300 light:text-slate-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
