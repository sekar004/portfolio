import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { GitHubIcon, JenkinsIcon, KubernetesIcon, TerraformIcon } from './TechIcons';

export const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Automated CI/CD Pipeline & Cloud Deployment',
      description: 'Multi-stage automated build, static code quality analysis with SonarQube, Docker containerization, and release deployment targeting AWS EC2 instances.',
      environment: 'Jenkins / Docker / SonarQube / AWS',
      architecture: 'Git → Jenkins → SonarQube → Docker → AWS EC2',
      techs: ['AWS', 'Docker', 'Jenkins', 'Git', 'Nginx', 'SonarQube'],
      icon: <JenkinsIcon size={22} />,
    },
    {
      id: 2,
      title: 'Containerized Application Infrastructure on Kubernetes',
      description: 'Declarative Kubernetes cluster configuration featuring Deployments, ClusterIP & NodePort Services, ConfigMaps, and Ingress routing with SSL/TLS.',
      environment: 'Kubernetes / Docker / Nginx / Linux',
      architecture: 'Ingress → Service → Deployment → Pods',
      techs: ['Kubernetes', 'Docker', 'Linux', 'Nginx', 'CloudWatch'],
      icon: <KubernetesIcon size={22} />,
    },
    {
      id: 3,
      title: 'Infrastructure as Code (IaC) & Server Automation',
      description: 'Infrastructure provisioning on AWS using Terraform HCL scripts alongside Ansible playbooks for server configuration, Nginx load balancing, and cron job automation.',
      environment: 'Terraform / Ansible / Shell / AWS',
      architecture: 'Terraform → AWS EC2 → Ansible → Shell Scripts',
      techs: ['Terraform', 'Ansible', 'Linux', 'Shell Scripting', 'AWS'],
      icon: <TerraformIcon size={22} />,
    },
  ];

  return (
    <section id="projects" className="py-16 bg-[#050816] light:bg-slate-50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 light:text-blue-700 uppercase">
            FEATURED PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
            DevOps Project Showcase
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm font-medium">
            Real-world DevOps infrastructure implementations and CI/CD pipeline automation.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((proj) => (
            <div
              key={proj.id}
              className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800 light:border-slate-300 flex flex-col justify-between space-y-5 hover:border-blue-500/50 transition-all shadow-xl group"
            >
              <div className="space-y-4">
                
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-blue-400 light:text-blue-800 bg-blue-950/80 light:bg-blue-100 px-2.5 py-1 rounded border border-blue-500/30 light:border-blue-300">
                    {proj.environment}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300">
                    {proj.icon}
                  </div>
                </div>

                <h3 className="text-lg font-extrabold text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                  {proj.title}
                </h3>

                <p className="text-xs text-slate-300 light:text-slate-600 leading-relaxed font-sans">
                  {proj.description}
                </p>

                {/* Architecture Preview Flow */}
                <div className="p-3 rounded-xl bg-[#040714] light:bg-slate-100 border border-slate-800 light:border-slate-300 font-mono text-[11px] text-blue-300 light:text-blue-800">
                  <span className="text-[10px] text-slate-500 light:text-slate-600 block mb-1 font-bold">ARCHITECTURE FLOW:</span>
                  {proj.architecture}
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {proj.techs.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded bg-slate-900/80 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-[10px] font-mono text-slate-300 light:text-slate-800 font-semibold"
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
                  className="flex-1 py-2.5 px-3 rounded-xl bg-slate-900/90 light:bg-white hover:bg-slate-800 light:hover:bg-slate-100 border border-slate-700 light:border-slate-300 text-slate-200 light:text-slate-800 text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <GitHubIcon size={14} className="text-white light:text-slate-900" />
                  <span>GitHub</span>
                </a>

                <a
                  href="#contact"
                  className="flex-1 py-2.5 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-blue-600/30 transition-all"
                >
                  <span>Details</span>
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
