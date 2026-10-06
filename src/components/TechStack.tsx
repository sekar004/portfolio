import React from 'react';
import { 
  AwsIcon, AzureIcon, TerraformIcon, AnsibleIcon, DockerIcon, KubernetesIcon, HelmIcon, ArgoCdIcon,
  JenkinsIcon, GitIcon, GitHubIcon, GitLabIcon, PrometheusIcon, GrafanaIcon, ElkIcon, NginxIcon, ApacheIcon, LinuxIcon
} from './TechIcons';

export const TechStack: React.FC = () => {
  const stackItems = [
    { name: 'AWS', icon: <AwsIcon size={18} /> },
    { name: 'Azure', icon: <AzureIcon size={18} /> },
    { name: 'Terraform', icon: <TerraformIcon size={18} /> },
    { name: 'Ansible', icon: <AnsibleIcon size={18} /> },
    { name: 'Docker', icon: <DockerIcon size={18} /> },
    { name: 'Kubernetes', icon: <KubernetesIcon size={18} /> },
    { name: 'Helm', icon: <HelmIcon size={18} /> },
    { name: 'ArgoCD', icon: <ArgoCdIcon size={18} /> },
    { name: 'Jenkins', icon: <JenkinsIcon size={18} /> },
    { name: 'Git', icon: <GitIcon size={18} /> },
    { name: 'GitHub', icon: <GitHubIcon size={18} className="text-white" /> },
    { name: 'GitLab', icon: <GitLabIcon size={18} /> },
    { name: 'Prometheus', icon: <PrometheusIcon size={18} /> },
    { name: 'Grafana', icon: <GrafanaIcon size={18} /> },
    { name: 'ELK', icon: <ElkIcon size={18} /> },
    { name: 'Nginx', icon: <NginxIcon size={18} /> },
    { name: 'Apache', icon: <ApacheIcon size={18} /> },
    { name: 'Linux', icon: <LinuxIcon size={18} /> },
  ];

  return (
    <section className="py-8 bg-[#040712] light:bg-slate-100 border-y border-blue-900/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-4 text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
          ENTERPRISE DEVOPS TOOLCHAIN STACK
        </div>

        {/* Horizontal Marquee / Wrap Pills */}
        <div className="flex flex-wrap items-center gap-2.5">
          {stackItems.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 light:bg-white border border-blue-500/20 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 group cursor-default"
            >
              <div className="group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <span className="text-xs font-mono font-bold text-slate-200 light:text-slate-800 group-hover:text-white">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
