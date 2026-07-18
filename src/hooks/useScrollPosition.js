import { useEffect, useState } from 'react';

let currentScrollY = typeof window !== 'undefined' ? window.scrollY : 0;
let ticking = false;
const listeners = new Set();

const notify = () => {
  currentScrollY = window.scrollY;
  listeners.forEach(listener => listener(currentScrollY));
  ticking = false;
};

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(notify);
    ticking = true;
  }
};

/**
 * Shared window scroll position, backed by a single rAF-throttled
 * `scroll` listener regardless of how many components call this hook.
 */
export default function useScrollPosition() {
  const [scrollY, setScrollY] = useState(currentScrollY);

  useEffect(() => {
    if (listeners.size === 0) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }
    listeners.add(setScrollY);

    return () => {
      listeners.delete(setScrollY);
      if (listeners.size === 0) {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return scrollY;
}
