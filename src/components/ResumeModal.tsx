import React from 'react';
import { X, Download } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleDownload = () => {
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

    // Generate a formatted plain text resume file for download
    const resumeText = `===================================================================
SEKAR S - DEVOPS ENGINEER
Email: shanmugamsekar004@gmail.com | LinkedIn: linkedin.com/in/sekar-s
Location: Gobichettipalayam, Tamil Nadu, India
===================================================================

SUMMARY
DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, CI/CD, Git, Linux, and Terraform. Skilled in application deployment, containerization, CI/CD pipeline automation, and cloud infrastructure management. Experienced in troubleshooting deployment and infrastructure issues while ensuring reliable and efficient application delivery.

TECHNICAL SKILLS
• Cloud Platforms: AWS, Azure
• Containerization & Orchestration: Docker, Kubernetes
• CI/CD & Version Control: Jenkins, Git, GitHub, GitLab
• Infrastructure as Code: Terraform, Ansible
• Web Servers: Nginx, Apache, phpMyAdmin
• Monitoring & Logging: AWS CloudWatch, Prometheus, Grafana
• Security & Code Quality: SonarQube, OWASP, ZAP
• Operating Systems: Linux, Windows, Shell Scripting, Cron Jobs

PROFESSIONAL EXPERIENCE
Junior DevOps Engineer | Dreams Technologies, Coimbatore (September 2026 – Present)
• Automated application deployments and infrastructure provisioning on AWS and Azure using Docker and CI/CD pipelines.
• Implemented and maintained Jenkins pipelines for build, test and release processes.
• Deployed and managed containerized applications on Kubernetes.
• Worked with Deployments, Services, ConfigMaps and Ingress.
• Managed Nginx and Apache web servers/load balancers.
• Developed shell scripts and cron jobs.
• Integrated SonarQube and OWASP into CI/CD workflows.
• Collaborated with development teams using GitLab.

Cloud DevOps Trainee & Specialist | DevOps & Cloud Engineering Program (September 2025 – August 2026)
• Trained in cloud infrastructure fundamentals, CI/CD practices, and containerization.
• Assisted in shell scripting, environment configuration, and version control workflows.

EDUCATION
Bachelor's Degree in Computer Science
Gobi Arts & Science College (2021 – 2024)
CGPA: 7.0

LANGUAGES
• Tamil (Native)
• English (Professional)
===================================================================`;

    const blob = new Blob([resumeText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Sekar_S_DevOps_Engineer_Resume.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#070b1a] light:bg-white border border-blue-500/40 light:border-slate-300 rounded-2xl shadow-2xl shadow-blue-950/80 overflow-hidden flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-blue-900/40 light:border-slate-200 bg-slate-900/80 light:bg-slate-100">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <h3 className="text-base font-extrabold text-white light:text-slate-900">Sekar S — DevOps Resume Preview</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 light:bg-slate-200 text-slate-400 light:text-slate-700 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body (Scrollable document view) */}
        <div className="p-6 overflow-y-auto space-y-6 font-sans text-slate-200 light:text-slate-800">
          
          {/* Resume Header */}
          <div className="text-center pb-4 border-b border-slate-800 light:border-slate-200">
            <h1 className="text-2xl font-extrabold text-white light:text-slate-900">SEKAR S</h1>
            <p className="text-sm font-mono text-cyan-400 light:text-blue-700 font-bold">DevOps Engineer</p>
            <p className="text-xs text-slate-400 light:text-slate-600 mt-1">
              shanmugamsekar004@gmail.com • linkedin.com/in/sekar-s/ • Gobichettipalayam
            </p>
          </div>

          {/* Resume Summary */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-400 light:text-blue-700 uppercase tracking-wider mb-2">
              SUMMARY
            </h4>
            <p className="text-xs leading-relaxed text-slate-300 light:text-slate-700 bg-slate-900/60 light:bg-slate-100 p-4 rounded-xl border border-slate-800 light:border-slate-300">
              DevOps Engineer with hands-on experience in AWS, Docker, Kubernetes, Jenkins, CI/CD, Git, Linux, and Terraform. Skilled in application deployment, containerization, CI/CD pipeline automation, and cloud infrastructure management. Experienced in troubleshooting deployment and infrastructure issues while ensuring reliable and efficient application delivery.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-400 light:text-blue-700 uppercase tracking-wider mb-2">
              TECHNICAL SKILLS
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              <div className="p-2 rounded bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800">AWS & Azure</div>
              <div className="p-2 rounded bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800">Docker & Kubernetes</div>
              <div className="p-2 rounded bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800">Jenkins & CI/CD</div>
              <div className="p-2 rounded bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800">Terraform & Ansible</div>
              <div className="p-2 rounded bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800">Git & GitLab</div>
              <div className="p-2 rounded bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 text-slate-200 light:text-slate-800">SonarQube & OWASP</div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h4 className="text-xs font-mono font-bold text-blue-400 light:text-blue-700 uppercase tracking-wider mb-2">
              PROFESSIONAL EXPERIENCE
            </h4>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 space-y-2">
                <div className="flex justify-between text-xs font-bold text-white light:text-slate-900">
                  <span>Junior DevOps Engineer @ Dreams Technologies, Coimbatore</span>
                  <span className="text-cyan-400 light:text-blue-700 font-mono">Sep 2026 – Present</span>
                </div>
                <ul className="text-xs text-slate-300 light:text-slate-700 space-y-1 list-disc list-inside">
                  <li>Automated deployments & infra provisioning on AWS/Azure using Docker & CI/CD.</li>
                  <li>Maintained Jenkins pipelines for build, test, and release processes.</li>
                  <li>Managed containerized applications on Kubernetes (Deployments, Services, Ingress).</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 light:bg-slate-100 border border-slate-800 light:border-slate-300 space-y-1">
                <div className="flex justify-between text-xs font-bold text-white light:text-slate-900">
                  <span>Cloud DevOps Trainee & Specialist @ DevOps Engineering Program</span>
                  <span className="text-slate-400 light:text-slate-600 font-mono">Sep 2025 – Aug 2026</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-blue-900/40 light:border-slate-200 bg-slate-900/90 light:bg-slate-100">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 light:bg-slate-200 text-slate-300 light:text-slate-800 text-xs font-semibold hover:text-white"
          >
            Close
          </button>
          <button
            onClick={handleDownload}
            className="btn-primary-cta px-5 py-2 rounded-xl text-white text-xs font-bold flex items-center gap-2 shadow-lg shadow-cyan-500/30"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download Resume File</span>
          </button>
        </div>

      </div>
    </div>
  );
};
