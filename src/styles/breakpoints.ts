export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1440,
} as const; //synchronize manually in mixins, brakpoints.ts and index.scss

export const QUERIES = {
  tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
};

export const TRANSITION_DURATION = 250; // ms, synchronize z $transition-default
