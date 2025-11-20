import React, { useState } from 'react';
import { PARTICIPANTS } from '../data';
import { Participant } from '../types';

interface LoginScreenProps {
  onLoginSuccess: (participant: Participant) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [selectedName, setSelectedName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isFading, setIsFading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = PARTICIPANTS.find(
      (p) => p.person_name === selectedName && p.password === password
    );

    if (user) {
      setIsFading(true);
      // Small delay to allow fade animation
      setTimeout(() => {
        onLoginSuccess(user);
      }, 500);
    } else {
      setError("Hmm, that name and password don't match our list.");
    }
  };

  return (
    <div className={`transition-opacity duration-500 ${isFading ? 'opacity-0' : 'opacity-100'} w-full max-w-md p-4`}>
      <div className="bg-forest-dark/90 border-4 border-santa-gold shadow-[0_0_20px_rgba(229,193,0,0.3)] p-8 rounded-lg text-center relative overflow-hidden">
        {/* Decorative Header */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-santa-red"></div>
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-santa-red"></div>
        
        <h1 className="font-pixel text-2xl text-santa-white mb-8 leading-snug">
          Secret Santa<br/>
          <span className="text-santa-gold text-sm">Name Draw</span>
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="text-left">
            <label className="font-pixel text-[10px] text-santa-skin mb-2 block uppercase tracking-wider">
              Who are you?
            </label>
            <select 
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
              className="w-full p-3 bg-forest-light text-santa-white border-2 border-forest-light focus:border-santa-gold outline-none font-serif text-lg rounded"
              required
            >
              <option value="" disabled>Select your name...</option>
              {PARTICIPANTS.map((p) => (
                <option key={p.person_name} value={p.person_name}>
                  {p.person_name}
                </option>
              ))}
            </select>
          </div>

          <div className="text-left">
            <label className="font-pixel text-[10px] text-santa-skin mb-2 block uppercase tracking-wider">
              Secret Word
            </label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-forest-light text-santa-white border-2 border-forest-light focus:border-santa-gold outline-none font-serif text-lg rounded tracking-widest"
              placeholder="••••••"
              required
            />
          </div>

          {error && (
            <div className="bg-santa-darkRed/80 p-2 rounded text-santa-white text-sm font-serif italic border border-santa-red animate-shake">
              {error}
            </div>
          )}

          <button 
            type="submit"
            className="mt-4 bg-santa-red hover:bg-santa-darkRed text-white font-pixel text-sm py-4 px-6 rounded shadow-lg transform transition hover:scale-105 active:translate-y-1 border-b-4 border-santa-darkRed"
          >
            Start Drawing
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;