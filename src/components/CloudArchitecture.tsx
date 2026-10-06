import React from 'react';
import { Cloud, Server, Cpu, HardDrive, Network, Activity } from 'lucide-react';
import { AwsIcon, AzureIcon } from './TechIcons';

export const CloudArchitecture: React.FC = () => {
  const elements = [
    { title: 'Compute', desc: 'EC2 / Virtual Machines for container hosting', icon: <Cpu className="w-4 h-4 text-cyan-400" /> },
    { title: 'Networking', desc: 'VPCs, Subnets, Ingress rules & Security Groups', icon: <Network className="w-4 h-4 text-blue-400" /> },
    { title: 'Storage', desc: 'S3, Persistent Volumes & Container Storage Interfaces', icon: <HardDrive className="w-4 h-4 text-purple-400" /> },
    { title: 'Deployment', desc: 'Automated CI/CD application deployments', icon: <Server className="w-4 h-4 text-emerald-400" /> },
    { title: 'Monitoring', desc: 'CloudWatch & Azure Monitor telemetry alerts', icon: <Activity className="w-4 h-4 text-amber-400" /> },
  ];

  return (
    <section id="cloud" className="py-12 bg-[#070b1a] light:bg-slate-100 relative border-t border-blue-900/20 devops-circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CLOUD INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Multi-Cloud Architecture
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Scalable cloud infrastructure provisioning and management on AWS and Microsoft Azure.
          </p>
        </div>

        {/* Visual Infrastructure Network Diagram Graphic */}
        <div className="mb-8 p-5 sm:p-6 rounded-3xl glass-panel border border-blue-500/30 light:border-slate-300 space-y-4">
          <div className="flex items-center justify-between border-b border-blue-900/40 light:border-slate-200 pb-3">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-cyan-400 light:text-blue-700 uppercase tracking-wider">
              <Network className="w-4 h-4 text-cyan-400 light:text-blue-600" />
              <span>LIVE MULTI-CLOUD ARCHITECTURE DIAGRAM</span>
            </div>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/80 light:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-500/30 font-bold">
              High Availability • Auto-Scaling
            </span>
          </div>

          {/* Interactive Cloud Diagram Graphic Node Map */}
          <div className="bg-[#050816] light:bg-slate-900 p-5 rounded-2xl border border-slate-800 grid grid-cols-1 md:grid-cols-4 gap-4 items-center text-center font-mono">
            
            {/* Node 1: Edge / Gateway */}
            <div className="p-3.5 rounded-xl bg-blue-950/70 border border-blue-500/40 space-y-1 shadow-lg">
              <div className="w-3 h-3 rounded-full bg-cyan-400 mx-auto animate-ping mb-1" />
              <span className="text-xs font-bold text-cyan-300 block">Cloudflare DNS / Route53</span>
              <span className="text-[10px] text-slate-400">Global Anycast SSL/TLS</span>
            </div>

            {/* Node 2: VPC / Load Balancer */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-amber-500/40 space-y-1 shadow-lg">
              <span className="text-xs font-bold text-amber-400 block">AWS ALB / Ingress</span>
              <span className="text-[10px] text-slate-400">VPC Public Subnet</span>
            </div>

            {/* Node 3: Container Instances */}
            <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-500/40 space-y-1 shadow-lg">
              <span className="text-xs font-bold text-indigo-400 block">Docker / EKS Cluster</span>
              <span className="text-[10px] text-slate-400">Private Subnet Auto-Scaling</span>
            </div>

            {/* Node 4: Database & Storage */}
            <div className="p-3.5 rounded-xl bg-purple-950/70 border border-purple-500/40 space-y-1 shadow-lg">
              <span className="text-xs font-bold text-purple-300 block">RDS MySQL & S3 Buckets</span>
              <span className="text-[10px] text-slate-400">Encrypted Backups</span>
            </div>

          </div>
        </div>

        {/* Conceptual Infrastructure Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* AWS Card */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-amber-500/30 light:border-slate-300 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20 light:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <AwsIcon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white light:text-slate-900">AWS Cloud</h3>
                  <p className="text-xs font-mono text-amber-400 light:text-amber-700">Amazon Web Services</p>
                </div>
              </div>
              <Cloud className="w-6 h-6 text-amber-400" />
            </div>

            <div className="space-y-2.5">
              {elements.map((el, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 flex items-center gap-3 shadow-sm">
                  {el.icon}
                  <div>
                    <span className="text-xs font-bold text-white light:text-slate-900 block">{el.title}</span>
                    <span className="text-[11px] text-slate-400 light:text-slate-600">{el.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Azure Card */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-sky-500/30 light:border-slate-300 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/20 light:border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30">
                  <AzureIcon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white light:text-slate-900">Azure Cloud</h3>
                  <p className="text-xs font-mono text-sky-400 light:text-sky-700">Microsoft Azure Infrastructure</p>
                </div>
              </div>
              <Cloud className="w-6 h-6 text-sky-400" />
            </div>

            <div className="space-y-2.5">
              {elements.map((el, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 flex items-center gap-3 shadow-sm">
                  {el.icon}
                  <div>
                    <span className="text-xs font-bold text-white light:text-slate-900 block">{el.title}</span>
                    <span className="text-[11px] text-slate-400 light:text-slate-600">{el.desc}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
