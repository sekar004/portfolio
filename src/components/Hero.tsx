import React from 'react';
import { 
  ArrowRight, Download, Mail, User
} from 'lucide-react';
import { AwsIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitIcon, GitHubIcon, LinkedinIcon } from './TechIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-devops-grid bg-radial-glow">
      {/* Background ambient lighting & graphic circuit elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating DevOps Graphic Badges */}
      <div className="hidden xl:flex absolute top-28 left-6 items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/80 light:bg-white border border-blue-500/30 text-[11px] font-mono font-bold text-cyan-300 light:text-blue-700 shadow-xl animate-float-slow opacity-80 pointer-events-none z-20">
        <KubernetesIcon size={16} />
        <span>K8s Cluster Node: Active</span>
      </div>

      <div className="hidden xl:flex absolute bottom-20 left-12 items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-900/80 light:bg-white border border-blue-500/30 text-[11px] font-mono font-bold text-emerald-400 light:text-emerald-700 shadow-xl animate-float-slow opacity-80 pointer-events-none z-20" style={{ animationDelay: '2s' }}>
        <DockerIcon size={16} />
        <span>Docker Engine v26.0</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Side Info Column */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 light:bg-blue-100 border border-blue-500/30 text-blue-400 light:text-blue-700 text-xs font-bold tracking-wider uppercase shadow-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              DEVOPS ENGINEER COMMAND CENTER
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-300 to-indigo-400 light:from-slate-900 light:via-blue-700 light:to-indigo-800 leading-tight">
                SEKAR S
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
                DevOps Engineer
              </h2>
              <p className="text-xs sm:text-sm font-mono text-cyan-400 light:text-blue-600 tracking-wide font-bold">
                Cloud Infrastructure • CI/CD • Docker • Kubernetes • Automation
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Building reliable application deployments, containerized environments, CI/CD pipelines, and cloud infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-[1.02] transition-all"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="px-5 py-3 rounded-xl bg-slate-900/80 light:bg-white border border-blue-500/30 text-slate-200 light:text-slate-800 font-extrabold text-xs sm:text-sm transition-all"
              >
                View Skills
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-cyan-500/40 text-cyan-300 light:text-blue-700 font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all"
              >
                <Download className="w-4 h-4 text-cyan-400 light:text-blue-600" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 light:border-slate-300">
              <a
                href="https://www.linkedin.com/in/sekar-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-blue-400 transition-all"
              >
                <LinkedinIcon size={16} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:shanmugamsekar004@gmail.com"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-cyan-400 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email</span>
              </a>

              <a
                href="https://github.com/sekar004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-white transition-all"
              >
                <GitHubIcon size={16} className="text-white light:text-slate-900" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Side Visual Command Center */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 border border-blue-500/30 shadow-2xl space-y-6">
              
              {/* Header Ticker */}
              <div className="flex items-center justify-between pb-3 border-b border-blue-900/40 light:border-slate-200 text-xs font-mono text-slate-400 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white light:text-slate-900 font-extrabold">● ENTERPRISE DEVOPS PIPELINE</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-cyan-400 font-bold tracking-wider">
                  <span>Automate</span> • <span>Deploy</span> • <span>Scale</span>
                </div>
              </div>

              {/* Grand 3D Cloud Server Rack Graphic Image (As seen in Reference Image 2) */}
              <div className="relative rounded-2xl overflow-hidden border border-blue-500/30 group shadow-2xl mb-4">
                <img 
                  src="/images/hero_cloud.jpg" 
                  alt="DevOps 3D Cloud Infrastructure & Server Racks" 
                  className="w-full h-44 sm:h-52 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 text-xs font-mono font-bold text-cyan-300 bg-slate-950/80 px-3 py-1 rounded-lg border border-cyan-500/40">
                  Cloud Infrastructure Command Center
                </div>
              </div>

              {/* Main Visual Flow Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Visual Pipeline Flow Node List */}
                <div className="bg-[#070d20] light:bg-slate-100 rounded-2xl p-4 border border-blue-500/20 space-y-2 font-mono text-xs">
                  <div className="text-[10px] text-cyan-400 font-bold mb-2">FLOW ARCHITECTURE:</div>
                  
                  <div className="p-2 rounded bg-slate-900/90 light:bg-white border border-slate-800 flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="font-bold text-slate-200 light:text-slate-800">Developer</span>
                  </div>
                  <div className="text-center text-blue-400 text-xs">↓</div>

                  <div className="p-2 rounded bg-slate-900/90 light:bg-white border border-slate-800 flex items-center gap-2">
                    <GitIcon size={14} />
                    <span className="font-bold text-slate-200 light:text-slate-800">Git / GitLab</span>
                  </div>
                  <div className="text-center text-blue-400 text-xs">↓</div>

                  <div className="p-2 rounded bg-slate-900/90 light:bg-white border border-slate-800 flex items-center gap-2">
                    <JenkinsIcon size={14} />
                    <span className="font-bold text-slate-200 light:text-slate-800">Jenkins / CI-CD</span>
                  </div>
                  <div className="text-center text-blue-400 text-xs">↓</div>

                  <div className="p-2 rounded bg-slate-900/90 light:bg-white border border-slate-800 flex items-center gap-2">
                    <DockerIcon size={14} />
                    <span className="font-bold text-slate-200 light:text-slate-800">Docker</span>
                  </div>
                  <div className="text-center text-blue-400 text-xs">↓</div>

                  <div className="p-2 rounded bg-slate-900/90 light:bg-white border border-slate-800 flex items-center gap-2">
                    <KubernetesIcon size={14} />
                    <span className="font-bold text-slate-200 light:text-slate-800">Kubernetes</span>
                  </div>
                  <div className="text-center text-blue-400 text-xs">↓</div>

                  <div className="p-2 rounded bg-slate-900/90 light:bg-white border border-slate-800 flex items-center gap-2">
                    <AwsIcon size={14} />
                    <span className="font-bold text-slate-200 light:text-slate-800">AWS / Azure</span>
                  </div>
                </div>

                {/* Infrastructure Status Panel */}
                <div className="bg-[#070d20] light:bg-slate-100 rounded-2xl p-4 border border-blue-500/20 space-y-3 font-mono">
                  <div className="text-[10px] text-cyan-400 font-bold mb-2">INFRASTRUCTURE STATUS:</div>
                  
                  <div className="p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white light:text-slate-900">K8s Node</span>
                      <span className="text-[10px] text-emerald-400 font-bold">ONLINE</span>
                    </div>
                    <div className="w-full bg-slate-800 light:bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[95%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white light:text-slate-900">Cloud Infrastructure</span>
                      <span className="text-[10px] text-emerald-400 font-bold">ACTIVE</span>
                    </div>
                    <div className="w-full bg-slate-800 light:bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[99%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white light:text-slate-900">Jenkins Agent</span>
                      <span className="text-[10px] text-cyan-400 font-bold">RUNNING</span>
                    </div>
                    <div className="w-full bg-slate-800 light:bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[100%]" />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white light:text-slate-900">Monitoring</span>
                      <span className="text-[10px] text-emerald-400 font-bold">HEALTHY</span>
                    </div>
                    <div className="w-full bg-slate-800 light:bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[100%]" />
                    </div>
                  </div>

                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
