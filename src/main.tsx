import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import { RecoilRoot } from "recoil";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <RecoilRoot>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </RecoilRoot>
    </HelmetProvider>
  </QueryClientProvider>
);
