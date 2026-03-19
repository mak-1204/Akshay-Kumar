
'use client';

import { useEffect, useState } from 'react';

export function GlowEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute cursor-glow"
      style={{
        '--x': `${mousePosition.x}px`,
        '--y': `${mousePosition.y}px`,
      } as any}
    />
  );
}
