import React from 'react';
import { 
  ArrowRight, Download, Mail, ArrowDown, GitBranch, Cpu, Container, Cloud, Layers
} from 'lucide-react';
import { AwsIcon, AzureIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitLabIcon, GitHubIcon, LinkedinIcon } from './TechIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-devops-grid bg-radial-glow">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side Info Column */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 light:bg-blue-100 border border-blue-500/30 light:border-blue-300 text-blue-400 light:text-blue-700 text-xs font-mono font-bold tracking-wider uppercase shadow-sm">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              DEVOPS ENGINEER
            </div>

            {/* Large Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white light:text-slate-900 leading-tight">
                SEKAR S
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-400 light:text-blue-700">
                DevOps Engineer
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-300 light:text-slate-700 tracking-wide font-bold pt-1">
                Cloud Infrastructure • CI/CD • Docker • Kubernetes • Automation
              </p>
            </div>

            {/* Professional Introduction */}
            <p className="text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed max-w-xl font-medium">
              Building reliable application deployments, containerized environments, CI/CD pipelines, and cloud infrastructure.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#experience"
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all border border-blue-400/40"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="px-5 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-700 light:border-slate-300 text-slate-200 light:text-slate-800 font-extrabold text-xs sm:text-sm transition-all hover:bg-slate-800 light:hover:bg-slate-100 shadow-sm"
              >
                View Skills
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-blue-500/40 light:border-blue-300 text-blue-400 light:text-blue-700 font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all hover:bg-blue-950/40 shadow-sm"
              >
                <Download className="w-4 h-4 text-blue-400 light:text-blue-600" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80 light:border-slate-300">
              <a
                href="https://www.linkedin.com/in/sekar-s/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-blue-400 transition-all shadow-sm"
              >
                <LinkedinIcon size={16} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/sekar004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-white light:hover:text-blue-600 transition-all shadow-sm"
              >
                <GitHubIcon size={16} className="text-white light:text-slate-900" />
                <span>GitHub</span>
              </a>

              <a
                href="mailto:shanmugamsekar004@gmail.com"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-blue-400 transition-all shadow-sm"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Side: Elegant Technical Flow Illustration */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 light:border-slate-300 shadow-2xl space-y-6">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white light:text-slate-900 font-extrabold uppercase">DEVOPS DELIVERY PIPELINE</span>
                </div>
                <span className="text-[11px] text-blue-400 light:text-blue-700 font-bold tracking-wider uppercase">
                  End-To-End Flow
                </span>
              </div>

              {/* Single Technical Vertical Illustration: Git -> CI/CD -> Docker -> Kubernetes -> Cloud */}
              <div className="py-2 space-y-3 font-mono text-xs max-w-md mx-auto">
                
                {/* 1. Git */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm group hover:border-blue-500/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/30 text-orange-400">
                      <GitBranch className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white light:text-slate-900 block">Git</span>
                      <span className="text-[10px] text-slate-400 light:text-slate-500 font-sans">Version Control & Source Code</span>
                    </div>
                  </div>
                  <GitLabIcon size={18} />
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-blue-400 animate-bounce" />
                </div>

                {/* 2. CI/CD */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm group hover:border-blue-500/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white light:text-slate-900 block">CI/CD</span>
                      <span className="text-[10px] text-slate-400 light:text-slate-500 font-sans">Automated Build & Test Pipeline</span>
                    </div>
                  </div>
                  <JenkinsIcon size={18} />
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                </div>

                {/* 3. Docker */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm group hover:border-blue-500/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Container className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white light:text-slate-900 block">Docker</span>
                      <span className="text-[10px] text-slate-400 light:text-slate-500 font-sans">Container Packaging & Images</span>
                    </div>
                  </div>
                  <DockerIcon size={18} />
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                </div>

                {/* 4. Kubernetes */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm group hover:border-blue-500/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600/10 border border-blue-600/30 text-blue-400">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white light:text-slate-900 block">Kubernetes</span>
                      <span className="text-[10px] text-slate-400 light:text-slate-500 font-sans">Container Orchestration & Scaling</span>
                    </div>
                  </div>
                  <KubernetesIcon size={18} />
                </div>

                <div className="flex justify-center">
                  <ArrowDown className="w-4 h-4 text-blue-400" />
                </div>

                {/* 5. Cloud */}
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm group hover:border-blue-500/60 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-400">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-extrabold text-white light:text-slate-900 block">Cloud</span>
                      <span className="text-[10px] text-slate-400 light:text-slate-500 font-sans">AWS & Azure Infrastructure</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <AwsIcon size={16} />
                    <AzureIcon size={16} />
                  </div>
                </div>

              </div>

              {/* Floating Tech Badges Row */}
              <div className="pt-3 border-t border-slate-800 light:border-slate-200 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-400 font-bold uppercase">Supported Tech:</span>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300" title="AWS"><AwsIcon size={16} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300" title="Azure"><AzureIcon size={16} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300" title="Docker"><DockerIcon size={16} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300" title="Kubernetes"><KubernetesIcon size={16} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300" title="Jenkins"><JenkinsIcon size={16} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300" title="GitLab"><GitLabIcon size={16} /></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
