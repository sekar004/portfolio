import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechnicalSkills } from './components/TechnicalSkills';
import { DevopsWorkflow } from './components/DevopsWorkflow';
import { CicdAutomation } from './components/CicdAutomation';
import { KubernetesSection } from './components/KubernetesSection';
import { CloudInfrastructure } from './components/CloudInfrastructure';
import { ServerAutomation } from './components/ServerAutomation';
import { MonitoringObservability } from './components/MonitoringObservability';
import { SecurityQuality } from './components/SecurityQuality';
import { ProfessionalExperience } from './components/ProfessionalExperience';
import { Education } from './components/Education';
import { ResumeCta } from './components/ResumeCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    // Theme initialization
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
      theme === 'dark' ? 'bg-[#050814] text-slate-100' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Navbar with Theme Switcher */}
      <Navbar 
        onOpenResume={handleOpenResume} 
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <TechnicalSkills />
        <DevopsWorkflow />
        <CicdAutomation />
        <KubernetesSection />
        <CloudInfrastructure />
        <ServerAutomation />
        <MonitoringObservability />
        <SecurityQuality />
        <ProfessionalExperience />
        <Education />
        <ResumeCta onOpenResume={handleOpenResume} />
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
