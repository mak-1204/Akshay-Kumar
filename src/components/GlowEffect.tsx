'use client';

import { useEffect } from 'react';

export function GlowEffect() {
  useEffect(() => {
    const updateGlow = (x: number, y: number) => {
      document.documentElement.style.setProperty('--cx', x + 'px');
      document.documentElement.style.setProperty('--cy', y + 'px');
    };

    const handleMouseMove = (e: MouseEvent) => {
      updateGlow(e.clientX, e.clientY);
    };

    const handleTouch = (e: TouchEvent) => {
      if (e.touches && e.touches[0]) {
        updateGlow(e.touches[0].clientX, e.touches[0].clientY);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouch, { passive: true });
    window.addEventListener('touchmove', handleTouch, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('touchmove', handleTouch);
    };
  }, []);

  return <div className="cursor-glow" />;
}
