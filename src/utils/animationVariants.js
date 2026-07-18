const ease = [0.25, 0.46, 0.45, 0.94];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.4 } },
};

export const slideInLeftVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
};

export const slideInRightVariants = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease } },
};

export const slideInUpVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease } },
};

export const bounceInVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const hoverScaleVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.2 } },
};

export const hoverGlowVariants = {
  rest: { boxShadow: '0 0 0px rgba(255, 0, 0, 0)' },
  hover: { boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)', transition: { duration: 0.25 } },
};

export const rotateVariants = {
  initial: { rotate: 0 },
  animate: { rotate: 360, transition: { duration: 20, ease: 'linear', repeat: Infinity } },
};

export const pulseVariants = {
  initial: { opacity: 1 },
  animate: { opacity: [1, 0.7, 1], transition: { duration: 2, repeat: Infinity } },
};

export const textRevealVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.04, duration: 0.4, ease },
  }),
};

export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-80px',
};

export const aggressiveViewportSettings = {
  once: true,
  amount: 0.1,
  margin: '-40px',
};

export const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const staggerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export const tabVariants = {
  hidden: { opacity: 0, x: 16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -16, transition: { duration: 0.25 } },
};
