import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon } from './TechIcons';
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
    <section id="contact" className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Contact Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
                LET'S CONNECT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Get In Touch
              </h2>
              <p className="text-slate-400 text-sm">
                Open for DevOps engineering opportunities, infrastructure automation projects, and technical discussions.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              
              {/* Email */}
              <a 
                href="mailto:shanmugamsekar004@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/70 border border-blue-500/20 hover:border-blue-400/50 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-lg bg-blue-950/80 border border-blue-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300">
                    shanmugamsekar004@gmail.com
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/in/sekar-s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/70 border border-blue-500/20 hover:border-blue-400/50 hover:bg-slate-900 transition-all group"
              >
                <div className="p-3 rounded-lg bg-blue-950/80 border border-blue-500/30 text-blue-400 group-hover:scale-110 transition-transform">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">LinkedIn</span>
                  <span className="text-sm font-bold text-white group-hover:text-blue-300">
                    linkedin.com/in/sekar-s
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Location</span>
                  <span className="text-sm font-bold text-white">
                    Gobichettipalayam, Tamil Nadu
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 text-emerald-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">Phone</span>
                  <span className="text-sm font-bold text-white font-mono">
                    +91 98765 43210 (Editable)
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side: Clean Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/30 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white mb-6">
                Send a Message
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-2 animate-fadeIn">
                  <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out. I will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-blue-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-blue-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 font-semibold mb-1.5">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="How can I help with your cloud or CI/CD infrastructure?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-blue-500/20 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:scale-[1.01] transition-all"
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
