import React from 'react';
import { Participant } from '../types';

interface ResultCardProps {
  data: Participant;
  isVisible: boolean;
}

const ResultCard: React.FC<ResultCardProps> = ({ data, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="animate-bounce-up w-full max-w-md mx-auto bg-[#FFFDF5] border-4 border-santa-gold p-1 shadow-2xl transform rotate-1">
      <div className="border-2 border-dashed border-santa-red p-6 flex flex-col items-center text-center relative">
        
        {/* Decorative corners */}
        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-santa-red"></div>
        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-santa-red"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-santa-red"></div>
        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-santa-red"></div>

        <h3 className="font-pixel text-santa-red text-sm mb-6 uppercase tracking-widest">
          Official Selection
        </h3>

        <div className="mb-4 w-full">
          <p className="font-serif text-gray-500 italic text-lg">You are Secret Santa for...</p>
          <h2 className="font-serif text-4xl font-bold text-forest-dark mt-2 mb-6">
            {data.assigned_person}
          </h2>
        </div>

        <div className="bg-santa-white/50 w-full p-4 rounded border border-gray-200 mb-6">
          <p className="font-pixel text-[10px] text-santa-red mb-2 uppercase">Helpful Hints</p>
          <p className="font-serif text-xl text-forest-dark leading-relaxed">
            {data.assigned_person_interests}
          </p>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-300 w-full">
          <p className="font-serif text-sm text-gray-500 italic">
            "Shh... keep it a secret!"
          </p>
        </div>
      </div>
      
      {/* Paper texture overlay effect */}
      <div className="absolute inset-0 bg-yellow-100 opacity-10 pointer-events-none mix-blend-multiply"></div>
    </div>
  );
};

export default ResultCard;