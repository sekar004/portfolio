import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { About } from './components/About';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { SkillsDashboard } from './components/SkillsDashboard';
import { DevOpsWorkflow } from './components/DevOpsWorkflow';
import { DevOpsArchitecture } from './components/DevOpsArchitecture';
import { Projects } from './components/Projects';
import { CloudArchitecture } from './components/CloudArchitecture';
import { KubernetesDashboard } from './components/KubernetesDashboard';
import { MonitoringObservability } from './components/MonitoringObservability';
import { TerminalSection } from './components/TerminalSection';
import { Education } from './components/Education';
import { ResumeCTA } from './components/ResumeCTA';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.className = savedTheme;
    } else {
      document.documentElement.className = 'dark';
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('portfolio-theme', nextTheme);
    document.documentElement.className = nextTheme;
  };

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className={`relative min-h-screen selection:bg-blue-600 selection:text-white transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#050816] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Floating Glass Navbar */}
      <Navbar 
        onOpenResume={handleOpenResume} 
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Portfolio Sections */}
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <TechStack />
        <About />
        <ProfessionalExperience />
        <SkillsDashboard />
        <DevOpsWorkflow />
        <DevOpsArchitecture />
        <Projects />
        <CloudArchitecture />
        <KubernetesDashboard />
        <MonitoringObservability />
        <TerminalSection />
        <Education />
        <ResumeCTA onOpenResume={handleOpenResume} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={handleOpenResume} />

      {/* Resume Download/Preview Modal */}
      <ResumeModal isOpen={resumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
};

export default App;
