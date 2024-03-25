import { ThemeProvider, createTheme } from "@mui/material";
import { ReactNode } from "react";

const green = "#18BA51";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 300,
      md: 660,
      lg: 1200,
      xl: 1620,
    },
  },
  palette: {
    primary: {
      main: green,
      dark: "#000000",
      light: "#FFFFFF",
    },
  },
  typography: {
    fontSize: 16,
  },
});

export const CustomThemeProvider = ({ children }: { children: ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
