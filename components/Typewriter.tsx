
import React, { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  lines: string[];
  className?: string;
  tailPosition?: 'left' | 'right' | 'bottom-left'; // Which side of the bubble the tail is on
}

const Typewriter: React.FC<TypewriterProps> = ({ lines, className, tailPosition = 'left' }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  // Refs to handle cleanup and timing
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset state when lines array changes (handled by key prop in parent usually, but safe to have here)
    if (!lines || lines.length === 0) return;

    const currentLine = lines[currentLineIndex];
    let charIndex = 0;
    
    setIsTyping(true);
    setDisplayedText('');

    const typeChar = () => {
      if (charIndex < currentLine.length) {
        // Using slice(0, index + 1) is more robust than appending to previous state
        setDisplayedText(currentLine.slice(0, charIndex + 1));
        charIndex++;
        timeoutRef.current = setTimeout(typeChar, 50); // Typing speed
      } else {
        setIsTyping(false);
        // Wait after finishing line, then switch
        timeoutRef.current = setTimeout(() => {
          setDisplayedText('');
          setCurrentLineIndex((prev) => (prev + 1) % lines.length);
        }, 3000); // Pause duration
      }
    };

    // Small initial delay to prevent immediate render issues
    timeoutRef.current = setTimeout(typeChar, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentLineIndex, lines]);

  return (
    <div className={`relative bg-white border-4 border-black p-4 rounded-lg shadow-lg max-w-xs ${className}`}>
        
        {/* Tail: Left */}
        {tailPosition === 'left' && (
          <>
            <div className="absolute top-1/2 -left-4 -mt-[10px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[16px] border-r-black"></div>
            <div className="absolute top-1/2 -left-[10px] -mt-[8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[12px] border-r-white"></div>
          </>
        )}

        {/* Tail: Right */}
        {tailPosition === 'right' && (
          <>
            <div className="absolute top-1/2 -right-4 -mt-[10px] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[16px] border-l-black"></div>
            <div className="absolute top-1/2 -right-[10px] -mt-[8px] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[12px] border-l-white"></div>
          </>
        )}
        
        {/* Tail: Bottom-Left (Pointing down and left) */}
        {tailPosition === 'bottom-left' && (
          <>
             {/* Outer Black Triangle */}
             <div className="absolute -bottom-[16px] left-4 w-0 h-0 
                  border-t-[16px] border-t-black 
                  border-r-[16px] border-r-transparent 
                  border-l-0 border-b-0">
             </div>
             {/* Inner White Triangle */}
             <div className="absolute -bottom-[10px] left-[20px] w-0 h-0 
                  border-t-[10px] border-t-white 
                  border-r-[10px] border-r-transparent 
                  border-l-0 border-b-0">
             </div>
          </>
        )}
        
        <p className="font-pixel text-xs md:text-sm leading-relaxed text-gray-900 min-h-[3rem]">
            {displayedText}
            <span className="animate-blink inline-block w-2 h-4 bg-santa-red ml-1 align-middle"></span>
        </p>
    </div>
  );
};

export default Typewriter;
