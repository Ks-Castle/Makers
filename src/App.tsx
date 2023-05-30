import { useEffect, useState } from "react";
import { BrowserRouter as RouterWrap } from "react-router-dom";
import Router from "@/components/Routers/Router";
import GlobalStyle from "@/assets/styles/GlobalStyle";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/UI/Header";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("theme", String(!darkMode));
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      setDarkMode(theme === "true");
    }
  }, []);

  return (
    <RouterWrap>
      <GlobalStyle darkMode={darkMode} />
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Router />
      <Analytics />
    </RouterWrap>
  );
};

export default App;
