
import React, { useState, useEffect, useMemo } from 'react';
import { Participant } from '../types';
import PixelSanta from './PixelSanta';
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
        <div className="absolute bottom-12 -left-4 md:left-0 z-10">
            <PixelSanta isShaking={false} />
        </div>
        
        {/* Pixel Art Bucket Button - Positioned near Santa's feet */}
        <div className="absolute bottom-4 left-32 md:left-40 z-20">
            <button
                onClick={handleTap}
                disabled={isRevealed}
                className={`
                    group relative w-32 h-32 md:w-40 md:h-40 
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
                {/* PIXEL ART BUCKET SVG */}
                <svg viewBox="0 0 32 32" className="w-full h-full drop-shadow-xl" shapeRendering="crispEdges">
                    {/* Handle (Dark Gray) */}
                    <path d="M10 6 h 12 v 2 h 2 v 2 h -2 v -2 h -12 v 2 h -2 v -2 h 2 v -2 Z" fill="#4A4A4A" />
                    
                    {/* Bucket Main Body (Wood Brown) */}
                    <path d="M4 10 h 24 v 2 h -2 v 16 h -2 v 2 h -16 v -2 h -2 v -16 h -2 Z" fill="#5D4037" />
                    
                    {/* Bucket Shading (Darker Wood) */}
                    <path d="M6 12 h 2 v 14 h -2 Z" fill="#3E2723" opacity="0.5" />
                    <path d="M24 12 h 2 v 14 h -2 Z" fill="#3E2723" opacity="0.5" />
                    <path d="M8 26 h 16 v 2 h -16 Z" fill="#3E2723" opacity="0.5" />

                    {/* Gold Hoops */}
                    <path d="M4 12 h 24 v 2 h -24 Z" fill="#FFB300" />
                    <path d="M6 22 h 20 v 2 h -20 Z" fill="#FFB300" />

                    {/* Inside Color (Top lip) */}
                    <path d="M6 10 h 20 v 1 h -20 Z" fill="#3E2723" />
                </svg>

                {/* Text Overlay */}
                <div className="absolute top-[55%] left-0 right-0 text-center">
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
