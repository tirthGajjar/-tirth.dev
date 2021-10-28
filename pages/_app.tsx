import { ThemeProvider } from "next-themes";
import "../styles/global.css";
import type { AppProps } from "next/app";

const isSSR = () => typeof window === "undefined";

/**
 * Accessibility tool: Outputs to devtools console on dev only and client-side only.
 * @see https://github.com/dequelabs/react-axe/issues/125
 */

if (process.env.NODE_ENV !== "production" && !isSSR()) {
  const React = require("react"); // eslint-disable-line
  const DOM = require("react-dom"); // eslint-disable-line
  const axe = require("react-axe"); // eslint-disable-line
  axe(React, DOM, 1000);
}

// prettier-ignore
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default MyApp;
