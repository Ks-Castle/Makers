import { BrowserRouter as RouterWrap } from "react-router-dom";
import Router from "@/components/Routers/Router";
import GlobalStyle from "@/assets/styles/GlobalStyle";

const App = () => {
  return (
    <RouterWrap>
      <Router />
      <GlobalStyle />
    </RouterWrap>
  );
};
export default App;
