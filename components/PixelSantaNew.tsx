import React from 'react';
import spriteUrl from '../Santa.png';

interface PixelSantaNewProps {
  size?: number | string;
  className?: string;
  flipped?: boolean;
}

const PixelSantaNew: React.FC<PixelSantaNewProps> = ({
  size = 256,
  className,
  flipped = true,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={spriteUrl}
      alt="Pixel Santa"
      draggable={false}
      className={className}
      style={{
        width: dimension,
        height: dimension,
        imageRendering: 'pixelated',
        transform: flipped ? 'scaleX(-1)' : undefined,
        transformOrigin: 'center',
        filter: 'contrast(1.2) saturate(1.05)',
      }}
    />
  );
};

export default PixelSantaNew;
