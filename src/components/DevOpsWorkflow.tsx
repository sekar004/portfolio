import React from 'react';
import { 
  FileText, Code, Cpu, ShieldCheck, Layers, Rocket, Activity, ArrowRight
} from 'lucide-react';

export const DevOpsWorkflow: React.FC = () => {
  const steps = [
    { step: '01', title: 'PLAN', desc: 'Architecture planning & task tracking', icon: <FileText className="w-5 h-5 text-blue-400" /> },
    { step: '02', title: 'CODE', desc: 'Git version control & code branching', icon: <Code className="w-5 h-5 text-blue-400" /> },
    { step: '03', title: 'BUILD', desc: 'Jenkins automated build & artifact creation', icon: <Cpu className="w-5 h-5 text-blue-400" /> },
    { step: '04', title: 'TEST', desc: 'SonarQube static analysis & security checks', icon: <ShieldCheck className="w-5 h-5 text-blue-400" /> },
    { step: '05', title: 'CONTAINERIZE', desc: 'Docker image packaging & registry push', icon: <Layers className="w-5 h-5 text-blue-400" /> },
    { step: '06', title: 'DEPLOY', desc: 'Kubernetes rollout to cloud servers', icon: <Rocket className="w-5 h-5 text-blue-400" /> },
    { step: '07', title: 'MONITOR', desc: 'Prometheus metrics & CloudWatch alerts', icon: <Activity className="w-5 h-5 text-blue-400" /> },
  ];

  return (
    <section id="devops" className="py-16 bg-[#050816] light:bg-slate-50 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 light:text-blue-700 uppercase">
            DEVOPS METHODOLOGY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
            HOW I WORK
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm font-medium">
            Standardized end-to-end DevOps pipeline lifecycle from source code to production monitoring.
          </p>
        </div>

        {/* Workflow Infographic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {steps.map((item, idx) => (
            <div key={idx} className="relative group">
              <div className="glass-panel rounded-2xl p-5 border border-slate-800 light:border-slate-300 flex flex-col justify-between h-full hover:border-blue-500/60 transition-all shadow-md">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 light:border-slate-200">
                    <span className="text-[10px] font-mono font-bold text-blue-400 light:text-blue-700">
                      STAGE {item.step}
                    </span>
                    <div className="p-2 rounded-xl bg-slate-900 light:bg-slate-100 border border-slate-800 light:border-slate-300">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-sm font-black text-white light:text-slate-900 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-300 light:text-slate-600 mt-1.5 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                  <ArrowRight className="w-3.5 h-3.5 text-blue-500/50" />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
