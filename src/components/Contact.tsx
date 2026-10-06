import React, { useState } from 'react';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GitHubIcon } from './TechIcons';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.8 } });
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-12 bg-[#050814] light:bg-slate-50 relative border-t border-blue-900/20 devops-circuit-overlay">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Large Interactive Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="space-y-2 mb-6">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900">
                Contact Command Center
              </h2>
              <p className="text-slate-400 light:text-slate-600 text-sm">
                Open for DevOps engineering roles, cloud migration projects, and technical discussions.
              </p>
            </div>

            {/* Email Card */}
            <a 
              href="mailto:shanmugamsekar004@gmail.com"
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 light:border-slate-300 flex items-center gap-4 group"
            >
              <div className="p-3.5 rounded-xl bg-blue-950/80 light:bg-blue-100 text-blue-400 light:text-blue-600 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 light:text-slate-500 block font-bold uppercase">Email</span>
                <span className="text-sm font-extrabold text-white light:text-slate-900 group-hover:text-blue-400">
                  shanmugamsekar004@gmail.com
                </span>
              </div>
            </a>

            {/* LinkedIn Card */}
            <a 
              href="https://www.linkedin.com/in/sekar-s/"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 light:border-slate-300 flex items-center gap-4 group"
            >
              <div className="p-3.5 rounded-xl bg-blue-950/80 light:bg-blue-100 text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedinIcon size={24} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 light:text-slate-500 block font-bold uppercase">LinkedIn</span>
                <span className="text-sm font-extrabold text-white light:text-slate-900 group-hover:text-blue-400">
                  linkedin.com/in/sekar-s
                </span>
              </div>
            </a>

            {/* GitHub Card */}
            <a 
              href="https://github.com/sekar004"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel glass-panel-hover rounded-2xl p-5 border border-slate-800 light:border-slate-300 flex items-center gap-4 group"
            >
              <div className="p-3.5 rounded-xl bg-slate-900/90 light:bg-slate-200 text-white light:text-slate-900 group-hover:scale-110 transition-transform">
                <GitHubIcon size={24} />
              </div>
              <div>
                <span className="text-[11px] font-mono text-slate-400 light:text-slate-500 block font-bold uppercase">GitHub</span>
                <span className="text-sm font-extrabold text-white light:text-slate-900 group-hover:text-blue-400">
                  github.com/sekar004
                </span>
              </div>
            </a>

          </div>

          {/* Right Side: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800 light:border-slate-300 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white light:text-slate-900 mb-6">
                Send a Direct Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-bold mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-bold mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 light:text-slate-700 font-bold mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can I help with your cloud infrastructure, CI/CD, or Kubernetes deployments?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 light:bg-white border border-slate-800 light:border-slate-300 text-white light:text-slate-900 placeholder-slate-500 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
