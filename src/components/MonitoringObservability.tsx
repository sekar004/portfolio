import React from 'react';
import { Activity, ArrowRight, Bell, Layers, CheckCircle2 } from 'lucide-react';
import { CloudWatchIcon, PrometheusIcon, GrafanaIcon } from './TechIcons';

export const MonitoringObservability: React.FC = () => {
  const monitoringFlow = [
    { title: 'Metrics & Logs', desc: 'System, app & container logs', icon: <Layers className="w-5 h-5 text-blue-400" /> },
    { title: 'Collector', desc: 'Prometheus & AWS CloudWatch', icon: <PrometheusIcon size={22} /> },
    { title: 'Dashboard', desc: 'Grafana real-time visualization', icon: <GrafanaIcon size={22} /> },
    { title: 'Alerting', desc: 'Automated email & PagerDuty alerts', icon: <Bell className="w-5 h-5 text-blue-400" /> },
  ];

  const tools = [
    { name: 'AWS CloudWatch', desc: 'Cloud EC2 metrics, alarms & log insights', icon: <CloudWatchIcon size={22} /> },
    { name: 'Prometheus', desc: 'Time-series metrics collection & target scraping', icon: <PrometheusIcon size={22} /> },
    { name: 'Grafana', desc: 'Interactive dashboards & SLA telemetry graphs', icon: <GrafanaIcon size={22} /> },
  ];

  return (
    <section className="py-16 bg-[#070b1a] light:bg-slate-100 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 light:text-blue-700 uppercase">
            OBSERVABILITY
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white light:text-slate-900">
            Monitoring & Observability
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm font-medium">
            Real-time metric collection, log aggregation, and continuous uptime alert rules.
          </p>
        </div>

        {/* Conceptual Visual Flow Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 light:border-slate-300 shadow-2xl space-y-8 mb-8">
          
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 light:border-slate-200">
            <span className="text-xs font-mono font-bold text-blue-400 light:text-blue-700 uppercase tracking-wider flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              Observability Pipeline Concept
            </span>
            <span className="text-[11px] font-mono text-emerald-400 light:text-emerald-700 bg-emerald-950/80 light:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-500/30 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" /> 99.99% Uptime SLA
            </span>
          </div>

          {/* 4 Step Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            {monitoringFlow.map((step, idx) => (
              <React.Fragment key={idx}>
                <div className="flex flex-col items-center text-center p-4 rounded-2xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 shadow-sm hover:border-blue-500/60 transition-all group">
                  <div className="p-3 rounded-xl bg-slate-950 light:bg-slate-100 border border-slate-800 light:border-slate-300 mb-2 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <h4 className="text-xs font-mono font-bold text-white light:text-slate-900 group-hover:text-blue-400">
                    {step.title}
                  </h4>
                  <p className="text-[10px] text-slate-400 light:text-slate-600 font-sans mt-1">
                    {step.desc}
                  </p>
                </div>

                {idx < monitoringFlow.length - 1 && (
                  <ArrowRight className="w-4 h-4 text-blue-500/50 hidden lg:block mx-auto" />
                )}
              </React.Fragment>
            ))}
          </div>

        </div>

        {/* 3 Tooling Badges */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tools.map((t, idx) => (
            <div key={idx} className="glass-panel rounded-2xl p-5 border border-slate-800 light:border-slate-300 flex items-center gap-4 shadow-md">
              <div className="p-3 rounded-xl bg-slate-900 light:bg-slate-200 border border-slate-800 light:border-slate-300 shrink-0">
                {t.icon}
              </div>
              <div>
                <h4 className="text-xs font-bold text-white light:text-slate-900">{t.name}</h4>
                <p className="text-[11px] text-slate-400 light:text-slate-600 font-mono mt-0.5">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
