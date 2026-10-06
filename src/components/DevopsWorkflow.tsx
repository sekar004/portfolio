import React from 'react';
import { ArrowRight, Code2, RefreshCw, Container, Layers, Cloud, Globe, Activity, ShieldCheck } from 'lucide-react';
import { 
  AwsIcon, AzureIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitIcon, GitHubIcon, GitLabIcon,
  PrometheusIcon, GrafanaIcon, SonarQubeIcon, OwaspIcon, ZapIcon, NginxIcon, ApacheIcon, CloudWatchIcon
} from './TechIcons';

export const DevopsWorkflow: React.FC = () => {
  const workflowStages = [
    {
      title: 'CODE',
      subtitle: 'Git / GitHub / GitLab',
      icon: <Code2 className="w-6 h-6 text-blue-400" />,
      techs: [<GitIcon size={18} key="1" />, <GitLabIcon size={18} key="2" />, <GitHubIcon size={18} className="text-white" key="3" />],
    },
    {
      title: 'CI/CD',
      subtitle: 'Jenkins',
      icon: <RefreshCw className="w-6 h-6 text-red-400" />,
      techs: [<JenkinsIcon size={20} key="1" />],
    },
    {
      title: 'CONTAINERIZATION',
      subtitle: 'Docker',
      icon: <Container className="w-6 h-6 text-cyan-400" />,
      techs: [<DockerIcon size={20} key="1" />],
    },
    {
      title: 'ORCHESTRATION',
      subtitle: 'Kubernetes',
      icon: <Layers className="w-6 h-6 text-indigo-400" />,
      techs: [<KubernetesIcon size={20} key="1" />],
    },
    {
      title: 'CLOUD',
      subtitle: 'AWS / Azure',
      icon: <Cloud className="w-6 h-6 text-amber-400" />,
      techs: [<AwsIcon size={18} key="1" />, <AzureIcon size={18} key="2" />],
    },
    {
      title: 'WEB LAYER',
      subtitle: 'Nginx / Apache',
      icon: <Globe className="w-6 h-6 text-emerald-400" />,
      techs: [<NginxIcon size={18} key="1" />, <ApacheIcon size={18} key="2" />],
    },
    {
      title: 'MONITORING',
      subtitle: 'CloudWatch / Prometheus / Grafana',
      icon: <Activity className="w-6 h-6 text-orange-400" />,
      techs: [<CloudWatchIcon size={16} key="1" />, <PrometheusIcon size={16} key="2" />, <GrafanaIcon size={16} key="3" />],
    },
    {
      title: 'SECURITY & QUALITY',
      subtitle: 'SonarQube / OWASP / ZAP',
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      techs: [<SonarQubeIcon size={16} key="1" />, <OwaspIcon size={16} key="2" />, <ZapIcon size={16} key="3" />],
    },
  ];

  return (
    <section id="devops-workflow" className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            MY DEVOPS WORKFLOW
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            End-to-End DevOps Pipeline
          </h2>
          <p className="text-slate-400 text-sm">
            End-to-end DevOps pipeline for building, deploying and monitoring applications.
          </p>
        </div>

        {/* Connected Cards Horizontal Workflow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {workflowStages.map((stage, idx) => (
            <div key={idx} className="relative group">
              <div className="glass-panel glass-panel-hover rounded-2xl p-6 border border-blue-500/20 flex flex-col justify-between h-full relative z-10">
                
                {/* Stage Index Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-bold text-cyan-400 bg-blue-950/80 border border-blue-500/30 px-2.5 py-1 rounded-md">
                    0{idx + 1}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900/90 border border-blue-500/20 group-hover:scale-110 transition-transform">
                    {stage.icon}
                  </div>
                </div>

                {/* Stage Information */}
                <div className="space-y-1 mb-4">
                  <h3 className="text-sm font-extrabold text-white tracking-wide">
                    {stage.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    {stage.subtitle}
                  </p>
                </div>

                {/* Tech Icons Row */}
                <div className="flex items-center gap-2 pt-3 border-t border-slate-800/80">
                  {stage.techs.map((tech, tIdx) => (
                    <div key={tIdx} className="p-1.5 rounded-lg bg-slate-900/90 border border-slate-800">
                      {tech}
                    </div>
                  ))}
                </div>

              </div>

              {/* Animated Connecting Arrow to next step (On larger screens) */}
              {idx < workflowStages.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 text-cyan-400 animate-pulse">
                  <div className="w-8 h-8 rounded-full bg-[#050814] border border-cyan-500/40 flex items-center justify-center shadow-lg">
                    <ArrowRight className="w-4 h-4 text-cyan-300" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
