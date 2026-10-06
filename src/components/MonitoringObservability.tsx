import React from 'react';
import { Activity, Cpu, HardDrive, CheckCircle2, Info } from 'lucide-react';
import { CloudWatchIcon, PrometheusIcon, GrafanaIcon } from './TechIcons';

export const MonitoringObservability: React.FC = () => {
  const monitoringTechs = [
    { name: 'AWS CloudWatch', desc: 'Cloud metrics & alarms', icon: <CloudWatchIcon size={24} /> },
    { name: 'Prometheus', desc: 'Time-series metrics collector', icon: <PrometheusIcon size={24} /> },
    { name: 'Grafana', desc: 'Visualization & dashboarding', icon: <GrafanaIcon size={24} /> },
  ];

  return (
    <section className="py-12 bg-[#070b1a] light:bg-slate-50 relative border-t border-blue-900/20 devops-circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            MONITORING
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            Monitoring & Observability
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Real-time monitoring, metrics collection, and alerting for cloud infrastructure.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Simulated Metrics UI (Left) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 border border-slate-800 light:border-slate-300 space-y-6">
            
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800 light:border-slate-200">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white light:text-slate-900 uppercase tracking-wider">
                  SYSTEM MONITORING CONSOLE
                </span>
              </div>
              
              {/* Notice */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/80 light:bg-blue-100 border border-blue-500/30 light:border-blue-300 text-[10px] font-mono text-blue-300 light:text-blue-800">
                <Info className="w-3 h-3 text-blue-400 light:text-blue-600" />
                <span>Monitoring Visuals</span>
              </div>
            </div>

            {/* Metrics Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* CPU Chart Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-700">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-blue-400 light:text-blue-600" /> CPU Load
                  </span>
                  <span className="text-blue-400 light:text-blue-600 font-bold">24%</span>
                </div>
                {/* SVG Waveform */}
                <svg className="w-full h-12 text-blue-400 light:text-blue-600" viewBox="0 0 100 30" fill="none">
                  <path d="M0 20 Q15 5, 30 18 T60 12 T90 22 T100 15" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Memory Usage */}
              <div className="p-4 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-700">
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5 text-blue-400 light:text-blue-600" /> RAM Alloc
                  </span>
                  <span className="text-blue-400 light:text-blue-600 font-bold">42%</span>
                </div>
                <div className="w-full bg-slate-800 light:bg-slate-200 rounded-full h-2.5 mt-4">
                  <div className="bg-blue-600 h-2.5 rounded-full w-[42%]" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 light:text-slate-600 block text-right">4.2 GB / 10 GB</span>
              </div>

              {/* Cluster Health Uptime */}
              <div className="p-4 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 light:text-slate-700">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 light:text-emerald-600" /> SLA Uptime
                  </span>
                  <span className="text-emerald-400 light:text-emerald-600 font-bold">99.99%</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-slate-200 light:text-slate-800">All Pods Operational</span>
                </div>
              </div>

            </div>

            {/* Compact Visual Monitoring Telemetry Artwork Image */}
            <div className="flex flex-col sm:flex-row items-center gap-4 p-3 rounded-2xl bg-[#050816] light:bg-slate-900 border border-slate-800 shadow-md">
              <div className="w-full sm:w-48 h-28 shrink-0 rounded-xl overflow-hidden border border-slate-800 group relative">
                <img 
                  src="/images/monitoring_dashboard.jpg" 
                  alt="DevOps Monitoring & Telemetry Dashboard Visual" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute bottom-1 left-1 text-[8px] font-mono font-bold text-blue-300 bg-slate-950/80 px-1.5 py-0.5 rounded border border-blue-500/30">
                  Grafana Dashboard
                </span>
              </div>

              <div className="space-y-1 font-mono text-xs text-left">
                <span className="text-blue-400 font-bold uppercase tracking-wider block text-[11px]">PROMETHEUS & GRAFANA TELEMETRY</span>
                <p className="text-[11px] text-slate-300 light:text-slate-400 font-sans leading-relaxed">
                  Real-time cluster metrics, CPU load graphs, container RAM allocation, and continuous alert rules.
                </p>
              </div>
            </div>

          </div>

          {/* Technology Cards (Right) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 border border-slate-800 light:border-slate-300 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-base font-bold text-white light:text-slate-900 mb-4 pb-3 border-b border-slate-800 light:border-slate-200 flex items-center gap-2">
                <Activity className="w-4 h-4 text-blue-400 light:text-blue-600" />
                Monitoring Tooling
              </h3>

              <div className="space-y-3">
                {monitoringTechs.map((tech, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 light:bg-white border border-slate-800 light:border-slate-300 flex items-center gap-3 shadow-sm">
                    <div className="p-2 rounded-lg bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-200 shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white light:text-slate-900">{tech.name}</h4>
                      <p className="text-[11px] text-slate-400 light:text-slate-600 font-mono">{tech.desc}</p>
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
