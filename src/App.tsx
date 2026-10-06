import React, { useState } from 'react';
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
import { SelectedDevopsWork } from './components/SelectedDevopsWork';
import { CodeAutomation } from './components/CodeAutomation';
import { Education } from './components/Education';
import { ResumeCta } from './components/ResumeCta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setResumeModalOpen(false);
  };

  return (
    <div className="relative bg-[#050814] text-slate-100 min-h-screen selection:bg-blue-600 selection:text-white">
      {/* Navbar */}
      <Navbar onOpenResume={handleOpenResume} />

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
        <SelectedDevopsWork />
        <CodeAutomation />
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
