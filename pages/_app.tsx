import { ThemeProvider } from "next-themes";
import { AppProps } from "next/dist/next-server/lib/router/router";
import "../styles/global.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default MyApp;
