import React, { useState } from 'react';
import { Terminal as TerminalIcon, Copy, Check } from 'lucide-react';

export const TerminalSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [copied, setCopied] = useState(false);

  const terminalCommands = [
    {
      cmd: 'kubectl get pods -n production',
      output: `NAME                               READY   STATUS    RESTARTS   AGE
api-gateway-7f89d9b4c5-x29kp       1/1     Running   0          4d2h
auth-service-5c67d8f9e0-m71lp      1/1     Running   0          4d2h
payment-worker-8b9a0c1d2e-k98sq    1/1     Running   0          2d18h
frontend-web-6d5c4b3a2f-p45tr      1/1     Running   0          4d2h`,
    },
    {
      cmd: 'docker ps --format "table {{.Names}}\\t{{.Status}}\\t{{.Ports}}"',
      output: `NAMES                  STATUS          PORTS
nginx-load-balancer    Up 4 days       0.0.0.0:80->80/tcp, 0.0.0.0:443->443/tcp
jenkins-master-node    Up 12 days      0.0.0.0:8080->8080/tcp
sonarqube-server       Up 12 days      0.0.0.0:9000->9000/tcp`,
    },
    {
      cmd: 'git status',
      output: `On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified:   terraform/main.tf
  modified:   k8s/deployment.yaml
  modified:   Jenkinsfile

nothing to commit, working tree clean`,
    },
    {
      cmd: 'systemctl status nginx',
      output: `● nginx.service - A high performance web server and a reverse proxy server
   Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
   Active: active (running) since Tue 2026-10-06 10:00:00 UTC; 4 days ago
 Main PID: 1420 (nginx)
    Tasks: 4 (limit: 4915)
   Memory: 8.4M`,
    },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(terminalCommands[activeTab].cmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 bg-[#070b1a] light:bg-slate-100 relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            LIVE COMMAND CONSOLE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
            DevOps Command Terminal
          </h2>
          <p className="text-slate-400 light:text-slate-600 text-sm">
            Interactive command-line execution preview for Kubernetes, Docker, Git, and system administration.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="max-w-4xl mx-auto glass-panel rounded-2xl border border-blue-500/30 overflow-hidden shadow-2xl">
          
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-[#0a0f24] light:bg-slate-800 border-b border-blue-900/40">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs font-mono text-slate-300 font-bold ml-2 flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-cyan-400" />
                SEKAR@DEVOPS:~$
              </span>
            </div>

            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800/80 text-[11px] font-mono text-slate-300 hover:text-white border border-slate-700 transition-colors"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy Cmd'}</span>
            </button>
          </div>

          {/* Command Select Tabs */}
          <div className="flex flex-wrap items-center gap-1 bg-[#050814] light:bg-slate-900 p-2 border-b border-slate-800">
            {terminalCommands.map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  activeTab === idx
                    ? 'bg-blue-600 text-white font-bold shadow-md'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                }`}
              >
                ${item.cmd.split(' ')[0]} {item.cmd.split(' ')[1] || ''}
              </button>
            ))}
          </div>

          {/* Terminal Body */}
          <div className="p-6 bg-[#040714] light:bg-slate-950 font-mono text-xs sm:text-sm text-slate-200 space-y-4 min-h-[220px]">
            <div className="flex items-center gap-2 text-cyan-400">
              <span className="text-emerald-400 font-bold">sekar@devops-cluster:~$</span>
              <span className="text-white font-semibold">{terminalCommands[activeTab].cmd}</span>
              <span className="w-2 h-4 bg-cyan-400 animate-blink" />
            </div>

            <pre className="text-slate-300 overflow-x-auto leading-relaxed font-mono whitespace-pre-wrap text-xs bg-black/40 p-4 rounded-xl border border-slate-800/80">
              {terminalCommands[activeTab].output}
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
