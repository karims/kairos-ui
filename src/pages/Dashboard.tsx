import React, { useState } from 'react';

export const Dashboard = ({ onOpenExistingProject }: { onOpenExistingProject: () => void }) => {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleStartNewProject = () => {
    alert("Start New Project clicked!");
  };

  const handleOpenExistingProject = () => {
    alert("Open Existing Project clicked!");
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <header className="w-full py-6 text-center">
        <h1 className="text-4xl font-extrabold">Kairos</h1>
        <p className="text-lg text-gray-400">A Minimalist IDE</p>
      </header>

      {/* Centered Buttons */}
      <div className="flex-grow flex items-center justify-center">
        <div className="flex gap-6">
          <button
            onClick={handleStartNewProject}
            className="px-8 py-4 bg-slate-600 hover:bg-slate-400 rounded shadow-lg transition duration-200"
          >
            Start New Project
          </button>
          <button
            onClick={onOpenExistingProject}
            className="px-8 py-4 bg-slate-600 hover:bg-slate-400 rounded shadow-lg transition duration-200"
          >
            Open Existing Project
          </button>
        </div>
      </div>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded shadow-lg w-96">
            <h2 className="text-lg font-bold mb-4">Search Projects</h2>
            <input
              type="text"
              placeholder="Type to search..."
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
            />
            <button
              onClick={toggleSearch}
              className="mt-4 w-full py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-200"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
