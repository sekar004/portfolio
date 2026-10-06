import React from 'react';
import { CheckCircle2, Cloud } from 'lucide-react';
import { AwsIcon, AzureIcon } from './TechIcons';

export const CloudInfrastructure: React.FC = () => {
  const awsItems = [
    'Application deployment',
    'Infrastructure provisioning',
    'Cloud infrastructure management',
  ];

  const azureItems = [
    'Application deployment',
    'Infrastructure provisioning',
    'Cloud infrastructure management',
  ];

  return (
    <section className="py-20 bg-[#070b1a] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CLOUD INFRASTRUCTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Enterprise Cloud Management
          </h2>
          <p className="text-slate-400 text-sm">
            Scalable multi-cloud deployment & management across AWS and Microsoft Azure.
          </p>
        </div>

        {/* Two Large Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* AWS Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-amber-500/30 relative overflow-hidden group">
            <div className="flex items-center justify-between pb-6 border-b border-amber-500/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  <AwsIcon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">AWS</h3>
                  <p className="text-xs font-mono text-amber-400">Amazon Web Services</p>
                </div>
              </div>
              <Cloud className="w-6 h-6 text-amber-400/50" />
            </div>

            <ul className="space-y-4">
              {awsItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* AZURE Card */}
          <div className="glass-panel glass-panel-hover rounded-2xl p-8 border border-sky-500/30 relative overflow-hidden group">
            <div className="flex items-center justify-between pb-6 border-b border-sky-500/20 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/30 group-hover:scale-110 transition-transform">
                  <AzureIcon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white">AZURE</h3>
                  <p className="text-xs font-mono text-sky-400">Microsoft Azure Cloud</p>
                </div>
              </div>
              <Cloud className="w-6 h-6 text-sky-400/50" />
            </div>

            <ul className="space-y-4">
              {azureItems.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
