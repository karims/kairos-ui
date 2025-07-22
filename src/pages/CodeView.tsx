import React from 'react';
import { Header } from '../components/codeview/Header';
import { CanvasContainer } from '../components/codeview/CanvasContainer';
import { Footer } from '../components/codeview/Footer';

export const CodeView = ({ projectName }: { projectName: string | null }) => {
  return (
    <div className="w-screen h-screen flex flex-col h-full">
      <Header projectName={projectName || 'Untitled Project'} />
      <CanvasContainer />
      <Footer />
    </div>
  );
};