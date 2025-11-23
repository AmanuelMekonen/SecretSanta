
import React, { useState } from 'react';
import Snowfall from './components/Snowfall';
import LoginScreen from './components/LoginScreen';
import SantaScene from './components/SantaScene';
import { Participant, AppState } from './types';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.LOGIN);
  const [currentUser, setCurrentUser] = useState<Participant | null>(null);

  const handleLoginSuccess = (user: Participant) => {
    setCurrentUser(user);
    setAppState(AppState.SANTA_SCENE);
  };

  const handleReset = () => {
    // Clear session storage for the current user if they exist
    if (currentUser) {
      sessionStorage.removeItem(`drawn_${currentUser.person_name}`);
    }
    setCurrentUser(null);
    setAppState(AppState.LOGIN);
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden flex items-center justify-center bg-forest-dark">
      
      {/* --- BACKGROUND LAYERS --- */}
      
      {/* Layer 1: Login State - Gradient background (no external asset dependency) */}
      <div 
        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${appState === AppState.LOGIN ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: `radial-gradient(circle at center, #1A472A 0%, #0F2A1D 100%)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      ></div>

      {/* Layer 2: Santa Scene - Dedicated background asset */}
      <div 
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat pixelated transition-opacity duration-1000 ease-in-out ${appState === AppState.SANTA_SCENE ? 'opacity-100' : 'opacity-0'}`}
        style={{
          // Using a hosted pixel art winter night scene to avoid missing local assets.
          backgroundImage: `url('https://64.media.tumblr.com/e0f32969529527872435e19375503054/tumblr_or0h4p5l8I1w6dn9zo1_1280.png')`,
          imageRendering: 'pixelated'
        }}
      >
        {/* Dark overlay to ensure text/sprites pop against the detailed background */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Vignette & Texture (Global) */}
      <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.7)] z-0"></div>
      
      {/* Snowfall Layer */}
      <Snowfall />

      {/* Main Content */}
      <main className="relative z-10 w-full p-4 flex flex-col items-center">
        
        {appState === AppState.LOGIN && (
          <LoginScreen onLoginSuccess={handleLoginSuccess} />
        )}

        {appState === AppState.SANTA_SCENE && currentUser && (
          <SantaScene user={currentUser} onReset={handleReset} />
        )}
        
      </main>

      {/* Footer */}
      <footer className="absolute bottom-4 text-center w-full pointer-events-none z-20">
        <p className="font-pixel text-[8px] text-santa-white/50 drop-shadow-md">
          Secret Santa &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default App;
