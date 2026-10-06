import React from 'react';
import { ArrowRight, Wrench, RefreshCw, BookOpen } from 'lucide-react';

export const About: React.FC = () => {
  const cards = [
    { title: 'Problem Solver', desc: 'Expert in troubleshooting complex deployment & infrastructure failures.', icon: <Wrench className="w-5 h-5 text-cyan-400" /> },
    { title: 'Automation Mindset', desc: 'Eliminating manual toil with Infrastructure as Code & CI/CD pipelines.', icon: <RefreshCw className="w-5 h-5 text-purple-400" /> },
    { title: 'Continuous Learner', desc: 'Constantly evolving with Kubernetes, cloud-native tech & DevSecOps.', icon: <BookOpen className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <section id="about" className="py-20 bg-[#050814] light:bg-slate-50 relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                ABOUT ME
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
                DevOps Mindset & Engineering Philosophy
              </h2>
            </div>

            <p className="text-slate-300 light:text-slate-700 text-sm sm:text-base leading-relaxed glass-panel p-6 rounded-2xl border-l-4 border-l-blue-500 shadow-xl">
              DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, CI/CD, Git, Linux, and Terraform. Skilled in application deployment, containerization, CI/CD pipeline automation, and cloud infrastructure management. Experienced in troubleshooting deployment and infrastructure issues while ensuring reliable and efficient application delivery.
            </p>

            <div className="pt-2">
              <a 
                href="#skills" 
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/40 text-blue-300 light:text-blue-700 text-xs font-semibold transition-all group"
              >
                <span>Explore Technical Stack</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

          {/* Right Side 3 Cards */}
          <div className="lg:col-span-6 space-y-4">
            {cards.map((card, idx) => (
              <div 
                key={idx}
                className="glass-panel glass-panel-hover rounded-2xl p-5 border border-blue-500/25 flex items-center gap-4 group"
              >
                <div className="p-3.5 rounded-xl bg-slate-900/90 light:bg-white border border-blue-500/20 shrink-0 group-hover:scale-110 transition-transform">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-base font-extrabold text-white light:text-slate-900">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 light:text-slate-600 mt-1 font-sans">
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
