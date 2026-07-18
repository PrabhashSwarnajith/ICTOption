import React from 'react';
import useScrollPosition from '../hooks/useScrollPosition';

const ScrollProgress = () => {
  const scrollY = useScrollPosition();
  const { scrollHeight, clientHeight } = document.documentElement;
  const width = (scrollY / (scrollHeight - clientHeight)) * 100;

  return (
    <div
      className="scroll-progress"
      style={{ width: `${width}%` }}
      aria-hidden="true"
    />
  );
};

export default ScrollProgress;
