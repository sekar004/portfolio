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
    <section id="cloud" className="py-20 bg-[#070b1a] light:bg-slate-100 relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
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

        {/* Conceptual Infrastructure Elements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* AWS Card */}
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 border border-amber-500/30 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <AwsIcon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white light:text-slate-900">AWS Cloud</h3>
                  <p className="text-xs font-mono text-amber-400">Amazon Web Services</p>
                </div>
              </div>
              <Cloud className="w-6 h-6 text-amber-400" />
            </div>

            <div className="space-y-3">
              {elements.map((el, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 flex items-center gap-3">
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
          <div className="glass-panel glass-panel-hover rounded-3xl p-8 border border-sky-500/30 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-sky-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-500/10 border border-sky-500/30">
                  <AzureIcon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white light:text-slate-900">Azure Cloud</h3>
                  <p className="text-xs font-mono text-sky-400">Microsoft Azure Infrastructure</p>
                </div>
              </div>
              <Cloud className="w-6 h-6 text-sky-400" />
            </div>

            <div className="space-y-3">
              {elements.map((el, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 flex items-center gap-3">
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
