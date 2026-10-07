import React from 'react';
import { 
  ArrowRight, Download, Mail
} from 'lucide-react';
import { AwsIcon, DockerIcon, KubernetesIcon, JenkinsIcon, GitHubIcon, LinkedinIcon } from './TechIcons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden bg-devops-grid bg-radial-glow">
      {/* Background ambient lighting & graphic circuit elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Side Info Column */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Pill Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/80 light:bg-blue-100 border border-blue-500/30 text-blue-400 light:text-blue-700 text-xs font-bold tracking-wider uppercase shadow-md">
              <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
              DEVOPS ENGINEER PORTFOLIO
            </div>

            {/* Main Headings */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white light:text-slate-900 leading-tight">
                SEKAR S
              </h1>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-400 light:text-blue-700">
                DevOps Engineer
              </h2>
              <p className="text-xs sm:text-sm font-mono text-slate-300 light:text-slate-700 tracking-wide font-bold">
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
                className="px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
              >
                <span>View Experience</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="px-5 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-700 light:border-slate-300 text-slate-200 light:text-slate-800 font-extrabold text-xs sm:text-sm transition-all"
              >
                View Skills
              </a>

              <button
                onClick={onOpenResume}
                className="px-5 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-blue-500/40 text-blue-400 light:text-blue-700 font-extrabold text-xs sm:text-sm flex items-center gap-2 transition-all"
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
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-blue-400 transition-all"
              >
                <LinkedinIcon size={16} className="text-blue-400" />
                <span>LinkedIn</span>
              </a>

              <a
                href="mailto:shanmugamsekar004@gmail.com"
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/60 light:bg-white border border-slate-800 text-xs font-bold text-slate-300 light:text-slate-800 hover:text-blue-400 transition-all"
              >
                <Mail className="w-4 h-4 text-blue-400" />
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

          {/* Right Side Personal Engineer Showcase Card */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl glass-panel p-6 sm:p-8 border border-slate-800 light:border-slate-300 shadow-2xl space-y-6">
              
              {/* Card Header Bar */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 light:border-slate-200 text-xs font-mono text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white light:text-slate-900 font-extrabold">ENGINEERING PROFILE</span>
                </div>
                <span className="text-[11px] text-blue-400 font-bold tracking-wider uppercase">
                  Available for DevOps Roles
                </span>
              </div>

              {/* Cloud Architecture Image Banner */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 group shadow-xl">
                <img 
                  src="/images/hero_cloud.jpg" 
                  alt="DevOps Cloud Infrastructure Visual" 
                  className="w-full h-44 sm:h-52 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-blue-300 bg-slate-950/90 px-3 py-1 rounded-lg border border-blue-500/30">
                    Cloud & Kubernetes Infrastructure
                  </span>
                  <span className="text-emerald-400 font-bold bg-slate-950/90 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                    99.99% Uptime
                  </span>
                </div>
              </div>

              {/* Key Quick Spec Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                
                <div className="p-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-300 space-y-1">
                  <span className="text-[10px] text-slate-400 light:text-slate-500 font-bold uppercase block">Current Role</span>
                  <span className="font-extrabold text-white light:text-slate-900 block">Junior DevOps Engineer</span>
                  <span className="text-[11px] text-blue-400 light:text-blue-700 font-medium">Dreams Technologies</span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/90 light:bg-slate-100 border border-slate-800 light:border-slate-300 space-y-1">
                  <span className="text-[10px] text-slate-400 light:text-slate-500 font-bold uppercase block">Core Competencies</span>
                  <span className="font-extrabold text-white light:text-slate-900 block">AWS, Docker, K8s, CI/CD</span>
                  <span className="text-[11px] text-blue-400 light:text-blue-700 font-medium">Terraform & Ansible</span>
                </div>

              </div>

              {/* Core Skill Icons Strip */}
              <div className="pt-2 border-t border-slate-800 light:border-slate-200 flex items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-slate-400 font-bold">PRIMARY STACK:</span>
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800" title="AWS"><AwsIcon size={18} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800" title="Docker"><DockerIcon size={18} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800" title="Kubernetes"><KubernetesIcon size={18} /></div>
                  <div className="p-1.5 rounded-lg bg-slate-900 border border-slate-800" title="Jenkins"><JenkinsIcon size={18} /></div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
