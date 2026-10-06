import React from 'react';
import { 
  Server, Layers, Cpu, GitBranch, Cloud, Activity, Globe, ShieldCheck, Database, Terminal
} from 'lucide-react';
import { 
  AwsIcon, AzureIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitIcon, GitHubIcon, GitLabIcon,
  TerraformIcon, AnsibleIcon, PrometheusIcon, GrafanaIcon, SonarQubeIcon, OwaspIcon, ZapIcon,
  LinuxIcon, NginxIcon, ApacheIcon, CloudWatchIcon
} from './TechIcons';

export const TechnicalSkills: React.FC = () => {
  const skillCategories = [
    {
      category: 'Operating Systems',
      icon: <Server className="w-4 h-4 text-blue-400" />,
      skills: [
        { name: 'Linux', icon: <LinuxIcon size={20} /> },
        { name: 'Windows', icon: <Terminal className="w-5 h-5 text-sky-400" /> },
      ],
    },
    {
      category: 'Containers & Orchestration',
      icon: <Layers className="w-4 h-4 text-cyan-400" />,
      skills: [
        { name: 'Docker', icon: <DockerIcon size={20} /> },
        { name: 'Kubernetes', icon: <KubernetesIcon size={20} /> },
      ],
    },
    {
      category: 'Infrastructure as Code / Automation',
      icon: <Cpu className="w-4 h-4 text-purple-400" />,
      skills: [
        { name: 'Ansible', icon: <AnsibleIcon size={20} /> },
        { name: 'Terraform', icon: <TerraformIcon size={20} /> },
      ],
    },
    {
      category: 'CI/CD & Version Control',
      icon: <GitBranch className="w-4 h-4 text-orange-400" />,
      skills: [
        { name: 'Jenkins', icon: <JenkinsIcon size={20} /> },
        { name: 'Git', icon: <GitIcon size={20} /> },
        { name: 'GitHub', icon: <GitHubIcon size={20} className="text-white" /> },
        { name: 'GitLab', icon: <GitLabIcon size={20} /> },
      ],
    },
    {
      category: 'Cloud Platforms',
      icon: <Cloud className="w-4 h-4 text-amber-400" />,
      skills: [
        { name: 'AWS', icon: <AwsIcon size={20} /> },
        { name: 'Azure', icon: <AzureIcon size={20} /> },
      ],
    },
    {
      category: 'Monitoring & Logging',
      icon: <Activity className="w-4 h-4 text-emerald-400" />,
      skills: [
        { name: 'CloudWatch', icon: <CloudWatchIcon size={20} /> },
        { name: 'Prometheus', icon: <PrometheusIcon size={20} /> },
        { name: 'Grafana', icon: <GrafanaIcon size={20} /> },
      ],
    },
    {
      category: 'Web & Databases',
      icon: <Globe className="w-4 h-4 text-indigo-400" />,
      skills: [
        { name: 'Apache', icon: <ApacheIcon size={20} /> },
        { name: 'Nginx', icon: <NginxIcon size={20} /> },
        { name: 'phpMyAdmin', icon: <Database className="w-5 h-5 text-cyan-400" /> },
      ],
    },
    {
      category: 'Security & Code Quality',
      icon: <ShieldCheck className="w-4 h-4 text-teal-400" />,
      skills: [
        { name: 'SonarQube', icon: <SonarQubeIcon size={20} /> },
        { name: 'OWASP', icon: <OwaspIcon size={20} /> },
        { name: 'ZAP', icon: <ZapIcon size={20} /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-[#070b1a] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            TECHNICAL SKILLS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            My Skills
          </h2>
          <p className="text-slate-400 text-sm">
            Core DevOps toolchain and enterprise technology stack.
          </p>
        </div>

        {/* Dashboard Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-blue-500/20 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-2.5 pb-3 mb-4 border-b border-blue-900/30">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-blue-500/20">
                    {cat.icon}
                  </div>
                  <h3 className="text-xs font-bold text-slate-200 tracking-wide">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills Cards list */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-blue-400/40 hover:bg-slate-800/80 transition-all text-xs font-medium text-slate-200 shadow-sm"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
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
