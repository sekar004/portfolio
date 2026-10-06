import React from 'react';
import { Terminal, Clock, CheckCircle2, Settings } from 'lucide-react';
import { LinuxIcon, DockerIcon, NginxIcon, ApacheIcon, AnsibleIcon, TerraformIcon } from './TechIcons';

export const ServerAutomation: React.FC = () => {
  const techGrid = [
    { name: 'Linux', icon: <LinuxIcon size={24} /> },
    { name: 'Docker', icon: <DockerIcon size={24} /> },
    { name: 'Nginx', icon: <NginxIcon size={24} /> },
    { name: 'Apache', icon: <ApacheIcon size={24} /> },
    { name: 'Shell Scripts', icon: <Terminal className="w-6 h-6 text-emerald-400" /> },
    { name: 'Cron Jobs', icon: <Clock className="w-6 h-6 text-purple-400" /> },
    { name: 'Ansible', icon: <AnsibleIcon size={24} /> },
    { name: 'Terraform', icon: <TerraformIcon size={24} /> },
  ];

  const operationalTasks = [
    'Server Management',
    'Application Deployment',
    'Configuration',
    'Automation',
    'Routine Operational Tasks',
  ];

  return (
    <section className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            INFRASTRUCTURE & SERVER AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Server & Workflow Automation
          </h2>
          <p className="text-slate-400 text-sm">
            Automating routine operational tasks, configurations, and server provisioning.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Tech Grid (8 items) */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {techGrid.map((item, idx) => (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 text-center flex flex-col items-center justify-center gap-3 border border-blue-500/20 group"
              >
                <div className="p-3 rounded-xl bg-slate-900/90 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-xs font-bold text-slate-200 group-hover:text-white font-mono">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* Operational Support Checklist Card */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30">
            <div className="flex items-center gap-2 pb-4 mb-4 border-b border-blue-900/40">
              <Settings className="w-5 h-5 text-cyan-400 animate-spin" style={{ animationDuration: '15s' }} />
              <h3 className="text-base font-extrabold text-white">Operational Scope</h3>
            </div>

            <p className="text-xs text-slate-400 mb-4 font-mono">
              These automation tools support end-to-end system reliability:
            </p>

            <ul className="space-y-3">
              {operationalTasks.map((task, tIdx) => (
                <li key={tIdx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
