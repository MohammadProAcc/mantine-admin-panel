export const breakpoints = {
  xs: '30rem',
  sm: '48rem',
  md: '64rem',
  lg: '74rem',
  xl: '90rem',
}

type Breakpoint = typeof breakpoints;

export function device(
  mode: "min" | "max",
  key: keyof Breakpoint
) {
  return `(${mode}-width: ${breakpoints[key]})`;
}
