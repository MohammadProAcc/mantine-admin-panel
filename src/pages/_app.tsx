import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { rtlCache } from "$/lib/utils";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  return (
    <div dir="rtl">
      <MantineProvider
        theme={{ dir: "rtl" }}
        withGlobalStyles
        withNormalizeCSS
        emotionCache={rtlCache}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </div>
  );
}
