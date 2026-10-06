import React from 'react';
import { GraduationCap, Calendar, Award, Globe } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-[#050814] relative border-t border-blue-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-blue-400 uppercase">
            ACADEMIC BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Education & Languages
          </h2>
          <p className="text-slate-400 text-sm">
            Academic qualifications and linguistic proficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch max-w-4xl mx-auto">
          
          {/* Education Card (Degree) */}
          <div className="md:col-span-7 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/25 space-y-4">
            <div className="flex items-center justify-between pb-4 border-b border-blue-900/30">
              <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-500/30 text-cyan-400">
                <GraduationCap className="w-7 h-7" />
              </div>
              <span className="text-xs font-mono font-bold text-cyan-300 bg-blue-950/80 px-3 py-1 rounded-md border border-blue-500/30 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                2021 – 2024
              </span>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-white">
                Bachelor’s Degree in Computer Science
              </h3>
              <p className="text-sm font-semibold text-blue-400">
                Gobi Arts & Science College
              </p>
            </div>

            <div className="pt-2 flex items-center gap-2">
              <span className="px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono font-bold text-emerald-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5" />
                CGPA: 7.0
              </span>
            </div>
          </div>

          {/* Languages Card */}
          <div className="md:col-span-5 glass-panel rounded-2xl p-6 sm:p-8 border border-blue-500/25 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 pb-4 mb-4 border-b border-blue-900/30">
                <Globe className="w-5 h-5 text-cyan-400" />
                <h3 className="text-base font-extrabold text-white">Languages</h3>
              </div>

              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">Tamil</span>
                  <span className="text-xs font-mono text-cyan-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-500/30">
                    Native
                  </span>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-sm font-bold text-white">English</span>
                  <span className="text-xs font-mono text-cyan-400 bg-blue-950/80 px-2.5 py-1 rounded border border-blue-500/30">
                    Professional
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
