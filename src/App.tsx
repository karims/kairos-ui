import React, { useState, useEffect } from 'react';
import { Dashboard } from './pages/Dashboard';
import { ProjectView } from './pages/ProjectView';
import { CodeView } from './pages/CodeView';
import { AskKairos } from './components/AskKairos';
import { appWindow, PhysicalSize } from '@tauri-apps/api/window';

function App() {
  const [view, setView] = useState<'dashboard' | 'project' | 'code'>('dashboard');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  // Set initial window size like VSCode or IntelliJ
  useEffect(() => {
    const { availHeight, availWidth } = window.screen;
    const height = availHeight / 2;
    const width = (height / 800) * 1280; // Maintain similar aspect ratio
    appWindow.setSize(new PhysicalSize(width, height));
  }, []);

  // Handlers for navigation
  const openProjectView = () => setView('project');
  const goBackToDashboard = () => setView('dashboard');
  const openCodeView = (projectName: string) => {
    setSelectedProject(projectName);
    setView('code');
  };

  return (
    <div className="relative h-screen w-screen bg-gray-900 text-white">
      {/* Background Layer */}
      <div className="mask-concave"></div>

      {/* Content Layer */}
      <div className="relative z-10 h-full">
        {view === 'dashboard' && <Dashboard onOpenExistingProject={openProjectView} />}
        {view === 'project' && (
          <ProjectView onBack={goBackToDashboard} onSelect={openCodeView} />
        )}
        {view === 'code' && <CodeView projectName={selectedProject} />}
        <AskKairos />
      </div>
    </div>
  );
}

export default App;