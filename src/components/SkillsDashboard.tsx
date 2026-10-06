import React from 'react';
import { Cloud, Layers, GitBranch, Cpu, Activity, Globe, ShieldCheck } from 'lucide-react';
import { 
  AwsIcon, AzureIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitHubIcon, GitLabIcon,
  TerraformIcon, AnsibleIcon, PrometheusIcon, GrafanaIcon, ElkIcon, NginxIcon, ApacheIcon, LinuxIcon,
  SonarQubeIcon, OwaspIcon, ZapIcon, CloudWatchIcon
} from './TechIcons';

export const SkillsDashboard: React.FC = () => {
  const skillCategories = [
    {
      category: 'CLOUD PLATFORMS',
      icon: <Cloud className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'AWS', icon: <AwsIcon size={20} /> },
        { name: 'Azure', icon: <AzureIcon size={20} /> },
      ],
    },
    {
      category: 'CONTAINERIZATION',
      icon: <Layers className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'Docker', icon: <DockerIcon size={20} /> },
        { name: 'Kubernetes', icon: <KubernetesIcon size={20} /> },
      ],
    },
    {
      category: 'CI/CD PIPELINES',
      icon: <GitBranch className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'Jenkins', icon: <JenkinsIcon size={20} /> },
        { name: 'GitHub', icon: <GitHubIcon size={20} className="text-white light:text-slate-900" /> },
        { name: 'GitLab', icon: <GitLabIcon size={20} /> },
      ],
    },
    {
      category: 'INFRASTRUCTURE AS CODE',
      icon: <Cpu className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'Terraform', icon: <TerraformIcon size={20} /> },
        { name: 'Ansible', icon: <AnsibleIcon size={20} /> },
      ],
    },
    {
      category: 'MONITORING & LOGS',
      icon: <Activity className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'Prometheus', icon: <PrometheusIcon size={20} /> },
        { name: 'Grafana', icon: <GrafanaIcon size={20} /> },
        { name: 'CloudWatch', icon: <CloudWatchIcon size={20} /> },
        { name: 'ELK', icon: <ElkIcon size={20} /> },
      ],
    },
    {
      category: 'WEB & OS',
      icon: <Globe className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'Nginx', icon: <NginxIcon size={20} /> },
        { name: 'Apache', icon: <ApacheIcon size={20} /> },
        { name: 'Linux', icon: <LinuxIcon size={20} /> },
      ],
    },
    {
      category: 'SECURITY & QUALITY',
      icon: <ShieldCheck className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'SonarQube', icon: <SonarQubeIcon size={20} /> },
        { name: 'OWASP', icon: <OwaspIcon size={20} /> },
        { name: 'ZAP', icon: <ZapIcon size={20} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-12 bg-[#050814] light:bg-slate-50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            TECHNICAL TOOLBOX
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Skills & Infrastructure Stack
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Core DevOps tools, platforms, and operational expertise.
          </p>
        </div>

        {/* Dashboard Panels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-slate-800 light:border-slate-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-slate-800 light:border-slate-200">
                  <div className="p-2 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-xs font-mono font-bold text-slate-200 light:text-slate-800 uppercase tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((s, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 hover:border-blue-500/60 transition-all text-xs font-mono font-bold text-slate-200 light:text-slate-800 shadow-sm"
                    >
                      {s.icon}
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
