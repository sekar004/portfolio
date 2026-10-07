import React from 'react';
import { ArrowRight, Wrench, RefreshCw, BookOpen, Cloud, GitBranch, Layers, Activity, Cpu, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  const highlights = [
    { title: 'Problem Solver', desc: 'Expert in troubleshooting deployment & infrastructure failures.', icon: <Wrench className="w-5 h-5 text-blue-400 light:text-blue-600" /> },
    { title: 'Automation Mindset', desc: 'Eliminating manual toil with Infrastructure as Code & CI/CD pipelines.', icon: <RefreshCw className="w-5 h-5 text-blue-400 light:text-blue-600" /> },
    { title: 'Continuous Learner', desc: 'Constantly evolving with Kubernetes, cloud-native tech & DevSecOps.', icon: <BookOpen className="w-5 h-5 text-blue-400 light:text-blue-600" /> },
  ];

  const focusAreas = [
    { title: 'Cloud Infrastructure', desc: 'AWS & Azure cloud provisioning', icon: <Cloud className="w-4 h-4 text-blue-400" /> },
    { title: 'CI/CD Automation', desc: 'Jenkins, Git & automated pipelines', icon: <GitBranch className="w-4 h-4 text-blue-400" /> },
    { title: 'Containerization', desc: 'Docker packaging & microservices', icon: <Layers className="w-4 h-4 text-blue-400" /> },
    { title: 'Kubernetes', desc: 'Orchestration, pods & ingress', icon: <Cpu className="w-4 h-4 text-blue-400" /> },
    { title: 'Monitoring', desc: 'Prometheus, Grafana & CloudWatch', icon: <Activity className="w-4 h-4 text-blue-400" /> },
    { title: 'Infrastructure Automation', desc: 'Terraform & Ansible playbooks', icon: <ShieldCheck className="w-4 h-4 text-blue-400" /> },
  ];

  return (
    <section id="about" className="py-16 bg-[#050816] light:bg-slate-50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Side: Professional Intro */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 light:text-blue-700 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
                DevOps Mindset & Engineering Philosophy
              </h2>
            </div>

            <p className="text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-xl font-medium">
              DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, CI/CD, Git, Linux, and Terraform. Skilled in application deployment, containerization, CI/CD pipeline automation, and cloud infrastructure management. Experienced in troubleshooting deployment and infrastructure issues while ensuring reliable and efficient application delivery.
            </p>

            {/* 3 Small Highlights Cards */}
            <div className="space-y-3 pt-2">
              {highlights.map((card, idx) => (
                <div 
                  key={idx}
                  className="glass-panel rounded-xl p-4 border border-slate-800 light:border-slate-300 flex items-center gap-4 hover:border-blue-500/50 transition-all shadow-sm"
                >
                  <div className="p-2.5 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300 shrink-0">
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

            <div className="pt-2">
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600/15 hover:bg-blue-600/25 border border-blue-500/30 text-blue-400 light:text-blue-700 text-xs font-bold transition-all group shadow-sm"
              >
                <span>Explore Technical Stack</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Side: DevOps Focus Visual Card */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 light:border-slate-300 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200">
                <span className="text-xs font-mono font-bold text-blue-400 light:text-blue-700 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  DevOps Focus
                </span>
                <span className="text-[11px] font-mono text-emerald-400 light:text-emerald-700 bg-emerald-950/80 light:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-500/30 font-bold">Core Competencies</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {focusAreas.map((area, idx) => (
                  <div 
                    key={idx} 
                    className="p-3.5 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 flex items-start gap-3 shadow-sm hover:border-blue-500/50 transition-all"
                  >
                    <div className="p-2 rounded-lg bg-blue-950/80 light:bg-blue-100 border border-blue-500/30 light:border-blue-300 shrink-0">
                      {area.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white light:text-slate-900">{area.title}</h4>
                      <p className="text-[10px] text-slate-400 light:text-slate-600 mt-0.5">{area.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
