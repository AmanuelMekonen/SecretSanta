import React from 'react';
import bucketUrl from '../pixel_bucket.svg';

interface PixelBucketProps {
  size?: number | string;
  className?: string;
}

const PixelBucket: React.FC<PixelBucketProps> = ({ size = 160, className }) => {
  const dimension = typeof size === 'number' ? `${size}px` : size;

  return (
    <img
      src={bucketUrl}
      alt="Pixel bucket"
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

export default PixelBucket;
