import React, { useEffect, useState } from 'react';

const Snowfall: React.FC = () => {
  // We create a fixed number of snowflakes with random positions and delays
  const [snowflakes, setSnowflakes] = useState<Array<{ left: string; animationDuration: string; animationDelay: string; opacity: number; size: string }>>([]);

  useEffect(() => {
    const count = 50;
    const flakes = [];
    for (let i = 0; i < count; i++) {
      flakes.push({
        left: `${Math.random() * 100}%`,
        animationDuration: `${Math.random() * 5 + 5}s`, // 5-10s duration
        animationDelay: `${Math.random() * 5}s`,
        opacity: Math.random() * 0.5 + 0.3,
        size: `${Math.random() * 4 + 2}px`
      });
    }
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {snowflakes.map((flake, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full animate-snow"
          style={{
            left: flake.left,
            top: '-10px',
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

export default Snowfall;