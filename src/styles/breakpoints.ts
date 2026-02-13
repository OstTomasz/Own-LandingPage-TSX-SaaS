export const BREAKPOINTS = {
  mobile: 480,
  tablet: 768,
  desktop: 1440,
} as const;

export const QUERIES = {
  tablet: `(min-width: ${BREAKPOINTS.tablet}px)`,
  desktop: `(min-width: ${BREAKPOINTS.desktop}px)`,
};
