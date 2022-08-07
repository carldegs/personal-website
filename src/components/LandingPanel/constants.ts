import { Variants } from 'framer-motion';

export const HEY_DURATION = 1.25;
export const NUM_HEYS = 16;
export const START_DELAY = 0.3;

export const timeRatio = HEY_DURATION / NUM_HEYS;
export const heyVariants: Variants = {
  start: {
    y: -50,
    x: 9,
    opacity: 0,
    color: 'white',
  },
  end: (i) => ({
    y: 0,
    x: 0,
    opacity: 1,
    color: 'transparent',
    transition: {
      delay: START_DELAY + i * timeRatio,
      duration: timeRatio * 1.1,
      opacity: {
        duration: timeRatio * 1.2,
      },
      color: {
        delay: START_DELAY + i * timeRatio * 1.6,
        duration: 0.1,
      },
      ease: [0.86, 0, 0.07, 1],
    },
    darken: {
      opacity: 0.3,
      x: 100,
      transition: {
        delay: 5,
      },
    },
  }),
};

export const dynamicTextVariants: Variants = {
  start: {
    y: -80,
  },
  end: (i) => ({
    y: 0,
    transition: {
      duration: 0.6,
      delay: 1 + 0.05 * i,
      ease: [0.86, 0, 0.07, 1],
    },
  }),
};
