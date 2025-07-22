// Header.tsx
import React from 'react';

interface HeaderProps {
  projectName: string;
}

export const Header: React.FC<HeaderProps> = ({ projectName }) => {
  return (
    <header className="w-full py-2 px-4 bg-slate-800 flex justify-between items-center shadow-md">
      <h4 className="text-xl font-bold">{projectName || 'Untitled Project'}</h4>
    </header>
  );
};