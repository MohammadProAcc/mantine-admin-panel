import { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";
import { rtlCache } from "$/lib/utils";
import "../styles/globals.css"
import { theme } from "$/lib/ui/design";
import { RouterTransition } from "$/lib/ui";
import { ModalsProvider } from "@mantine/modals";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const queryClient = new QueryClient();
  return (
    <div dir="rtl">
      <QueryClientProvider client={queryClient}>
        <MantineProvider
          theme={theme({
            dir: "rtl"
          })}
          withGlobalStyles
          withNormalizeCSS
          emotionCache={rtlCache}
        >
          <ModalsProvider>
            <RouterTransition />
            <Component {...pageProps} />
          </ModalsProvider>
        </MantineProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}
