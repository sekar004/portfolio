import React from 'react';
import { 
  Code2, Cloud, ArrowRight, RefreshCw, Container, Scale, Activity, CheckCircle2
} from 'lucide-react';
import { AwsIcon, KubernetesIcon, JenkinsIcon, GitIcon, TerraformIcon, LinuxIcon } from './TechIcons';

export const About: React.FC = () => {
  const highlightPills = [
    { title: 'AWS & Azure', icon: <AwsIcon size={18} /> },
    { title: 'Docker & Kubernetes', icon: <KubernetesIcon size={18} /> },
    { title: 'CI/CD & Jenkins', icon: <JenkinsIcon size={18} /> },
    { title: 'Git & Version Control', icon: <GitIcon size={18} /> },
    { title: 'Linux Administration', icon: <LinuxIcon size={18} /> },
    { title: 'Infrastructure as Code', icon: <TerraformIcon size={18} /> },
  ];

  const codeToCloudSteps = [
    { stage: 'Code', icon: <Code2 className="w-5 h-5 text-blue-400" />, desc: 'Version Control' },
    { stage: 'Deploy', icon: <RefreshCw className="w-5 h-5 text-cyan-400" />, desc: 'Automated CI/CD' },
    { stage: 'Containerize', icon: <Container className="w-5 h-5 text-indigo-400" />, desc: 'Docker Images' },
    { stage: 'Scale', icon: <Scale className="w-5 h-5 text-purple-400" />, desc: 'Kubernetes Pods' },
    { stage: 'Monitor', icon: <Activity className="w-5 h-5 text-emerald-400" />, desc: 'Observability' },
  ];

  return (
    <section id="about" className="py-20 relative bg-[#050814] border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: About Me Text */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                About Me
              </h2>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-xl">
              DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, CI/CD, Git, Linux, and Terraform. Skilled in application deployment, containerization, CI/CD pipeline automation, and cloud infrastructure management. Experienced in troubleshooting deployment and infrastructure issues while ensuring reliable and efficient application delivery.
            </p>

            {/* Quick Skills Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {highlightPills.map((pill, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-blue-500/15 hover:border-blue-500/40 transition-all hover:bg-slate-900/90 group"
                >
                  <div className="p-2 rounded-lg bg-blue-950/70 border border-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                    {pill.icon}
                  </div>
                  <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                    {pill.title}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 text-xs font-semibold transition-all group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Column: "From Code to Cloud" Visualization */}
          <div className="lg:col-span-6">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl relative overflow-hidden">
              
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/40 mb-6">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Cloud className="w-5 h-5 text-cyan-400" />
                  <span>FROM CODE TO CLOUD</span>
                </h3>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                  Pipeline Active
                </span>
              </div>

              {/* Connected Stage Flow */}
              <div className="space-y-4">
                {codeToCloudSteps.map((step, idx) => (
                  <div key={idx} className="relative flex items-center gap-4">
                    {/* Step Icon */}
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-blue-500/30 flex items-center justify-center shadow-lg relative z-10">
                      {step.icon}
                    </div>

                    {/* Step Name & Description */}
                    <div className="flex-1 bg-slate-900/40 p-3 rounded-xl border border-slate-800/80 flex items-center justify-between">
                      <div>
                        <span className="text-xs font-mono text-cyan-400 font-bold block">
                          STAGE 0{idx + 1}
                        </span>
                        <span className="text-sm font-bold text-white">
                          {step.stage}
                        </span>
                      </div>
                      <span className="text-xs font-mono text-slate-400 bg-slate-950/70 px-2.5 py-1 rounded border border-slate-800">
                        {step.desc}
                      </span>
                    </div>

                    {/* Connecting Vertical Line */}
                    {idx < codeToCloudSteps.length - 1 && (
                      <div className="absolute left-5 top-10 w-0.5 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 z-0" />
                    )}
                  </div>
                ))}
              </div>

              {/* Infrastructure Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Automated Deployment Ready
                </span>
                <span className="text-blue-400">AWS • Azure • K8s</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
