import React from 'react';
import { 
  ArrowRight, Download, Mail, Server, Cloud, User, RefreshCw, Activity
} from 'lucide-react';
import { AwsIcon, AzureIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitIcon, LinkedinIcon } from './TechIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-devops-grid bg-radial-glow">
      {/* Background ambient lighting effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Side Info Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/30 text-blue-400 text-xs font-semibold tracking-wider uppercase shadow-md shadow-blue-950/50">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              DevOps Engineer
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                SEKAR S
              </h1>
              <h2 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400">
                DevOps Engineer
              </h2>
              <p className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-wide font-medium">
                Cloud Infrastructure • CI/CD • Docker • Kubernetes • Automation
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
              Building reliable application deployments, containerized environments, CI/CD pipelines, and cloud infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600 text-white font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="px-5 py-3 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-blue-500/30 text-slate-200 hover:text-white font-semibold text-xs sm:text-sm transition-all"
              >
                View Skills
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-semibold text-xs sm:text-sm flex items-center gap-2 transition-all hover:border-cyan-400"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80">
              <a
                href="https://www.linkedin.com/in/sekar-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-blue-400 hover:border-blue-500/40 transition-all"
              >
                <LinkedinIcon size={16} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:shanmugamsekar004@gmail.com"
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Side Visual Command Center (Architecture Diagram & 3D Cloud Rack Visual) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 overflow-hidden border border-blue-500/30 shadow-2xl shadow-blue-950/50">
              
              {/* Header Ticker */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/40 text-xs font-mono text-slate-400 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-semibold">ENTERPRISE DEVOPS PIPELINE</span>
                </div>
                <div className="flex items-center gap-3 text-[11px] text-blue-400">
                  <span>Automate</span> • <span>Deploy</span> • <span>Scale</span>
                </div>
              </div>

              {/* Main Visual Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                
                {/* Flow Diagram Box */}
                <div className="relative bg-[#070d20] rounded-xl p-4 border border-blue-500/20 shadow-inner space-y-4">
                  
                  {/* Top Developer Node */}
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-400/40 text-xs font-medium text-blue-200 shadow-md">
                      <User className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Developer</span>
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-blue-400 animate-pulse">
                    <span className="text-xs">↓</span>
                  </div>

                  {/* Git & Jenkins Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-orange-500/30 text-[11px] text-slate-200">
                      <GitIcon size={16} />
                      <span className="font-mono text-[10px]">Git/GitLab</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-red-500/30 text-[11px] text-slate-200">
                      <JenkinsIcon size={16} />
                      <span className="font-mono text-[10px]">Jenkins</span>
                    </div>
                  </div>

                  {/* Center Infinity CI/CD Loop */}
                  <div className="flex justify-center py-1">
                    <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-blue-600/30 to-purple-600/30 border border-blue-400/50 shadow-lg shadow-blue-500/20">
                      <RefreshCw className="w-7 h-7 text-cyan-300 animate-spin" style={{ animationDuration: '10s' }} />
                      <span className="absolute text-[9px] font-mono font-bold text-white tracking-widest">CI/CD</span>
                    </div>
                  </div>

                  {/* Docker & Kubernetes Row */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-blue-500/30 text-[11px] text-slate-200">
                      <DockerIcon size={16} />
                      <span className="font-mono text-[10px]">Docker</span>
                    </div>
                    <div className="flex items-center gap-1.5 p-2 rounded-lg bg-slate-900/90 border border-indigo-500/30 text-[11px] text-slate-200">
                      <KubernetesIcon size={16} />
                      <span className="font-mono text-[10px]">Kubernetes</span>
                    </div>
                  </div>

                  {/* Bottom AWS, Azure & Monitoring */}
                  <div className="grid grid-cols-3 gap-1.5">
                    <div className="flex items-center justify-center p-1.5 rounded-lg bg-slate-900/90 border border-amber-500/30 text-[10px] text-slate-200 font-mono">
                      <AwsIcon size={14} />
                      <span className="ml-1">AWS</span>
                    </div>
                    <div className="flex items-center justify-center p-1.5 rounded-lg bg-slate-900/90 border border-sky-500/30 text-[10px] text-slate-200 font-mono">
                      <AzureIcon size={14} />
                      <span className="ml-1">Azure</span>
                    </div>
                    <div className="flex items-center justify-center p-1.5 rounded-lg bg-slate-900/90 border border-emerald-500/30 text-[10px] text-slate-200 font-mono">
                      <Activity className="w-3 h-3 text-emerald-400 mr-1" />
                      <span>Mon</span>
                    </div>
                  </div>

                </div>

                {/* 3D Cloud & Server Rack Illustration */}
                <div className="flex flex-col items-center justify-center relative p-6 rounded-xl bg-gradient-to-b from-blue-950/40 to-slate-950/80 border border-blue-500/20">
                  
                  {/* Glowing Cloud Element */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 p-0.5 shadow-xl shadow-cyan-500/40 animate-float-slow">
                      <div className="w-full h-full bg-[#0b1228] rounded-[22px] flex items-center justify-center">
                        <Cloud className="w-10 h-10 text-cyan-300 drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
                      </div>
                    </div>
                    <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  </div>

                  {/* Server Chassis Box */}
                  <div className="w-full bg-[#080f24] rounded-xl p-3 border border-blue-400/30 shadow-lg space-y-2">
                    {/* Server Blade 1 */}
                    <div className="flex items-center justify-between px-3 py-1.5 rounded bg-slate-900/90 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-[10px] font-mono text-slate-300">k8s-node-01</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-emerald-400">ONLINE</span>
                      </div>
                    </div>

                    {/* Server Blade 2 */}
                    <div className="flex items-center justify-between px-3 py-1.5 rounded bg-slate-900/90 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="text-[10px] font-mono text-slate-300">aws-prod-us</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-[9px] font-mono text-emerald-400">ACTIVE</span>
                      </div>
                    </div>

                    {/* Server Blade 3 */}
                    <div className="flex items-center justify-between px-3 py-1.5 rounded bg-slate-900/90 border border-slate-800">
                      <div className="flex items-center gap-2">
                        <Server className="w-3.5 h-3.5 text-purple-400" />
                        <span className="text-[10px] font-mono text-slate-300">jenkins-agent</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                        <span className="text-[9px] font-mono text-cyan-300">RUNNING</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-[10px] font-mono text-slate-400 mt-4 text-center">
                    Automated Infra & Container Mesh
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
