
import React, { useState, useEffect, useMemo } from 'react';
import { Participant } from '../types';
import PixelSantaNew from './PixelSantaNew';
import PixelBucket from './PixelBucket';
import Typewriter from './Typewriter';
import ResultCard from './ResultCard';

interface SantaSceneProps {
  user: Participant;
  onReset: () => void;
}

const SantaScene: React.FC<SantaSceneProps> = ({ user, onReset }) => {
  const [taps, setTaps] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  
  useEffect(() => {
    const hasDrawn = sessionStorage.getItem(`drawn_${user.person_name}`);
    if (hasDrawn) {
      setTaps(3);
    }
  }, [user.person_name]);

  const handleTap = () => {
    if (taps >= 3) return;

    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);

    const newTaps = taps + 1;
    setTaps(newTaps);

    if (newTaps === 3) {
      sessionStorage.setItem(`drawn_${user.person_name}`, 'true');
    }
  };

  const isRevealed = taps >= 3;

  const getButtonText = () => {
    if (taps === 0) return "TAP HERE";
    if (taps === 1) return "AGAIN!";
    if (taps === 2) return "LAST ONE";
    return "DONE";
  };

  // Pre-reveal dialogue
  const initialLines = useMemo(() => [
    `Ho ho ho!`,
    `Hello, ${user.person_name}!`,
    "Tap the bucket...",
    "Draw a name!",
  ], [user.person_name]);

  // Post-reveal dialogue
  const revealedLines = useMemo(() => [
    "A wonderful choice!",
    `Shh... don't tell ${user.assigned_person}!`,
    "Have a great Christmas!",
    "Ho ho ho!",
  ], [user.assigned_person]);

  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:items-start gap-8 lg:gap-16 relative z-10 pt-12">
      
      {/* --- SANTA & BUCKET AREA --- */}
      {/* Container sized to hold Santa on left and Bubble on right */}
      <div className="relative w-full max-w-[500px] h-[400px] md:h-[500px] flex-shrink-0 mt-8 lg:mt-0">
        
        {/* Speech Bubble - Top Right */}
        <div className="absolute top-0 right-0 md:-right-8 z-30 w-48 md:w-56">
            {/* Key prop forces remount when switching between initial and revealed states */}
            <Typewriter 
              key={isRevealed ? 'revealed' : 'initial'}
              lines={isRevealed ? revealedLines : initialLines} 
              tailPosition="bottom-left"
              className="shadow-[4px_4px_0_rgba(0,0,0,0.2)]"
            />
        </div>

        {/* Santa Sprite - Bottom Left */}
        <div className="absolute bottom-12 -left-8 md:left-0 z-10">
            <PixelSantaNew size={300} className="animate-breathe" />
        </div>
        
        {/* Pixel Art Bucket Button - Positioned near Santa's feet */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 transform z-20">
            <button
                onClick={handleTap}
                disabled={isRevealed}
                className={`
                    group relative w-40 h-40 md:w-48 md:h-48 
                    transition-all duration-100 
                    outline-none focus:outline-none
                    ${isRevealed 
                        ? 'cursor-not-allowed opacity-80 grayscale' 
                        : 'hover:-translate-y-1 active:translate-y-1 cursor-pointer'
                    }
                    ${isShaking ? 'animate-shake' : ''}
                `}
                aria-label="Tap the bucket"
            >
                <PixelBucket size="100%" className="w-full h-full drop-shadow-xl" />

                {/* Text Overlay */}
                <div className="absolute top-[58%] left-0 right-0 text-center">
                     <span className={`
                        font-pixel text-[10px] md:text-xs leading-none tracking-widest
                        ${isRevealed ? 'text-gray-400' : 'text-[#FFB300] drop-shadow-[1px_1px_0_#000]'}
                    `}>
                        {getButtonText()}
                    </span>
                </div>
            </button>
        </div>
      </div>

      {/* --- RESULT CARD --- */}
      <div className="w-full max-w-md min-h-[200px] lg:mt-0 flex items-center justify-center px-4">
        {isRevealed ? (
            <ResultCard data={user} isVisible={isRevealed} />
        ) : (
            <div className="text-center opacity-0 lg:opacity-60 transition-opacity">
                <p className="font-serif text-santa-white text-lg italic animate-pulse mt-8 lg:mt-0">
                    Waiting for you to draw...
                </p>
            </div>
        )}
      </div>

      {/* Reset Tool */}
      <button 
        onClick={onReset}
        className="fixed bottom-2 right-2 text-[10px] text-white/20 hover:text-white/80 font-sans z-50"
      >
        Reset Session
      </button>
    </div>
  );
};

export default SantaScene;
