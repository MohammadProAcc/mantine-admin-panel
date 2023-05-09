import { MantineTheme } from "@mantine/core";

interface ThemeProps {
  dir: "rtl" | "ltr"
}
export const theme: (props: ThemeProps) => Partial<MantineTheme> = (props) => ({
  dir: props.dir,
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.5rem",
  },
  primaryColor: "cyan",
})
