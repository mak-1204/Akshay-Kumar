'use client';

import { useEffect, useState } from 'react';

export function GlowEffect() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable the effect on desktop screens (>= 1024px)
    const checkVisibility = () => {
      setIsVisible(window.innerWidth >= 1024);
    };

    checkVisibility();
    window.addEventListener('resize', checkVisibility);

    const updateGlow = (x: number, y: number) => {
      document.documentElement.style.setProperty('--cx', x + 'px');
      document.documentElement.style.setProperty('--cy', y + 'px');
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateGlow(e.clientX, e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', checkVisibility);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isVisible) return null;

  return <div className="cursor-glow" />;
}
