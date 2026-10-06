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
    <section className="py-20 bg-[#070b1a] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            MONITORING & OBSERVABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            System Telemetry & Health Dashboard
          </h2>
          <p className="text-slate-400 text-sm">
            Real-time monitoring, metrics collection, and alerting for cloud infrastructure.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Simulated Metrics UI (Left) */}
          <div className="lg:col-span-8 glass-panel rounded-2xl p-6 border border-blue-500/30 space-y-6">
            
            {/* Header bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-blue-900/40">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  SYSTEM MONITORING CONSOLE
                </span>
              </div>
              
              {/* Illustrative Notice */}
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/80 border border-blue-500/30 text-[10px] font-mono text-cyan-300">
                <Info className="w-3 h-3 text-cyan-400" />
                <span>Illustrative Portfolio Metrics</span>
              </div>
            </div>

            {/* Metrics Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* CPU Chart Card */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" /> CPU Load
                  </span>
                  <span className="text-cyan-400 font-bold">24%</span>
                </div>
                {/* SVG Waveform */}
                <svg className="w-full h-12 text-cyan-400" viewBox="0 0 100 30" fill="none">
                  <path d="M0 20 Q15 5, 30 18 T60 12 T90 22 T100 15" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>

              {/* Memory Usage */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <HardDrive className="w-3.5 h-3.5 text-purple-400" /> RAM Alloc
                  </span>
                  <span className="text-purple-400 font-bold">42%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2.5 mt-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full w-[42%]" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 block text-right">4.2 GB / 10 GB</span>
              </div>

              {/* Cluster Health Uptime */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/20 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> SLA Uptime
                  </span>
                  <span className="text-emerald-400 font-bold">99.99%</span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-xs font-mono text-slate-200">All Pods Operational</span>
                </div>
              </div>

            </div>

            {/* Simulated Log Stream Box */}
            <div className="bg-[#050917] p-4 rounded-xl border border-slate-800 font-mono text-[11px] space-y-1.5 text-slate-300">
              <div className="text-slate-500 border-b border-slate-800/80 pb-1 mb-2 text-[10px] flex justify-between">
                <span>PROMETHEUS LOG STREAM</span>
                <span className="text-emerald-400">LIVE</span>
              </div>
              <p className="text-emerald-400">[INFO] k8s-ingress-controller: TLS certificate validated successfully.</p>
              <p className="text-cyan-300">[INFO] prometheus-exporter: Scraping metrics from 12 active pods.</p>
              <p className="text-slate-300">[INFO] grafana-agent: Dashboard state synced (0 errors).</p>
            </div>

          </div>

          {/* Technology Cards (Right) */}
          <div className="lg:col-span-4 glass-panel rounded-2xl p-6 border border-blue-500/30 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-base font-bold text-white mb-4 pb-3 border-b border-blue-900/40 flex items-center gap-2">
                <Activity className="w-4 h-4 text-emerald-400" />
                Monitoring Tooling
              </h3>

              <div className="space-y-3">
                {monitoringTechs.map((tech, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 shrink-0">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white">{tech.name}</h4>
                      <p className="text-[11px] text-slate-400 font-mono">{tech.desc}</p>
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
