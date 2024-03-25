import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CustomThemeProvider } from "@/utils/customTheme";
const theme = createTheme({
  palette: {
    primary: {
      main: "#18BA51",
    },
  },
});
const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
