
import React from 'react';

/**
 * High-Fidelity Pixel Art Santa - Enhanced Detail
 * Style: 16-bit RPG
 */

interface PixelSantaProps {
  isShaking: boolean;
}

const PixelSanta: React.FC<PixelSantaProps> = ({ isShaking }) => {
  // Enhanced Palette with more definition
  const C = {
    // Suit
    RED_DARKEST: '#4A0E0E',
    RED_DARK:    '#7F1317',
    RED_MAIN:    '#C62828', // Slightly brighter red
    RED_LIGHT:   '#E57373',
    
    // Fur / Beard
    WHITE_SHADOW:'#90A4AE',
    WHITE_MAIN:  '#ECEFF1',
    WHITE_BRIGHT:'#FFFFFF',
    
    // Skin
    SKIN_SHADOW: '#D99E82',
    SKIN_MAIN:   '#FFCCB0',
    SKIN_ROSY:   '#EF9A9A',
    
    // Sack
    SACK_DARK:   '#3E2723',
    SACK_MAIN:   '#5D4037',
    SACK_LIGHT:  '#8D6E63',
    
    // Accessories
    BELT:        '#212121',
    GOLD_DARK:   '#F57F17',
    GOLD_MAIN:   '#FFD600',
    BOOT:        '#121212',
    BUTTON:      '#FFD740', 
    GLASSES:     '#81D4FA',
    GLASSES_FRAME:'#F9A825'
  };

  return (
    <div className={`relative w-72 h-72 md:w-96 md:h-96 mx-auto transition-transform duration-200 ${isShaking ? 'translate-y-1' : ''}`}>
      <svg 
        viewBox="0 0 64 64" 
        className="w-full h-full drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]"
        shapeRendering="crispEdges"
      >
        <g className={isShaking ? 'animate-shake' : 'animate-breathe'}>
          
          {/* === SACK (Behind) === */}
          <path d="M6 28 h 16 v 28 h -16 Z" fill={C.SACK_DARK} />
          <path d="M8 28 h 16 v 26 h -16 Z" fill={C.SACK_MAIN} />
          {/* Sack shading/texture */}
          <rect x="8" y="28" width="2" height="26" fill={C.SACK_LIGHT} opacity="0.2" />
          <rect x="12" y="40" width="8" height="1" fill={C.SACK_DARK} opacity="0.5" />
          <rect x="10" y="48" width="10" height="1" fill={C.SACK_DARK} opacity="0.5" />
          
          {/* === LEGS & BOOTS === */}
          {/* Left Leg */}
          <rect x="24" y="48" width="8" height="8" fill={C.RED_DARK} />
          <rect x="24" y="56" width="8" height="6" fill={C.BOOT} />
          <rect x="24" y="56" width="2" height="6" fill="#000" opacity="0.3" />
          
          {/* Right Leg */}
          <rect x="38" y="48" width="8" height="8" fill={C.RED_DARK} />
          <rect x="38" y="56" width="8" height="6" fill={C.BOOT} />
          <rect x="44" y="56" width="2" height="6" fill="#333" opacity="0.3" /> {/* Highlight */}

          {/* === TORSO / COAT === */}
          {/* Main Body Block */}
          <rect x="22" y="28" width="26" height="20" fill={C.RED_MAIN} />
          
          {/* Coat Trim (Bottom) */}
          <rect x="20" y="44" width="30" height="6" fill={C.WHITE_SHADOW} />
          <rect x="20" y="44" width="30" height="4" fill={C.WHITE_MAIN} />
          
          {/* Coat Opening & Buttons */}
          <rect x="34" y="28" width="2" height="16" fill={C.RED_DARKEST} opacity="0.3" />
          <rect x="34" y="30" width="2" height="2" fill={C.BUTTON} />
          <rect x="34" y="36" width="2" height="2" fill={C.BUTTON} />
          
          {/* Belt */}
          <rect x="21" y="38" width="28" height="4" fill={C.BELT} />
          <rect x="32" y="37" width="6" height="6" fill={C.GOLD_DARK} />
          <rect x="33" y="38" width="4" height="4" fill={C.GOLD_MAIN} />
          
          {/* === HEAD === */}
          {/* Face Base */}
          <rect x="28" y="14" width="14" height="14" fill={C.SKIN_MAIN} />
          
          {/* Beard Layers */}
          <path d="M26 24 h 18 v 4 h -2 v 4 h -4 v 4 h -6 v -4 h -4 v -4 h -2 Z" fill={C.WHITE_SHADOW} />
          <path d="M27 23 h 16 v 4 h -2 v 4 h -4 v 2 h -4 v -2 h -4 v -4 h -2 Z" fill={C.WHITE_MAIN} />
          
          {/* Moustache */}
          <path d="M29 22 h 12 v 3 h -2 v -1 h -8 v 1 h -2 Z" fill={C.WHITE_MAIN} />
          <rect x="29" y="22" width="12" height="1" fill={C.WHITE_BRIGHT} opacity="0.8" />
          
          {/* Nose */}
          <rect x="33" y="20" width="4" height="2" fill={C.SKIN_ROSY} />
          
          {/* Cheeks */}
          <rect x="29" y="20" width="2" height="1" fill={C.SKIN_ROSY} opacity="0.5" />
          <rect x="39" y="20" width="2" height="1" fill={C.SKIN_ROSY} opacity="0.5" />
          
          {/* Eyes */}
          <rect x="30" y="17" width="2" height="2" fill="#000" />
          <rect x="38" y="17" width="2" height="2" fill="#000" />
          
          {/* Glasses */}
          <g opacity="0.9">
            {/* Rims */}
            <rect x="29" y="16" width="4" height="4" fill={C.GLASSES} opacity="0.4" />
            <rect x="29" y="16" width="4" height="1" fill={C.GLASSES_FRAME} />
            <rect x="29" y="19" width="4" height="1" fill={C.GLASSES_FRAME} />
            <rect x="29" y="16" width="1" height="4" fill={C.GLASSES_FRAME} />
            <rect x="32" y="16" width="1" height="4" fill={C.GLASSES_FRAME} />

            <rect x="37" y="16" width="4" height="4" fill={C.GLASSES} opacity="0.4" />
            <rect x="37" y="16" width="4" height="1" fill={C.GLASSES_FRAME} />
            <rect x="37" y="19" width="4" height="1" fill={C.GLASSES_FRAME} />
            <rect x="37" y="16" width="1" height="4" fill={C.GLASSES_FRAME} />
            <rect x="40" y="16" width="1" height="4" fill={C.GLASSES_FRAME} />
            
            {/* Bridge */}
            <rect x="33" y="17" width="4" height="1" fill={C.GLASSES_FRAME} />
          </g>
          
          {/* Eyebrows */}
          <rect x="29" y="13" width="4" height="2" fill={C.WHITE_MAIN} />
          <rect x="37" y="13" width="4" height="2" fill={C.WHITE_MAIN} />


          {/* === HAT === */}
          <rect x="25" y="9" width="20" height="5" fill={C.WHITE_MAIN} />
          <rect x="25" y="12" width="20" height="2" fill={C.WHITE_SHADOW} opacity="0.5" />
          
          {/* Hat Body */}
          <path d="M26 9 L28 2 h 14 v 8 Z" fill={C.RED_MAIN} />
          
          {/* Hat Tail (Flopping right) */}
          <path d="M42 2 h 8 v 8 h -4 v 2 h -4 Z" fill={C.RED_MAIN} />
          <rect x="42" y="2" width="2" height="8" fill={C.RED_DARK} opacity="0.3" /> {/* Fold shadow */}
          
          {/* Pompom */}
          <rect x="46" y="10" width="4" height="4" fill={C.WHITE_MAIN} />


          {/* === ARMS === */}
          {/* Left Arm (Back) */}
          <rect x="20" y="28" width="6" height="10" fill={C.RED_DARK} />
          <rect x="20" y="38" width="6" height="3" fill={C.WHITE_SHADOW} />
          <rect x="19" y="40" width="5" height="4" fill={C.SKIN_MAIN} /> 
          
          {/* Right Arm (Front, slightly lifted) */}
          <g transform="rotate(-10 48 30)"> 
             <rect x="46" y="28" width="6" height="10" fill={C.RED_MAIN} />
             <rect x="46" y="38" width="6" height="3" fill={C.WHITE_MAIN} />
             <rect x="47" y="41" width="5" height="4" fill={C.SKIN_MAIN} />
          </g>

        </g>
      </svg>
    </div>
  );
};

export default PixelSanta;
