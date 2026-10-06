import React from 'react';
import { ArrowRight, Wrench, RefreshCw, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    { title: 'Problem Solver', desc: 'Expert in troubleshooting complex deployment & infrastructure failures.', icon: <Wrench className="w-5 h-5 text-blue-400" /> },
    { title: 'Automation Mindset', desc: 'Eliminating manual toil with Infrastructure as Code & CI/CD pipelines.', icon: <RefreshCw className="w-5 h-5 text-blue-400" /> },
    { title: 'Continuous Learner', desc: 'Constantly evolving with Kubernetes, cloud-native tech & DevSecOps.', icon: <BookOpen className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <section id="about" className="py-12 bg-[#050814] light:bg-slate-50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* DevOps Infrastructure Metrics Quick Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 p-4 rounded-2xl glass-panel border border-slate-800 light:border-slate-300 font-mono">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <span className="text-[10px] text-slate-400 light:text-slate-600 block uppercase font-bold">Uptime SLA</span>
              <span className="text-sm font-extrabold text-emerald-400 light:text-emerald-700">99.99% Operational</span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-slate-800 light:border-slate-300 pl-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <div>
              <span className="text-[10px] text-slate-400 light:text-slate-600 block uppercase font-bold">CI/CD Automation</span>
              <span className="text-sm font-extrabold text-blue-400 light:text-blue-700">100% Automated</span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-slate-800 light:border-slate-300 pl-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <div>
              <span className="text-[10px] text-slate-400 light:text-slate-600 block uppercase font-bold">Deployments</span>
              <span className="text-sm font-extrabold text-white light:text-slate-900">Zero Downtime</span>
            </div>
          </div>

          <div className="flex items-center gap-3 border-l border-slate-800 light:border-slate-300 pl-3">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-400" />
            <div>
              <span className="text-[10px] text-slate-400 light:text-slate-600 block uppercase font-bold">IaC Coverage</span>
              <span className="text-sm font-extrabold text-blue-400 light:text-blue-700">Terraform & Ansible</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Side Info */}
          <div className="lg:col-span-6 space-y-4">
            
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
                DevOps Mindset & Engineering Philosophy
              </h2>
            </div>

            <p className="text-slate-300 light:text-slate-700 text-sm leading-relaxed glass-panel p-5 rounded-2xl border-l-4 border-l-blue-500 shadow-xl font-medium">
              DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, CI/CD, Git, Linux, and Terraform. Skilled in application deployment, containerization, CI/CD pipeline automation, and cloud infrastructure management. Experienced in troubleshooting deployment and infrastructure issues while ensuring reliable and efficient application delivery.
            </p>

            {/* Compact Graphic Image Card */}
            <div className="p-3 rounded-2xl glass-panel border border-slate-800 light:border-slate-300 flex items-center gap-3.5 shadow-md">
              <div className="w-28 h-20 shrink-0 rounded-xl overflow-hidden border border-slate-800 light:border-slate-300 group relative">
                <img 
                  src="/images/terraform_iac.jpg" 
                  alt="Infrastructure as Code Terraform & Ansible" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <span className="absolute bottom-1 left-1 text-[8px] font-mono font-bold text-blue-300 bg-slate-950/80 px-1.5 py-0.5 rounded border border-blue-500/30">
                  IaC Visual
                </span>
              </div>

              <div>
                <h4 className="text-xs font-extrabold text-white light:text-slate-900">
                  Infrastructure as Code (IaC)
                </h4>
                <p className="text-[11px] text-slate-300 light:text-slate-600 font-sans mt-0.5">
                  Automated provisioning using Terraform HCL scripts and Ansible playbooks for zero-drift server configurations.
                </p>
              </div>
            </div>

            <div className="pt-1">
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-400 light:text-blue-700 text-xs font-bold transition-all group"
              >
                <span>Explore Technical Stack</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Side 3 Cards */}
          <div className="lg:col-span-6 space-y-3">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-4 sm:p-5 border border-slate-800 light:border-slate-300 flex items-center gap-4 group"
              >
                <div className="p-3 rounded-xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-300 shrink-0 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-sm font-extrabold text-white light:text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 light:text-slate-600 mt-0.5 font-sans">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
