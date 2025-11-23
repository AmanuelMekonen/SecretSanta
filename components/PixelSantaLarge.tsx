import React from 'react';
import spriteUrl from '../pixel_santa_large.svg';

interface PixelSantaLargeProps {
  size?: number | string;
  className?: string;
}

const PixelSantaLarge: React.FC<PixelSantaLargeProps> = ({
  size = 256,
  className,
}) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={spriteUrl}
      alt="Pixel Santa carrying a sack"
      draggable={false}
      className={className}
      style={{
        width: dimension,
        height: dimension,
        imageRendering: 'pixelated',
      }}
    />
  );
};

export default PixelSantaLarge;
