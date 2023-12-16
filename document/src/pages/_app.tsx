import "@code-hike/mdx/dist/index.css";
import "@sceneui/layout/dist/style.css";
import "../styles/global.css";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />;
}

export default MyApp;
