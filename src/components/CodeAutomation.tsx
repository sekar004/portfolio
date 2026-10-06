import React from 'react';
import { FileCode, Terminal, ExternalLink } from 'lucide-react';
import { 
  GitIcon, JenkinsIcon, DockerIcon, KubernetesIcon, TerraformIcon, AnsibleIcon, GitHubIcon
} from './TechIcons';

export const CodeAutomation: React.FC = () => {
  const codeArtifacts = [
    { name: 'Git Repositories', icon: <GitIcon size={24} />, desc: 'Version controlled infra & application repos' },
    { name: 'Jenkinsfiles', icon: <JenkinsIcon size={24} />, desc: 'Declarative & scripted CI/CD pipelines' },
    { name: 'Dockerfiles', icon: <DockerIcon size={24} />, desc: 'Multi-stage optimized container images' },
    { name: 'Kubernetes YAML', icon: <KubernetesIcon size={24} />, desc: 'Deployments, Services & Ingress manifests' },
    { name: 'Terraform', icon: <TerraformIcon size={24} />, desc: 'Infrastructure as Code cloud modules' },
    { name: 'Ansible Playbooks', icon: <AnsibleIcon size={24} />, desc: 'Automated configuration management' },
    { name: 'Shell Scripts', icon: <Terminal className="w-6 h-6 text-emerald-400" />, desc: 'Bash scripts & system automation' },
    { name: 'CI/CD Configurations', icon: <FileCode className="w-6 h-6 text-cyan-400" />, desc: 'Pipeline rules & secret integration' },
  ];

  return (
    <section className="py-20 bg-[#070b1a] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            CODE & AUTOMATION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Git Repositories & Infrastructure Code
          </h2>
          <p className="text-slate-400 text-sm">
            Infrastructure as Code scripts, manifest configurations, and automated pipeline definitions.
          </p>
        </div>

        {/* 8 Grid Artifact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {codeArtifacts.map((item, idx) => (
            <div 
              key={idx}
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-blue-500/20 space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-xl bg-slate-900/90 border border-blue-500/30 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] font-mono text-slate-500">
                  IaC / Script
                </span>
              </div>
              <h3 className="text-sm font-extrabold text-white group-hover:text-cyan-300">
                {item.name}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* GitHub Button CTA */}
        <div className="text-center">
          <a
            href="https://github.com/sekar004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-950/40 hover:border-cyan-400 transition-all"
          >
            <GitHubIcon size={18} className="text-white" />
            <span>View on GitHub (Editable Link: https://github.com/sekar004)</span>
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        </div>

      </div>
    </section>
  );
};
