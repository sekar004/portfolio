import React from 'react';
import { ExternalLink } from 'lucide-react';

export const SelectedDevopsWork: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Project Name',
      env: 'AWS / Docker / CI/CD',
      problem: '[Add project problem]',
      solution: '[Add DevOps solution]',
      techs: '[Add technologies]',
    },
    {
      id: 2,
      title: 'Project Name',
      env: 'Kubernetes / Docker',
      problem: '[Add project problem]',
      solution: '[Add DevOps solution]',
      techs: '[Add technologies]',
    },
    {
      id: 3,
      title: 'Project Name',
      env: 'AWS / Terraform',
      problem: '[Add project problem]',
      solution: '[Add DevOps solution]',
      techs: '[Add technologies]',
    },
    {
      id: 4,
      title: 'Project Name',
      env: 'CI/CD / GitLab',
      problem: '[Add project problem]',
      solution: '[Add DevOps solution]',
      techs: '[Add technologies]',
    },
    {
      id: 5,
      title: 'Project Name',
      env: 'Monitoring / Grafana',
      problem: '[Add project problem]',
      solution: '[Add DevOps solution]',
      techs: '[Add technologies]',
    },
    {
      id: 6,
      title: 'Project Name',
      env: 'Azure / Kubernetes',
      problem: '[Add project problem]',
      solution: '[Add DevOps solution]',
      techs: '[Add technologies]',
    },
  ];

  return (
    <section className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            SELECTED DEVOPS WORK
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            DevOps Case Studies
          </h2>
          <p className="text-slate-400 text-sm">
            Real-world projects (Add your project details here).
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj) => (
            <div 
              key={proj.id}
              className="glass-panel glass-panel-hover rounded-2xl p-6 border border-blue-500/20 flex flex-col justify-between group space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-extrabold text-white group-hover:text-cyan-300 transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] font-mono text-cyan-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-500/30">
                    {proj.env}
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  <div>
                    <span className="text-slate-400 font-semibold">Problem: </span>
                    <span className="text-slate-300">{proj.problem}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Solution: </span>
                    <span className="text-slate-300">{proj.solution}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">Techs: </span>
                    <span className="text-blue-400">{proj.techs}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <button 
                  onClick={() => alert('Project details can be edited in src/components/SelectedDevopsWork.tsx')}
                  className="w-full py-2 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 border border-blue-500/30 text-blue-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all"
                >
                  <span>View Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
