// src/components/AskKairos.tsx

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export const AskKairos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="fixed bottom-4 right-4">
      <button 
        onClick={handleToggle} 
        className="p-3 bg-slate-600 rounded-full text-white shadow-lg"
      >
        <FiSearch size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Ask Kairos</h2>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none"
              placeholder="Ask a question or enter a command..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <div className="mt-4 space-y-2">
              <button className="w-full py-2 bg-blue-600 hover:bg-blue-700 rounded">
                Execute Command
              </button>
              <button onClick={handleToggle} className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
