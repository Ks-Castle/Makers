import { BrowserRouter as RouterWrap } from "react-router-dom";
import Router from "@/components/Routers/Router";
import GlobalStyle from "@/assets/styles/GlobalStyle";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <RouterWrap>
      <Router />
      <GlobalStyle />
      <Analytics />
    </RouterWrap>
  );
};
export default App;
