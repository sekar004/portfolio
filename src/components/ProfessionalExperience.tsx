import React from 'react';
import { Calendar, CheckCircle2, Building2 } from 'lucide-react';

export const ProfessionalExperience: React.FC = () => {
  const experiences = [
    {
      period: 'August 2024 – Present',
      role: 'Junior DevOps Engineer',
      company: 'Dreams Technologies, Coimbatore',
      current: true,
      bullets: [
        'Automated application deployments and infrastructure provisioning on AWS and Azure using Docker and CI/CD pipelines.',
        'Implemented and maintained Jenkins pipelines for build, test and release processes.',
        'Deployed and managed containerized applications on Kubernetes.',
        'Worked with Deployments, Services, ConfigMaps and Ingress.',
        'Managed Nginx and Apache web servers/load balancers.',
        'Developed shell scripts and cron jobs.',
        'Integrated SonarQube and OWASP into CI/CD workflows.',
        'Collaborated with development teams using GitLab.',
      ],
      techs: ['AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Terraform', 'Ansible', 'Linux', 'Nginx', 'SonarQube'],
    },
    {
      period: 'February 2024 – August 2024',
      role: 'Cloud DevOps Trainee & Specialist',
      company: 'DevOps & Cloud Engineering Program',
      current: false,
      bullets: [
        'Trained in cloud infrastructure fundamentals, CI/CD practices, and containerization.',
        'Assisted in shell scripting, environment configuration, and version control workflows.',
        'Practiced container image creation, Docker file optimization, and multi-stage builds.',
      ],
      techs: ['Docker', 'Git', 'Linux', 'Shell Scripting', 'AWS'],
    },
  ];

  return (
    <section id="experience" className="py-16 bg-[#070b1a] light:bg-slate-100 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 light:text-blue-700 uppercase">
            WORK EXPERIENCE
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
            Professional Experience Timeline
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm font-medium">
            Hands-on DevOps engineering roles & operational achievements.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 light:border-slate-300 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              
              {/* Timeline Bullet Node */}
              <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full flex items-center justify-center ${
                exp.current 
                  ? 'bg-blue-600 border-4 border-[#070b1a] light:border-slate-100 shadow-lg shadow-blue-500/50' 
                  : 'bg-slate-800 light:bg-slate-300 border-4 border-[#070b1a] light:border-slate-100'
              }`}>
                <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-white animate-ping' : 'bg-slate-400'}`} />
              </div>

              {/* Experience Card */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 light:border-slate-300 shadow-xl space-y-4 hover:border-blue-500/50 transition-all">
                
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-slate-800 light:border-slate-200">
                  <div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/80 light:bg-blue-100 border border-blue-500/30 light:border-blue-300 text-xs font-mono font-bold text-blue-300 light:text-blue-800 mb-2">
                      <Calendar className="w-3.5 h-3.5 text-blue-400 light:text-blue-600" />
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-extrabold text-white light:text-slate-900">
                      {exp.role}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 light:text-slate-800 bg-slate-900/80 light:bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-800 light:border-slate-300">
                    <Building2 className="w-4 h-4 text-blue-400 light:text-blue-600" />
                    <span>{exp.company}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-2.5 pt-2">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 light:text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 light:text-blue-600 shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack Badges */}
                <div className="pt-3 border-t border-slate-800/80 light:border-slate-200 flex flex-wrap gap-1.5">
                  {exp.techs.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="px-2.5 py-1 rounded-md bg-slate-900/80 light:bg-slate-200 border border-slate-800 light:border-slate-300 text-[10px] font-mono text-blue-300 light:text-blue-800 font-bold"
                    >
                      {tech}
                    </span>
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
