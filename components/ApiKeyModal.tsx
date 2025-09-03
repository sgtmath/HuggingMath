import React, { useState } from 'react';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (key: string) => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSave }) => {
  const [localApiKey, setLocalApiKey] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    if (localApiKey.trim()) {
      onSave(localApiKey.trim());
      setLocalApiKey('');
    }
  };
  
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
        onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 animate-fade-in"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="apiKeyModalTitle"
    >
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-brand-dark relative transform transition-all duration-300 animate-scale-in">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors" aria-label="Close modal">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <h2 id="apiKeyModalTitle" className="text-2xl font-bold font-serif mb-4">Enter Your API Key</h2>
        <p className="text-slate-600 mb-6">
          To generate problems, this app needs a Google Gemini API key. Your key is stored only in your browser for this session and is never sent to our servers.
        </p>
        <div className="mb-4">
          <label htmlFor="apiKey" className="block text-sm font-medium text-slate-700 mb-1">Gemini API Key</label>
          <input
            type="password"
            id="apiKey"
            value={localApiKey}
            onChange={(e) => setLocalApiKey(e.target.value)}
            className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-accent focus:border-brand-accent"
            placeholder="Enter your key here"
          />
        </div>
        <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-sm text-brand-accent hover:underline mb-6 block">
          Get an API Key from Google AI Studio &rarr;
        </a>
        <button
          onClick={handleSave}
          className="w-full bg-brand-accent hover:bg-brand-accent-light text-brand-dark font-bold py-2 px-4 rounded-md transition-all duration-300 disabled:bg-slate-300"
          disabled={!localApiKey.trim()}
        >
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default ApiKeyModal;
