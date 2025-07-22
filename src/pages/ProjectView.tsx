export const ProjectView = ({
    onBack,
    onSelect,
  }: {
    onBack: () => void;
    onSelect: (projectName: string) => void;
  }) => {
    const repositories = [
      'Repo 1 - Weather App',
      'Repo 2 - AI Assistant',
      'Repo 3 - Blogging Platform',
      'Repo 4 - E-commerce Store',
      'Repo 5 - Game Development',
    ];
  
    return (
      <div className="flex flex-col h-full">
        {/* Header */}
        <header className="w-full py-6 text-center border-b border-gray-700">
          <h2 className="text-2xl font-bold">Select a Project</h2>
        </header>
  
        {/* Project List */}
        <div className="flex-grow overflow-y-auto p-6 space-y-4">
          {repositories.map((repo, index) => (
            <div
              key={index}
              onClick={() => onSelect(repo)}
              className="max-w-md mx-auto p-4 bg-slate-700 hover:bg-slate-600 rounded shadow transition duration-200 cursor-pointer"
            >
              {repo}
            </div>
          ))}
        </div>
  
        {/* Back Button */}
        <footer className="w-full py-4 text-center border-t border-gray-700">
          <button
            onClick={onBack}
            className="px-6 py-3 bg-slate-600 hover:bg-slate-400 rounded shadow-lg transition duration-200"
          >
            Back to Dashboard
          </button>
        </footer>
      </div>
    );
  };
  