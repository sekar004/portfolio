import React from 'react';
import { Layers, ArrowUpRight } from 'lucide-react';
import { GitHubIcon } from './TechIcons';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Automated CI/CD Pipeline & Cloud Deployment',
      description: 'Multi-stage automated build, test, and release deployment pipeline targeting AWS cloud infrastructure.',
      environment: 'AWS / Docker / Jenkins / CI/CD',
      architecture: 'Git -> Jenkins -> Docker -> AWS EC2',
      techs: ['AWS', 'Docker', 'Jenkins', 'Git', 'Nginx', 'SonarQube'],
    },
    {
      id: 2,
      title: 'Kubernetes Container Orchestration Setup',
      description: 'Declarative Kubernetes cluster deployment configured with Deployments, Services, ConfigMaps, and Ingress routing.',
      environment: 'Kubernetes / Docker / Linux',
      architecture: 'Ingress -> Service -> Deployment -> Pods',
      techs: ['Kubernetes', 'Docker', 'Linux', 'Nginx', 'CloudWatch'],
    },
    {
      id: 3,
      title: 'Infrastructure as Code & Server Automation',
      description: 'Automated server management, environment configuration, shell scripting, and cron job scheduling for high availability.',
      environment: 'Terraform / Ansible / Linux',
      architecture: 'Terraform -> Provisioning -> Ansible -> Cron',
      techs: ['Terraform', 'Ansible', 'Linux', 'Shell Scripts', 'Apache'],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-[#050814] light:bg-slate-50 relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            DEVOPS PROJECTS & CASE STUDIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Selected DevOps Implementations
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Real-world DevOps infrastructure automation, container orchestration, and pipeline engineering.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-blue-500/25 light:border-slate-300 flex flex-col justify-between space-y-5 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 light:text-blue-800 bg-blue-950/80 light:bg-blue-100 px-2.5 py-1 rounded border border-blue-500/30 light:border-blue-300">
                    {proj.environment}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900/90 light:bg-slate-200 border border-slate-800 light:border-slate-300">
                    <Layers className="w-4 h-4 text-blue-400 light:text-blue-600" />
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white light:text-slate-900 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                  {proj.description}
                </p>

                {/* Architecture Preview Box */}
                <div className="p-3 rounded-xl bg-[#040714] light:bg-slate-100 border border-slate-800 light:border-slate-300 font-mono text-[11px] text-cyan-300 light:text-blue-800">
                  <span className="text-[10px] text-slate-500 light:text-slate-600 block mb-1">ARCHITECTURE FLOW:</span>
                  {proj.architecture}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techs.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded bg-slate-900/80 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-[10px] font-mono text-slate-300 light:text-slate-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-slate-800/80 light:border-slate-200 flex items-center gap-3">
                <a
                  href="https://github.com/sekar004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900/90 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-700 light:border-slate-300 text-slate-200 light:text-slate-800 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <GitHubIcon size={14} className="text-white light:text-slate-900" />
                  <span>GitHub</span>
                </a>

                <a
                  href="#contact"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-cyan-500/20"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
